# Azure Static Web Apps Setup Guide

## 🔧 Current Issue: Invalid API Token

**Error:** "No matching Static Web App was found or the api key was invalid"

## 📋 Complete Setup Instructions

### Step 1: Create Azure Static Web App (If Not Done)

1. **Go to Azure Portal:** https://portal.azure.com
2. **Create Resource:**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configuration:**
   ```
   Subscription: [Your Azure Subscription]
   Resource Group: [Create new or existing]
   Name: sample-webapp
   Plan type: Free
   Region: [Choose closest region]
   Deployment source: GitHub
   ```

4. **GitHub Integration:**
   ```
   GitHub account: [Connect your account]
   Organization: Tharaka97
   Repository: sample_webapp
   Branch: main
   ```

5. **Build Configuration:**
   ```
   Build Presets: Custom
   App location: ./frontend
   API location: ./backend
   Output location: out
   ```

### Step 2: Get Deployment Token

1. **After creating the Static Web App:**
   - Go to your Static Web App resource in Azure Portal
   - Click "Manage deployment token" in the overview
   - Copy the deployment token (starts with something like "swa-...")

### Step 3: Update GitHub Secret

1. **Go to GitHub Repository:**
   - Navigate to: https://github.com/Tharaka97/sample_webapp
   - Go to: Settings → Secrets and variables → Actions

2. **Add/Update Secret:**
   - Click "New repository secret" or edit existing
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value:** [Paste the deployment token from Azure]
   - Click "Add secret"

### Step 4: Verify Workflow File

The new workflow file `azure-swa-fixed.yml` uses the standard secret name:
```yaml
azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
```

### Step 5: Test Deployment

1. Push any change to trigger the workflow
2. Monitor the deployment in GitHub Actions
3. Check Azure Portal for deployment status

## 🚨 Common Issues & Solutions

### Issue 1: API Token Mismatch
- **Solution:** Ensure the secret name in GitHub exactly matches the workflow
- **Current secret name needed:** `AZURE_STATIC_WEB_APPS_API_TOKEN`

### Issue 2: Static Web App Not Found
- **Solution:** Verify the Azure resource exists and the token is from the correct resource

### Issue 3: Repository Connection
- **Solution:** Ensure Azure Static Web App is connected to the correct GitHub repository

## 🔍 Alternative Setup (Manual)

If automatic setup doesn't work:

1. **Create Static Web App without GitHub integration**
2. **Get deployment token from Azure Portal**
3. **Add token to GitHub secrets**
4. **Use the workflow file to deploy**

## 📞 Next Steps

1. Complete the Azure Static Web App creation
2. Get the deployment token
3. Update the GitHub secret
4. Push code to trigger deployment

The new workflow file (`azure-swa-fixed.yml`) should work once the correct token is set!
