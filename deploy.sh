#!/usr/bin/env bash
set -e

# Simple deploy script for GitHub Pages (push current branch)

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Not a git repository."
    exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Origin remote not set. Run: git remote add origin <repo-url>"
  exit 1
fi

MSG="$*"
if [ -z "$MSG" ]; then
    MSG="deploy: update site"
fi

git add -A

if git diff --cached --quiet; then
    echo "No changes to commit."
else
    git commit -m "$MSG"
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD)"

git push -u origin "$BRANCH"

echo "Done. Enable GitHub Pages for branch $BRANCH (root)."
