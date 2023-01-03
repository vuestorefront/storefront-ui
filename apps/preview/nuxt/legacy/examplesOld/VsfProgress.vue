<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfProgress :value="valueModel" :variant="variantModel" :type="typeModel" :label="labelModel" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line import/no-relative-packages, import/no-unresolved
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '../../output/blocks/VsfProgress/VsfProgress.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfProgressExample',
  components: { VsfProgress, ComponentExample },
  setup() {
    return prepareControls(
      [
        {
          title: 'Label',
          type: 'text',
          modelName: 'labelModel',
          description: 'Prop used only to set aria-label attribute',
          propDefaultValue: 'Loading',
          propType: 'string',
        },
        {
          title: 'Value',
          type: 'range',
          modelName: 'valueModel',
          propDefaultValue: 0,
          propType: 'number',
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfProgressVariants),
          propDefaultValue: VsfProgressVariants.base,
          propType: 'VsfProgressVariants',
        },
        {
          title: 'Type',
          type: 'select',
          modelName: 'typeModel',
          options: Object.keys(VsfProgressTypes),
          propDefaultValue: VsfProgressTypes.circle,
          propType: 'VsfProgressTypes',
        },
      ],
      {
        labelModel: ref(),
        valueModel: ref(),
        variantModel: ref(),
        typeModel: ref(),
      },
    );
  },
};
</script>
