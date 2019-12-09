# component-description
Component for displaying score-based user ratings.

# common-usage
<br>
<SfDocsRating style="display: flex" />

```html
<template>
  <SfRating :max="ratingMaxScore" :score="ratingScore" />
</template>
<script>
import { SfRating } from "@storefront-ui/vue";

export default {
  components: {
    SfRating
  },
  data() {
   return {
     ratingMaxScore: 5,
     ratingScore: 3
    }
  }
};
</script>
```
