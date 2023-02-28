<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfCounter v-bind="state" :class="fill">
      {{ value }}
    </VsfCounter>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfCounter, VsfCounterSize } from '@storefront-ui/vue/components/VsfCounter/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfCounterExample',
  components: {
    VsfCounter,
    ComponentExample,
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
            modelName: 'size',
            options: Object.keys(VsfCounterSize),
            propDefaultValue: VsfCounterSize.base,
            propType: 'VsfCounterSize',
          },
          {
            type: 'boolean',
            modelName: 'pill',
            propType: 'boolean',
          },
          {
            type: 'select',
            modelName: 'fill',
            options: ['bg-white', 'bg-neutral-100', 'bg-primary-200', 'bg-warning-200', 'bg-negative-200'],
            propType: '---',
            description: 'Only for demonstration purposes, background is controlled by custom class',
          },
        ],
        {
          value: ref('123'),
          size: ref<VsfCounterSize>(VsfCounterSize.base),
          pill: ref(false),
          fill: ref('bg-white'),
        },
      ),
    };
  },
});
</script>
