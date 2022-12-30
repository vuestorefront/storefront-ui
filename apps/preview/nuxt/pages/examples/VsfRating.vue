<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRating
        :value="Number(value)"
        :max="Number(maxModel)"
        :size="size"
        :variant="variant"
        :half-increment="halfIncrement"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfRating, VsfRatingVariants, VsfRatingSizes } from '@storefront-ui/vue/components/VsfRating/index';
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
          options: Object.keys(VsfRatingSizes),
          propDefaultValue: VsfRatingSizes.base,
          propType: 'VsfRatingSizes',
        },
        {
          type: 'select',
          modelName: 'variant',
          options: Object.keys(VsfRatingVariants),
          propDefaultValue: VsfRatingVariants.base,
          propType: 'VsfRatingVariants',
        },
      ],
      {
        value: ref(3),
        maxModel: ref(5),
        size: ref(VsfRatingSizes.base),
        variant: ref(VsfRatingVariants.base),
        halfIncrement: ref(false),
      },
    );
  },
});
</script>
