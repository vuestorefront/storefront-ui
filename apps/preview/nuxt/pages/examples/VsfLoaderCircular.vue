<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfLoaderCircular class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import VsfLoaderCircular from '@storefront-ui/vue/components/VsfLoaderCircular/VsfLoaderCircular.vue';
import { VsfLoaderSize } from '@storefront-ui/shared';
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
            propType: 'VsfLoaderSize',
            options: [...Object.keys(VsfLoaderSize)],
            description: 'sets sizes of components',
          },
          {
            type: 'text',
            modelName: 'ariaLabel',
            propType: 'string',
            propDefaultValue: 'loading',
            description: 'sets text available for screen readers',
          },
        ],
        {
          size: ref(VsfLoaderSize.lg),
          ariaLabel: ref('loading'),
        },
      ),
    };
  },
};
</script>
