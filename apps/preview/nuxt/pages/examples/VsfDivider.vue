<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfDivider />
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VsfDivider from '@storefront-ui/vue/components/VsfDivider/VsfDivider.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfDividerExample',
  components: {
    VsfDivider,
    ComponentExample,
  },
  setup() {
    return prepareControls([], {});
  },
});
</script>
