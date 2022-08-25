<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfChipsInput :value="valueModel" :size="sizeModel" :disabled="disabledModel" @close="handleChipClose">
        <template #icon>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-gray-500">
            <path
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            ></path>
          </svg>
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

export default defineComponent({
  name: 'Chipsinput',
  components: {
    VsfChipsInput,
    Controls,
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
