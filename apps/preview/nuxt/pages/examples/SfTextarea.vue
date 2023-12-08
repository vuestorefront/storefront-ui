<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <label>
      <span
        :class="[
          'typography-text-sm font-medium',
          {
            'cursor-not-allowed text-disabled-500': disabled,
          },
        ]"
      >
        {{ label }}
      </span>
      <SfTextarea
        v-bind="state"
        v-model="value"
        :class="[
          'w-full block',
          {
            '!bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': disabled,
            '!bg-disabled-100 !ring-disabled-300 !ring-1 !text-neutral-500': readonly,
          },
        ]"
      />
    </label>
    <div class="flex justify-between">
      <div>
        <p v-if="invalid && !disabled" class="typography-text-sm text-negative-700 font-medium mt-0.5">
          {{ errorText }}
        </p>
        <p v-if="helpText" :class="['typography-hint-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500']">
          {{ helpText }}
        </p>
        <p
          v-if="requiredText && required"
          class="mt-1 typography-text-sm font-normal text-neutral-500 before:content-['*']"
        >
          {{ requiredText }}
        </p>
      </div>
      <p
        v-if="characterLimit && !readonly"
        :class="['typography-error-xs mt-0.5', disabled ? 'text-disabled-500' : getCharacterLimitClass]"
      >
        {{ charsCount }}
      </p>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { SfTextarea, SfTextareaSize } from '@storefront-ui/vue';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default {
  name: 'SfTextareaExample',
  components: {
    ComponentExample,
    SfTextarea,
  },
  setup() {
    const characterLimit = ref(12);
    const textareaValue = ref('');

    const isAboveLimit = computed(() => textareaValue.value.length > characterLimit.value);
    const charsCount = computed(() => characterLimit.value - textareaValue.value.length);

    const getCharacterLimitClass = computed(() =>
      isAboveLimit.value ? 'text-negative-700 font-medium' : 'text-neutral-500',
    );

    return {
      charsCount,
      getCharacterLimitClass,
      ...prepareControls(
        [
          {
            type: 'select',
            modelName: 'size',
            propDefaultValue: 'SfInputSize.base',
            propType: 'SfInputSize',
            options: Object.keys(SfTextareaSize),
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
            modelName: 'required',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'invalid',
          },
          {
            type: 'boolean',
            propType: 'boolean',
            modelName: 'readonly',
          },
        ],
        {
          size: ref(SfTextareaSize.base),
          disabled: ref(false),
          required: ref(false),
          invalid: ref(false),
          readonly: ref(undefined),
          placeholder: ref('Write something about yourself'),
          helpText: ref('Do not include personal or financial information.'),
          requiredText: ref('Required text'),
          errorText: ref('Error message'),
          label: ref('Description'),
          characterLimit: characterLimit,
          value: textareaValue,
        },
      ),
    };
  },
};
</script>
