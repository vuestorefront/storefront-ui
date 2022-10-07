<template>
  <div class="e-page">
    <div class="e-page-component">
      <div>
        Icon imported directly from <br />
        <VsfIconArrowDown :style="{ color: colorExample }" :size="size" />
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/vue/components/VsfIcons/types';
import VsfIconArrowDown from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconArrowDown.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfIconExample',
  components: {
    VsfIconArrowDown,
    Controls,
  },
  setup() {
    return {
      ...prepareControls<{ size: VsfIconSizeEnum; colorExample: string }>(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfIconSize.base',
            propType: 'VsfIconSize',
            options: Object.keys(VsfIconSizeEnum),
          },
          {
            type: 'select',
            modelName: 'colorExample',
            description: 'Its not a prop just example that by setting color on parent, icons changes its color',
            options: ['black', 'red', 'blue', 'green'],
          },
        ],
        {
          size: ref(VsfIconSizeEnum.base),
          colorExample: ref('black'),
        },
      ),
    };
  },
};
</script>
