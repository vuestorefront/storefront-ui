<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfLoaderCircular class="w-10" v-bind="state" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { SfLoaderCircular, SfLoaderSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfLoaderCircularExample',
  components: {
    ComponentExample,
    SfLoaderCircular,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propType: 'SfLoaderSize',
            options: [...Object.keys(SfLoaderSize)],
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
          size: ref(SfLoaderSize.lg),
          ariaLabel: ref('loading'),
        },
      ),
    };
  },
};
</script>
