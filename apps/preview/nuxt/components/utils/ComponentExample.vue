<template>
  <div class="e-page">
    <div class="e-page-component" :class="componentContainerClassName">
      <slot />
    </div>
    <Controls v-bind="controlsAttrs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Controls, { prepareControls } from './Controls.vue';

export default defineComponent({
  name: 'ComponentExample',
  components: {
    Controls,
  },
  props: {
    controlsAttrs: {
      type: Object as PropType<ReturnType<typeof prepareControls>['controlsAttrs']>,
      required: true,
    },
    componentContainerClassName: {
      type: String,
      default: '',
    },
  },
});
</script>
