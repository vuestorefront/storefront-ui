# Stay up to date with the new releases

In this section we will add notes and info's about new changes and releases.


## Migration to v0.8.0

> **v0.8.0 has been released!** :tada:

### **Why you should migrate?**

:::tip What is new?

:point_right: new SfColorPicker component  

:point_right: SfHeaderNavigation component 

:point_right: changed SfImage API allowing to use `srcset` prop

:point_right: manual on how to use Tailwind css with Storefront UI was added 

:point_right: open all items in SfAccordion by default by passing `open="all"`

:point_right: slot for button in SfScrollable was applied

:point_right: prop icon added in SfSearchbar to customize size and color of the icon

:point_right: new component SfComponentSelect added with all current functionality and SfSelect component changed to native 

:information_source: for more details see our `CHANGELOG.md`

:::

### Dependencies update

As always what is first, update your `package.json` by changing your current version:

```json
"dependencies: {
    "@storefront-ui/vue": "^0.8.0"
}
```


<!-- - #### **Typography**

Before | v0.8.0 
------------ | ------------- | -------------
--body-font-family-primary: "Roboto", serif |   --font-family-primary: "Roboto", serif |   --font-family--primary: "Roboto", serif
--body-font-family-secondary: "Raleway", sans-serif |   --font-family-secondary: "Raleway", sans-serif |   --font-family--secondary: "Raleway", sans-serif

**Font family**

Before | v0.7.0 | v0.9.0
------------ | ------------- | -------------
--body-font-family-primary: "Roboto", serif |   --font-family-primary: "Roboto", serif |   --font-family--primary: "Roboto", serif
--body-font-family-secondary: "Raleway", sans-serif |   --font-family-secondary: "Raleway", sans-serif |   --font-family--secondary: "Raleway", sans-serif


**Font sizes**

Before | v0.6.4 |  v0.7.0 | v0.9.0
------------ | ------------ | ------------- | -------------
$font-size-extra-small-mobile: 0.625rem | undefined | --font-2xs: 0.625rem | undefined
$font-size-extra-small-desktop: 0.75rem<br>$font-size-small-mobile: 0.75rem | --font-size-extra-small: 0.75rem | --font-xs: 0.75rem | --font-size--xs: 0.75rem
$font-size-small-desktop: 0.875rem <br> $font-size-regular-mobile: 0.875rem | --font-size-small: 0.875rem | --font-sm: 0.875rem | --font-size--sm: 0.875rem
$font-size-regular-desktop: 1rem <br> $font-size-big-mobile: 1rem | --font-size-regular: 1rem | --font-base: 1rem | --font-size--base: 1rem
$font-size-big-desktop: 1.125rem <br> $font-size-extra-big-mobile: 1.125rem | --font-size-big: 1.125rem | --font-lg: 1.125rem | --font-size--lg: 1.125rem
$font-size-extra-big-desktop: 1.5rem | --font-size-extra-big: 1.5rem | --font-size--xl: 1.5rem | undefined


**Font weights**

Before | v0.6.4 | v0.7.0 | v0.9.0
------------ | ------------ | ------------- | -------------
--body-font-weight-primary: 300 | --font-weight-light: 300 | --font-light: 300 | --font-weight--light: 300
--body-font-weight-secondary: 400 | --font-weight-regular: 400 | --font-normal: 400 | --font-weight--normal: 400
undefined | --font-weight-bold: 500 | --font-medium: 500 | --font-weight--medium: 500
undefined | --font-weight-extra-bold: 600 | --font-semibold: 600 | --font-weight--semibold: 600
undefined | undefined | --font-bold: 700 | --font-weight--bold: 700
undefined | undefined | --font-extra-bold: 800 | undefined
undefined | undefined | --font-black: 900 | undefined

- #### **Layout**

**Spacers**

Before | v0.6.4 | v0.7.0 | v0.9.0
------------ | ------------ | ------------- | -------------
 $spacer-small | --spacer-small: 0.25rem | --spacer-2xs: 0.25rem | --spacer-2xs: 0.25rem
 $spacer | --spacer: 0.5rem | --spacer-xs: 0.5rem | --spacer-xs: 0.5rem
 $spacer-medium | --spacer-medium: 1rem | --spacer-sm: 1rem | --spacer-sm: 1rem
 $spacer-big | --spacer-big: 1.25rem | undefined | undefined
  undefined | undefined | --spacer-base: 1.5rem | --spacer-base: 1.5rem
  undefined | undefined | --spacer-lg: 2rem | --spacer-lg: 2rem
 $spacer-extra-big | --spacer-extra-big: 2.5rem | --spacer-xl: 2.5rem | --spacer-xl: 2.5rem
  undefined | undefined | --spacer-2xl: 5rem | --spacer-2xl: 5rem
  undefined | undefined | --spacer-3xl: 10rem | --spacer-3xl: 10rem

- **Colors**

**Color variants**

Before | v0.7.0 | v0.9.0 
------------ | ------------ | ------------
undefined | --_c-gray-accent: #e0e0e1 | --_c-gray-accent: #e0e0e1
--_c-light-secondary: #f6f7f8 |  --_c-light-secondary: #ffffff |  --_c-light-secondary: #ffffff
--_c-red-primary: #e22225 | --_c-red-primary: #d12727 | --_c-red-primary: #d12727
--_c-red-secondary: #fff6f5 | --_c-red-secondary: #fcede8 | --_c-red-secondary: #fcede8
--_c-yellow-primary: #ffdf3d | --_c-yellow-primary: #ecc713 | --_c-yellow-primary: #ecc713
--_c-yellow-secondary: #fffceb | --_c-yellow-secondary: #f6e389 | --_c-yellow-secondary: #f6e389
--_c-blue-primary: #6699cc | --_c-blue-primary: #67c6fa | --_c-blue-primary: #67c6fa

**Body and text default colors**

Before | v0.7.0 | v0.9.0 
------------ | ------------ | ------------
undefined | --c-text-disabled: var(--_c-gray-accent) | --c-text-disabled: var(--_c-gray-accent) -->

### Deletions

1. removed viewport addon on Storybook

### Additions

- **Components** 

1. SfColorPicker
2. SfHeaderNavigation 
3. SfComponentSelect - select component with current API

- **Props**
  
<!-- 
Component | Before | v0.8.0
------------ | ------------ | ------------
SfSearchBar| - | iconSize
SfSearchBar| - | iconColor  
-->

Component | Before | v0.8.0
------------ | ------------ | ------------
SfSearchBar| - | iconSize
SfSearchBar| - | iconColor 
SfImage| - | srcset (String, Array) 
SfAccordion | open (String) | open ("all") 
SfSearchBar | - | icon (Object) 

### Changes

Component | Before | v0.8.0 | Info
------------ | ------------ | ------------ | ------------
SfDropdown| - | button | 'opener' slot (default SfButton) added inside component to open content on 'click:open' event

### Deletions

### Additions

### Changes

- **Props**

Component | Before | v0.8.0
------------ | ------------ | ------------
SfHeading | subtitle | description

- **Custom properties**

Component | Before | v0.8.0
------------ | ------------ | ------------
SfHeading | --heading-subtitle-margin | --heading-description-margin
SfHeading | --heading-subtitle-color | --heading-description-color
SfHeading | --heading-subtitle-font-size | --heading-description-font-size
SfHeading | --heading-subtitle-font-family | --heading-description-font-family

- **Slots**

Component | Before | v0.8.0
------------ | ------------ | ------------
SfHeading | subtitle | description

## Release notes