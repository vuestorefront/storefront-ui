<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRating
        :value="Number(valueModel)"
        :max="Number(maxModel)"
        :size="sizeModel"
        :variant="variantModel"
        :half-increment="halfIncrementModel"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRating from '@sfui/sfui/frameworks/vue/components/VsfRating/VsfRating.vue';
import { VsfRatingVariants, VsfRatingSizes } from '@sfui/sfui/frameworks/vue/components/VsfRating/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRatingExample',
  components: {
    VsfRating,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Value',
          type: 'range',
          modelName: 'valueModel',
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
          title: 'Max',
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
          title: 'Half increment',
          type: 'boolean',
          modelName: 'halfIncrementModel',
          propType: 'boolean',
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfRatingSizes),
          propDefaultValue: VsfRatingSizes.base,
          propType: 'VsfRatingSizes',
        },
        {
          title: 'Variant',
          type: 'select',
          modelName: 'variantModel',
          options: Object.keys(VsfRatingVariants),
          propDefaultValue: VsfRatingVariants.base,
          propType: 'VsfRatingVariants',
        },
      ],
      {
        valueModel: ref(3),
        maxModel: ref(5),
        sizeModel: ref(VsfRatingSizes.base),
        variantModel: ref(VsfRatingVariants.base),
        halfIncrementModel: ref(false),
      },
    );
  },
});
</script>
