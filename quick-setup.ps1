# Quick setup script after Node.js and Git are installed
# Run this after installing Node.js and Git

Write-Host "🚀 Setting up your full-stack project..." -ForegroundColor Cyan

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location frontend
npm install
Set-Location ..

Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
Set-Location backend  
npm install
Set-Location ..

Write-Host "✅ All dependencies installed!" -ForegroundColor Green

Write-Host "`n🔧 Now you can:" -ForegroundColor Cyan
Write-Host "1. Run 'npm run dev' to start development servers" -ForegroundColor White
Write-Host "2. Set up Git repository following the SETUP-GUIDE.md" -ForegroundColor White
Write-Host "3. Push to GitHub using the git commands in git-setup-commands.txt" -ForegroundColor White
