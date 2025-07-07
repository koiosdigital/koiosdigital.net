export const generateCloudInit = (org: string, token: string, label: string) => {
    const script = `#!/bin/bash -ex

sleep 15

set -o pipefail

RUNNER_ORG=${org}
RUNNER_TOKEN=${token}
RUNNER_LABELS=${label}
# update this to the latest version
RUNNER_VERSION=2.326.0

apt update -y
apt install -y --no-install-recommends curl jq build-essential libssl-dev libffi-dev python3 python3-venv python3-dev python3-pip

locale-gen en_US.UTF-8

# Download and install runner script
cd /home/ubuntu
mkdir -p actions-runner
cd actions-runner
curl -o actions-runner-linux-x64-$RUNNER_VERSION.tar.gz -L https://github.com/actions/runner/releases/download/v$RUNNER_VERSION/actions-runner-linux-x64-$RUNNER_VERSION.tar.gz
tar xzf ./actions-runner-linux-x64-$RUNNER_VERSION.tar.gz

# Configure runner
su - ubuntu -c "
/home/ubuntu/actions-runner/config.sh --url https://github.com/$RUNNER_ORG --token $RUNNER_TOKEN --labels $RUNNER_LABELS --unattended --ephemeral
"

# Setup systemd scripts
cd /home/ubuntu/actions-runner/
./svc.sh install ubuntu
./svc.sh start
./svc.sh status
`

    return Buffer.from(script).toString('base64')
}