# Stay up to date with the new releases

In this section we will add notes and info's about new changes and releases.


## Migration to v0.7.0

> **v0.7.0 has been released!** :tada:

### **Why you should migrate?**

Q1 2020
Withing first Q1 we came through a lot of changes:
- we have CSS Custom Properties! 
- and **now** we have refreshed [StorefrontUI design system](http://bit.ly/storefront-ui-design-system) :tada:


:::tip What is new?

:point_right: each component went through **deep refactor**, we have used css variables and we adjusted each component to new design system

:point_right: updated global variables [Global Variables](migration-guide.md#global-variables).

:point_right: refreshed **example pages**

:point_right: we have covered some fixes regarding Safari support

:point_right: added improvements to `v-focus` directive

:point_right: storybook `stories` updated!

:point_right: `first-open` in `SfAccordion` is deprecated in favor of `open`

:information_source: for more details see our `CHANGELOG.md`

:::

### Dependencies update

As always what is first, update your `package.json` by changing your current version:

```json
"dependencies: {
    "@storefront-ui/vue": "^0.7.0"
}
```

### Global variables
We have changed global variables and naming conventions for them to be more consistent.

See what's new in our comparison below: 

- #### **Typography**

**Font sizes**

Before | v0.7.0
------------ | -------------
undefined | --font-2xs: 0.625rem
--font-size-extra-small: 0.75rem | --font-xs: 0.75rem
--font-size-small: 0.875rem | --font-sm: 0.875rem
--font-size-regular: 1rem | --font-base: 1rem
--font-size-big: 1.125rem | --font-lg: 1.125rem
--font-size-extra-big: 1.5rem | --font-xl: 1.5rem


**Font weights**

v0.6.0 | v0.7.0
------------ | -------------
--font-weight-light: 300 | --font-light: 300
--font-weight-regular: 400 | --font-normal: 400
--font-weight-bold: 500 | --font-medium: 500
--font-weight-extra-bold: 600 | --font-semibold: 600
undefined | --font-bold: 700
undefined | --font-extra-bold: 800
undefined | --font-black: 900

- #### **Layout**

**Spacers**

Before | v0.6.0 | v0.7.0
------------ | ------------ | -------------
  --spacer-small: 0.25rem | undefined | --spacer-2xs: 0.25rem
  --spacer: 0.5rem | --spacer-extra-small: 0.5rem | --spacer-xs: 0.5rem
  --spacer-medium: 1rem | --spacer-small: 1rem | --spacer-sm: 1rem
  --spacer-big: 1.25rem | undefined | undefined
  undefined | --spacer-regular: 1.5rem | --spacer-base: 1.5rem
  undefined | undefined | --spacer-lg: 2rem
  --spacer-extra-big: 2.5rem | --spacer-medium: 2.5rem | --spacer-xl: 2.5rem
  undefined | --spacer-big: 5rem | --spacer-2xl: 5rem
  undefined | --spacer-extra-big: 10rem | --spacer-3xl: 10rem

## Release notes