#!/bin/bash
set -euo pipefail

REMOTE_SERVER="gabriel@10.10.10.1"
DATE_TAG="$(date +'%Y%m%d-%H%M%S')"

IMAGE_NAME="gdefombelle/pytune_www:${DATE_TAG}"
IMAGE_LATEST="gdefombelle/pytune_www:latest"

echo "Building ${IMAGE_NAME}..."

docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "${IMAGE_NAME}" \
  -t "${IMAGE_LATEST}" \
  --push \
  .

echo "Deploying ${IMAGE_NAME}..."

REMOTE_COMMAND="
set -e

docker pull ${IMAGE_NAME}
docker stop pytune_www 2>/dev/null || true
docker rm pytune_www 2>/dev/null || true
docker run -d \
  --name pytune_www \
  --network pytune_network \
  --restart always \
  ${IMAGE_NAME}

test \"\$(docker inspect --format='{{.State.Running}}' pytune_www)\" = \"true\"
docker restart pytune-nginx
"

ssh "${REMOTE_SERVER}" "${REMOTE_COMMAND}"

echo "www.pytune.com deployed with tag ${DATE_TAG}"
