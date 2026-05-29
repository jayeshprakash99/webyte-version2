#!/usr/bin/env bash
set -euo pipefail

# Minimal helper to install deps and start the Vite dev server.
# Usage:
#   chmod +x ./scripts/run.sh
#   ./scripts/run.sh

echo "Checking Node..."
if ! command -v node >/dev/null 2>&1; then
  echo "Error: node is not installed. Install Node 18+ and retry." >&2
  exit 1
fi

NODE_VER=$(node -v)
echo "Node version: ${NODE_VER}"

echo "Installing dependencies (npm install)..."
npm install

echo ""
echo "Starting dev server (npm start)..."
# Allow user to override by setting DEV_COMMAND env var, otherwise use npm start
DEV_COMMAND="${DEV_COMMAND:-npm start}"
# Run in foreground so you can see output
exec $DEV_COMMAND
