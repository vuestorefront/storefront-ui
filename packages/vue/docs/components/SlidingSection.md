# SlidingSection

Section for content with sliding property.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-slidingsection--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <div style="max-width: 64rem; margin: auto;">
    <SfSlidingSection>
      <template #static>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 34.6875rem;
            background-color: #f2f2f2;
          "
        >
          [#static slot content]
        </div>
      </template>
      <template #sliding>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 18.75rem;
            background-color: #f2f2f2;
          "
        >
          [#sliding slot content]
        </div>
      </template>
    </SfSlidingSection>
  </div>
</template>
<script>
import { SfSlidingSection } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfSlidingSection,
  },
};
</script>
```

## Props

None.

## Slots

- **`static`**
  - _Use this slot to place static content._

- **`close`**
  - _Use this slot to replace close icon_
  - **bindings:** `closeHandler`

- **`sliding`**
  - _Use this slot to place sliding content._
  - **bindings:** `isActive`

## Events

None.

## CSS modifiers

- **`.sf-sliding-section--has-scroll-lock`**

## CSS custom properties (variables)

- **`--sliding-section-display`**
- **`--sliding-section-margin`**
- **`--sliding-section-static-height`**
- **`--sliding-section-static-transition`**
- **`--sliding-section-sliding-padding`**
- **`--sliding-section-mobile-bar-display`**
- **`--sliding-section-mobile-bar-padding`**
### Overridden other components CSS variables 
- **`--sliding-section-sliding-margin`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-slidingsection--common">Storybook</a>.
