@echo off
setlocal
if exist "G:\nomifunByPao-native\target\debug\nomifun-desktop.exe" (
  start "" "G:\nomifunByPao-native\target\debug\nomifun-desktop.exe"
  exit /b 0
)
if exist "%~dp0target\debug\nomifun-desktop.exe" (
  start "" "%~dp0target\debug\nomifun-desktop.exe"
  exit /b 0
)
echo [NomiFun] Executable not found.
pause
