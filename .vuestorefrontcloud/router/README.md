# Router

## Context

Back in the day, the docs for the `vue-storefront/storefront-ui` repo were hosted on `docs.storefrontui.io/`.

After some time, development of Storefront UI 2 began, so we had to move `storefront-ui` (v1) docs to `docs.storefrontui.io/v1` and deploy the new docs to `docs.storefrontui.io/v2`.

## Why this Docker image exists

> The problem is, if a user goes to `docs.storefrontui.io/`, they should now be redirected to `/v1`for backwards compaitbility, and all the Storybook query params about which route is currently selected in Storybook should be passed through.

Pretty easy, right? Just write an nginx config to rewrite the URLs, right? No

For deploying docs, we use our in-house VSF cloud "Farmer". In Farmer, there are two places you can put containers:

1. at domain root (eg. just `docs.storefrontui.io` - that's how it was done before SFUI2 came along)

2. using Farmer's `additional_apps`, which allows adding containers at a subpath of the domain (eg. `docs.storefrontui.io/v2`) - that's how we serve docs now with /v1 and /v2

Farmer works only with Docker containers, so only way to provide the `/ -> /v1` nginx URL rewrite is to build the Dockerfile that's next to this very README.md file and deploy the resulting image in the domain root in Farmer (variant "1." from above)

Another reason for the existence of the container is providing robots.txt to prevent search engines crawling the /v2 docs, which we want hidden because SFUI2 is a work in progress for now. robots.txt can only be put at the root of the domain - putting it inside subfolders like `/v1` doesn't work.

An alternative to robots.txt in this case could be using the built-in Farmer feature that sets the "X-Robots-Tag" header.

However, I went with creating the "nginx + robots.txt file" container here anyways. I'm forced to create a container for nginx so might as well put the robots.txt file here.

That's a lot of work to do such a simple thing, but the situation is what it is.
