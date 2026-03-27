# Deployment Guide - Visalogix to Google Cloud Platform

## Project Information
- **Project ID:** visalogix
- **Project Number:** 860494552951
- **Region:** us-central1 (recommended)
- **Service Name:** visalogix-app

## Prerequisites
- Google Cloud CLI installed
- GitHub repository set up
- Admin access to GCP project

---

## Step 1: Initial GCP Setup

### 1.1 Authenticate with Google Cloud
```bash
gcloud auth login
gcloud config set project visalogix
```

### 1.2 Enable Required APIs
```bash
# Enable Cloud Run API
gcloud services enable run.googleapis.com

# Enable Container Registry API
gcloud services enable containerregistry.googleapis.com

# Enable Cloud Build API
gcloud services enable cloudbuild.googleapis.com

# Enable IAM API
gcloud services enable iam.googleapis.com

# Enable Resource Manager API
gcloud services enable cloudresourcemanager.googleapis.com

# Enable Artifact Registry API
gcloud services enable artifactregistry.googleapis.com
```

---

## Step 2: Create Service Account for GitHub Actions

### 2.1 Create the Service Account
```bash
gcloud iam service-accounts create github-actions-deploy \
    --display-name="GitHub Actions Deployment Service Account" \
    --description="Service account for deploying to Cloud Run from GitHub Actions"
```

### 2.2 Grant Required IAM Roles
```bash
# Cloud Run Admin - to deploy services
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/run.admin"

# Storage Admin - to push images to Container Registry
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

# Service Account User - to act as Cloud Run runtime service account
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"

# Cloud Build Editor - for building containers
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/cloudbuild.builds.editor"

# Viewer role - to read project resources
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/viewer"

# Artifact Registry Writer - to push Docker images
gcloud projects add-iam-policy-binding visalogix \
    --member="serviceAccount:github-actions-deploy@visalogix.iam.gserviceaccount.com" \
    --role="roles/artifactregistry.writer"
```

### 2.3 Create and Download Service Account Key
```bash
# Create the key
gcloud iam service-accounts keys create gcp-sa-key.json \
    --iam-account=github-actions-deploy@visalogix.iam.gserviceaccount.com

# Display the key content (you'll need to copy this)
cat gcp-sa-key.json
```

