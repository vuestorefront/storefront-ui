# component-description
Input form field with validation and built-in label animation

# common-usage
<br>
<SfInput label="First Name" name="first-name" required />

```html
<template>
  <SfInput
    v-model="firstName"
    label="First Name"
    name="first-name"
    :required="true"
  />
</template>
<script>
import { SfInput } from "@storefront-ui/vue";

export default {
  components: {
    SfInput
  },
  data() {
    return {
      required: true;
    }
  }
};
</script>
```
