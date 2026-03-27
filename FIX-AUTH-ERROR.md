# Fix: Artifact Registry Authentication Error

## Error Message
```
denied: Unauthenticated request. Unauthenticated requests do not have permission 
"artifactregistry.repositories.uploadArtifacts" on resource 
"projects/visalogix/locations/us/repositories/gcr.io"
```

## Root Cause
The service account needs Artifact Registry permissions. GCR now uses Artifact Registry backend.

## Solution: Grant Additional IAM Permissions

Run these commands in Google Cloud Shell or your terminal with gcloud CLI:

```bash
# Set project
gcloud config set project visalogix

# Grant Artifact Registry Writer role
gcloud projects add-iam-policy-binding visalogix    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"

# Grant Artifact Registry Repository Administrator (alternative)
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.repoAdmin"

# Enable Artifact Registry API (if not already enabled)
gcloud services enable artifactregistry.googleapis.com

# Verify permissions
gcloud projects get-iam-policy visalogix \
    --flatten="bindings[].members" \
    --filter="bindings.members:github-actions-deploy@visalogix.iam.gserviceaccount.com"
```

## Verification

After granting permissions, re-run your GitHub Actions workflow or test with:

```bash
# Test Docker authentication
gcloud auth configure-docker gcr.io

# Test push (if running locally)
docker tag your-image gcr.io/visalogix/visalogix-app:test
docker push gcr.io/visalogix/visalogix-app:test
```

## Alternative: Use Artifact Registry Directly

If you continue to have issues with GCR, switch to Artifact Registry:

### 1. Create Artifact Registry Repository
```bash
gcloud artifacts repositories create visalogix-app \
    --repository-format=docker \
    --location=us-central1 \
    --description="Visalogix Docker images"
```

### 2. Update GitHub Actions Workflow
Change the registry from `gcr.io` to `us-central1-docker.pkg.dev`:

```yaml
env:
  REGISTRY: us-central1-docker.pkg.dev
  IMAGE_NAME: us-central1-docker.pkg.dev/visalogix/visalogix-app/web
```

### 3. Configure Docker Auth for Artifact Registry
```bash
gcloud auth configure-docker us-central1-docker.pkg.dev
```

## Quick Fix Script

Save and run this script:

```bash
#!/bin/bash
PROJECT_ID="visalogix"
SA_EMAIL="github-actions-deploy@${PROJECT_ID}.iam.gserviceaccount.com"

echo "Fixing Artifact Registry permissions..."

# Enable API
gcloud services enable artifactregistry.googleapis.com

# Grant permissions
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/artifactregistry.writer"

echo "✓ Permissions granted"
echo "Re-run your GitHub Actions workflow now"
```

## Troubleshooting

If the error persists:

1. **Verify service account exists:**
   ```bash
   gcloud iam service-accounts list
   ```

2. **Check if GitHub Secret is correct:**
   - Go to GitHub → Settings → Secrets
   - Verify `GCP_SA_KEY` is set with the correct JSON

3. **Regenerate service account key:**
   ```bash
   gcloud iam service-accounts keys create new-key.json \
       --iam-account=github-actions-deploy@visalogix.iam.gserviceaccount.com
   
   # Update GitHub secret with new key content
   cat new-key.json
   ```

4. **Check GitHub Actions logs:**
   - Review the "Authenticate to Google Cloud" step
   - Verify authentication succeeded before the push step

## Success Indicators

After fixing, you should see:
- ✓ Docker push succeeds
- ✓ Image appears in GCR or Artifact Registry
- ✓ Cloud Run deployment completes
