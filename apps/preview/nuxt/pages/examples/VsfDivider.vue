<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfDivider />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VsfDivider from '@sfui/sfui/frameworks/vue/components/VsfDivider/VsfDivider.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfDividerExample',
  components: {
    VsfDivider,
    Controls,
  },
  setup() {
    return prepareControls([], {});
  },
});
</script>
