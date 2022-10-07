<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCounter :size="sizeModel" :pill="pill" :class="fill">
        {{ value }}
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
import { VsfCounterSizes } from '@sfui/sfui/frameworks/vue/components/VsfCounter/types';

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
            type: 'text',
            modelName: 'value',
            propType: 'string',
          },
          {
            type: 'select',
            modelName: 'sizeModel',
            options: Object.keys(VsfCounterSizes),
            propDefaultValue: VsfCounterSizes.base,
            propType: 'VsfCounterSizes',
          },
          {
            type: 'boolean',
            modelName: 'pill',
            propType: 'boolean',
          },
          {
            type: 'select',
            modelName: 'fill',
            options: ['bg-white', 'bg-gray-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
            propType: '---',
            description: 'Only for demonstration purposes, background is controlled by custom class',
          },
        ],
        {
          value: ref('123'),
          sizeModel: ref<VsfCounterSizes>(VsfCounterSizes.base),
          pill: ref(false),
          fill: ref('bg-white'),
        },
      ),
    };
  },
});
</script>
