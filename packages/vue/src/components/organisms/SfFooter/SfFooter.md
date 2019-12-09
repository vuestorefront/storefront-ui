# component-description
Footer component.

# common-usage
<br>

```html 
<template>
  <SfFooter :column="4" :multiple="true">
    <SfFooterColumn title="About Us"></SfFooterColumn>
    <SfFooterColumn title="Departmens"></SfFooterColumn>
    <SfFooterColumn title="Help"></SfFooterColumn>
    <SfFooterColumn title="Payment & Delivert"></SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter } from '@storefront-ui/vue'

export default {
  components: {
    SfFooter
  }
}
</script>
```
