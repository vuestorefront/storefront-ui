<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup
        :id="id"
        :legend="legend"
        :direction="direction"
        :required="required"
        :helper-text="helperText"
        :required-text="requiredText"
        :error-text="errorText"
      >
        <VsfRadio id="radio-1" name="radio-group-1" label="Radio 1" help-text="Help text" class="mb-2"></VsfRadio>
        <VsfRadio id="radio-2" name="radio-group-2" label="Radio 2"></VsfRadio>
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
  name: 'VsfRadioExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    Controls,
  },
  setup() {
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
            type: 'text',
            modelName: 'helperText',
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
        ],
        {
          id: ref('radio-group-1'),
          legend: ref(''),
          required: ref(false),
          helperText: ref(''),
          requiredText: ref(''),
          errorText: ref(''),
          direction: ref(VsfRadioGroupDirections.vertical),
        },
      ),
    };
  },
});
</script>
