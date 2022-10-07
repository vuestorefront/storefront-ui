<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSlider :has-chevrons="hasChevronsModel" :has-scrollbar="hasScrollbarModel">
        <div v-for="index in 10" :key="index" class="bg-gray-300 w-[148px] h-[148px] flex justify-center items-center">
          {{ index }}
        </div>
      </VsfSlider>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfSlider from '../../output/blocks/VsfSlider/VsfSlider.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfSliderExample',
  components: {
    Controls,
    VsfSlider,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'hasChevrons',
            type: 'boolean',
            modelName: 'hasChevronsModel',
            propDefaultValue: 'true',
            propType: 'boolean',
          },
          {
            title: 'hasScrollbar',
            type: 'boolean',
            modelName: 'hasScrollbarModel',
            propDefaultValue: 'true',
            propType: 'boolean',
          },
        ],
        {
          hasChevronsModel: ref(true),
          hasScrollbarModel: ref(true),
        },
      ),
    };
  },
};
</script>
