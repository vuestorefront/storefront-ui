<template>
  <ComponentExample :controls-attrs="state.controlsAttrs">
    SfIconPackage imported from `@storefront-ui/vue`: <br />
    <SfIconPackage :style="{ color: state.colorExample.value }" :size="state.size.value" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfIconSize, SfIconPackage } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const state = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'SfIconSize.base',
      propType: 'SfIconSize',
      options: Object.keys(SfIconSize),
    },
    {
      type: 'select',
      modelName: 'colorExample',
      description: '(not a prop) example showing possibility to change icons color',
      options: ['black', 'red', 'blue', 'green'],
    },
  ],
  {
    size: ref(SfIconSize.base),
    colorExample: ref('black'),
  },
);
</script>
