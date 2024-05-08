# Test-next

## Debugging

You can debug dockerized docs image by following steps below:

- run terminal in `root` directory
- build image using `DOCKER_BUILDKIT=1 docker build -t test-next -f .vuestorefrontcloud/test-next/docker/Dockerfile .`,
- run image using `docker run -t -i -p 3002:3000 test-next`, (flags `i` and `t` allows to run command and then kill it with `ctrl+c` https://github.com/moby/moby/issues/2838#issuecomment-29205965)
- open browser and go to the address `http://localhost:3002` to see the app page running.
