<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <label>
      <span :class="['text-sm font-medium', { 'cursor-not-allowed text-disabled-500': disabled }]">
        {{ label }}
      </span>
      <VsfInput
        v-bind="state"
        v-model="value"
        :wrapper-class="{
          'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': disabled || readonly,
        }"
      >
        <template v-if="prefixSlotOptions.getValue(slotPrefix)" #prefix>
          <component :is="prefixSlotOptions.getValue(slotPrefix)" />
        </template>
        <template v-if="suffixSlotOptions.getValue(slotSuffix)" #suffix>
          <component :is="suffixSlotOptions.getValue(slotSuffix)" />
        </template>
      </VsfInput>
    </label>
    <div class="flex justify-between">
      <div>
        <p v-if="invalid && !disabled" class="text-sm text-negative-700 font-medium mt-0.5">{{ errorText }}</p>
        <p v-if="helpText" :class="['text-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500']">
          {{ helpText }}
        </p>
        <p v-if="requiredText && required" class="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">
          {{ requiredText }}
        </p>
      </div>
      <p
        v-if="characterLimit && !readonly"
        :class="['text-xs mt-0.5', disabled ? 'text-disabled-500' : getCharacterLimitClass]"
      >
        {{ charsCount }}
      </p>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, h, computed } from 'vue';
import VsfInput from '@storefront-ui/vue/components/VsfInput/VsfInput';
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

const characterLimit = ref(12);
const inputValue = ref('');

const isAboveLimit = computed(() => inputValue.value.length > characterLimit.value);
const charsCount = computed(() => characterLimit.value - inputValue.value.length);

const getCharacterLimitClass = computed(() =>
  isAboveLimit.value ? 'text-negative-700 font-medium' : 'text-neutral-500',
);
export default defineComponent({
  name: 'VsfInputExample',
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
      isAboveLimit,
      charsCount,
      getCharacterLimitClass,
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
            modelName: 'errorText',
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
          disabled: ref(false),
          required: ref(false),
          invalid: ref(false),
          readonly: ref(false),
          placeholder: ref('Placeholder text'),
          helpText: ref('Help text'),
          requiredText: ref('Required text'),
          errorText: ref('Error text'),
          label: ref('Label'),
          characterLimit: characterLimit,
          value: inputValue,
          wrapperClass: ref(),
          slotPrefix: ref(prefixSlotOptions.defaultOption),
          slotSuffix: ref(suffixSlotOptions.defaultOption),
        },
      ),
    };
  },
});
</script>
