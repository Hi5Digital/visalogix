#!/bin/bash

# Google Cloud Platform Setup Script for Visalogix
# This script sets up all required GCP services and IAM permissions

set -e

PROJECT_ID="visalogix"
PROJECT_NUMBER="860494552951"
REGION="us-central1"
SERVICE_ACCOUNT_NAME="github-actions-deploy"
SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "========================================="
echo "GCP Setup for Visalogix"
echo "========================================="
echo "Project ID: $PROJECT_ID"
echo "Project Number: $PROJECT_NUMBER"
echo "Region: $REGION"
echo "========================================="

# Set the project
echo "Setting GCP project..."
gcloud config set project $PROJECT_ID

# Enable required APIs
echo ""
echo "Enabling required GCP APIs..."
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable iam.googleapis.com
gcloud services enable cloudresourcemanager.googleapis.com
gcloud services enable artifactregistry.googleapis.com

echo "✓ All APIs enabled"

# Create service account
echo ""
echo "Creating service account..."
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
    --display-name="GitHub Actions Deployment Service Account" \
    --description="Service account for deploying to Cloud Run from GitHub Actions" || echo "Service account may already exist"

echo "✓ Service account created"

# Grant IAM roles
echo ""
echo "Granting IAM roles to service account..."

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/run.admin" \
    --condition=None

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/storage.admin" \
    --condition=None

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/iam.serviceAccountUser" \
    --condition=None

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/cloudbuild.builds.editor" \
    --condition=None

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/viewer" \
    --condition=None

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/artifactregistry.writer" \
    --condition=None

echo "✓ All IAM roles granted"

# Create service account key
echo ""
echo "Creating service account key..."
gcloud iam service-accounts keys create gcp-sa-key.json \
    --iam-account=${SERVICE_ACCOUNT_EMAIL}

echo "✓ Service account key created: gcp-sa-key.json"

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "NEXT STEPS:"
echo "1. Copy the contents of gcp-sa-key.json"
echo "2. Add it as a GitHub Secret named 'GCP_SA_KEY'"
echo "3. Delete the local gcp-sa-key.json file for security"
echo ""
echo "To view the key:"
echo "  cat gcp-sa-key.json"
echo ""
echo "To add to GitHub:"
echo "  Go to: Settings > Secrets and variables > Actions"
echo "  Click: New repository secret"
echo "  Name: GCP_SA_KEY"
echo "  Value: [paste entire JSON content]"
echo ""
echo "========================================="
