<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup
          :direction="directionModel"
          :required="requiredModel"
          :requiredText="requiredTextModel"
          :errorText="errorTextModel"
          :helpText="helpTextModel"
          :isInvalid="invalidModel"
          :variant="variantModel"
      >
        <VsfRadio
          v-for="radio in radioModel"
          :key="radio.id"
          :id="radio.id"
          :value="radio.value"
          v-model="valueModel"
          :variant="variantModel"
          helpText=""
          :selected="selectedModel"
          :invalid="invalidModel"
          @change="selectedModel = $event.target.value"
        />
      </VsfRadioGroup>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import VsfRadioGroup, { VsfRadioGroupVariants, VsfRadioGroupDirection } from '../../output/blocks/VsfRadioGroup/VsfRadioGroup.vue'
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfRadio, { VsfRadioVariants } from "../../output/blocks/VsfRadio/VsfRadio";

export default {
  name: 'VsfRadioGroupExample',
  components: {
    VsfRadio,
    Controls,
    VsfRadioGroup
  },
  setup() {
    return {
      ...prepareControls([
        {
          title: 'Direction',
          type: 'select',
          modelName: 'directionModel',
          options: Object.keys(VsfRadioGroupDirection),
          propDefaultValue: VsfRadioGroupDirection.vertical,
          propType: 'VsfRadioVariants',
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
          title: 'Required',
          type: 'boolean',
          modelName: 'requiredModel',
          propType: 'boolean',
          propDefaultValue: 'false',
        },
        {
          title: 'Required Text',
          type: 'text',
          modelName: 'requiredTextModel',
          propType: 'string',
          propDefaultValue: '*Required',
        },
        {
          title: 'Error Text',
          type: 'text',
          modelName: 'errorTextModel',
          propType: 'string',
          propDefaultValue: 'Error message',
        },
        {
          title: 'HelpText',
          type: 'text',
          modelName: 'helpTextModel',
          propType: 'string',
          propDefaultValue: 'Help text',
        },
        {
          title: 'Value',
          type: 'text',
          modelName: 'valueModel',
          propType: 'string',
          propDefaultValue: 'string',
          description: "v-model prop",
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
      ], {
        radioModel: ref([
          { id: 'radio-1',  name: VsfRadioGroupVariants.base ? 'radio-group-1' : `radio-${state.useVariantProp}-group-1`, value: 'one'},
          { id: 'radio-2',  name: VsfRadioGroupVariants.base ? 'radio-group-2' : `radio-${state.useVariantProp}-group-2`, value: 'two'},
        ]),
        directionModel: ref(VsfRadioGroupDirection.vertical),
        variantModel: ref(VsfRadioVariants.base),
        requiredModel: ref(false),
        requiredTextModel: ref('*Required'),
        errorTextModel: ref('Error message'),
        helpTextModel: ref('Help text'),
        selectedModel: ref(''),
        valueModel: ref(''),
        invalidModel: ref(false),
      })
    }
  }
};
</script>
