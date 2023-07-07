# @storefront-ui/react

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
- Breadcrumbs: replace anchor from last item to span
- SfButton: ring border fixe
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

### Hooks

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

### Hooks

- useDisclosure
- useDropdown
- usePopover
- useTooltip
- useTrapFocus
