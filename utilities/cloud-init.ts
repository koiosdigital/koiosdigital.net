export const generateCloudInit = (org: string, token: string) => {
    const script = `#!/bin/bash -ex

set -o pipefail

RUNNER_ORG=${org}
RUNNER_TOKEN=${token}
RUNNER_LABELS=self-hosted,x64,docker
# update this to the latest version
RUNNER_VERSION=2.321.0

apt update -y
apt install -y gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 \
python3-subunit zstd liblz4-tool file locales libacl1 python3-websocket

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