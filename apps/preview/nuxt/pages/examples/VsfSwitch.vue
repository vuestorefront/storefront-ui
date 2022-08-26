<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSwitch
        v-model="toggle"
        :name="nameModel"
        :label="labelModel"
        :disabled="disabledModel"
        :helpText="helpTextModel"
        :errorText="errorTextModel"
        :invalid="invalidModel"
        :required="requiredModel"
        :rightCheckbox="rightCheckboxModel"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import VsfSwitch from '../../output/blocks/VsfSwitch/VsfSwitch.vue';
import { defineComponent } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfSwitchExample',
  components: {
    VsfSwitch,
    Controls,
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
        labelModel: ref('Label'),
        helpTextModel: ref('help'),
        errorTextModel: ref('error'),
        toggle: ref(),
      },
    );
  },
});
</script>
