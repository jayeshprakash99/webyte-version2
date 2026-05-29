#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   chmod +x ./scripts/git-push.sh
#   ./scripts/git-push.sh "my commit message" origin main
#
# Defaults:
#   commit message -> "chore: update project files"
#   remote -> origin
#   branch -> current branch

COMMIT_MSG="${1:-chore: update project files}"
REMOTE="${2:-origin}"
BRANCH="${3:-$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo main)}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository." >&2
  exit 1
fi

echo "Staging all changes..."
git add -A

echo "Committing..."
if git commit -m "$COMMIT_MSG"; then
  echo "Committed."
else
  echo "No changes to commit."
fi

# Ensure remote exists
if git remote get-url "$REMOTE" >/dev/null 2>&1; then
  echo "Pushing to $REMOTE/$BRANCH..."
  git push "$REMOTE" "$BRANCH"
  echo "Push complete."
else
  echo "Remote '$REMOTE' not found. Add it with:" >&2
  echo "  git remote add $REMOTE <git@github.com:USERNAME/REPO.git>  # SSH" >&2
  echo "  or" >&2
  echo "  git remote add $REMOTE https://github.com/USERNAME/REPO.git  # HTTPS" >&2
  exit 1
fi
