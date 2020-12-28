# Table

Table component with inner rows, headers and data.

[[toc]]

## Most common usage scenario

<div class="vuepress-mobile">
    <label for="vuepress-mobile" class="vuepress-mobile-label">Mobile view</label><input id="vuepress-mobile" type="checkbox" class="vuepress-mobile-checkbox">
    <iframe class="storybook-iframe" src="https://storybook.storefrontui.io/iframe.html?id=organisms-table--common" style="width: 100%; border: 0; border-bottom: 1px solid #eee;height: 25rem"></iframe>
  </div>

```html
<template>
  <SfTable :class="customClass">
    <SfTableHeading>
      <SfTableHeader v-for="header in tableHeaders" :key="header">{{
        header
      }}</SfTableHeader>
      <SfTableHeader
        ><SfButton class="sf-button--text"
          >Download all</SfButton
        ></SfTableHeader
      >
    </SfTableHeading>
    <SfTableRow v-for="(row, key) in tableRows" :key="key">
      <SfTableData v-for="data in row" :key="data" :class="status[data]">{{
        data
      }}</SfTableData>
      <SfTableData
        ><SfButton class="sf-button--text">View details</SfButton></SfTableData
      >
    </SfTableRow>
  </SfTable>
</template>
<script>
import { SfTable } from "@storefront-ui/vue";
import { SfButton } from "@storefront-ui/vue";
export default {
  components: {
    SfTable,
    SfButton,
  },
  data() {
    return {
      tableHeaders: [
        "Order ID",
        "Pay. date",
        "Pay. method",
        "Amount",
        "Status",
      ],
      tableRows: [
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
        ["#35767", "4th Nov", "Visa", "15.00$", "In process"],
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
      ],
      status: { Finalise: "text-success", "In process": "text-warning" },
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

- **`.sf-table--no-border`**

## CSS custom properties (variables)

- **`--table-width`**
- **`--table-border-spacing`**
- **`--table-heading-padding`**
- **`--table-heading-background`**
- **`--table-border-heading`**
- **`--table-border-heading-width`**
- **`--table-header-font`**
- **`--table-header-font-weight`**
- **`--table-header-font-size`**
- **`--table-header-font-line-height`**
- **`--table-header-font-family`**
- **`--table-header-color`**
- **`--table-row-padding`**
- **`--table-row-background`**
- **`--table-row-box-shadow`**
- **`--table-row-border`**
- **`--table-row-border-width`**
- **`--table-data-color`**
- **`--table-data-font`**
- **`--table-data-font-weight`**
- **`--table-data-font-size`**
- **`--table-data-font-line-height`**
- **`--table-data-font-family`**
- **`--table-column-flex`**
- **`--table-column-padding`**
- **`--table-column-text-align`**
- **`--_table-column-order`**
### Overridden other components CSS variables 
None. 


You can override CSS variables values bound to this component.

## Internal components

### TableData
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

### TableHeader
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

### TableHeading
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

### TableRow
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

See all available configurations and play with this component on <a href="https://storybook.storefrontui.io/?path=/story/organisms-table--common">Storybook</a>.
