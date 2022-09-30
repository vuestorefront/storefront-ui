<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCounter :size="sizeModel" :pill="pillModel" :class="fillModel">
        {{ valueModel }}
      </VsfCounter>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfCounter from '@sfui/sfui/frameworks/vue/components/VsfCounter/VsfCounter.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import { VsfCounterSizes, VsfCounterSizesKeys } from '@sfui/sfui/frameworks/vue/components/VsfCounter/types';

export default defineComponent({
  name: 'VsfCounterExample',
  components: {
    VsfCounter,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'Value',
            type: 'text',
            modelName: 'valueModel',
            propType: 'string',
          },
          {
            title: 'Size',
            type: 'select',
            modelName: 'sizeModel',
            options: Object.keys(VsfCounterSizes),
            propDefaultValue: VsfCounterSizes.base,
            propType: 'VsfCounterSizes',
          },
          {
            title: 'Pill',
            type: 'boolean',
            modelName: 'pillModel',
            propType: 'boolean',
          },
          {
            title: 'Fill color',
            type: 'select',
            modelName: 'fillModel',
            options: ['bg-white', 'bg-gray-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
            propType: '---',
            description: 'Only for demonstration purposes, background is controlled by custom class',
          },
        ],
        {
          valueModel: ref('123'),
          sizeModel: ref<VsfCounterSizesKeys>('base'),
          pillModel: ref<boolean>(false),
          fillModel: ref<string>('bg-white'),
        },
      ),
    };
  },
});
</script>
