<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfSwitch
      v-model="toggle"
      :name="nameModel"
      :label="labelModel"
      :disabled="disabledModel"
      :help-text="helpTextModel"
      :error-text="errorTextModel"
      :invalid="invalidModel"
      :required="requiredModel"
      :right-checkbox="rightCheckboxModel"
      :size="sizeModel"
    />
  </ComponentExample>
</template>

<script>
import { defineComponent } from 'vue';
import VsfSwitch, { VsfSwitchVariants } from '../../output/blocks/VsfSwitch/VsfSwitch.vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfSwitchExample',
  components: {
    VsfSwitch,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Name',
          type: 'text',
          modelName: 'nameModel',
          propDefaultValue: '',
          propType: 'string',
          isRequired: true,
        },
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
          options: Object.keys(VsfSwitchVariants),
          propDefaultValue: VsfSwitchVariants.base,
          propType: 'VsfSwitchVariants',
        },
        {
          title: 'Required',
          type: 'boolean',
          modelName: 'requiredModel',
          propType: 'boolean',
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propType: 'boolean',
        },
        {
          title: 'Invalid',
          type: 'boolean',
          modelName: 'invalidModel',
          propType: 'boolean',
        },
        {
          title: 'RightCheckbox',
          type: 'boolean',
          modelName: 'rightCheckboxModel',
          propType: 'boolean',
        },
        {
          title: 'Label',
          type: 'text',
          modelName: 'labelModel',
          propType: 'string',
        },
        {
          title: 'HelpText',
          type: 'text',
          modelName: 'helpTextModel',
          propType: 'string',
        },
        {
          title: 'ErrorText',
          type: 'text',
          modelName: 'errorTextModel',
          propType: 'string',
        },
      ],
      {
        nameModel: ref('name-1'),
        valueModel: ref(),
        requiredModel: ref(),
        disabledModel: ref(),
        invalidModel: ref(),
        rightCheckboxModel: ref(),
        sizeModel: ref(),
        labelModel: ref('Label'),
        helpTextModel: ref('help'),
        errorTextModel: ref('error'),
        toggle: ref(),
      },
    );
  },
});
</script>
