# Docs

## Debugging

You can debug dockerized docs image by following steps below:

- build image using `DOCKER_BUILDKIT=1 docker build -t docs --build-arg VITE_DOCS_EXAMPLES_VUE_PATH=http://localhost:3001 --build-arg VITE_DOCS_EXAMPLES_REACT_PATH=http://localhost:3002 --build-arg VITE_DOCS_BASEPATH=/v2/ -f .vuestorefrontcloud/docs/Dockerfile .`,
- run image using `docker run -t -i -p 3000:80 docs`, (flags `i` and `t` allows to run command and then kill it with `ctrl+c` https://github.com/moby/moby/issues/2838#issuecomment-29205965)
- open browser and go to the address `http://localhost:3000/v2/` to see the docs page running.

NOTE: docs will work but without `vue` and `react` showcases. For full docs experience you have to run `test-next` and `test-nuxt` docker as well.
