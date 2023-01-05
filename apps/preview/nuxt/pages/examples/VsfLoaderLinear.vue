<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLoaderLinear class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import VsfLoaderLinear from '@storefront-ui/vue/components/VsfLoaderLinear/VsfLoaderLinear.vue';
import { VsfLoaderSizes } from '@storefront-ui/shared/types';
import { VsfLoaderLinearSize } from '@storefront-ui/vue/components/VsfLoaderLinear/types';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfLoaderLinearExample',
  components: {
    ComponentExample,
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
            propDefaultValue: VsfLoaderLinearSize.minimal,
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
          size: ref(VsfLoaderLinearSize.minimal),
          screenReaderText: ref('loading'),
        },
      ),
    };
  },
};
</script>
