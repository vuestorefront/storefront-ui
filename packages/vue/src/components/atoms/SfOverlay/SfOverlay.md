# component-description
Fullscreen overlay, emitting click events. 

# common-usage
<br>
<SfDocsOverlay />

```html
<template>
  <SfOverlay :visible="visible" />
</template>
<script>
import { SfOverlay } from "@storefront-ui/vue";

export default {
  components: {
    SfOverlay
  },
  data() {
    return {
      visible: false;
    }
  }
};
</script>
```
