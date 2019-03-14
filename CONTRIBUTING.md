# Contribution rules

**Important note** these are temporary contribution rules just for the time of moving designs into Vue components.

# Common rules for components

### General rules

1. Each component should be divided into 3 parts. Each of the parts should be named the same as component and it's folder:

- SfComponent.html -> markup
- sfComponent.scss -> styles for the component
- SfComponent.ts -> component instance
- SfComponent.spec.ts - unit tests for component
- sfComponent.vue -> whole component using above partials. It should look like this:

```html
<script>
  import template from "./SfComponent.html";
  import instance from "./sfComponent.ts";

  export default {
    template,
    ...instance
  };
</script>

<style lang="scss">
  @import "~./sfComponent.scss";
</style>
```

2. use Sf prefix in component names.
3. Try to make components as customizable as possible but without complicating them. Think about the parts that are usually customized and allow simple way to change their look.

### Template

1. We use slots over props for content composition. Use props only for properties that are not content-related
2. Make slots optional if it's possible and provide a default slot (usually empty).

```html
<section class="sf-banner">
  <slot />
  <h2 class="sf-banner__subtitle" v-if="$slots.subtitle">
    <slot name="subtitle"></slot>
  </h2>
  <h1 class="sf-banner__title" v-if="$slots.title">
    <slot name="title"></slot>
  </h1>
  <p class="sf-banner__description" v-if="$slots.description">
    <slot name="description"></slot>
  </p>
  <slot name="call-to-action"></slot>
</section>
```
3. Don't use props for setting colors, backgrounds and other properties that can be set by css.

### Global CSS

1. Use REMs

### Component CSS

1. Use BEM methodology as naming convention.
2. Don't use scoped styles.
3. Make use of global css classes for customizable parts

```html
<section class="sf-banner">
  ...
</section>
```


5. Don't use any global CSS styles from other files inside a component. Each of them should be independent.
6. Add component-specific SCSS variables on top of the component SCSS file. Try to use global SCSS vars inside them for common properties like primary/secondary colors etc. Naming convention for vars is like in BEM: `$component__block--modifier-property` - for example `$banner__title--primary-color: $c-primary`
7. Properties that may broke the design in future changes shouldn't be customizable via SCSS properties. A safe set of properties to customize are: `font-size`, `color`, `background-color`, `background-image`, `padding` (not always), `margin` (not always), `text-transform`, `font-weight`, `font-family`, `background-size`, X and Y justification (not always)

```sss
@import '../../../css/variables';

$banner-padding: $spacing-extra-big;
$banner-background-size: cover;

$banner__subtitle-font-family: $body-font-family-secondary;
$banner__subtitle-font-size: 0.875rem;
$banner__subtitle-font-weight: 300;
$banner__subtitle-text-transform: none;

$banner__title-text-transform: uppercase;
$banner__title-font-weight: 300;
$banner__title-font-size: initial;

.sf-banner {
  display: flex;
  flex-direction: column;
  padding: $banner-padding;
  background-size: $bannerbackground-size;
  &__subtitle {
    margin-bottom: $spacing-small;
    font-family: $banner__subtitle-font-family;
    font-size: $banner__subtitle-font-size;
    font-weight: $banner__subtitle-font-weight;
    text-transform: none;
  }
  &__title {
    margin-top: $spacing-small;
    text-transform: $banner__title-text-transform;
    font-weight: $banner__title-font-weight;
    font-size: $banner__title-font-size;
  }
  &__description {
    @media ( max-width: $tablet-max ) {
      display: none;
    }
  }
}
```

5. Don't use any outer positioning for components (like outer margins). The way they're positioned in layout should be determined in outer env.

# How to contribute

1. Make an issue with task name (from Jira).
2. Write the proposed API for slots and props
3. Once it's accepted by @filrak or @patzick make separate branch on your fork with name of the issue.
4. Propose a PR with screenshots of the component.
5. Wait for CR
6. Correct PR after CR
7. Profit!
