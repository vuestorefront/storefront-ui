<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfProgressLinear :size="size" :value="Number(value)" :with-value="withValue" />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfProgressLinear, VsfProgressLinearSizes } from '@storefront-ui/vue/components/VsfProgressLinear/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfProgressLinearExample',
  components: {
    ComponentExample,
    VsfProgressLinear,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfProgressLinearSizes),
            propDefaultValue: VsfProgressLinearSizes.base,
            propType: 'string',
            description:
              'This prop is responsible for progress size. There are 9 sizes: minimal, xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
          },
          {
            type: 'range',
            modelName: 'value',
            propDefaultValue: 0,
            propType: 'number',
            description: 'Progress value',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            propDefaultValue: true,
            modelName: 'withValue',
            description:
              "This prop is responsible for hiding/showing percentage value of progress. Size minimal doesn't have percentage value so changing this prop won't affect the component",
          },
        ],
        {
          value: ref(0),
          size: ref(VsfProgressLinearSizes.base),
          withValue: ref(true),
        },
      ),
    };
  },
};
</script>
