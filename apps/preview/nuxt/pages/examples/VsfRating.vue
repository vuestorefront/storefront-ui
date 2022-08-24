<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRating :value="valueModel" :max="maxModel" :size="sizeModel" :reviews="reviewsModel" :type="typeModel" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRating, { VsfRatingTypes, VsfRatingVariants } from '../../output/blocks/VsfRating/VsfRating.vue';
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
          options: Object.keys(VsfRatingVariants),
          propDefaultValue: VsfRatingVariants.base,
          propType: 'VsfRatingVariants',
        },
        {
          title: 'type',
          type: 'select',
          modelName: 'typeModel',
          options: Object.keys(VsfRatingTypes),
          propDefaultValue: VsfRatingTypes.base,
          propType: 'VsfRatingTypes',
        },
      ],
      {
        valueModel: ref(3),
        maxModel: ref(5),
        reviewsModel: ref(0),
        sizeModel: ref(VsfRatingVariants.base),
        typeModel: ref(VsfRatingTypes.base)
      },
    );
  },
});
</script>
