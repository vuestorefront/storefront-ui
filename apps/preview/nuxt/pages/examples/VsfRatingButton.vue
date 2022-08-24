<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRatingButton v-model="valueModel" :max="10"  size="lg" />
      <p>{{ valueModel }}</p>
    </div>
    <div class="e-page-controls"></div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRatingButton from '../../output/blocks/VsfRatingButton/VsfRatingButton.vue';

export default defineComponent({
  name: 'VsfRatingButtonExample',
  components: {
    VsfRatingButton,
  },
  setup() {
    return {
      valueModel: ref(1),
      handler: (item) => {
        console.log(item);
      },
    };
  },
});
</script>
