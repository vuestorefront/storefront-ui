<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfOverlay @click="show = !show" v-show="show" :absolute="absoluteModel"/>
      <button
        @click="show = !show"
        class="p-4 font-semibold text-sm bg-primary-600 text-white rounded-none shadow-sm uppercase"
      >
        Toggle overlay
      </button>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfOverlay from '../../output/blocks/VsfOverlay/VsfOverlay.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfOverlayExample',
  components: {
    VsfOverlay,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Absolute',
          type: 'boolean',
          propType: "boolean",
          modelName: 'absoluteModel',
          description: "Set `position:absolute` to component"
        },
      ],
      {
        absoluteModel: ref(),
        show: ref(false),
      },
    );
  },
});
</script>
