<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfRating v-bind="state" :value="Number(value)" :max="Number(maxModel)" />
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfRating, VsfRatingSize } from '@storefront-ui/vue/components/VsfRating/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfRatingExample',
  components: {
    VsfRating,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'range',
          modelName: 'value',
          propDefaultValue: 0,
          propType: 'number',
          options: [
            {
              bind: {
                min: 0,
                max: 10,
                step: 0.1,
              },
            },
          ],
        },
        {
          type: 'range',
          modelName: 'maxModel',
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
        maxModel: ref(5),
        size: ref(VsfRatingSize.base),
        halfIncrement: ref(false),
      },
    );
  },
});
</script>
