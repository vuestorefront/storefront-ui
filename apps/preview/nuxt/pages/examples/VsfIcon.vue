<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div>
      Icon imported directly from <br />
      <VsfIconArrowDown :style="{ color: colorExample }" :size="size" />
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfIconSize, VsfIconArrowDown } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfIconExample',
  components: {
    VsfIconArrowDown,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls<{ size: VsfIconSize; colorExample: string }>(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfIconSize.base',
            propType: 'VsfIconSize',
            options: Object.keys(VsfIconSize),
          },
          {
            type: 'select',
            modelName: 'colorExample',
            description: 'Its not a prop just example that by setting color on parent, icons changes its color',
            options: ['black', 'red', 'blue', 'green'],
          },
        ],
        {
          size: ref(VsfIconSize.base),
          colorExample: ref('black'),
        },
      ),
    };
  },
};
</script>
