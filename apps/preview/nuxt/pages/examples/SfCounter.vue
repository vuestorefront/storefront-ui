<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfCounter v-bind="state" :class="fill">{{ value }}</SfCounter>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SfCounter, SfCounterSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfCounterExample',
  components: {
    SfCounter,
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
            options: Object.keys(SfCounterSize),
            propDefaultValue: SfCounterSize.base,
            propType: 'SfCounterSize',
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
          size: ref<SfCounterSize>(SfCounterSize.base),
          pill: ref(false),
          fill: ref('bg-white'),
        },
      ),
    };
  },
});
</script>
