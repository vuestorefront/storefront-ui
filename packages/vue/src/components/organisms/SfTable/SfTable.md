# component-description
Table component with inner rows, headers and data.

# common-usage

```html
<template>
  <SfTable>
    <template>
      <SfTableRow>
        <SfTableHeader v-for="header in headers">{{ header }}</SfTableHeader>
      </SfTableRow>
      <SfTableRow v-for="data in content">
        <SfTableData v-for="item in data">{{ item }}</SfTableData>
      </SfTableRow>
    </template>
    </SfTable>
</template>
<script>
import { SfTable, SfButton } from "@storefront-ui/vue"
export default {
  components: { SfTable, SfButton }
  data() {
      return {
        headers: [
          "Quantity",
          "Payment date",
          "Payment method",
          "Amount",
          "Status"
        ],
        content: [
          ["#35767", "4th Nov", "Paypal", "12.00$"],
          ["#35767", "4th Nov", "Visa", "15.00$"],
          ["#35767", "4th Nov", "Paypal", "12.00$"]
        ]
      };
    }, 
}
</script>
```
