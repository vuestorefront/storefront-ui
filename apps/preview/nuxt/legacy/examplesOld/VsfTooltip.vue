<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfTooltip :label="labelModel" :type="typeModel">
      <button class="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase">
        hover me
      </button>
    </VsfTooltip>
  </ComponentExample>
</template>

<script>
import { defineComponent } from 'vue';
import VsfTooltip, { VsfTooltipTypes } from '../../output/blocks/VsfTooltip/VsfTooltip.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfTooltipExample',
  components: {
    VsfTooltip,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Label',
          modelName: 'labelModel',
          type: 'text',
          propType: 'string',
        },
        {
          title: 'Type',
          type: 'select',
          modelName: 'typeModel',
          options: Object.keys(VsfTooltipTypes),
          propDefaultValue: VsfTooltipTypes.top,
          propType: 'VsfTooltipTypes',
        },
      ],
      {
        labelModel: ref('Label'),
        typeModel: ref(VsfTooltipTypes.top),
      },
    );
  },
});
</script>
