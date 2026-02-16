@echo off
echo ========================================
echo  DEPLOIEMENT CHEZ VINCENT - VERCEL
echo ========================================
echo.

REM Ajouter tous les fichiers modifiés
git add -A

REM Demander un message de commit
set /p message="Message de modification (ex: 'Changement couleurs'): "

REM Créer le commit
git commit -m "%message%"

REM Pusher vers GitHub
echo.
echo Envoi vers GitHub...
git push origin main

echo.
echo ========================================
echo  DEPLOIEMENT TERMINE !
echo  Vercel va mettre à jour le site automatiquement
echo  Attendez 1-2 minutes puis vérifiez sur vercel.app
echo ========================================
pause
