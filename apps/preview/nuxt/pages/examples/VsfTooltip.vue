<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <VsfTooltip v-bind="state"> Hover me! </VsfTooltip>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfTooltip, VsfPopoverPlacement, VsfPopoverStrategy } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'text',
      modelName: 'label',
      propType: 'string',
      description: 'Set label value',
    },
    {
      type: 'select',
      options: Object.keys(VsfPopoverPlacement),
      modelName: 'placement',
      propType: 'VsfPopoverPlacement',
      propDefaultValue: VsfPopoverPlacement.top,
      description: 'Initial position of tooltip in reference to trigger',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'VsfPopoverStrategy',
      propDefaultValue: VsfPopoverStrategy.absolute,
      options: Object.values(VsfPopoverStrategy),
      description: 'Tooltip positioning strategy',
    },
    {
      type: 'boolean',
      modelName: 'showArrow',
      propType: 'boolean',
      description: 'Show pointer arrow',
      propDefaultValue: false,
    },
  ],
  {
    label: ref('Tooltip text'),
    placement: ref(VsfPopoverPlacement.top),
    strategy: ref(VsfPopoverStrategy.absolute),
    showArrow: ref(false),
  },
);
</script>
