# Rating

Component for displaying score-based user ratings.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-rating--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 3rem"></iframe>
  </div>

```html
<template>
  <SfRating :max="max" :score="score" :icon="icon" />
</template>
<script>
import { SfRating } from "@storefront-ui/vue";
export default {
  components: {
    SfRating,
  },
  data() {
    return {
      max: 5,
      score: 3,
      icon: "star",
    };
  },
};
</script>
```

## Props

- **`max`**
  - _Maximum score_
  - **type:** `number`
  - **defaultValue:** `5`

- **`score`**
  - _Score (obviously must be less than maximum)_
  - **type:** `number`
  - **defaultValue:** `1`

- **`icon`**
  - **type:** `string`
  - **defaultValue:** `"star"`

## Slots

- **`icon-positive`**
  - _custom icon for finalScore. Provide single icon that will be automatically repeated_

- **`icon-negative`**

## Events

None.

## CSS modifiers

- **`.sf-rating__icon--negative`**

## CSS custom properties (variables)

### Overridden other components CSS variables 
- **`--icon-size`**
- **`--icon-color`**
- **`--icon-color-negative`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-rating--common">Storybook</a>.
