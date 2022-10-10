<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfSelect
        v-model="selected"
        :value="valueModel"
        :invalid="invalidModel"
        :disabled="disabledModel"
        :required="requiredModel"
        :options="optionsModel"
        :label="labelModel"
        :placeholder-text="placeholderTextModel"
        :required-text="requiredTextModel"
        :help-text="helpTextModel"
        :error-text="errorTextModel"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VsfSelect from '../../output/blocks/VsfSelect/VsfSelect.vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfSelectExample',
  components: {
    VsfSelect,
    Controls,
  },
  setup() {
    return prepareControls(
      [
        {
          title: 'Name',
          type: 'text',
          modelName: 'textModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Value',
          type: 'text',
          modelName: 'valueModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Label',
          type: 'text',
          modelName: 'labelModel',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          title: 'Options',
          type: 'json',
          modelName: 'optionsModel',
          propDefaultValue: '[]',
          propType: 'VsfSelectOption[] ',
        },
        {
          title: 'Breadcrumbs',
          type: 'json',
          modelName: 'breadcrumbsModel',
          propType: 'VsfBreadcrumbType[]',
          propDefaultValue: '[]',
        },
        {
          title: 'Required',
          type: 'boolean',
          modelName: 'requiredModel',
          propDefaultValue: false,
        },
        {
          title: 'Disabled',
          type: 'boolean',
          modelName: 'disabledModel',
          propDefaultValue: false,
        },
        {
          title: 'Invalid',
          type: 'boolean',
          modelName: 'invalidModel',
          propDefaultValue: false,
        },
        {
          title: 'Placeholder text',
          type: 'text',
          modelName: 'placeholderTextModel',
          propDefaultValue: '--Please choose an option--',
        },
        {
          title: 'Required text',
          type: 'text',
          modelName: 'requiredTextModel',
          propDefaultValue: '*Required',
        },
        {
          title: 'Help text',
          type: 'text',
          modelName: 'helpTextModel',
          propDefaultValue: 'Help text',
        },
        {
          title: 'Error text',
          type: 'text',
          modelName: 'errorTextModel',
          propDefaultValue: 'Error text',
        },
      ],
      {
        selected: ref(''),
        valueModel: ref(''),
        labelModel: ref('Select your favorite fruit'),
        requiredModel: ref(false),
        invalidModel: ref(false),
        disabledModel: ref(false),
        optionsModel: ref([
          {
            label: 'Apple',
            value: 'apple',
          },
          {
            label: 'Banana',
            value: 'banana',
          },
          {
            label: 'Grapes',
            value: 'grapes',
          },
        ]),
        placeholderTextModel: ref('--Please choose an option--'),
        requiredTextModel: ref('*Required'),
        helpTextModel: ref(''),
        errorTextModel: ref(''),
      },
    );
  },
});
</script>
