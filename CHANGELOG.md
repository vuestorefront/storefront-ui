# 2.3.1 (2023-06-08)

## Bug fixes

- fix package cross-dependencies that caused released package to fail

# 2.3.0 (2023-06-07)

## Overview

This release introduces SfBadge alongside new blocks and improvements.

## Features

### Blocks Vue.js and React.js

- Filters: Category, Rating, Price and Brand blocks
- Combobox
- Search: with custom button and with custom icon button
- Gallery: with arrow keys navigation 
  
### Components Vue.js and React.js

- SfBadge
- 
## Improvements

- docs: possibility to turn off padding in example iframe 
- chore: introduced changesets and continuos development pipeline 
- useScrollable: add missing methods, remove prop getter and add containerRef  
- chore: ESLint speed improvement
- uploading assets to the cloud allowing for code to be use-ready after copying 
- docs: add figma redirect link to latest version
- chore: create nuxt module 

## Bug fixes

- SfInput: replace div element with dynamic WrapperTag, remove spans around slots, styling issues
- Pagination: on mobile, buttons width based on container width, gap above prev/next buttons on Vue 
- Breadcrumbs: replace anchor from last item to span 
- SfButton: ring border fixed
- Filters: checkbox and radio components selecting, styling issues
- Card Feature: styling issues
- Icons: visibility on the list 
- docs: changing size of example preview on mobile
- docs: add missing useTrapFocus description and adding tailwind section 
- docs: redirect nginx app to .html suffix and v2 domain url fix
- blocks: all dummy links changed to # 

# 2.2.1 (2023-05-24)

## Overview

This is a patch release containing bug fixes to SFUI2.

## Bug fixes

- enable CJS support introduced by `react-merge-refs` dependency ([#2699](https://github.com/vuestorefront/storefront-ui/issues/2699), [c1c5b5fee](https://github.com/vuestorefront/storefront-ui/commit/c1c5b5feee1c7a7e2a2933f001e3f4239887f15d)).

# 2.2.0 (2023-05-11)

## Overview

This release introduces new blocks and improvements of existing blocks.

## Features

### Blocks Vue.js and React.js

- SelectDropdown
- MegaMenu mobile navigation
- Search
- Gallery

## Improvements

- Order Summary - alerts

## Bug fixes

- SfSelect chevron rotates on blur ([#2569](https://github.com/vuestorefront/storefront-ui/issues/2569))
- SfScrollable: general improvement
- MegaMenu: styling issues and keyboard navigation
- Pagination: improved mobile version
- Order Summary: styling issues
- Alert: styling issues
- NavbarTop: double login button
- Filters: issues with sort by and clear all

# 2.1.0 (2023-04-18)

## Overview

The following release contains new blocks and UI elements alongside bugfixes reported after 2.0.0 release.

## Features

All new blocks and UI elements are listed below.

### Base UI Elements Vue.js and React.js

- SfScrollable

### Blocks Vue.js and React.js

- Alert
- Banner
- Breadcrumbs
- Card
- Footer
- MegaMenu
- Newsletter Box
- Order Summary
- Pagination

### Composables / Hooks

- useScrollable

## Improvements

- Modal - added animated block.

# 2.0.0 (2023-03-23)

## Features

### Base components Vue.js and React.js

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

### Blocks Vue.js and React.js

- Checkout
- Filters
- NavbarBottom
- NavbarTop
- ProductCard
- QuantitySelector
- Review

### Composables / Hooks

- useDisclosure
- useDropdown
- usePopover
- useTooltip
- useTrapFocus
