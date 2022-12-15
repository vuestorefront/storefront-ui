<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCheckbox
        v-model="checked"
        :label="label"
        :value="value"
        :disabled="disabled"
        :help-text="helpText"
        :error-text="errorText"
        :required-text="requiredText"
        :alignment="alignment"
        :invalid="invalid"
        :indeterminate="indeterminate"
        :required="required"
      ></VsfCheckbox>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { VsfCheckboxAlignments } from '@sfui/sfui/frameworks/vue/components/VsfCheckbox/types';
import VsfCheckbox from '@sfui/sfui/frameworks/vue/components/VsfCheckbox/VsfCheckbox.vue';
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
          type: 'text',
          modelName: 'value',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          type: 'select',
          options: Object.keys(VsfCheckboxAlignments),
          modelName: 'alignment',
          propType: 'VsfCheckboxAlignment',
          propDefaultValue: VsfCheckboxAlignments.leading,
        },
        {
          type: 'boolean',
          modelName: 'required',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'disabled',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'indeterminate',
          propType: 'boolean',
        },
        {
          type: 'boolean',
          modelName: 'invalid',
          propType: 'boolean',
        },
        {
          type: 'text',
          modelName: 'label',
          propType: 'string',
        },
        {
          type: 'text',
          modelName: 'helpText',
          propType: 'string',
        },
        {
          type: 'text',
          modelName: 'errorText',
          propType: 'string',
        },
        {
          type: 'text',
          modelName: 'requiredText',
          propType: 'string',
        },
      ],
      {
        value: ref('value'),
        required: ref(false),
        disabled: ref(false),
        indeterminate: ref(false),
        alignment: ref(VsfCheckboxAlignments.leading),
        invalid: ref(false),
        label: ref('Label'),
        helpText: ref('Help Text'),
        errorText: ref('Error Message'),
        requiredText: ref('Required'),
        checked: ref(false),
      },
    );
  },
});
</script>
