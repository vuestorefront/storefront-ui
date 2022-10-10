<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfProgress :value="valueModel" :variant="variantModel" :type="typeModel" :label="labelModel" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
// eslint-disable-next-line import/no-relative-packages, import/no-unresolved
import VsfProgress, { VsfProgressVariants, VsfProgressTypes } from '../../output/blocks/VsfProgress/VsfProgress.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfProgressExample',
  components: { VsfProgress, Controls },
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
