<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSheet>
        {{ defaultSlot }}
      </VsfSheet>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfSheet from '../../output/blocks/VsfSheet/VsfSheet.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfSheetExample',
  components: {
    Controls,
    VsfSheet,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'defaultSlot',
          type: 'text',
          modelName: 'defaultSlot',
          description: 'Default slot',
          propDefaultValue: false,
          propType: 'string',
        },
      ],
      {
        defaultSlot: ref(),
      },
    );
  },
};
</script>
