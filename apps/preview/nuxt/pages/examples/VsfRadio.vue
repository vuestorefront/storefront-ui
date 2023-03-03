<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <label
      v-for="{ name, value, label } in radioOptions"
      :key="value"
      :class="[
        'flex items-center mb-4 cursor-pointer',
        {
          'text-disabled-900 cursor-not-allowed': disabled,
        },
      ]"
    >
      <VsfRadio v-model="modelValue" :disabled="disabled" :invalid="invalid" :value="value" :name="name" />
      <span class="ml-2 text-base font-normal leading-6 font-body">{{ label }}</span>
    </label>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { VsfRadio } from '@storefront-ui/vue/components/VsfRadio/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfRadioExample',
  components: {
    VsfRadio,
    ComponentExample,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'text',
            modelName: 'modelValue',
            propType: 'string',
            propDefaultValue: '',
            description: 'Selected value',
          },
          {
            type: 'json',
            propType: 'array',
            modelName: 'radioOptions',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
        ],
        {
          id: ref('radio-1'),
          name: ref('radio'),
          value: ref('radio-1'),
          disabled: ref(),
          invalid: ref(),
          modelValue: ref(''),
          radioOptions: ref([
            {
              label: 'Label',
              value: 'value-1',
              name: 'radio',
            },
            {
              label: 'Label 2',
              value: 'value-2',
              name: 'radio',
            },
          ]),
        },
      ),
    };
  },
});
</script>
