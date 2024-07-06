export const generateCloudInit = (org: string, token: string) => {
    const script = `#!/bin/bash -ex

set -o pipefail

RUNNER_ORG=${org}
RUNNER_TOKEN=${token}
RUNNER_LABELS=self-hosted,x64,docker
# update this to the latest version
RUNNER_VERSION=2.317.0

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