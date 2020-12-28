# Dropdown

Dropdown component

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=molecules-dropdown--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <SfDropdown
    :class="customClass"
    :is-open="isOpen"
    @click:close="isOpen = false"
    @click:open="isOpen = true"
    :persistent="persistent"
    :title="title"
  >
    <template>
      <SfList>
        <SfListItem v-for="(action, key) in actionList" :key="key">
          <SfButton
            class="sf-button--full-width sf-button--underlined color-primary"
            @click="isOpen = false"
            >{{ action }}</SfButton
          >
        </SfListItem>
      </SfList>
    </template>
  </SfDropdown>
</template>
<script>
import { SfDropdown } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    SfDropdown,
    SfList,
    SfButton,
  },
  data() {
    return {
      isOpen: false,
      actionList: ["Add to cart", "Add to compare", "Add to wishlist", "Share"],
      title: "Choose size",
      persistent: false,
    };
  },
};
</script>
```

## Props

- **`isOpen`**
  - _Dropdown is open_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`title`**
  - _Title for dropdown content, visible on mobile._
  - **type:** `string`
  - **defaultValue:** `""`

- **`persistent`**
  - _If true clicking outside will not dismiss the dropdown_
  - **type:** `boolean`
  - **defaultValue:** `false`

## Slots

- **`opener`**

- **`title`**
  - _Use this slot to replace title._
  - **bindings:** `title`

- **`default`**
  - _Use this slot to place content inside the dropdown._

- **`cancel`**
  - _Use this slot to replace cancel button._

## Events

- **`click:open`**

- **`click:close`**

## CSS modifiers

- **`.sf-dropdown--up`**

## CSS custom properties (variables)

- **`--dropdown-position`**
- **`--dropdown-top`**
- **`--dropdown-bottom`**
- **`--dropdown-transform`**
- **`--dropdown-container-position`**
- **`--dropdown-container-top`**
- **`--dropdown-container-bottom`**
- **`--dropdown-container-width`**
- **`--dropdown-background`**
- **`--dropdown-box-shadow`**
- **`--dropdown-title-padding`**
- **`--dropdown-title-font`**
- **`--dropdown-title-font-weight`**
- **`--dropdown-title-font-size`**
- **`--dropdown-title-font-line-height`**
- **`--dropdown-title-font-family`**
- **`--dropdown-animation-enter`**
- **`--dropdown-animation-leave`**
### Overridden other components CSS variables 
- **`--button-background`**
- **`--button-color`**
- **`--button-display`**


You can override CSS variables values bound to this component.

<!-- No _internal components -->

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/molecules-dropdown--common">Storybook</a>.
