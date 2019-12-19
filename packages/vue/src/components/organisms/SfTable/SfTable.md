# component-description
Table component with inner rows, headers and data.

# common-usage

```html
<template>
  <SfTable>
    <SfTableHeading>
      <SfTableHeader v-for="header in headers">{{ header }}</SfTableHeader>
    </SfTableHeading>
    <SfTableRow v-for="data in content">
      <SfTableData v-for="item in data">{{ item }}</SfTableData>
    </SfTableRow>
   </SfTable>
<script>
import { SfTable } from "@storefront-ui/vue"
export default {
  components: { SfTable }
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
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalised"],
        ["#35767", "4th Nov", "Visa", "15.00$", "Finalised"],
        ["#35767", "4th Nov", "Paypal", "12.00$", "Finalised"]
      ]
    };
  }, 
}
</script>
```
