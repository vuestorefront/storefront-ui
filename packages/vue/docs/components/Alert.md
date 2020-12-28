# Alert

Component for displaying brief information of varying importance to the user, enriched with an icon.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-alert--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfAlert :message="message" :type="type" />
</template>
<script>
import { SfAlert } from "@storefront-ui/vue";
export default {
  components: {
    SfAlert,
  },
  data() {
    return {
      message: "Low in stock",
      type: "info",
    };
  },
};
</script>
```

## Props

- **`message`**
  - _Message that will be displayed in Alert._
  - **type:** `string`
  - **defaultValue:** `""`

- **`type`**
  - _Alert type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like._
  - **type:** `string`
  - **defaultValue:** `"secondary"`

## Slots

- **`icon`**
  - _Custom alert icon. Slot content will replace default icon &lt;SfIcon/&gt; tag._
  - **bindings:** `icon`

- **`message`**
  - _Custom message . Slot content will replace default message &lt;span&gt; tag._
  - **bindings:** `message`

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--alert-color`**
- **`--alert-font`**
- **`--alert-font-weight`**
- **`--alert-font-size`**
- **`--alert-font-line-height`**
- **`--alert-font-family`**
- **`--alert-message-margin`**
### Overridden other components CSS variables 
- **`--icon-size`**
- **`--icon-color`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-alert--common">Storybook</a>.
