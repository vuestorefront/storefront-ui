# Docs deployment
The documentation is deployed using GitHub Actions to our SF cloud Farmer instance.
The GitHub action workflow file is in `.github/workflows/deploy-docs-vue-storefront-cloud.yml`

The process is as follows:

1. Whenever commits are pushed to the `main` branch (PR merged etc.), run the GitHub action workflow

2. Build the Docker image that serves docs' static files with nginx - see `.vuestorefrontcloud/docs/Dockerfile`

3. Upload the Docker image to our VSF Docker container registry at `registry.storefrontcloud.io`

4. Use the `publish-docs-action` to ask Farmer to deploy the container we just uploaded.  
Please note we're using the `additional_apps` feature of VSF Farmer here, which allows hosting multiple containers on different `/subpaths` on one Farmer instance. In our case, the docs are deployed on the `/v2` path (because this is SFUI2, after all)

After all the steps complete, you can go to https://docs.storefront.io/v2 to view the results.

You can also curl the Farmer endpoint to see the v2 docs inside additional_apps
```sh
curl -H 'X-User-Id: ****' -H 'X-Api-Key: ****' -H 'Content-Type: application/json' https://farmer.storefrontcloud.io/instance/sfui-europe-west1-gcp-storefrontcloud-io
```

The Dockerfile that is built in GitHub actions, then 

# TODO: Demo deployment
