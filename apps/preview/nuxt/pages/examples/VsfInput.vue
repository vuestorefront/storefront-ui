<template>
  <div class="e-page">
    <div class="e-page-component max-w-lg">
      <VsfInput
        v-model="value"
        :size="size"
        :label="label"
        :placeholder="placeholder"
        :help-text="helpText"
        :error-message="errorMessage"
        :required-text="requiredText"
        :disabled="disabled"
        :invalid="invalid"
        :required="required"
        :character-limit="characterLimit"
        :readonly="state.readonly"
      >
        <template #prefix> {{ slotPrefix }} </template>
        <template #suffix> {{ slotSuffix }} </template>
      </VsfInput>
    </div>
    <div class="e-page-controls">
      <Controls v-bind="controlsAttrs" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VsfInput from '@storefront-ui/vue/components/VsfInput/VsfInput.vue';
import { VsfInputSizes } from '@storefront-ui/vue/components/VsfInput/types';
import Controls, { prepareControls } from '../../components/utils/Controls.vue';

export default defineComponent({
  name: 'VsfSelectExample',
  components: {
    VsfInput,
    Controls,
  },
  setup() {
    return {
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfInputSize.base',
            propType: 'VsfInputSize',
            options: Object.keys(VsfInputSizes),
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'label',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'placeholder',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'helpText',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'requiredText',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'errorMessage',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'slotPrefix',
          },
          {
            type: 'text',
            propType: 'string',
            modelName: 'slotSuffix',
          },
          {
            type: 'text',
            propType: 'number',
            modelName: 'characterLimit',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'disabled',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'invalid',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'required',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'readonly',
          },
        ],
        {
          size: ref(VsfInputSizes.base),
          disabled: ref(),
          required: ref(),
          invalid: ref(),
          readonly: ref(),
          placeholder: ref('Placeholder text'),
          helpText: ref('Help text'),
          requiredText: ref('Required text'),
          errorMessage: ref('Error message'),
          label: ref('Label'),
          characterLimit: ref(12),
          value: ref(''),
          valueReadonly: ref('Example value'),
          slotSuffix: ref('Suffix'),
          slotPrefix: ref('Prefix'),
        },
      ),
    };
  },
});
</script>
