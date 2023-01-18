<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfCheckbox v-bind="state" v-model="modelValue" />
    <VsfCheckbox v-bind="state" v-model="modelValue" :label="`${label}-1`" :value="`${value}-1`" />
    <VsfCheckbox v-bind="state" v-model="modelValue" :label="`${label}-2`" :value="`${value}-2`" />
  </ComponentExample>
</template>

<script lang="ts">
import { VsfCheckbox, VsfCheckboxAlignment } from '@storefront-ui/vue/components/VsfCheckbox/index';
import { defineComponent } from 'vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
    ComponentExample,
  },
  setup() {
    return prepareControls(
      [
        {
          type: 'text',
          modelName: 'modelValue',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          type: 'text',
          modelName: 'value',
          propDefaultValue: '',
          propType: 'string',
        },
        {
          type: 'select',
          options: Object.keys(VsfCheckboxAlignment),
          modelName: 'alignment',
          propType: 'VsfCheckboxAlignment',
          propDefaultValue: VsfCheckboxAlignment.leading,
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
        required: ref(),
        disabled: ref(),
        indeterminate: ref(),
        alignment: ref(VsfCheckboxAlignment.leading),
        invalid: ref(),
        label: ref('Label'),
        helpText: ref('Help Text'),
        errorText: ref('Error Message'),
        requiredText: ref('Required'),
        modelValue: ref([]),
      },
    );
  },
});
</script>
