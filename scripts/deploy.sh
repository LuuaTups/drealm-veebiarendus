#!/usr/bin/env bash
# Build + upload dist/ to the Zone web server over SSH.
# Seadistus: .env.deploy (pole gitis) –
#   ZONE_SSH=virtXXXXX@drealm.ee
#   ZONE_PATH=domeenid/www.drealm.ee/htdocs
set -euo pipefail
cd "$(dirname "$0")/.."
[ -f .env.deploy ] && source .env.deploy
: "${ZONE_SSH:?ZONE_SSH puudub (.env.deploy)}"
: "${ZONE_PATH:?ZONE_PATH puudub (.env.deploy)}"
SSH_KEY="${ZONE_SSH_KEY:-$HOME/.ssh/drealm_zone}"

npm run build
rsync -az --delete --exclude 'api/config.php' -e "ssh -i $SSH_KEY" dist/ "$ZONE_SSH:$ZONE_PATH/"
echo "✓ Üleval: https://drealm.ee"
