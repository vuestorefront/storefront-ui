<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="relative inline-flex items-end gap-4 p-4 bg-white">
      <VsfBadge v-bind="state">
        <VsfButton>unstyled</VsfButton>
      </VsfBadge>
      <VsfBadge v-bind="state" class="text-white bg-secondary-600">
        <VsfIconShoppingCart />
      </VsfBadge>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfBadge from '@storefront-ui/vue/components/VsfBadge/VsfBadge.vue';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { VsfIconShoppingCart } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfBadgeExample',
  components: {
    ComponentExample,
    VsfBadge,
    VsfButton,
    VsfIconShoppingCart,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'bordered',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'dot',
        },
        {
          type: 'boolean',
          propType: 'boolean',
          modelName: 'invisible',
        },
        {
          type: 'text',
          propType: 'string',
          modelName: 'value',
        },
      ],
      {
        bordered: ref(false),
        dot: ref(false),
        invisible: ref(false),
        value: ref(''),
      },
    );
  },
});
</script>
