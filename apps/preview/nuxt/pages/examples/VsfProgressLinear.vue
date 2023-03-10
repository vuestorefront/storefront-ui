<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfProgressLinear :size="state.size" :value="Number(state.value)" :aria-label="state.ariaLabel" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  VsfProgressLinear,
  VsfProgressSize,
  VsfProgressLinearSize,
} from '@storefront-ui/vue/components/VsfProgressLinear/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      options: [...Object.keys(VsfProgressLinearSize), ...Object.keys(VsfProgressSize)],
      propDefaultValue: VsfProgressSize.base,
      propType: 'VsfProgressLinearSize | VsfProgressSize',
      description:
        'This prop is responsible for progress size. There are 9 sizes: minimal, xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
    },
    {
      type: 'range',
      modelName: 'value',
      propDefaultValue: 0,
      propType: 'number',
      description: 'Progress value',
    },
    {
      type: 'text',
      propType: 'string',
      propDefaultValue: 'Progress element',
      modelName: 'ariaLabel',
      description: 'Aria label value',
    },
  ],
  {
    value: ref(0),
    size: ref(VsfProgressSize.base),
    ariaLabel: ref('Progress element'),
  },
);
</script>
