<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge v-bind="state" :max="Number(state.max)" />
    </SfButton>
  </ComponentExample>
</template>

<script lang="ts">
import { ref } from 'vue';
import { SfBadge, SfBadgePlacement, SfBadgeVariant, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfBadgeExample',
  components: {
    ComponentExample,
    SfBadge,
    SfButton,
    SfIconShoppingCart,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'content',
            description: 'Content to display in the badge.',
            propType: 'string | number',
          },
          {
            type: 'text',
            modelName: 'max',
            description: 'Maximum number of counter to show.',
            propType: 'number',
            propDefaultValue: '99',
          },
          {
            type: 'select',
            modelName: 'variant',
            description: 'Badge can have content or be a simple dot.',
            options: Object.values(SfBadgeVariant),
            propType: 'SfBadgeVariant',
            propDefaultValue: 'standard',
          },
          {
            type: 'select',
            modelName: 'placement',
            description: 'Position of the badge relatively to a container.',
            options: Object.values(SfBadgePlacement),
            propType: 'SfBadgePlacement',
            propDefaultValue: 'top-right',
          },
        ],
        {
          content: ref('1'),
          max: ref(99),
          variant: ref(SfBadgeVariant.standard),
          placement: ref(SfBadgePlacement['top-right']),
        },
      ),
    };
  },
};
</script>
