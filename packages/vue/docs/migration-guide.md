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
dependencies: {
    "@storefront-ui/vue": "^0.8.0"
}
```

### Deletions

1. removed viewport addon on Storybook

### Additions

- **Components** 

1. SfColorPicker
2. SfHeaderNavigation 
3. SfComponentSelect - select component with current API

- **Props**
  
Component | Before | v0.8.0 | Info
------------ | ------------ | ------------ | ------------
SfSearchBar| - | icon | Object to define icon look. Should have values for color and size
SfImage| - | srcset | (String, Array) 
SfAccordion | open (String) | open ("all") | String 'all' means all items will be open by default

- **Slots**

Component | Before | v0.8.0 | Info
------------ | ------------ | ------------ | ------------
SfScrollable | - | view-all | Slot for show/hide button
SfDropdown| - | button | 'opener' slot (default SfButton) added inside component to open content on 'click:open' event

- **Components with data-testid**

Before | v0.9.0
------------ | ------------
- | SfBreadcrumbs
- | SfBullets
- | SfCheckbox
- | SfColor
- | SfInput
- | SfQuantitySelector
- | SfMenuItem
- | SfHeader

### Changes

- **Props**

Component | Before | v0.9.0
------------ | ------------ | ------------
SfHeading | subtitle | description

- **Custom properties**

Component | Before | v0.9.0
------------ | ------------ | ------------
SfHeading | --heading-subtitle-margin | --heading-description-margin
SfHeading | --heading-subtitle-color | --heading-description-color
SfHeading | --heading-subtitle-font-size | --heading-description-font-size
SfHeading | --heading-subtitle-font-family | --heading-description-font-family

- **Slots**

Component | Before | v0.9.0
------------ | ------------ | ------------
SfHeading | subtitle | description

- **Breakpoints**

v0.8.0 | v0.9.0
------------ | ------------
.mobile-only | .smartphone-only

- **State classes**

Before | v0.9.0 
------------ | ------------- 
--is-active |  .is-active
--is-disabled | .is-disabled
--is-current | .is-current
--has-error | .has-error
--h2 | .h2 
--h3 | .h3 
--h4 | .h4 
--h5 | .h5 
--h6 | .h6 
--has-size | .has-size
--hidden | .hidden 
--invalid | .invalid 
--has-text | .has-text 
--is-color | .is-color 
--prev | .prev
--next | .next 
--is-open | .is-open 
--is-selected | .is-selected 
--is-required | .is-required 
--open | .is-open 
--has-chevron | .has-chevron 
--has-margin | .has-margin 
--floating | .is-floating
--center | --center 
--without-carousel | .without-carousel
--without-quantity | .without-quantity
--on-wishlist | .on-wishlist 
.is-current | .current

So now we can use it like this: 
```
.sf-component {.is-active {}}
```
instead of 
```
.sf-component {&--is-active {}}
```
This change follows [css guideline](https://github.com/chris-pearce/css-guidelines#state-hooks).

- **Others**

1. SfCheckbox moved from atoms to molecules
2. Deprecated method `contains` in tests was replaced by `classes` or `find` methods
3. SfSelect changed to native select with error messages and native placeholder

## Release notes
