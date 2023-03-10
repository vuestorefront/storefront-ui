<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfRating v-bind="state" :value="Number(state.value)" :max="Number(state.max)" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { VsfRating, VsfRatingSize } from '@storefront-ui/vue/components/VsfRating/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const max = ref(5);
const { controlsAttrs, state } = prepareControls(
  [
    {
      type: 'range',
      modelName: 'value',
      propDefaultValue: 0,
      propType: 'number',
      options: [
        {
          bind: reactive({
            min: 0,
            max,
            step: 0.1,
          }),
        },
      ],
    },
    {
      type: 'range',
      modelName: 'max',
      propDefaultValue: 5,
      propType: 'number',
      options: [
        {
          bind: {
            min: 1,
            step: 1,
            max: 10,
          },
        },
      ],
    },
    {
      type: 'boolean',
      modelName: 'halfIncrement',
      propType: 'boolean',
    },
    {
      type: 'select',
      modelName: 'size',
      options: Object.keys(VsfRatingSize),
      propDefaultValue: VsfRatingSize.base,
      propType: 'VsfRatingSize',
    },
  ],
  {
    value: ref(3),
    max,
    size: ref(VsfRatingSize.base),
    halfIncrement: ref(false),
  },
);
</script>
