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
3. Create a PR with title: "chore(release): [NUMBER OF RELEASE]"
4. After PR is merged tag it with `v[NUMBER OF RELEASE]` git tag.
