<template>
  <div class="e-page">
    <div class="e-page-component">
      <VsfRadioGroup id="radiogroup1" v-model="radioGroupModelValue">
        <VsfRadio
          :id="id"
          :name="name"
          :label="label"
          :value="value"
          :alignment="alignment"
          :help-text="helpText"
          :disabled="disabled"
          :required="required"
          @change:radio="radioGroupModelValue = $event"
        ></VsfRadio>
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
import { VsfRadioAlignments } from '@sfui/sfui/frameworks/vue/components/VsfRadio/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfRadioExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    Controls,
  },
  setup() {
    const radioGroupModelValue = '';
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
            modelName: 'name',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'label',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'text',
            modelName: 'value',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'select',
            options: Object.keys(VsfRadioAlignments),
            modelName: 'alignment',
            propType: 'VsfRadioAlignment',
            propDefaultValue: VsfRadioAlignments.leading,
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'required',
            propType: 'boolean',
          },
          {
            type: 'text',
            modelName: 'helpText',
            propType: 'string',
            propDefaultValue: '',
          },
        ],
        {
          id: ref('radio-1'),
          name: ref('radio'),
          label: ref('Radio 1'),
          value: ref('radio 1'),
          alignment: ref(VsfRadioAlignments.leading),
          disabled: ref(false),
          required: ref(false),
          helpText: ref('Help text'),
          radioGroupModelValue: ref(radioGroupModelValue),
        },
      ),
    };
  },
});
</script>
