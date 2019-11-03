# component-description
Checkbox component

# common-usage
<br>
<SfDocsCheckbox label="Receive newsletter" value="agreed" />

```html
<template>
  <SfCheckbox
    v-model="checked"
    name="checkbox"
    value="agreed"
    label="Receive newsletter"
  />
</template>

<script>
import { SfCheckbox } from "@storefront-ui/vue";

export default {
  components: {
    SfCheckbox
  },
  data() {
    return {
      checked: []
    };
  }
};
</script>
```
