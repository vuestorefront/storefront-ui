<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfCheckbox
        v-model="toggle"
        :label="`${labelModel} [${toggle}]`"
        :disabled="disabledModel"
        :help-text="helpTextModel"
        :error-text="errorTextModel"
        :required-text="requiredTextModel"
        :invalid="invalidModel"
        :indeterminate="indeterminateModel"
        :required="requiredModel"
        :reverse="reverseModel"
      ></VsfCheckbox>
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
          title: 'Reverse',
          type: 'boolean',
          modelName: 'reverseModel',
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
        {
          title: 'RequiredText',
          type: 'text',
          modelName: 'requiredTextModel',
          propType: 'string',
        },
      ],
      {
        valueModel: ref(),
        requiredModel: ref(),
        disabledModel: ref(),
        indeterminateModel: ref(false),
        invalidModel: ref(),
        reverseModel: ref(),
        labelModel: ref('Label'),
        helpTextModel: ref('Help Text'),
        errorTextModel: ref('Error Message'),
        requiredTextModel: ref('*Required'),
        toggle: ref(false),
      },
    );
  },
});
</script>
