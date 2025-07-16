# Complete Setup Guide: Node.js, Git, and Project Deployment

## Step 1: Install Node.js
1. Open your web browser
2. Go to: https://nodejs.org/
3. Click "Download" for the LTS version (Long Term Support)
4. Run the downloaded installer (.msi file)
5. Follow installation wizard:
   - Accept license agreement
   - Keep default installation path
   - ✅ Check "Automatically install the necessary tools"
6. Click "Install" and wait for completion
7. Restart your computer (recommended)

## Step 2: Install Git
1. Go to: https://git-scm.com/download/win
2. Click "Click here to download" 
3. Run the downloaded installer (.exe file)
4. Installation options (IMPORTANT):
   - Default editor: Keep "Use Vim" or select "Use Visual Studio Code"
   - Path environment: ✅ "Git from the command line and also from 3rd-party software"
   - Line ending conversions: ✅ "Checkout Windows-style, commit Unix-style"
   - Terminal emulator: ✅ "Use Windows' default console window"
   - Keep all other default settings
5. Click "Install" and wait for completion

## Step 3: Verify Installation
After installation, close VS Code completely and reopen it, then run:
```
node --version
npm --version
git --version
```
You should see version numbers for all three.

## Step 4: Configure Git (First Time Setup)
Replace "Your Name" and "your.email@example.com" with your actual details:
```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 5: Create GitHub Repository
1. Go to: https://github.com/
2. Sign up/Sign in to your account
3. Click "New" or "+" → "New repository"
4. Repository settings:
   - Repository name: fullstack-web-app
   - Description: A full-stack web application with Next.js frontend and Node.js backend
   - ✅ Public (or Private if you prefer)
   - ❌ Do NOT check "Add a README file"
   - ❌ Do NOT add .gitignore
   - ❌ Do NOT choose a license
5. Click "Create repository"
6. Copy the repository URL (it will look like: https://github.com/yourusername/fullstack-web-app.git)

## Step 6: Install Project Dependencies
In VS Code terminal, run:
```
npm install
cd frontend
npm install
cd ../backend
npm install
cd ..
```

## Step 7: Initialize Git and Push to Repository
Replace "https://github.com/yourusername/fullstack-web-app.git" with your actual repository URL:

```
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Full-stack web app with Next.js and Node.js"

# Add remote repository (REPLACE WITH YOUR URL)
git remote add origin https://github.com/yourusername/fullstack-web-app.git

# Push to GitHub
git push -u origin main
```

## Step 8: Start Development
After everything is set up:
```
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Troubleshooting

### If you get "git: command not found" after installation:
1. Restart VS Code completely
2. Restart your computer
3. Make sure Git was installed with "command line" option

### If you get "npm: command not found" after installation:
1. Restart VS Code completely
2. Restart your computer
3. Check if Node.js installed correctly

### If git push fails:
1. Make sure you created the repository on GitHub
2. Check that the repository URL is correct
3. Ensure you're signed in to GitHub

## Alternative: Using GitHub Desktop (Easier GUI Method)
1. Download GitHub Desktop: https://desktop.github.com/
2. Install and sign in to GitHub
3. Click "Add an Existing Repository from your Hard Drive"
4. Select your project folder
5. Click "Publish repository"
