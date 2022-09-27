<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSpinner
        :type="typeModel"
        :variant="variantModel"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfSpinner, { VsfSpinnerTypes, VsfSpinnerVariants } from '../../output/blocks/VsfSpinner/VsfSpinner.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfSpinnerExample',
  components: {
    Controls,
    VsfSpinner
  },
  setup() {
    return prepareControls([
      {
        title: 'Type',
        type: 'select',
        modelName: 'typeModel',
        options: Object.keys(VsfSpinnerTypes),
        propDefaultValue: VsfSpinnerTypes.base,
        propType: 'VsfSpinnerTypes'
      },
      {
        title: 'Variant',
        type: 'select',
        modelName: 'variantModel',
        options: Object.keys(VsfSpinnerVariants),
        propDefaultValue: VsfSpinnerVariants.base,
        propType: 'VsfSpinnerVariants'
      },
    ], {
      typeModel: ref(VsfSpinnerTypes.base),
      variantModel: ref(VsfSpinnerVariants.base),
    })
  }
};
</script>
