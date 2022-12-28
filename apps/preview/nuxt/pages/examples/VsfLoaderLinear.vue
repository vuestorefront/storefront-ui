<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfLoaderLinear class="w-10" :size="size" :screen-reader-text="screenReaderText" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfLoaderLinear from '@sfui/sfui/frameworks/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue';
import { VsfLoaderSizes } from '@sfui/shared/types';
import { VsfLoaderLinearSize } from '@sfui/sfui/frameworks/vue/components/VsfLoaderLinear/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfLoaderLinearExample',
  components: {
    Controls,
    VsfLoaderLinear,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propType: 'VsfLoaderSizes',
            options: [...Object.keys(VsfLoaderLinearSize), ...Object.keys(VsfLoaderSizes)],
            propDefaultValue: VsfLoaderLinearSize['2xs'],
            description: 'sets sizes of components',
          },
          {
            type: 'text',
            modelName: 'screenReaderText',
            propType: 'string',
            propDefaultValue: 'loading',
            description: 'sets hidden text available for screen readers',
          },
        ],
        {
          size: ref(VsfLoaderLinearSize['2xs']),
          screenReaderText: ref('loading'),
        },
      ),
    };
  },
};
</script>
