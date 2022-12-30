<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup
        :legend="legend"
        :direction="direction"
        :required="required"
        :invalid="invalid"
        :help-text="helpText"
        :required-text="requiredText"
        :error-text="errorText"
      >
        <VsfRadio
          v-for="(radio, key) in radioDataModel"
          :key="key"
          v-model="radioGroupModelValue"
          :value="radio.value"
          :name="radio.name"
          :label="radio.label"
          :help-text="radio.helpText"
          :required="required"
          class="mb-4 mr-6"
        />
      </VsfRadioGroup>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfRadio, VsfRadioGroup, VsfRadioGroupDirections } from '@storefront-ui/vue/components/VsfRadio/index';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRadioGroupExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    Controls,
  },
  setup() {
    const radioData = [
      {
        name: 'radio',
        label: 'Radio 1',
        value: 'radio 1',
        helpText: 'Help text',
      },
      {
        name: 'radio',
        label: 'Radio 2',
        value: 'radio 2',
        helpText: '',
      },
    ];
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'legend',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'select',
            options: Object.keys(VsfRadioGroupDirections),
            modelName: 'direction',
            propType: 'VsfRadioGroupDirections',
            propDefaultValue: VsfRadioGroupDirections.vertical,
          },
          {
            type: 'boolean',
            modelName: 'required',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
          {
            type: 'text',
            modelName: 'helpText',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'errorText',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'requiredText',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'json',
            modelName: 'radioDataModel',
            propType: '[]',
            propDefaultValue: '[]',
          },
          {
            type: 'text',
            modelName: 'radioGroupModelValue',
            description: 'whole group modelValue (selected radio)',
          },
        ],
        {
          legend: ref(''),
          required: ref(false),
          invalid: ref(false),
          helpText: ref(''),
          requiredText: ref(''),
          errorText: ref('Error message'),
          direction: ref(VsfRadioGroupDirections.vertical),
          radioDataModel: ref(radioData),
          radioGroupModelValue: ref(''),
        },
      ),
    };
  },
});
</script>
