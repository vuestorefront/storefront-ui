<template>
  <ComponentExample :controls-attrs="state.controlsAttrs">
    VsfIconPackage imported from `@storefront-ui/vue`: <br />
    <VsfIconPackage :style="{ color: state.colorExample.value }" :size="state.size.value" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfIconSize, VsfIconPackage } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const state = prepareControls(
  [
    {
      type: 'select',
      modelName: 'size',
      propDefaultValue: 'VsfIconSize.base',
      propType: 'VsfIconSize',
      options: Object.keys(VsfIconSize),
    },
    {
      type: 'select',
      modelName: 'colorExample',
      description: '(not a prop) example showing possibility to change icons color',
      options: ['black', 'red', 'blue', 'green'],
    },
  ],
  {
    size: ref(VsfIconSize.base),
    colorExample: ref('black'),
  },
);
</script>
