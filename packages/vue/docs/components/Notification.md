# Notification

Component used for informative function f.e products added to cart or successful login.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-notification--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 5rem"></iframe>
  </div>

```html
<template>
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="visible = false"
  />
</template>
<script>
import { SfNotification } from "@storefront-ui/vue";
export default {
  components: {
    SfNotification,
  },
  data() {
    return {
      visible: true,
      title: "",
      message: "This is an information message.",
      action: "",
      type: "info",
    };
  },
};
</script>
```

## Props

- **`visible`**
  - _Visibility of the Notification. Default value is false._
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`title`**
  - _Title that will be displayed in Notification._
  - **type:** `string`
  - **defaultValue:** `""`

- **`message`**
  - _Message that will be displayed in Notification._
  - **type:** `string`
  - **defaultValue:** `""`

- **`action`**
  - _Action that will be displayed in Notification._
  - **type:** `string`
  - **defaultValue:** `""`

- **`type`**
  - _Notification type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like._
  - **type:** `string`
  - **defaultValue:** `"secondary"`

## Slots

- **`icon`**
  - _Custom notification icon. Slot content will replace default icon._
  - **bindings:** `icon`

- **`title`**
  - _Custom title. Slot content will replace default title._
  - **bindings:** `title`

- **`message`**
  - _Custom message. Slot content will replace default message._
  - **bindings:** `message`

- **`action`**
  - _Custom action. Slot content will replace default action._
  - **bindings:** `action`, `actionHandler`

- **`close`**
  - _Custom notification close icon. Slot content will replace default close icon._
  - **bindings:** `closeHandler`

## Events

- **`click:action`**
  - _Event for action button_

- **`click:close`**
  - _Event for close icon_

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--notification-align-items`**
- **`--notification-max-width`**
- **`--notification-padding`**
- **`--notification-box-shadow`**
- **`--notification-border-radius`**
- **`--notification-background`**
- **`--notification-color`**
- **`--notification-font`**
- **`--notification-font-weight`**
- **`--notification-font-size`**
- **`--notification-font-line-height`**
- **`--notification-font-family`**
- **`--notification-title-display`**
- **`--notification-title-font`**
- **`--notification-title-font-weight`**
- **`--notification-title-font-size`**
- **`--notification-title-font-line-height`**
- **`--notification-title-font-family`**
- **`--notification-action-display`**
- **`--notification-action-color`**
- **`--notification-action-font`**
- **`--notification-action-text-decoration`**
- **`--notification-icon-margin`**
- **`--notification-close-top`**
- **`--notification-close-right`**
### Overridden other components CSS variables 
- **`--icon-color`**
- **`--icon-size`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-notification--common">Storybook</a>.
