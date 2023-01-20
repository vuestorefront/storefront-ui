<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfProgressCircular
      :size="size"
      :value="Number(value)"
      :with-value="withValue"
      aria-label="Progressbar"
      :svg-aria-label="svgAriaLabel"
    />
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfProgressCircular, VsfProgressCircularSize } from '@storefront-ui/vue/components/VsfProgressCircular/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'VsfProgressCircularExample',
  components: {
    ComponentExample,
    VsfProgressCircular,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfProgressCircularSize),
            propDefaultValue: VsfProgressCircularSize.base,
            propType: 'string',
            description:
              'This prop is responsible for progress size. There are 8 sizes: xs, sm, base, lg, xl, 2xl, 3xl, 4xl',
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
            description: 'This prop is responsible for hiding/showing percentage value of progress',
          },
          {
            type: 'text',
            propType: 'string',
            propDefaultValue: 'Progress',
            modelName: 'svgAriaLabel',
            description: 'Aria label value for svg element',
          },
        ],
        {
          value: ref(0),
          size: ref(VsfProgressCircularSize.base),
          withValue: ref(true),
          svgAriaLabel: ref('Progress'),
        },
      ),
    };
  },
};
</script>
