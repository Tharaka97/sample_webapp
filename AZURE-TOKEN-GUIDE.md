# Azure Static Web App Quick Setup Guide

## Option 1: Azure Portal Setup (Easiest)

### 1. Create Static Web App
1. Go to: https://portal.azure.com
2. Click "Create a resource"
3. Search "Static Web Apps"
4. Click "Create"

### 2. Configuration
```
Basic Details:
- Subscription: [Your Azure subscription]
- Resource Group: Create new "rg-sample-webapp"
- Name: sample-webapp
- Plan type: Free (0 USD/month)
- Region: East US 2 (or closest to you)

Deployment:
- Source: GitHub
- GitHub account: [Connect your account]
- Organization: Tharaka97
- Repository: sample_webapp
- Branch: main

Build Details:
- Build Presets: Custom
- App location: ./frontend
- API location: ./backend
- Output location: out
```

### 3. Get Deployment Token
After creation:
1. Go to your Static Web App resource
2. Click "Overview" in left menu
3. Click "Manage deployment token"
4. Copy the token (starts with "swa-...")

### 4. Add to GitHub Secrets
1. Go to: https://github.com/Tharaka97/sample_webapp/settings/secrets/actions
2. Click "New repository secret"
3. Name: AZURE_STATIC_WEB_APPS_API_TOKEN
4. Value: [Paste your token]
5. Click "Add secret"

## Option 2: Azure CLI Setup

If you have Azure CLI installed:

```bash
# Login to Azure
az login

# Create resource group
az group create --name rg-sample-webapp --location eastus2

# Create static web app
az staticwebapp create \
  --name sample-webapp \
  --resource-group rg-sample-webapp \
  --source https://github.com/Tharaka97/sample_webapp \
  --location eastus2 \
  --branch main \
  --app-location "./frontend" \
  --api-location "./backend" \
  --output-location "out"

# Get deployment token
az staticwebapp secrets list --name sample-webapp --resource-group rg-sample-webapp
```

## ✅ Verification

After setup, verify:
1. Static Web App exists in Azure Portal
2. GitHub secret AZURE_STATIC_WEB_APPS_API_TOKEN is set
3. Workflow file azure-swa-fixed.yml is active
4. Push to main branch triggers deployment

## 🚨 Common Issues

**Issue:** "No subscription found"
- **Solution:** Make sure you have an active Azure subscription

**Issue:** "Repository not found"
- **Solution:** Ensure GitHub account is connected and repo is public

**Issue:** "Invalid token"
- **Solution:** Copy token exactly, no extra spaces
