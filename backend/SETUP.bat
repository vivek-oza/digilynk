@echo off
echo ============================================
echo   DIGILYNK BACKEND SETUP
echo ============================================
echo.

REM Check if .env exists
if exist .env (
    echo ✓ .env file found
    echo.
    echo Starting backend server...
    npm run dev
) else (
    echo ✗ .env file NOT found!
    echo.
    echo Please create a .env file with your MongoDB connection:
    echo.
    echo 1. Create a file named ".env" in this folder
    echo 2. Add this content:
    echo.
    echo MONGO_URI=mongodb+srv://avidigilynk_db_user:YOUR_PASSWORD@cluster0.ymcrghr.mongodb.net/digilynk?retryWrites=true^&w=majority^&appName=Cluster0
    echo PORT=5000
    echo NODE_ENV=development
    echo.
    echo 3. Replace YOUR_PASSWORD with your actual MongoDB password
    echo 4. Run this script again
    echo.
    pause
)

