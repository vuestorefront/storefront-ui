<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfLoaderLinear class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfLoaderLinear, SfLoaderSize, SfLoaderLinearSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const { state, controlsAttrs } = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propType: 'SfLoaderLinearSize | SfLoaderSize',
      options: [...Object.keys(SfLoaderLinearSize), ...Object.keys(SfLoaderSize)],
      propDefaultValue: SfLoaderSize.base,
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
    size: ref(SfLoaderSize.base),
    ariaLabel: ref('loading'),
  },
);
</script>
