# Test-nuxt

## Debugging

You can debug dockerized docs image by following steps below:

- run terminal in `root` directory
- build image using `DOCKER_BUILDKIT=1 docker build -t test-nuxt -f .vuestorefrontcloud/test-nuxt/docker/Dockerfile .`,
- run image using `docker run -t -i -p 3001:3000 test-nuxt`, (flags `i` and `t` allows to run command and then kill it with `ctrl+c` https://github.com/moby/moby/issues/2838#issuecomment-29205965)
- open browser and go to the address `http://localhost:3001` to see the app page running.
