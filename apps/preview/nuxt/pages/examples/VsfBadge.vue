<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <div class="bg-white inline-flex gap-4 items-end p-4">
        <VsfBadge :bordered="bordered" :dot="dot" :invisible="invisible" :value="value">
          <VsfButton>unstyled</VsfButton>
        </VsfBadge>
        <VsfBadge
          :bordered="bordered"
          :dot="dot"
          :invisible="invisible"
          :value="value"
          class="text-white bg-secondary-600"
        >
          <VsfIconBasket />
        </VsfBadge>
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfBadge from '@storefront-ui/vue/components/VsfBadge/VsfBadge.vue';
import VsfButton from '@storefront-ui/vue/components/VsfButton/VsfButton.vue';
import { VsfIconBasket } from '@storefront-ui/vue/components/VsfIcons/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfBadgeExample',
  components: {
    Controls,
    VsfBadge,
    VsfButton,
    VsfIconBasket,
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
