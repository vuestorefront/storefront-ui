<template>
  <ComponentExample :controls-attrs="controlsAttrs" component-container-class-name="flex justify-center items-center">
    <SfTooltip v-bind="state"> Hover me! </SfTooltip>
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfTooltip, SfPopoverPlacement, SfPopoverStrategy } from '@storefront-ui/vue';
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
      options: Object.keys(SfPopoverPlacement),
      modelName: 'placement',
      propType: 'SfPopoverPlacement',
      propDefaultValue: SfPopoverPlacement.top,
      description: 'Initial position of tooltip in reference to trigger',
    },
    {
      type: 'select',
      modelName: 'strategy',
      propType: 'SfPopoverStrategy',
      propDefaultValue: SfPopoverStrategy.absolute,
      options: Object.values(SfPopoverStrategy),
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
    placement: ref(SfPopoverPlacement.top),
    strategy: ref(SfPopoverStrategy.absolute),
    showArrow: ref(false),
  },
);
</script>
