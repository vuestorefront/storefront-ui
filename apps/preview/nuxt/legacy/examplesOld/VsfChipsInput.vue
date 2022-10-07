<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsInput :label="labelModel" :size="sizeModel" :disabled="disabledModel" @close="handleChipClose">
        <template #prefix>
          <VsfIconDot class="vsf-icon-full text-gray-500" />
        </template>
      </VsfChipsInput>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfChipsInput, { VsfChipsInputVariants } from '../../output/blocks/VsfChipsInput/VsfChipsInput.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.vue';

export default defineComponent({
  name: 'Chipsinput',
  components: {
    VsfChipsInput,
    Controls,
    VsfIconDot,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Label',
          type: 'text',
          modelName: 'labelModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfChipsInputVariants),
          propDefaultValue: VsfChipsInputVariants.base,
          propType: 'VsfChipsInputVariants',
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propDefaultValue: 'false',
          propType: 'boolean',
        },
      ],
      {
        sizeModel: ref(VsfChipsInputVariants.base),
        labelModel: ref('Label'),
        disabledModel: ref(),
        handleChipClose() {
          console.log('VsfChipsInput Clicked');
        },
      },
    );
  },
});
</script>
