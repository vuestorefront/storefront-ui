<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRatingButton
        v-model="valueModel"
        :max="maxModel"
        :size="sizeModel"
        :disabled="disabledModel"
        :name="nameModel"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfRatingButton, { VsfRatingButtonVariants } from '../../output/blocks/VsfRatingButton/VsfRatingButton.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRatingButtonExample',
  components: {
    VsfRatingButton,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'size',
          type: 'select',
          modelName: 'sizeModel',
          propDefaultValue: VsfRatingButtonVariants.base,
          options: Object.keys(VsfRatingButtonVariants),
          propType: 'VsfRatingButtonVariants',
        },
        {
          title: 'max',
          type: 'range',
          modelName: 'maxModel',
          propDefaultValue: 5,
          propType: 'Number',
          options: [
            {
              bind: {
                min: 3,
                max: 10,
              },
            },
          ],
        },
        {
          title: 'disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propType: 'Boolean',
          propDefaultValue: false,
        },
        {
          title: 'Name',
          type: 'text',
          modelName: 'nameModel',
          propType: 'string',
        },
        {
          title: 'Value',
          type: 'range',
          modelName: 'valueModel',
          propDefaultValue: 0,
          propType: 'Number',
          description: 'v-model prop',
          options: [
            {
              bind: {
                min: 0,
                max: 10,
              },
            },
          ],
        },
      ],
      {
        sizeModel: ref(VsfRatingButtonVariants.base),
        maxModel: ref(5),
        disabledModel: ref(),
        valueModel: ref(3),
        nameModel: ref(''),
      },
    );
  },
});
</script>
