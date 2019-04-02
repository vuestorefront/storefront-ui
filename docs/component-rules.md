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
<script>
import instance from "./SfComponent.js";

export default {
  ...instance
};
</script>

<template lang="html" src="./SfComponent.html" functional></template>
<style lang="scss" src="./SfComponent.scss"></style>

```

2. use Sf prefix in component names.
3. Try to make components as customizable as possible but without complicating them. Think about the parts that are usually customized and allow simple way to change their look.
4. We use [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) concept for component grouping but without templates and pages.
5. Try to make BEM elements matching slot names.

### Template

1. We use slots and props for content composition. Props should be used to fill default slots content, and slots are meant for the markup with custom one.
2. Make slots optional if it's possible.
3. Don't use props for setting colors and other properties that can be set by css (except for background images).
4. If you are providing some components by default make sure that they are replacable and still customizable
5. Provide a default slot (usually empty) just in case someone wants a fully custom component.
Below you can see example of proper component HTML with all rules applied:
```html
<section class="sf-banner">
  <div class="sf-banner__container">
    <!-- Rule 1: We display subtitle prop content on default slot content. If someone is willing to replace markup then he/she can use slot -->
    <slot name="subtitle" />
      <h2 class="sf-banner__subtitle" v-if="subtitle">
        {{ subtitle }}
      </h2>
    </slot>
    <slot name="title">
      <h1 class="sf-banner__title" v-if="title">
        {{ title }}
      </h1>
    </slot>
    <slot name="description">
      <p class="sf-banner__description" v-if="description">
        {{ description }}
      </p>
    </slot>
    <slot name="call-to-action">
      <SfButton class="sf-banner__button" v-if="buttonText">
        {{ buttonText }}
      </SfButton>
    </slot>
    <slot />
  </div>
</section>

```

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

Below we can see an example of properly styled component with all rules applied:
```sss
// rule 1 - variables import at the top so we can use them now to set some properties
@import '../../../css/variables';

// rule 6 and 7 - Create SCSS variables for safe to customiza properties and use BEM-like naming convention to match CSS classes
$banner-padding: 4.25rem !default;
$banner-background-size: cover !default;
$banner-background-position: bottom left !default;
$banner-align-items: flex-end !default;

$banner__subtitle-font-family: $body-font-family-primary !default;
$banner__subtitle-font-size: 1.5rem !default;
$banner__subtitle-font-weight: 300 !default;
// rule 5 - try to make use of global variables (for colors etc) if possible to avoid repetition
$banner__subtitle-color: $c-dark-secondary !default; 
$banner__subtitle-text-transform: none !default;

$banner__title-text-transform: uppercase !default;
$banner__title-font-weight: 300  !default;
$banner__title-font-size: 3rem !default;
$banner__title-font-family: $body-font-family-secondary !default;
$banner__title-color: $c-dark-primary !default;

$banner__description-font-family: $body-font-family-secondary !default;
$banner__description-font-size: 1.125rem !default;
$banner__description-color: $c-dark-primary !default;

$banner__call-to-action-font-size: 0.875rem !default;
$banner__call-to-action-background-color: $c-dark-primary !default;

// rule 3 - Use BEM naming methodology
.sf-banner {
  display: flex;
  flex-direction: column;
  padding: $banner-padding;
  background-size: $banner-background-size;
  background-position: $banner-background-position;
  text-align: left;
  align-items: $banner-align-items;
  background-image: url(../../../assets/img/Banner1.png);
  min-height: 20rem;
  // rule 2 - Write mobile-first classess and add desktop ones inside media querys as an addition. Usually desktop is extended version of mobile so it makes a perfect sense here.
  @media ( min-width: $desktop-min ) {
    min-height: initial;
  }
  &__container {
    width: 100%;
    // rule 2
    @media ( min-width: $desktop-min ) {
      width: 50%;
    }
  }
  &__subtitle {
    margin-bottom: $spacing-small;
    font-family: $banner__subtitle-font-family;
    font-size: $banner__subtitle-font-size;
    font-weight: $banner__subtitle-font-weight;
    text-transform: none;
    color: $banner__subtitle-color;
    margin-top: 0;
    padding-bottom: 0.3rem;
  }
  &__title {
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 1rem;
    text-transform: $banner__title-text-transform;
    font-weight: $banner__title-font-weight;
    font-size: $banner__title-font-size;
    font-family: $banner__title-font-family;
    color: $banner__title-color;
  }
  &__description {
    padding-bottom: 0.6rem;
    font-family: $banner__description-font-family;
    font-size: $banner__description-font-size;
    color: $banner__description-color;
    display: none;
    @media ( min-width: $desktop-min ) {
      display: flex;
    }
  }
  &__button {
    font-size: $banner__call-to-action-font-size;
    background-color: $banner__call-to-action-background-color;
    display: none;
    @media ( min-width: $desktop-min) {
      display: flex;
    }
  }
  // rule 8 - Add most common modifiers as BEM CSS modifiers
  &--top {
    align-content: flex-start;
  }
  &--bottom {
    align-content: flex-end;
  }
  &--left {
    align-items: flex-start;
  }
  &--right {
    align-items: flex-end;
  }
}
```

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
