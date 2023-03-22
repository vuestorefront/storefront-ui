<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfRating v-bind="state" :value="Number(state.value)" :max="Number(state.max)" />
  </ComponentExample>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { SfRating, SfRatingSize } from '@storefront-ui/vue';
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
      options: Object.keys(SfRatingSize),
      propDefaultValue: SfRatingSize.base,
      propType: 'SfRatingSize',
    },
  ],
  {
    value: ref(3),
    max,
    size: ref(SfRatingSize.base),
    halfIncrement: ref(false),
  },
);
</script>
