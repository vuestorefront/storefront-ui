# Heading

Heading component for titles with optional description

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=atoms-heading--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 6.5rem"></iframe>
  </div>

```html
<template>
  <SfHeading
    :class="customClass"
    :level="level"
    :title="title"
    :description="description"
  />
</template>
<script>
import { SfHeading } from "@storefront-ui/vue";
export default {
  components: {
    SfHeading,
  },
  data() {
    return {
      level: 3,
      title: "Share Your Look",
      description: "#YOURLOOK",
    };
  },
};
</script>
```

## Props

- **`level`**
  - _Heading level_
  - **type:** `number`
  - **defaultValue:** `2`

- **`title`**
  - _Heading title_
  - **type:** `string`
  - **defaultValue:** `""`

- **`description`**
  - _Heading description_
  - **type:** `string`
  - **defaultValue:** `""`

## Slots

- **`title`**
  - _Heading title. Slot content will replace default &lt;h&gt; tag_
  - **bindings:** `title`

- **`description`**
  - _Heading description. Slot content will replace default &lt;div&gt; tag_
  - **bindings:** `description`

## Events

None.

## CSS modifiers

- **`.sf-heading--underline`**
- **`.sf-heading--left`**
- **`.sf-heading--right`**

## CSS custom properties (variables)

- **`--heading-padding`**
- **`--heading-text-align`**
- **`--heading-title-margin`**
- **`--heading-title-color`**
- **`--heading-title-font`**
- **`--heading-title-font-weight`**
- **`--heading-title-font-size`**
- **`--heading-title-font-line-height`**
- **`--heading-title-font-family`**
- **`--heading-description-margin`**
- **`--heading-description-color`**
- **`--heading-description-font`**
- **`--heading-description-font-weight`**
- **`--heading-description-font-size`**
- **`--heading-description-font-line-height`**
- **`--heading-description-font-family`**
- **`--heading-border`**
- **`--heading-border-width`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/atoms-heading--common">Storybook</a>.
