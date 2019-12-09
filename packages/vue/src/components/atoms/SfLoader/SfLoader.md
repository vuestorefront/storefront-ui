# component-description
Overlay loading spinner, wrapped around elements for indicating long running tasks like image loading

# common-usage
<br>
<SfDocsLoader />

```html
<template>
  <SfLoader :loading="isLoading">
    <SfImage src="largeImage.jpg" />
  </SfLoader>
</template>
<script>
import { SfLoader, SfImage } from "@storefront-ui/vue";

export default {
  components: {
    SfLoader,
    SfImage
  },
  data() {
    return {
      isLoading: true;
    }
  }
};
</script>
```
