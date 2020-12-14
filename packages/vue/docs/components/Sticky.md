# Sticky

Applies sticky property to the component.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-sticky--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <StoriesWrapper>
    <SfSticky>
      <div
        style="
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          height: 18.75rem;
          background-color: #f2f2f2;
        "
      >
        [#default slot content]
      </div>
    </SfSticky>
  </StoriesWrapper>
</template>
<script>
import { SfSticky } from "@storefront-ui/vue";
import { StoriesWrapper } from "@storefront-ui/vue";
export default {
  components: {
    SfSticky,
    StoriesWrapper,
  },
};
</script>
```

## Props

None.

## Slots

- **`default`**

## Events

None.

## CSS modifiers

- **`.sf-sticky--sticky`**
- **`.sf-sticky--bound`**

## CSS custom properties (variables)

- **`--sticky-position`**
- **`--sticky-top`**
- **`--sticky-bottom`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-sticky--common">Storybook</a>.
