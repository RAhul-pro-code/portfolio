@echo off
REM Start Portfolio Server
REM This batch file starts the Python server for your portfolio

echo.
echo ========================================
echo   PORTFOLIO SERVER LAUNCHER
echo ========================================
echo.

cd /d "%~dp0"
python server.py

pause
