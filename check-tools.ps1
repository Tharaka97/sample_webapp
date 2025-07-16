# Check if installations are successful
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install from https://nodejs.org/" -ForegroundColor Red
}

Write-Host "Checking npm installation..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
}

Write-Host "Checking Git installation..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "✅ Git installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git not found. Please install from https://git-scm.com/download/win" -ForegroundColor Red
}

Write-Host "`nIf all tools are installed correctly, you can proceed with the setup!" -ForegroundColor Cyan
