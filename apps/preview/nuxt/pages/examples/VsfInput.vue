<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <VsfInput v-bind="state" v-model="value">
      <template v-if="prefixSlotOptions.getValue(slotPrefix)" #prefix>
        <component :is="prefixSlotOptions.getValue(slotPrefix)" />
      </template>
      <template v-if="suffixSlotOptions.getValue(slotSuffix)" #suffix>
        <component :is="suffixSlotOptions.getValue(slotSuffix)" />
      </template>
    </VsfInput>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue';
import VsfInput from '@storefront-ui/vue/components/VsfInput/VsfInput.vue';
import { VsfInputSize } from '@storefront-ui/vue/components/VsfInput/types';
import { createControlsOptions } from '@storefront-ui/preview-shared/utils/controlsOptions';
import { VsfIconLock, VsfIconSearch } from '@storefront-ui/vue/components/VsfIcons/index';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

const prefixSlotOptions = createControlsOptions({
  none: undefined,
  'Search icon': h(VsfIconSearch),
});
const suffixSlotOptions = createControlsOptions({
  none: undefined,
  'Lock icon': h(VsfIconLock),
});

export default defineComponent({
  name: 'VsfSelectExample',
  components: {
    VsfInput,
    ComponentExample,
    VsfIconSearch,
    VsfIconLock,
  },
  setup() {
    return {
      prefixSlotOptions,
      suffixSlotOptions,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'VsfInputSize.base',
            propType: 'VsfInputSize',
            options: Object.keys(VsfInputSize),
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
            type: 'select',
            propType: 'string',
            modelName: 'slotPrefix',
            options: prefixSlotOptions.controlsOptions,
          },
          {
            type: 'select',
            propType: 'string',
            modelName: 'slotSuffix',
            options: suffixSlotOptions.controlsOptions,
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
          size: ref(VsfInputSize.base),
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
          slotPrefix: ref(prefixSlotOptions.defaultOption),
          slotSuffix: ref(suffixSlotOptions.defaultOption),
        },
      ),
    };
  },
});
</script>
