# Docs

## Debugging

You can debug dockerized docs image by following steps below:
- add `EXPOSE 80` command at the end of the Dockerfile in this folder next to this readme file, 
- build image using `DOCKER_BUILDKIT=1 docker build -t docs --build-arg VITE_DOCS_BASEPATH=/v2/  -f .vuestorefrontcloud/docs/Dockerfile .`, 
- run image using `docker run -p 48080:80 docs`, 
- open browser and go to the address `localhost:48080/v2/index.html` to see the docs page running.
