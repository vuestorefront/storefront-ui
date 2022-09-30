<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfOverlay @click="onClickHandler" :absolute="absolute" :visible="visible" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfOverlay from '@sfui/sfui/frameworks/vue/components/VsfOverlay/VsfOverlay.vue';

export default defineComponent({
  name: 'VsfOverlayExample',
  components: {
    VsfOverlay,
    Controls,
  },
  setup() {
    return {
      onClickHandler() {
        console.log('VsfOverlay clicked!');
      },
      ...prepareControls(
        [
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'visible',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'absolute',
            description:
              'Set `position:absolute` to component (require `position:relative` style attribute in parent component)',
          },
        ],
        {
          visible: ref(false),
          absolute: ref(false),
        },
      )
    };
  },
});
</script>
