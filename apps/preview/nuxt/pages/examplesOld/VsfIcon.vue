<template>
  <div class="e-page">
    <div class="e-page-component">
      <div>
        Icon imported directly from <br>
        <VsfIconArrowDown :style="{ 'color': colorModel }" :size="sizeModel"/>
      </div>
      <div>
        BaseIcon with imported svg and passed in content prop <br>
        <VsfIconBase :content="AddToBasketIcon" :style="{ 'color': colorModel }" :size="sizeModel"/>
      </div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import VsfIconBase, { VsfIconSize } from '../../output/blocks/VsfIconBase/VsfIconBase.vue';
import VsfIconArrowDown from '../../output/blocks/VsfIcons/VsfIconArrowDown.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfIconExample',
  components: {
    VsfIconBase,
    VsfIconArrowDown,
    Controls
  },
  setup() {
    const AddToBasketIcon = import.meta.glob('../../../../mitosis/assets/add-to-basket.svg', {eager: true, as: 'raw'})
    return {
      VsfIconSize,
      AddToBasketIcon: Object.values(AddToBasketIcon)[0],
      ...prepareControls([
        {
          title: 'size',
          type: 'select',
          modelName: 'sizeModel',
          propDefaultValue: 'VsfIconSize.base',
          propType: 'VsfIconSize',
          options: Object.keys(VsfIconSize)
        },
        {
          title: 'color',
          type: 'select',
          modelName: 'colorModel',
          description: 'Its not a prop just example that by setting color on parent, icons changes its color',
          options: ['black', 'red', 'blue', 'green']
        },
      ], {
        sizeModel: ref(VsfIconSize.base),
        colorModel: ref('black'),
      })
    }
  }
};
</script>
