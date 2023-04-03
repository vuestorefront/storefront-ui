# Package release

Currently the release process is manual.

## How to release packages?

1. In repository root run command `yarn build:release`.
2. Bump version in package.json files and run `yarn npm publish` in directories:
    - packages/sfui/shared,
    - packages/sfui/typography,
    - packages/sfui/tw-plugin-peer-next,
    - packages/config/tailwind,
    - packages/sfui/frameworks/vue,
    - packages/sfui/frameworks/react.
3. Make sure to update CHANGELOG.md with latest changes (for now manually).
4. Create a PR with title: "chore(release): [NUMBER OF RELEASE]"
5. After PR is merged tag it with `v[NUMBER OF RELEASE]` git tag.
6. Create [a Github release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) in [storefront-ui repo release section](https://github.com/vuestorefront/storefront-ui/releases) with information from `CHANGELOG.md` and referencing git tag you've just added.
