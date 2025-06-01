@echo off
echo # Project Structure > project-structure.md
echo Last updated: %date% %time% >> project-structure.md
echo. >> project-structure.md
echo ## Root Files >> project-structure.md

REM List only root files (not directories)
dir /b /a:-d /a:-h . >> project-structure.md

echo. >> project-structure.md
echo ## src Directory Structure >> project-structure.md

REM Recursively list src directory
dir /s /b /a:-h src >> project-structure.md

echo Project structure has been updated in project-structure.md
pause