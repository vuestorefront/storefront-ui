<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLoaderLinear class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VsfLoaderLinear from '@storefront-ui/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue';
import { VsfLoaderSize } from '@storefront-ui/shared';
import { VsfLoaderLinearSize } from '@storefront-ui/vue/components/VsfLoaderLinear/types';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propType: 'VsfLoaderLinearSize | VsfLoaderSize',
      options: [...Object.keys(VsfLoaderLinearSize), ...Object.keys(VsfLoaderSize)],
      propDefaultValue: VsfLoaderSize.base,
      description: 'sets sizes of components',
    },
    {
      type: 'text',
      modelName: 'ariaLabel',
      propType: 'string',
      propDefaultValue: 'loading',
      description: 'sets description text available for screen readers',
    },
  ],
  {
    size: ref(VsfLoaderSize.base),
    ariaLabel: ref('loading'),
  },
);
</script>
