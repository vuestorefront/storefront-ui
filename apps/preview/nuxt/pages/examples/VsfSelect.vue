<template>
  <div class="e-page">
    <div class="relative e-page-component">
      <VsfSelect
        v-model="value"
        :options="options"
        :disabled="disabled"
        :placeholder="placeholder"
        :error-text="errorText"
        :help-text="helpText"
        :required="required"
        :invalid="invalid"
        :label="label"
        :required-text="requiredText"
        :size="size"
      />
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';
import VsfSelect from '@sfui/sfui/frameworks/vue/components/VsfSelect/VsfSelect.vue';
import { VsfSelectSizes } from '@sfui/sfui/frameworks/vue/components/VsfSelect/types';

export default defineComponent({
  name: 'VsfSelectExample',
  components: {
    VsfSelect,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'json',
            propType: 'array',
            modelName: 'options',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'value',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'placeholder',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabled',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'required',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'invalid',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'helpText',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'errorText',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'label',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'requiredText',
          },
          {
            type: 'select',
            modelName: 'size',
            options: Object.keys(VsfSelectSizes),
          },
        ],
        {
          options: ref(['red', 'blue', 'yellow', 'green', 'gray', 'black', 'brown']),
          value: ref(''),
          placeholder: ref('--Select--'),
          disabled: ref(false),
          required: ref(false),
          invalid: ref(false),
          helpText: ref('Help text'),
          errorText: ref('Error text'),
          requiredText: ref('*Required'),
          label: ref('Label'),
          size: ref(VsfSelectSizes.base),
        },
      ),
    };
  },
});
</script>
