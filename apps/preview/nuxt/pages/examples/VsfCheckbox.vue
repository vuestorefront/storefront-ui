<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="flex items-center">
      <VsfCheckbox
        id="checkbox"
        ref="checkboxRef"
        v-bind="state"
        v-model="modelValue"
        :invalid="!disabled && invalid"
        class="peer"
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
import { VsfCheckbox } from '@storefront-ui/vue/components/VsfCheckbox/index';
import { defineComponent, ref, watch } from 'vue';
import { unrefElement, MaybeElement } from '@vueuse/core';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'VsfCheckboxExample',
  components: {
    VsfCheckbox,
    ComponentExample,
  },
  setup() {
    const checkboxRef = ref<MaybeElement>();
    const indeterminate = ref(false);
    const invalid = ref(false);
    const disabled = ref(false);
    watch([indeterminate, invalid, disabled], ([newIndeterminate, newInvalid, newDisabled]) => {
      if (unrefElement(checkboxRef)) {
        (unrefElement(checkboxRef) as HTMLInputElement).indeterminate =
          newInvalid || newDisabled ? false : newIndeterminate;
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
        },
      ),
      checkboxRef,
    };
  },
});
</script>
