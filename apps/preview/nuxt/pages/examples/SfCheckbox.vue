<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="flex items-center">
      <SfCheckbox
        id="checkbox"
        ref="checkboxRef"
        v-bind="state"
        :invalid="!disabled && invalid"
        class="peer"
        :wrapper-class="wrapperClass"
        v-model="modelValue"
      />
      <label
        for="checkbox"
        class="ml-3 text-base text-gray-900 cursor-pointer font-body peer-disabled:text-disabled-900"
        >Label</label
      >
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { SfCheckbox } from '@storefront-ui/vue';
import { unrefElement, MaybeElement } from '@vueuse/core';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfCheckboxExample',
  components: {
    SfCheckbox,
    ComponentExample,
  },
  setup() {
    const checkboxRef = ref<MaybeElement>();
    const indeterminate = ref(false);
    const invalid = ref(false);
    const disabled = ref(false);
    watch([indeterminate, invalid], ([newIndeterminate, newInvalid]) => {
      if (unrefElement(checkboxRef)) {
        (unrefElement(checkboxRef) as HTMLInputElement).indeterminate = newInvalid ? false : newIndeterminate;
      }
    });
    return {
      ...prepareControls(
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
            propType: 'string',
            description: '(not prop) example allows to add value attribute to input',
          },
          {
            type: 'text',
            propType: 'string',
            propDefaultValue: 'label',
            modelName: 'wrapperTag',
          },
          {
            type: 'text',
            modelName: 'wrapperClass',
            propType: 'string',
            description: 'Change checkbox wrapper class',
          },
          {
            type: 'boolean',
            modelName: 'indeterminate',
            propType: 'boolean',
            description: '(not prop) example change state to indeterminate',
          },
          {
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
            description: '(not prop) example change state to disabled',
          },
        ],
        {
          modelValue: ref([]),
          indeterminate: indeterminate,
          disabled: disabled,
          invalid: invalid,
          value: ref('label'),
          wrapperTag: ref(),
          wrapperClass: ref(''),
        },
      ),
      checkboxRef,
    };
  },
});
</script>
