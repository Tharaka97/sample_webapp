# SIMPLE GUIDE: Push Your Project to Git Repository

## ⏱️ Quick Overview (15 minutes total)
1. Install Node.js (5 min)
2. Install Git (3 min) 
3. Restart computer (2 min)
4. Setup & Push to GitHub (5 min)

---

## 🔧 STEP 1: Install Node.js
1. **Open browser** → Go to: https://nodejs.org/
2. **Click the GREEN button** that says "Download Node.js (LTS)"
3. **Run the downloaded file** (.msi)
4. **Click "Next" → "Next" → "Install"** (keep all defaults)
5. **Wait for installation to complete**

## 🔧 STEP 2: Install Git  
1. **Open browser** → Go to: https://git-scm.com/download/win
2. **Click "Click here to download"**
3. **Run the downloaded file** (.exe)
4. **IMPORTANT:** When you see "Adjusting your PATH environment", choose:
   **"Git from the command line and also from 3rd-party software"**
5. **Keep all other defaults** and complete installation

## 🔄 STEP 3: Restart Everything
1. **Restart your computer** (very important!)
2. **After restart, open VS Code**
3. **Open your project folder**

## 🐙 STEP 4: Create GitHub Repository
1. **Go to: https://github.com**
2. **Sign up/Sign in**
3. **Click "New" or "+" → "New repository"**
4. **Fill in:**
   - Repository name: `fullstack-web-app`
   - Description: `Full-stack web app with Next.js and Node.js`
   - Make it Public (or Private)
   - **DON'T check** "Add a README file"
5. **Click "Create repository"**
6. **COPY the repository URL** (looks like: https://github.com/yourname/fullstack-web-app.git)

## 🚀 STEP 5: Push Your Code
After restart, in VS Code terminal, run these commands ONE BY ONE:

### Configure Git (replace with your info):
```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initialize and push:
```
git init
git add .
git commit -m "Initial commit: Full-stack web app"
git remote add origin https://github.com/YOURNAME/fullstack-web-app.git
git push -u origin main
```

## ✅ STEP 6: Install Dependencies & Run
```
npm install
cd frontend && npm install && cd ..
cd backend && npm install && cd ..
npm run dev
```

Your app will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🆘 Need Help?
- If commands don't work, make sure you restarted after installations
- If git push fails, check your repository URL
- If npm doesn't work, reinstall Node.js

## 🎉 Success!
Once pushed, your code will be on GitHub and you can share the repository URL with anyone!
