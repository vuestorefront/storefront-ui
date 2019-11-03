# component-description
Bullet-style indicator for paginated view containers.

# common-usage
<br>
<SfDocsBullets :total="5" />

```html
<template>
  <SfBullets
    :total="numberOfPages"
    :current="currentPage"
    @click="go($event)"
  />
</template>

<script>
import { SfBullets } from "@storefront-ui/vue";

export default {
  components: {
    SfBullets
  },
  data() {
    return {
      pages: [
        // some container for your pages
      ],
      currentPage: 0
    };
  },
  computed: {
    numberOfPages() {
      return this.pages.length;
    }
  },
  methods: {
    go(index) {
      // logic for changing to page `index`
    }
  }
};
</script>
```
