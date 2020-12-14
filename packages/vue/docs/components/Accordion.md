# Accordion

Accordion component. Can be set as one or multiple opened, with or without icon.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-accordion--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 20rem"></iframe>
  </div>

```html
<template>
  <SfAccordion
    :open="open"
    :multiple="multiple"
    :show-chevron="showChevron"
    :transition="transition"
  >
    <SfAccordionItem
      v-for="accordion in accordions"
      :key="accordion.header"
      :header="accordion.header"
    >
      <SfList>
        <SfListItem v-for="item in accordion.items" :key="item.label">
          <SfMenuItem :label="item.label" :count="item.count" />
        </SfListItem>
      </SfList>
    </SfAccordionItem>
  </SfAccordion>
</template>
<script>
import { SfAccordion } from "@storefront-ui/vue";
import { SfList } from "@storefront-ui/vue";
import { SfMenuItem } from "@storefront-ui/vue";
export default {
  components: {
    SfAccordion,
    SfList,
    SfMenuItem,
  },
  data() {
    return {
      accordions: [
        {
          header: "Clothing",
          items: [
            { label: "All", count: "280" },
            { label: "Skirts", count: "11" },
            { label: "Dresses", count: "32" },
          ],
        },
        {
          header: "Accessories",
          items: [
            { label: "All", count: "80" },
            { label: "Belts", count: "101" },
            { label: "Bag", count: "2" },
          ],
        },
        {
          header: "Shoes",
          items: [
            { label: "All", count: "2" },
            { label: "Trainers", count: "22" },
            { label: "Sandals", count: "55" },
          ],
        },
      ],
      open: "Clothing",
      multiple: false,
      showChevron: false,
      transition: "sf-expand",
    };
  },
};
</script>
```

## Props

- **`open`**
  - _Opens an accordion item based on title. If 'all' string is passed then all items will be open by default._
  - **type:** `string|array`
  - **defaultValue:** `""`

- **`firstOpen`**
  - _Opens the first accordion item if set to "true"_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`multiple`**
  - _Allows to open multiple accordion items if set to "true"_
  - **type:** `boolean`
  - **defaultValue:** `false`

- **`transition`**
  - _Overlay transition effect_
  - **type:** `string`
  - **defaultValue:** `"sf-expand"`

- **`showChevron`**
  - **type:** `boolean`
  - **defaultValue:** `true`

## Slots

- **`default`**
  - _default slot to setup SfAccordionItem elements_

## Events

None.

## CSS modifiers

None.

## CSS custom properties (variables)

- **`--accordion-item-header-justify`**
- **`--accordion-item-header-padding`**
- **`--accordion-item-header-color`**
- **`--accordion-item-header-border`**
- **`--accordion-item-header-border-width`**
- **`--accordion-item-header-font`**
- **`--accordion-item-header-font-weight`**
- **`--accordion-item-header-font-size`**
- **`--accordion-item-header-font-line-height`**
- **`--accordion-item-header-font-family`**
- **`--accordion-item-content-padding`**
- **`--accordion-item-content-color`**
- **`--accordion-item-content-border`**
- **`--accordion-item-content-border-width`**
- **`--accordion-item-content-font`**
- **`--accordion-item-content-font-weight`**
- **`--accordion-item-content-font-size`**
- **`--accordion-item-content-font-line-height`**
- **`--accordion-item-content-font-family`**
- **`--accordion-item-chevron-display`**
### Overridden other components CSS variables 
- **`--chevron-color`**


You can override CSS variables values bound to this component.

## Internal components

### AccordionItem
#### Props
- **`header`**
  - **type:** `string`
  - **defaultValue:** `""`

#### Slots
- **`header`**
  - **bindings:** `header`, `isOpen`, `accordionClick`, `showChevron`

- **`default`**

#### Events
None.

#### CSS modifiers
None.

#### CSS variables
None.

## Play with this component

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-accordion--common">Storybook</a>.
