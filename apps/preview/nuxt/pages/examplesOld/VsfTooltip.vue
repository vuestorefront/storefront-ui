<template>
  <div class="e-page">
    <div class="e-page-component flex justify-center items-center h-full">
      <VsfTooltip :label="labelModel" :type="typeModel">
        <button class="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase">
          hover me
        </button>
      </VsfTooltip>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VsfTooltip, { VsfTooltipTypes } from '../../output/blocks/VsfTooltip/VsfTooltip.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfTooltipExample',
  components: {
    VsfTooltip,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Label',
          modelName: 'labelModel',
          type: "text",
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
