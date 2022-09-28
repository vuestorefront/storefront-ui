<template>
  <div class="e-page">
    <div class="e-page-component">
      <div>
        Icon imported directly from <br />
        <VsfIconArrowDown :style="{ color: colorModel }" :size="sizeModel" />
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/vue/components/VsfIcons/types';
import VsfIconArrowDown from '@sfui/sfui/frameworks/vue/components/VsfIcons/VsfIconArrowDown';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfIconExample',
  components: {
    VsfIconArrowDown,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'size',
            type: 'select',
            modelName: 'sizeModel',
            propDefaultValue: 'VsfIconSize.base',
            propType: 'VsfIconSize',
            options: Object.keys(VsfIconSizeEnum),
          },
          {
            title: 'color',
            type: 'select',
            modelName: 'colorModel',
            description: 'Its not a prop just example that by setting color on parent, icons changes its color',
            options: ['black', 'red', 'blue', 'green'],
          },
        ],
        {
          sizeModel: ref(VsfIconSizeEnum.base),
          colorModel: ref('black'),
        },
      ),
    };
  },
};
</script>
