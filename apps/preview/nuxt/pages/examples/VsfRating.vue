<template>
  <div class="e-page">
    <div class="e-page-component">
      <RatingBase />
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RatingBase from "../../../../../.stale/src/components/Rating/RatingBase/RatingBase.vue";

export default defineComponent({
  name: 'VsfRatingExample',
  components: {
    RatingBase
  },
  data() {
    return {
    };
  },
});
</script>
