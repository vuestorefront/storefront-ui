<template>
  <div class="e-page">
    <div class="e-page-component">
      <p>Single Checkbox</p>
      <VsfCheckbox
        v-model="toggle"
        :name="nameModel"
        :label="labelModel"
        :disabled="disabledModel"
        :helpText="helpTextModel"
        :errorText="errorTextModel"
        :invalid="invalidModel"
        :indeterminate="indeterminateModel"
        :required="requiredModel"
        :rightCheckbox="rightCheckboxModel"
      ></VsfCheckbox>
      <div>Toggled: {{ toggle }}</div>
      <br />
      <p>Multiple Checkboxes</p>
      <VsfCheckbox
        v-model="checked"
        name="jack"
        label="Jack"
        value="Jack"
        :disabled="disabledModel"
        :helpText="helpTextModel"
        :errorText="errorTextModel"
        :invalid="invalidModel"
        :indeterminate="indeterminateModel"
        :required="requiredModel"
        :rightCheckbox="rightCheckboxModel"
      />
      <VsfCheckbox
        v-model="checked"
        name="mike"
        label="Mike"
        value="Mike"
        :disabled="disabledModel"
        :helpText="helpTextModel"
        :errorText="errorTextModel"
        :invalid="invalidModel"
        :indeterminate="indeterminateModel"
        :required="requiredModel"
        :rightCheckbox="rightCheckboxModel"
      />
      <div>Checked: {{ checked }}</div>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import VsfCheckbox from '../../output/blocks/VsfCheckbox/VsfCheckbox.vue';
import { defineComponent } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
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
          title: 'Indeterminate',
          type: 'boolean',
          modelName: 'indeterminateModel',
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
        nameModel: ref('checkbox-1'),
        valueModel: ref(),
        requiredModel: ref(),
        disabledModel: ref(),
        indeterminateModel: ref(),
        invalidModel: ref(),
        rightCheckboxModel: ref(),
        labelModel: ref('Label'),
        helpTextModel: ref('help'),
        errorTextModel: ref('error'),
        toggle: ref(),
        checked: ref(['Mike']),
      },
    );
  },
});
</script>
