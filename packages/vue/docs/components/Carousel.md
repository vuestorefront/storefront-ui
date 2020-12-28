# Carousel

Carousel component with swipe and arrow navigation.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-carousel--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <SfCarousel :style="{ maxWidth: '1140px', margin: 'auto' }">
    <SfCarouselItem v-for="index in 12">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 300px;
          background-color: #5ece7b;
          color: #fff;
          font-size: 2.5rem;
        "
      >
        {{ index }}
      </div>
    </SfCarouselItem>
  </SfCarousel>
</template>
<script>
import { SfCarousel } from "@storefront-ui/vue";
export default {
  components: {
    SfCarousel,
  },
};
</script>
```

## Props

- **`settings`**
  - _Carousel options like glide.js (https://glidejs.com/docs/)_
  - **type:** `object`
  - **defaultValue:** `{}`

## Slots

- **`prev`**
  - _slot for icon moving to the previous item_
  - **bindings:** `go`

- **`next`**
  - _slot for icon moving to the next item_
  - **bindings:** `go`

- **`default`**
  - _default slot for SfCarouselItem tags_

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--carousel-width`**
- **`--carousel-padding`**
- **`--carousel-controls-position`**
- **`--carousel-controls-top`**
- **`--carousel-controls-left`**
- **`--carousel-controls-transform`**
- **`--carousel-controls-display`**
- **`--carousel-controls-justify-content`**
- **`--carousel-controls-width`**
### Overridden other components CSS variables 
- **`--carousel-controls-size`**


You can override CSS variables values bound to this component.

## Internal components

### CarouselItem
#### Props
None.

#### Slots
- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-carousel--common">Storybook</a>.
