#!/bin/bash
# Load nvm and start the dev server (use this if "npm" is not found in your terminal)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd "$(dirname "$0")"
npm run dev
