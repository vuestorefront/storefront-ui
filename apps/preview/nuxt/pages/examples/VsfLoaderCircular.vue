<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfLoaderCircular class="w-10" :size="size" :screen-reader-text="screenReaderText" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfLoaderCircular from '@sfui/sfui/frameworks/vue/components/VsfLoaderCircular/VsfLoaderCircular.vue';
import { VsfLoaderSizes } from '@sfui/shared/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfLoaderCircularExample',
  components: {
    Controls,
    VsfLoaderCircular,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propType: 'VsfLoaderSizes',
            options: [...Object.keys(VsfLoaderSizes)],
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
          size: ref(VsfLoaderSizes.lg),
          screenReaderText: ref('loading'),
        },
      ),
    };
  },
};
</script>
