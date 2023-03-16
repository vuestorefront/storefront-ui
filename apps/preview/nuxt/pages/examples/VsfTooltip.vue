<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <VsfTooltip v-model="modelValue" :label="label" :placement="placement" :hide-pointer="hidePointer">
      <VsfButton> Button </VsfButton>
    </VsfTooltip>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfTooltip, VsfTooltipPlacement, VsfButton } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfTooltipExample',
  components: {
    ComponentExample,
    VsfTooltip,
    VsfButton,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            description: 'Set label value',
          },
          {
            type: 'boolean',
            modelName: 'modelValue',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'State of tooltip',
          },
          {
            type: 'select',
            options: Object.keys(VsfTooltipPlacement),
            modelName: 'placement',
            propType: 'VsfTooltipPlacement',
            propDefaultValue: VsfTooltipPlacement.bottom,
            description: 'Initial position of tooltip in reference to trigger',
          },
          {
            type: 'boolean',
            modelName: 'hidePointer',
            propDefaultValue: 'false',
            propType: 'boolean',
            description: 'Set if pointer should be visible or hidden',
          },
        ],
        {
          modelValue: ref(),
          placement: ref(VsfTooltipPlacement.bottom),
          hidePointer: ref(),
          label: ref('Tooltip text'),
        },
      ),
    };
  },
};
</script>
