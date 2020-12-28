# Section

Full-width section for content.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-section--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 35rem"></iframe>
  </div>

```html
<template>
  <SfSection
    :title-heading="titleHeading"
    :subtitle-heading="subtitleHeading"
    :level-heading="levelHeading"
  >
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        height: 18.75rem;
        background-color: #f2f2f2;
      "
    >
      [#default slot content]
    </div>
  </SfSection>
</template>
<script>
import { SfSection } from "@storefront-ui/vue";
export default {
  components: {
    SfSection
  },
  data() {
    return {
      titleHeading: "Share your look",
subtitleHeading: "#YOURLOOK",
level-heading: 2
    }
  }
};
</script>
```

## Props

- **`titleHeading`**
  - _Heading title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`subtitleHeading`**
  - _Heading subtitle_
  - **type:** `string`
  - **defaultValue:** `""`

- **`levelHeading`**
  - _Heading tag level_
  - **type:** `number`
  - **defaultValue:** `2`

## Slots

- **`heading`**
  - _Section heading. Slot content will replace default &lt;sf-heading&gt; component_
  - **bindings:** `levelHeading`, `titleHeading`, `subtitleHeading`

- **`default`**
  - _Section content._

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--section-margin`**
- **`--section-content-margin`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-section--common">Storybook</a>.
