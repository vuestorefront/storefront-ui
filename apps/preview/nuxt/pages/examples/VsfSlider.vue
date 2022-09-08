
<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSlider>
        <div
          class="bg-gray-300 w-[200px] h-[300px] flex justify-center items-center"
          v-for="index in 5"
          :key="index"
        >
          {{ index }}
        </div>
      </VsfSlider>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfSlider from '../../output/blocks/VsfSlider/VsfSlider.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfSliderExample',
  components: {
    Controls,
    VsfSlider
  },
  setup() {
    return {
      ...prepareControls([
          ], {
        variantModel: ref()
      })
    }
  }
};
</script>
