<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfChipsInput :label="labelModel" :size="sizeModel" :disabled="disabledModel" @close="handleChipClose">
      <template #prefix>
        <VsfIconDot class="vsf-icon-full text-gray-500" />
      </template>
    </VsfChipsInput>
  </ComponentExample>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfChipsInput, { VsfChipsInputVariants } from '../../output/blocks/VsfChipsInput/VsfChipsInput.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';
import VsfIconDot from '../../output/blocks/VsfIcons/VsfIconDot.vue';

export default defineComponent({
  name: 'Chipsinput',
  components: {
    VsfChipsInput,
    ComponentExample,
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
