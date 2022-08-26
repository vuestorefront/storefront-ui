<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfOverlay @click="visibleModel = !visibleModel" :absolute="absoluteModel" :visible="visibleModel"/>
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
          title: 'Visible',
          type: 'boolean',
          propType: "boolean",
          modelName: 'visibleModel',
        },
        {
          title: 'Absolute',
          type: 'boolean',
          propType: "boolean",
          modelName: 'absoluteModel',
          description: "Set `position:absolute` to component"
        },
      ],
      {
        visibleModel: ref(true),
        absoluteModel: ref(true),
      },
    );
  },
});
</script>
