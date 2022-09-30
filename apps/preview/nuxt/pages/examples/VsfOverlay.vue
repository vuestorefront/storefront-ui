<template>
  <div class="e-page">
    <div class="e-page-component relative">
      <VsfOverlay :absolute="absoluteModel" :visible="visibleModel" @click="onClickHandler" />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
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
    return prepareControls(
      [
        {
          title: 'Visible',
          type: 'boolean',
          propType: 'boolean',
          modelName: 'visibleModel',
        },
        {
          title: 'Absolute',
          type: 'boolean',
          propType: 'boolean',
          modelName: 'absoluteModel',
          description:
            'Set `position:absolute` to component (require `position:relative` style attribute in parent component)',
        },
      ],
      {
        visibleModel: ref(false),
        absoluteModel: ref(false),
        onClickHandler() {
          console.log('VsfOverlay clicked!');
        },
      },
    );
  },
});
</script>
