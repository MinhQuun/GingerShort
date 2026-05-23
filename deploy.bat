@echo off
setlocal

rem Simple deploy script for GitHub Pages (push current branch)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    echo Not a git repository.
    exit /b 1
)

git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Origin remote not set. Run: git remote add origin ^<repo-url^>
    exit /b 1
)

set MSG=%*
if "%MSG%"=="" set MSG=deploy: update site

git add -A

git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to commit.
) else (
    git commit -m "%MSG%"
)

for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b

git push -u origin %BRANCH%

echo Done. Enable GitHub Pages for branch %BRANCH% (root).
