<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsInput :value="valueModel" :size="sizeModel" :disabled="disabledModel" @close="handleChipClose">
        <template #prefix>
          <VsfIconDot class="vsf-icon-full"/>
        </template>
      </VsfChipsInput>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
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
          title: 'Value',
          type: 'text',
          modelName: 'valueModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Size',
          type: 'select',
          modelName: 'sizeModel',
          options: Object.keys(VsfChipsInputVariants),
          propDefaultValue: VsfChipsInputVariants.medium,
          propType: 'VsfChipsInputVariants',
        },
        {
          title: 'Disabled',
          type: 'checkbox',
          modelName: 'disabledModel',
          propDefaultValue: 'false',
          propType: 'boolean',
        },
      ],
      {
        sizeModel: ref(),
        valueModel: ref('Label'),
        disabledModel: ref(),
        handleChipClose() {
          console.log('VsfChipsInput Clicked');
        },
      },
    );
  },
});
</script>
