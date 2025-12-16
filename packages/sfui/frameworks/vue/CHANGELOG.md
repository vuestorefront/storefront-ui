# @storefront-ui/vue

## 3.1.0

### Minor Changes

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`e75c802`](https://github.com/vuestorefront/storefront-ui/commit/e75c802f4c3b6eaf5d4fdefdf8afd8048948be55) Thanks [@FRSgit](https://github.com/FRSgit)! - Bump version so it would match current state in npm

### Patch Changes

- Updated dependencies [[`e75c802`](https://github.com/vuestorefront/storefront-ui/commit/e75c802f4c3b6eaf5d4fdefdf8afd8048948be55)]:
  - @storefront-ui/tailwind-config@3.1.0
  - @storefront-ui/shared@3.1.0

## 3.0.0

### Major Changes

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Padding size for square variant of SfButton changed

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** removed flex classes from wrapper for slot in SfListItem

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Padding left and right in SfSelect changed from 14px and 16px to 12px

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** default badge background color. Add className `!bg-secondary-700` explicitly in order to migrate.

- [#3333](https://github.com/vuestorefront/storefront-ui/pull/3333) [`2b3ad4a`](https://github.com/vuestorefront/storefront-ui/commit/2b3ad4ae63271be3cb5bed84bd5bfe11ebf340f2) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[CHANGED][BREAKING]** Use `useId` method coming from `vue` package instead of custom implementation. To migrate:

  1. Update your `vue` dependency version to at least 3.5.0.
  2. Update every `useId` usage as follows:

  ```diff
  -import { useId } from '@storefront-ui/vue';
  +import { useId } from 'vue';
  ```

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][UPDATED]** `@vueuse/core` package to major version 12 with the biggest change being **dropped support for Vue 2**. Please consult `@vuseuse/core` [release notes to see the details](https://github.com/vueuse/vueuse/releases?page=3#:~:text=Compare-,v12.0.0,-%F0%9F%9A%A8%20Breaking%20Changes).

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Deprecated option `arrowKeysOn` from `useTrapFocus` is removed.
  This option was separated and replaced by two more specialised options `arrowKeysLeftRight` and `arrowKeysUpDown`.
  In order to migrate please one of those options or both.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Moved from `rounded-md` to `rounded-xl` as a default styling for `SfInput`.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Changed `SfCheckbox` default text color. To brind the previous behaviour back, apply `!text-gray !disabled:text-gray-300 !hover:text-gray-300` to your `SfCheckbox` element.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Migrate to Tailwind@4. SFUI tries to defer some of Tailwinds' breaking changes, e.g. the default outline width or border-radius size scale, but not everything was possible. Please refer to all breaking changes described in the [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) and [updated storefront-ui docs](https://docs.storefrontui.io/v2/).

- [#3332](https://github.com/vuestorefront/storefront-ui/pull/3332) [`55fa6a2`](https://github.com/vuestorefront/storefront-ui/commit/55fa6a287036332b66f309ab4f6af4470ebf088a) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[FIXED][BREAKING]** From now on, `onClose` callback in `useDropdown` will be triggered only if outside click triggers closing of the dropdown. Previously onClose was also triggered when the dropdown was already closed.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Added `tailwind-merge` to all base components & blocks. From now on it will be easier to override default SFUI styles. See [`tailwind-merge` docs for more details](https://www.npmjs.com/package/tailwind-merge).

### Minor Changes

- [#3334](https://github.com/vuestorefront/storefront-ui/pull/3334) [`a708eaf`](https://github.com/vuestorefront/storefront-ui/commit/a708eaf8c092a19f3d41adb433883ff2e6ccc02d) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[ADDED]** Support for setting `id` attribute on the content in `SfTooltip` component.

  - **[ADDED]** Possibility to open tooltip programatically via `modelValue` prop.
  - **[ADDED]** `useTooltip` now closes tooltip on `Escape` keypress.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[ADDED]** `blank` prop for SfButton component that eases out creating custom buttons. See [documentation](https://docs.storefrontui.io/v2/vue/components/button#blank-button-variants) for more details.

### Patch Changes

- [#3325](https://github.com/vuestorefront/storefront-ui/pull/3325) [`023abe7`](https://github.com/vuestorefront/storefront-ui/commit/023abe77d6994b7da937db5211a502d426d7f22c) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[FIXED]** allow to change default `data-testid` attribute on `SfButton` and `SfBadge` components.

- Updated dependencies [[`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655)]:
  - @storefront-ui/tailwind-config@3.0.0
  - @storefront-ui/shared@3.0.0

## 3.0.0-rc.0

### Major Changes

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Padding size for square variant of SfButton changed

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** removed flex classes from wrapper for slot in SfListItem

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Padding left and right in SfSelect changed from 14px and 16px to 12px

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** default badge background color. Add className `!bg-secondary-700` explicitly in order to migrate.

- [#3333](https://github.com/vuestorefront/storefront-ui/pull/3333) [`2b3ad4a`](https://github.com/vuestorefront/storefront-ui/commit/2b3ad4ae63271be3cb5bed84bd5bfe11ebf340f2) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[CHANGED][BREAKING]** Use `useId` method coming from `vue` package instead of custom implementation. To migrate:

  1. Update your `vue` dependency version to at least 3.5.0.
  2. Update every `useId` usage as follows:

  ```diff
  -import { useId } from '@storefront-ui/vue';
  +import { useId } from 'vue';
  ```

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][UPDATED]** `@vueuse/core` package to major version 12 with the biggest change being **dropped support for Vue 2**. Please consult `@vuseuse/core` [release notes to see the details](https://github.com/vueuse/vueuse/releases?page=3#:~:text=Compare-,v12.0.0,-%F0%9F%9A%A8%20Breaking%20Changes).

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Deprecated option `arrowKeysOn` from `useTrapFocus` is removed.
  This option was separated and replaced by two more specialised options `arrowKeysLeftRight` and `arrowKeysUpDown`.
  In order to migrate please one of those options or both.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Moved from `rounded-md` to `rounded-xl` as a default styling for `SfInput`.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Changed `SfCheckbox` default text color. To brind the previous behaviour back, apply `!text-gray !disabled:text-gray-300 !hover:text-gray-300` to your `SfCheckbox` element.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Migrate to Tailwind@4. SFUI tries to defer some of Tailwinds' breaking changes, e.g. the default outline width or border-radius size scale, but not everything was possible. Please refer to all breaking changes described in the [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide) and [updated storefront-ui docs](https://docs.storefrontui.io/v2/).

- [#3332](https://github.com/vuestorefront/storefront-ui/pull/3332) [`55fa6a2`](https://github.com/vuestorefront/storefront-ui/commit/55fa6a287036332b66f309ab4f6af4470ebf088a) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[FIXED][BREAKING]** From now on, `onClose` callback in `useDropdown` will be triggered only if outside click triggers closing of the dropdown. Previously onClose was also triggered when the dropdown was already closed.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[BREAKING][CHANGED]** Added `tailwind-merge` to all base components & blocks. From now on it will be easier to override default SFUI styles. See [`tailwind-merge` docs for more details](https://www.npmjs.com/package/tailwind-merge).

### Minor Changes

- [#3334](https://github.com/vuestorefront/storefront-ui/pull/3334) [`a708eaf`](https://github.com/vuestorefront/storefront-ui/commit/a708eaf8c092a19f3d41adb433883ff2e6ccc02d) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[ADDED]** Support for setting `id` attribute on the content in `SfTooltip` component.

  - **[ADDED]** Possibility to open tooltip programatically via `modelValue` prop.
  - **[ADDED]** `useTooltip` now closes tooltip on `Escape` keypress.

- [#2885](https://github.com/vuestorefront/storefront-ui/pull/2885) [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[ADDED]** `blank` prop for SfButton component that eases out creating custom buttons. See [documentation](https://docs.storefrontui.io/v2/vue/components/button#blank-button-variants) for more details.

### Patch Changes

- [#3325](https://github.com/vuestorefront/storefront-ui/pull/3325) [`023abe7`](https://github.com/vuestorefront/storefront-ui/commit/023abe77d6994b7da937db5211a502d426d7f22c) Thanks [@FRSgit](https://github.com/FRSgit)! - - **[FIXED]** allow to change default `data-testid` attribute on `SfButton` and `SfBadge` components.

- Updated dependencies [[`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655), [`a7e88e6`](https://github.com/vuestorefront/storefront-ui/commit/a7e88e62b5ae13728432e7a3ca2d69090bc1d655)]:
  - @storefront-ui/tailwind-config@3.0.0-rc.0
  - @storefront-ui/shared@3.0.0-rc.0

## 2.6.5

### Patch Changes

- [#3263](https://github.com/vuestorefront/storefront-ui/pull/3263) [`f534058`](https://github.com/vuestorefront/storefront-ui/commit/f534058e4be50f1fb4f3394c6aab525f901b3ee4) Thanks [@lsliwaradioluz](https://github.com/lsliwaradioluz)! - [FIXED] Fixed `<SfSelect />` value not updated when no `v-model` is used on the component.

## 2.6.4

### Patch Changes

- [#3170](https://github.com/vuestorefront/storefront-ui/pull/3170) [`55a0d36`](https://github.com/vuestorefront/storefront-ui/commit/55a0d360c95bf3359dfc5a740cfcde6ca473b23f) Thanks [@jagoral](https://github.com/jagoral)! - [CHANGED] Aligned ring color of Input component with Figma

## 2.6.3

### Patch Changes

- [#3132](https://github.com/vuestorefront/storefront-ui/pull/3132) [`19fa774`](https://github.com/vuestorefront/storefront-ui/commit/19fa774b38a05801256ced7c8af7731ea19defb9) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Update dependencies

- Updated dependencies [[`19fa774`](https://github.com/vuestorefront/storefront-ui/commit/19fa774b38a05801256ced7c8af7731ea19defb9)]:
  - @storefront-ui/tailwind-config@2.5.1
  - @storefront-ui/shared@2.5.1

## 2.6.2

### Patch Changes

- [#3070](https://github.com/vuestorefront/storefront-ui/pull/3070) [`e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Add new alokai icon

- Updated dependencies [[`a40579d26c2912c5d4d05e1a833801e3e87901b3`](https://github.com/vuestorefront/storefront-ui/commit/a40579d26c2912c5d4d05e1a833801e3e87901b3), [`91d17b5346e2706ce0551f897f8753207b7a703f`](https://github.com/vuestorefront/storefront-ui/commit/91d17b5346e2706ce0551f897f8753207b7a703f), [`e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6)]:
  - @storefront-ui/tailwind-config@2.5.0

## 2.6.1

### Patch Changes

- [#3070](https://github.com/vuestorefront/storefront-ui/pull/3070) [`e15a3f6cb`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Add new alokai icon

- Updated dependencies [[`a40579d26`](https://github.com/vuestorefront/storefront-ui/commit/a40579d26c2912c5d4d05e1a833801e3e87901b3), [`e15a3f6cb`](https://github.com/vuestorefront/storefront-ui/commit/e15a3f6cb56fd28b2e9a0bd525e9fcbde44d29f6)]:
  - @storefront-ui/tailwind-config@2.4.0

## 2.6.0

### Minor Changes

- [#2888](https://github.com/vuestorefront/storefront-ui/pull/2888) [`d5df1cd79`](https://github.com/vuestorefront/storefront-ui/commit/d5df1cd79ca123d54c70a17cfeb7cc4f50eac8f8) Thanks [@justyna-13](https://github.com/justyna-13)! - New prop for defining tags for children in SfListItem component

### Patch Changes

- [#2933](https://github.com/vuestorefront/storefront-ui/pull/2933) [`b227ddd8e`](https://github.com/vuestorefront/storefront-ui/commit/b227ddd8e46dbf10a9876e2aba266d68838087fc) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Correct usage of `v-model` in SfSelect

- [#2988](https://github.com/vuestorefront/storefront-ui/pull/2988) [`fae7ba0de`](https://github.com/vuestorefront/storefront-ui/commit/fae7ba0de7919962c6692e9a044d577d2d4e90c3) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Fix wrong binding in components, user should overwrite data-testid

- [#2936](https://github.com/vuestorefront/storefront-ui/pull/2936) [`6bf2b3fbc`](https://github.com/vuestorefront/storefront-ui/commit/6bf2b3fbc83810b00ff2a3b63976444497d0f277) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Unify code between vue and react, when buttons are disabled in floating button position mode they should be hidden

- [#2947](https://github.com/vuestorefront/storefront-ui/pull/2947) [`1667e4fa2`](https://github.com/vuestorefront/storefront-ui/commit/1667e4fa2ccc495b38227930980c1eb52220f837) Thanks [@jagoral](https://github.com/jagoral)! - Remove redundant `selected` attribute from `SfSelect` placeholder

## 2.5.0

### Minor Changes

- [#2848](https://github.com/vuestorefront/storefront-ui/pull/2848) [`93107ab26`](https://github.com/vuestorefront/storefront-ui/commit/93107ab2664bd513e8074c2ee3069cf601fb8a17) Thanks [@AdamPawlinski](https://github.com/AdamPawlinski)! - Added props changing aria label for nav buttons in SfScrollable

- [#2880](https://github.com/vuestorefront/storefront-ui/pull/2880) [`aa9c2f328`](https://github.com/vuestorefront/storefront-ui/commit/aa9c2f328df419a929f06aa7b2053baef9830d60) Thanks [@AdamPawlinski](https://github.com/AdamPawlinski)! - Added textarea base component

### Patch Changes

- Updated dependencies [[`aa9c2f328`](https://github.com/vuestorefront/storefront-ui/commit/aa9c2f328df419a929f06aa7b2053baef9830d60)]:
  - @storefront-ui/shared@2.5.0

## 2.4.1

### Patch Changes

- fixing publish error with workspaces protocol handling

## 2.4.0

### Minor Changes

- [#2730](https://github.com/vuestorefront/storefront-ui/pull/2730) [`4094afe04`](https://github.com/vuestorefront/storefront-ui/commit/4094afe045b06a57c90f67826300aad95b1f5426) Thanks [@dkacper](https://github.com/dkacper)! - Added SfBadge component in react and vue

- [#2746](https://github.com/vuestorefront/storefront-ui/pull/2746) [`74dfce2c8`](https://github.com/vuestorefront/storefront-ui/commit/74dfce2c8aab7e959de40672c787d489bfe31537) Thanks [@aniamusial](https://github.com/aniamusial)! - Added new search blocks with customized buttons

- [#2725](https://github.com/vuestorefront/storefront-ui/pull/2725) [`05560b55d`](https://github.com/vuestorefront/storefront-ui/commit/05560b55ddd0fe8c6e1225b083530841f93ec8ba) Thanks [@AdamPawlinski](https://github.com/AdamPawlinski)! - useTrapFocus:

  - added `updateFocusableElement` method that allow to refresh the list of focusable children within container element,
  - use `useState` instead of `useRefs` for `current` and `focusable` return values.

- [#2833](https://github.com/vuestorefront/storefront-ui/pull/2833) [`623ed8ade`](https://github.com/vuestorefront/storefront-ui/commit/623ed8ade14c87ac1f29ab83a5ea53baf9fa6d22) Thanks [@github-actions](https://github.com/apps/github-actions)! - add RatingButton component (#2820)

- [#2787](https://github.com/vuestorefront/storefront-ui/pull/2787) [`17e7e60d8`](https://github.com/vuestorefront/storefront-ui/commit/17e7e60d89dff3d3f4456266ebd5e53677bcf358) Thanks [@justyna-13](https://github.com/justyna-13)! - add Email icon

### Patch Changes

- [#2819](https://github.com/vuestorefront/storefront-ui/pull/2819) [`b3a946367`](https://github.com/vuestorefront/storefront-ui/commit/b3a946367f14a3bab5a782d729802e8bc303e047) Thanks [@FRSgit](https://github.com/FRSgit)! - fix typings of SfScrollable drag prop

- [#2787](https://github.com/vuestorefront/storefront-ui/pull/2787) [`17e7e60d8`](https://github.com/vuestorefront/storefront-ui/commit/17e7e60d89dff3d3f4456266ebd5e53677bcf358) Thanks [@justyna-13](https://github.com/justyna-13)! - SfSelect wrapper as span tag

- [#2747](https://github.com/vuestorefront/storefront-ui/pull/2747) [`0ab7b3967`](https://github.com/vuestorefront/storefront-ui/commit/0ab7b3967e0fab002ed0f59bd3491f6a3d046319) Thanks [@Szymon-dziewonski](https://github.com/Szymon-dziewonski)! - Format SfSelect component, removal of extra unecessary lines

- Updated dependencies [[`4094afe04`](https://github.com/vuestorefront/storefront-ui/commit/4094afe045b06a57c90f67826300aad95b1f5426), [`74dfce2c8`](https://github.com/vuestorefront/storefront-ui/commit/74dfce2c8aab7e959de40672c787d489bfe31537), [`623ed8ade`](https://github.com/vuestorefront/storefront-ui/commit/623ed8ade14c87ac1f29ab83a5ea53baf9fa6d22)]:
  - @storefront-ui/shared@2.4.0

## 2.3.1 (2023-06-08)

### Bug fixes

- fix package cross-dependencies that caused released package to fail

## 2.3.0 (2023-06-07)

### Components

- SfBadge

### Improvements

- useScrollable: add missing methods, remove prop getter and add containerRef

### Bug fixes

- SfInput: replace div element with dynamic WrapperTag, remove spans around slots, styling issues
- Pagination: on mobile, buttons width based on container width, gap above prev/next buttons on Vue
- Breadcrumbs: replace anchor from last item to span
- SfButton: ring border fixed
- Filters: checkbox and radio components selecting, styling issues
- Card Feature: styling issues
- Icons: visibility on the list

## 2.2.1 (2023-05-24)

### Overview

This is a patch release containing bug fixes to SFUI2.

### Bug fixes

- enable CJS support introduced by `react-merge-refs` dependency ([#2699](https://github.com/vuestorefront/storefront-ui/issues/2699), [c1c5b5fee](https://github.com/vuestorefront/storefront-ui/commit/c1c5b5feee1c7a7e2a2933f001e3f4239887f15d)).

## 2.2.0 (2023-05-11)

### Improvements

- Order Summary - alerts

### Bug fixes

- SfSelect chevron rotates on blur ([#2569](https://github.com/vuestorefront/storefront-ui/issues/2569))
- SfScrollable: general improvement
- MegaMenu: styling issues and keyboard navigation
- Pagination: improved mobile version
- Order Summary: styling issues
- Alert: styling issues
- NavbarTop: double login button
- Filters: issues with sort by and clear all

## 2.1.0 (2023-04-18)

### Base UI Elements

- SfScrollable

### Composables

- useScrollable

### Improvements

- Modal - added animated block.

## 2.0.0 (2023-03-23)

### Base components

- AccordionItem component
- Button component
- Checkbox component
- Checkbox
- Chip component
- Counter component
- Drawer component
- Dropdown component
- IconBase component
- Input component
- Link component
- ListItem component
- LoaderCircular component
- LoaderLinear component
- Modal component
- ProgressCircular component
- ProgressLinear component
- Radio component
- Rating component
- Select component
- Switch component
- Thumbnail component
- Tooltip component

### Composables

- useDisclosure
- useDropdown
- usePopover
- useTooltip
- useTrapFocus
