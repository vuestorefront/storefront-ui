# Component rules

Below you can find rules that needs to be applied into every component from Storefront UI to ensure that they are highly customizable, follow common format and coding standards.

# Common rules for components

### General rules

1. Each component should be divided into 3 parts. Each of the parts should be named the same as component and it's folder:

- SfComponent.html -> markup
- sfComponent.scss -> styles for the component
- SfComponent.ts -> component instance
- SfComponent.spec.ts - unit tests for component
- SfComponent.stories.js - storybook stories for component
- SfComponent.vue -> whole component using above partials. It should look like this:

```html
<script src="./SfComponent.js"></script>
<template lang="html" src="./SfComponent.html" functional></template>
<style lang="scss" src="./SfComponent.scss"></style>

```

2. use Sf prefix in component names.
3. Try to make components as customizable as possible but without complicating them. Think about the parts that are usually customized and allow simple way to change their look.
4. We use [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) concept for component grouping but without templates and pages.
5. Try to make BEM elements matching slot names.

### Template

1. We use slots and props for content composition. Props should be used to fill default slots content, and slots are meant for markup replacement. In other words every default markup should be repalcable with slots. One slot is usually a single BEM element.
2. Make slots optional if it's possible.
3. Don't use props for setting colors and other properties that can be set by css (except for background images).
4. If you are providing some components by default make sure that they are replacable and still customizable
5. Provide a default slot (usually empty) just in case someone wants a fully custom component.

[Here](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.html) you can see example of proper component HTML with all rules applied:

### Global CSS

1. Use REMs

### Component CSS

1. Always import a global variables at the top.
2. Start with mobile view and write mobile-first CSS. It means that media queries should be only for a desktop view.
3. Use BEM methodology as naming convention.
4. Don't use scoped styles.
5. Make use of global css variables wehenever it's possible.
6. Add component-specific SCSS variables on top of the component SCSS file. Try to use global SCSS vars inside them for common properties like primary/secondary colors etc. Naming convention for vars is like in BEM: `$component__block--modifier-property` - for example `$banner__title--primary-color: $c-primary`
7. Properties that may broke the design in future changes shouldn't be customizable via SCSS properties. A safe set of properties to customize are: `font-size`, `text-align`, `color`, `background-color`, `background-image`, `padding` (not always), `margin` (not always), `text-transform`, `font-weight`, `font-family`, `background-size`, X and Y justification wuth `align-content` and `align-items`(not always)
8. Provide CSS modifiers for most common modifications.
9. Don't use any outer positioning for components (like outer margins). The way they're positioned in layout should be determined in outer env.

[Here](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.scss) you can find an example of properly styled component with all rules applied:

### Unit tests

1. The minimum set of tests should contain component:
- **External API:** props, slots, events
- **Internal API:** methods

### Stories for Storybook

Component stories should contain at least those three stories:
- filled props via knobs
- filled slots via knobs
- applied CSS modifiers via knobs
- if there are some common use cases (liek applying icon to the button) they should also be listed as stories

Please see [this](https://github.com/DivanteLtd/storefront-ui/blob/master/src/components/molecules/SfBanner/SfBanner.stories.js) stories for reference.
