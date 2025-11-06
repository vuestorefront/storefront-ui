# @storefront-ui/tailwind-config

## 3.0.0

### Major Changes

- [#3313](https://github.com/vuestorefront/storefront-ui/pull/3313) [`1deaa0a`](https://github.com/vuestorefront/storefront-ui/commit/1deaa0a56c388b1e280aad3d8e30fa40aefde33b) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Migrate to Tailwind@4 new configuration syntax. If you're using Tailwind@3, please stick to `@storefront-ui/tailwind-config` in version 2.x.

  - **[BREAKING][CHANGED]** Introduce OOTB dark mode handling instead of relying on `@mertasan/tailwindcss-variables` package.
  - **[REMOVED]** The `@mertasan/tailwindcss-variables` dependency has been removed as Tailwind support CSS variables out of the box now.

- [#3282](https://github.com/vuestorefront/storefront-ui/pull/3282) [`31aa18f`](https://github.com/vuestorefront/storefront-ui/commit/31aa18f3dd7d85a2d2298c8fd776a5feadfc0167) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** The default color palette for `primary`, `neutral` and `secondary` colors. Copy [old color palette](https://github.com/vuestorefront/storefront-ui/blob/8b35d6507ee3ae93538539400947e2f86d0c5529/packages/config/tailwind/index.ts#L360-L381) to your local `tailwind.config.js` if you need to keep some of them.
  Also, now the palette is converted from rgb to oklch colors to [fit with tailwind 4](https://tailwindcss.com/blog/tailwindcss-v4#modernized-p3-color-palette).

### Minor Changes

- [#3282](https://github.com/vuestorefront/storefront-ui/pull/3282) [`31aa18f`](https://github.com/vuestorefront/storefront-ui/commit/31aa18f3dd7d85a2d2298c8fd776a5feadfc0167) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[ADDED]** Add `@tailwindcss/container-queries`. Now container queries are available out-of-the-box when using `@storefront-ui/tailwind-config`.

### Patch Changes

- Updated dependencies [[`1deaa0a`](https://github.com/vuestorefront/storefront-ui/commit/1deaa0a56c388b1e280aad3d8e30fa40aefde33b)]:
  - @storefront-ui/tw-plugin-peer-next@3.0.0

## 2.5.1

### Patch Changes

- [#3132](https://github.com/vuestorefront/storefront-ui/pull/3132) [`19fa774`](https://github.com/vuestorefront/storefront-ui/commit/19fa774b38a05801256ced7c8af7731ea19defb9) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Update dependencies

- Updated dependencies [[`19fa774`](https://github.com/vuestorefront/storefront-ui/commit/19fa774b38a05801256ced7c8af7731ea19defb9)]:
  - @storefront-ui/tw-plugin-peer-next@2.3.3

## 2.5.0

### Minor Changes

- [#3070](https://github.com/vuestorefront/storefront-ui/pull/3070) [`e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Change general rules for styling

### Patch Changes

- [#3073](https://github.com/vuestorefront/storefront-ui/pull/3073) [`a40579d26c2912c5d4d05e1a833801e3e87901b3`](https://github.com/vuestorefront/storefront-ui/commit/a40579d26c2912c5d4d05e1a833801e3e87901b3) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Change `Inter Display` into `Inter`

- [#3091](https://github.com/vuestorefront/storefront-ui/pull/3091) [`91d17b5346e2706ce0551f897f8753207b7a703f`](https://github.com/vuestorefront/storefront-ui/commit/91d17b5346e2706ce0551f897f8753207b7a703f) Thanks [@mattmaribojoc](https://github.com/mattmaribojoc)! - Minor type fixes

- Updated dependencies [[`91d17b5346e2706ce0551f897f8753207b7a703f`](https://github.com/vuestorefront/storefront-ui/commit/91d17b5346e2706ce0551f897f8753207b7a703f)]:
  - @storefront-ui/tw-plugin-peer-next@2.3.2

## 2.4.0

### Minor Changes

- [#3070](https://github.com/vuestorefront/storefront-ui/pull/3070) [`e15a3f6cb`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Change general rules for styling

### Patch Changes

- [#3073](https://github.com/vuestorefront/storefront-ui/pull/3073) [`a40579d26`](https://github.com/vuestorefront/storefront-ui/commit/a40579d26c2912c5d4d05e1a833801e3e87901b3) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Change `Inter Display` into `Inter`
