# Footer

Footer component.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-footer--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <SfFooter
    :column="column"
    :multiple="multiple"
    :open="open"
    class="sb-footer"
  >
    <SfFooterColumn
      v-for="column in columns"
      :key="column.title"
      :title="column.title"
    >
      <SfList v-if="column.items">
        <SfListItem v-for="item in column.items" :key="item">
          <SfMenuItem :label="item" />
        </SfListItem>
      </SfList>
      <div v-else class="sb-footer__social">
        <SfImage
          v-for="picture in column.pictures"
          :key="picture"
          width="12"
          height="12"
          :src="'/assets/storybook/SfFooter/' + picture + '.svg'"
          class="sb-social-icon"
        />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>
<script>
import { SfFooter } from "@storefront-ui/vue";
import { SfHeader } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfImage } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
import {} from "@storefront-ui/vue";
export default {
  components: {
    SfFooter,
    SfHeader,
    SfList,
    SfImage,
    SfButton,
    SfMenuItem,
  },
  data() {
    return {
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        { title: "Payment & delivery", items: ["Purchase terms", "Guarantee"] },
        {
          title: "Social",
          pictures: ["facebook", "pinterest", "twitter", "youtube"],
        },
      ],
      column: 4,
      multiple: false,
      open: ["About us", "Help", "Social"],
    };
  },
};
</script>
```

## Props

- **`column`**
  - **type:** `number`
  - **defaultValue:** `4`

- **`multiple`**
  - **type:** `boolean`
  - **defaultValue:** `true`

- **`open`**
  - **type:** `string|array`
  - **defaultValue:** `() => []`

## Slots

- **`default`**

## Events

- **`change`**

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--_footer-column-width`**
- **`--footer-column-title-color`**
- **`--footer-column-title-padding`**
- **`--footer-column-title-background`**
- **`--footer-column-title-font`**
- **`--footer-column-title-font-weight`**
- **`--footer-column-title-font-size`**
- **`--footer-column-title-font-line-height`**
- **`--footer-column-title-font-family`**
- **`--footer-column-chevron-display`**
### Overridden other components CSS variables 
- **`--footer-column-item-padding`**
- **`--footer-display`**
- **`--footer-flex-wrap`**
- **`--footer-justify-content`**
- **`--footer-width`**
- **`--footer-margin`**
- **`--footer-padding`**


You can override CSS variables values bound to this component.

## Internal components

### FooterColumn
#### Props
- **`title`**
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-footer--common">Storybook</a>.
