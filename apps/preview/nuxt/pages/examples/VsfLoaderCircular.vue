<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLoaderCircular class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script>
import { ref } from 'vue';
import VsfLoaderCircular from '@storefront-ui/vue/components/VsfLoaderCircular/VsfLoaderCircular.vue';
import { VsfLoaderSizes } from '@storefront-ui/shared/types';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfLoaderCircularExample',
  components: {
    ComponentExample,
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
