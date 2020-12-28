# List

Vertical list component.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-list--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 6rem"></iframe>
  </div>

```html
<template>
  <SfList :style="{ maxWidth: '186px' }">
    <SfListItem
      v-for="item in items"
      :key="item.label"
      :style="{ '--list-item-margin': '24px 0' }"
    >
      <SfMenuItem :label="item.label" :count="item.count" />
    </SfListItem>
  </SfList>
</template>
<script>
import { SfList } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
export default {
  components: {
    SfList,
    SfMenuItem,
  },
  data() {
    return {
      items: [
        { label: "All", count: "280" },
        { label: "Skirts", count: "11" },
        { label: "Dresses", count: "32" },
        { label: "Belts", count: "101" },
        { label: "Bag", count: "2" },
        { label: "Trainers", count: "22" },
        { label: "Sandals", count: "55" },
      ],
    };
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

None.

## CSS custom properties (variables)

- **`--list-list-style`**
- **`--list-padding`**
- **`--list-margin`**
- **`--list-item-margin`**
- **`--list-item-padding`**
- **`--list-item-color`**
- **`--list-item-border`**
- **`--list-item-border-width`**
- **`--list-item-font`**
- **`--list-item-font-weight`**
- **`--list-item-font-size`**
- **`--list-item-font-line-height`**
- **`--list-item-font-family`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

## Internal components

### ListItem
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

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-list--common">Storybook</a>.
