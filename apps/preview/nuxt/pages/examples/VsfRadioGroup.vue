
<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup

      >
      </VsfRadioGroup>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfRadioGroup from '../../output/blocks/VsfRadioGroup/VsfRadioGroup.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfRadioGroupExample',
  components: {
    Controls,
    VsfRadioGroup
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
