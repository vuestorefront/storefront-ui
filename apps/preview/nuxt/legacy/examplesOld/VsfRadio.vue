<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadio
        :id="idModel"
        v-model="valueModel"
        :variant="variantModel"
        :name="nameModel"
        value="value"
        :disabled="disabledModel"
        :selected="selectedModel"
        :invalid="invalidModel"
        :label="labelModel"
        :alignment="alignmentModel"
        :size="sizeModel"
        :help-text="helpTextModel"
        @change="selectedModel = $event.target.value"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfRadio, { VsfRadioVariants, VsfRadioAlignment, VsfRadioSize } from '../../output/blocks/VsfRadio/VsfRadio.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default {
  name: 'VsfRadioExample',
  components: {
    Controls,
    VsfRadio,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            title: 'Id',
            type: 'text',
            modelName: 'idModel',
            propType: 'string',
            isRequired: true,
          },
          {
            title: 'Variant',
            type: 'select',
            modelName: 'variantModel',
            options: Object.keys(VsfRadioVariants),
            propDefaultValue: VsfRadioVariants.base,
            propType: 'VsfRadioVariants',
          },
          {
            title: 'Alignment',
            type: 'select',
            modelName: 'alignmentModel',
            options: Object.keys(VsfRadioAlignment),
            propDefaultValue: VsfRadioAlignment.left,
            propType: 'VsfRadioAlignment',
          },
          {
            title: 'Size',
            type: 'select',
            modelName: 'sizeModel',
            options: Object.keys(VsfRadioSize),
            propDefaultValue: VsfRadioSize.base,
            propType: 'VsfRadioSize',
          },
          {
            title: 'Name',
            type: 'text',
            modelName: 'nameModel',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            title: 'Value',
            type: 'text',
            modelName: 'valueModel',
            propType: 'string',
            propDefaultValue: 'string',
            description: 'v-model prop',
          },
          {
            title: 'Disabled',
            type: 'boolean',
            modelName: 'disabledModel',
            propType: 'boolean',
            propDefaultValue: 'false',
          },
          {
            title: 'Selected',
            type: 'text',
            modelName: 'selectedModel',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            title: 'Invalid',
            type: 'boolean',
            modelName: 'invalidModel',
            propType: 'boolean',
            propDefaultValue: 'false',
          },
          {
            title: 'Label',
            type: 'text',
            modelName: 'labelModel',
            propType: 'string',
            propDefaultValue: 'Label',
          },
          {
            title: 'HelpText',
            type: 'text',
            modelName: 'helpTextModel',
            propType: 'string',
            propDefaultValue: 'Help text',
          },
        ],
        {
          idModel: ref('radio'),
          variantModel: ref(VsfRadioVariants.base),
          alignmentModel: ref(VsfRadioAlignment.left),
          nameModel: ref(''),
          valueModel: ref(''),
          disabledModel: ref(false),
          requiredModel: ref(false),
          selectedModel: ref(''),
          invalidModel: ref(false),
          labelModel: ref('Label'),
          sizeModel: ref(VsfRadioSize.base),
          helpTextModel: ref('Help text'),
        },
      ),
    };
  },
};
</script>