**⚠️ IMPORTANT:** 
- Copy the entire JSON key content
- Store it securely - you'll need it for GitHub Secrets
- NEVER commit this file to Git (it's already in .gitignore)
- Delete the local file after adding to GitHub Secrets

---

## Step 3: Configure GitHub Repository Secrets

### 3.1 Add Secret to GitHub
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `GCP_SA_KEY`
5. Value: Paste the entire contents of `gcp-sa-key.json`
6. Click **Add secret**

---

## Step 4: Configure Cloud Run Service (Optional Pre-deployment)

### 4.1 Create Initial Cloud Run Service (Optional)
```bash
# This is optional - the GitHub Action will create it on first deploy
gcloud run deploy visalogix-app \
    --image=gcr.io/visalogix/visalogix-app:latest \
    --platform=managed \
    --region=us-central1 \
    --allow-unauthenticated \
    --port=8080 \
    --memory=512Mi \
    --cpu=1 \
    --min-instances=0 \
    --max-instances=10
```

---

## Step 5: Set Up Custom Domain (After First Deployment)

### 5.1 Map Custom Domain
```bash
# Add domain mapping to Cloud Run
gcloud run domain-mappings create \
    --service=visalogix-app \
    --domain=yourdomain.com \
    --region=us-central1
```

### 5.2 Verify Domain
```bash
# Get domain verification details
gcloud run domain-mappings describe \
    --domain=yourdomain.com \
    --region=us-central1
```

Follow the instructions to add DNS records to your domain provider.

---

## Step 6: Deploy to Cloud Run

### Option A: Deploy via GitHub Actions (Recommended)
1. Commit and push your code to the `main` branch
2. GitHub Actions will automatically:
   - Build the Docker image
   - Push to Google Container Registry
   - Deploy to Cloud Run
3. Check the **Actions** tab in GitHub to monitor progress

### Option B: Manual Deployment via gcloud
```bash
# Build and submit to Cloud Build
gcloud builds submit --tag gcr.io/visalogix/visalogix-app

# Deploy to Cloud Run
gcloud run deploy visalogix-app \
    --image gcr.io/visalogix/visalogix-app:latest \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --port 8080
```

---

## Step 7: Verify Deployment

### 7.1 Get Service URL
```bash
gcloud run services describe visalogix-app \
    --platform managed \
    --region us-central1 \
    --format 'value(status.url)'
```

### 7.2 Test the Deployment
```bash
# Get the URL and test
SERVICE_URL=$(gcloud run services describe visalogix-app \
    --platform managed \
    --region us-central1 \
    --format 'value(status.url)')

curl -I $SERVICE_URL
```

---

## Step 8: Monitoring and Logs

### 8.1 View Cloud Run Logs
```bash
gcloud run services logs read visalogix-app \
    --region=us-central1 \
    --limit=50
```

### 8.2 View Service Details
```bash
gcloud run services describe visalogix-app \
    --region=us-central1
```

### 8.3 List All Revisions
```bash
gcloud run revisions list \
    --service=visalogix-app \
    --region=us-central1
```

---

## Environment Variables (If Needed)

### Add Environment Variables to Cloud Run
```bash
gcloud run services update visalogix-app \
    --region=us-central1 \
    --set-env-vars="NODE_ENV=production,API_URL=https://api.example.com"
```

---

## Rollback (If Needed)

### Rollback to Previous Revision
```bash
# List revisions
gcloud run revisions list --service=visalogix-app --region=us-central1

# Rollback to specific revision
gcloud run services update-traffic visalogix-app \
    --region=us-central1 \
    --to-revisions=REVISION_NAME=100
```

---

## Cost Optimization

### Set Up Budget Alerts
```bash
# Create a budget alert
gcloud billing budgets create \
    --billing-account=BILLING_ACCOUNT_ID \
    --display-name="Visalogix Monthly Budget" \
    --budget-amount=50USD
```

### Configure Auto-scaling
The current configuration:
- **Min instances:** 0 (scales to zero when idle)
- **Max instances:** 10
- **Memory:** 512Mi
- **CPU:** 1

---

## Troubleshooting

### Check Service Account Permissions
```bash
gcloud projects get-iam-policy visalogix \
    --flatten="bindings[].members" \
    --filter="bindings.members:github-actions-deploy@visalogix.iam.gserviceaccount.com"
```

### Test Docker Build Locally
```bash
cd C:\xampp\htdocs\Visalogix\visalogix
docker build -t visalogix-app:test .
docker run -p 8080:8080 visalogix-app:test
```

### View GitHub Actions Logs
- Go to GitHub repository → **Actions** tab
- Click on the failed workflow run
- Review logs for each step

---

## Security Best Practices

1. **Never commit credentials** - All sensitive files are in `.gitignore`
2. **Rotate service account keys** regularly (every 90 days)
3. **Use least privilege** - Only grant necessary IAM roles
4. **Enable Cloud Armor** for DDoS protection (if needed)
5. **Set up Cloud Monitoring** alerts

---

## Quick Reference Commands

```bash
# Deploy manually
gcloud run deploy visalogix-app --image gcr.io/visalogix/visalogix-app:latest --region us-central1

# View logs
gcloud run services logs read visalogix-app --region us-central1

# Get service URL
gcloud run services describe visalogix-app --region us-central1 --format 'value(status.url)'

# Update service
gcloud run services update visalogix-app --region us-central1 --memory 1Gi

# Delete service
gcloud run services delete visalogix-app --region us-central1
```

---

## Next Steps After Deployment

1. ✅ Set up custom domain
2. ✅ Configure SSL certificate (automatic with Cloud Run)
3. ✅ Set up Cloud Monitoring alerts
4. ✅ Configure Cloud CDN (optional)
5. ✅ Set up backup strategy
6. ✅ Document environment variables
7. ✅ Set up staging environment (optional)

---

## Support

For issues or questions:
- Check Cloud Run logs: `gcloud run services logs read visalogix-app --region us-central1`
- Review GitHub Actions workflow runs
- Check GCP Console: https://console.cloud.google.com/run?project=visalogix
