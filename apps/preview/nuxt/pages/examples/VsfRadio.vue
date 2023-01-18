<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfRadioGroup id="radiogroup1" v-model="radioGroupModelValue">
      <VsfRadio v-bind="state" v-model="modelValue" />
    </VsfRadioGroup>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfRadio, VsfRadioGroup, VsfRadioAlignment } from '@storefront-ui/vue/components/VsfRadio/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfRadioExample',
  components: {
    VsfRadio,
    VsfRadioGroup,
    ComponentExample,
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
            modelName: 'modelValue',
            propType: 'string',
            propDefaultValue: '',
            description: 'Selected value',
          },
          {
            type: 'text',
            modelName: 'value',
            propType: 'string',
            propDefaultValue: '',
          },
          {
            type: 'select',
            options: Object.keys(VsfRadioAlignment),
            modelName: 'alignment',
            propType: 'VsfRadioAlignment',
            propDefaultValue: VsfRadioAlignment.leading,
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
          alignment: ref(VsfRadioAlignment.leading),
          disabled: ref(false),
          required: ref(false),
          helpText: ref('Help text'),
          modelValue: ref(''),
          radioGroupModelValue: ref(radioGroupModelValue),
        },
      ),
    };
  },
});
</script>
