<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSpinner :type="typeModel" :variant="variantModel" />
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import VsfSpinner, { VsfSpinnerTypes, VsfSpinnerVariants } from '../../output/blocks/VsfSpinner/VsfSpinner.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfSpinnerExample',
  components: {
    ComponentExample,
    VsfSpinner,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Type',
          type: 'select',
          modelName: 'typeModel',
          options: Object.keys(VsfSpinnerTypes),
          propDefaultValue: VsfSpinnerTypes.base,
          propType: 'VsfSpinnerTypes',
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfSpinnerVariants),
          propDefaultValue: VsfSpinnerVariants.base,
          propType: 'VsfSpinnerVariants',
        },
      ],
      {
        typeModel: ref(VsfSpinnerTypes.base),
        variantModel: ref(VsfSpinnerVariants.base),
      },
    );
  },
};
</script>
