<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRatingBase :value="valueModel" :max="maxModel" :size="sizeModel" :reviews="reviewsModel" />
      <VsfRatingWithValue :value="valueModel" :max="maxModel" :reviews="reviewsModel" :size="sizeModel" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRatingBase, { VsfRatingBaseVariants } from '../../output/blocks/VsfRating/VsfRatingBase.vue';
import VsfRatingWithValue from '../../output/blocks/VsfRating/VsfRatingWithValue.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRatingExample',
  components: {
    VsfRatingBase,
    VsfRatingWithValue,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'value',
          type: 'range',
          modelName: 'valueModel',
          propDefaultValue: 0,
          propType: 'number',
          options: [
            {
              bind: {
                min: 0,
                max: 10,
                step: 0.5,
              },
            },
          ],
        },
        {
          title: 'max',
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
          title: 'reviews',
          type: 'range',
          modelName: 'reviewsModel',
          propDefaultValue: 0,
          propType: 'number',
          options: [
            {
              bind: {
                min: 0,
                step: 1,
              },
            },
          ],
        },
        {
          title: 'size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfRatingBaseVariants),
          propDefaultValue: VsfRatingBaseVariants.base,
          propType: 'VsfRatingBaseVariants',
        },
      ],
      {
        valueModel: ref(3),
        maxModel: ref(5),
        reviewsModel: ref(0),
        sizeModel: ref(VsfRatingBaseVariants.base),
      },
    );
  },
});
</script>
