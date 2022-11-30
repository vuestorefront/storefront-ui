<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup
        :id="id"
        v-model="radioGroupModelValue"
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
          :id="radio.id"
          :key="key"
          :name="radio.name"
          :label="radio.label"
          :value="selectedValue"
          :help-text="radio.helpText"
          :required="required"
          class="mb-4 mr-6"
          @change:radio="selectedValue = $event"
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
import VsfRadio from '@sfui/sfui/frameworks/vue/components/VsfRadio/VsfRadio.vue';
import VsfRadioGroup from '@sfui/sfui/frameworks/vue/components/VsfRadio/VsfRadioGroup.vue';
import { VsfRadioGroupDirections } from '@sfui/sfui/frameworks/vue/components/VsfRadio/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRadioGroupExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    Controls,
  },
  setup() {
    const radioGroupModelValue = '';
    const radioData = [
      {
        id: 'radio-1',
        name: 'radio',
        label: 'Radio 1',
        value: 'radio 1',
        helpText: 'Help text',
      },
      {
        id: 'radio-2',
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
            modelName: 'id',
            propType: 'string',
            isRequired: true,
          },
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
        ],
        {
          id: ref('radio-group-1'),
          legend: ref(''),
          required: ref(false),
          invalid: ref(false),
          helpText: ref(''),
          requiredText: ref(''),
          errorText: ref('Error message'),
          direction: ref(VsfRadioGroupDirections.vertical),
          radioDataModel: ref(radioData),
          selectedValue: ref(''),
          radioGroupModelValue: ref(radioGroupModelValue),
        },
      ),
    };
  },
});
</script>
