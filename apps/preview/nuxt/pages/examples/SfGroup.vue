<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <div class="flex items-center">
      <SfGroup
        :invalid="invalid"
        hint="Main hint"
      >
      <label
        v-for="({label, hint, value}, i) in checkboxes" :key="i"
        class="text-base text-gray-900 cursor-pointer font-body"
      >
        <SfCheckbox
        v-model="modelValue"
        :value="value"
        :array="checkboxes"
        :invalid="invalid"
        class="peer"/>
        {{ label }}
        <span class="block">
          {{ hint }}
        </span>
        </label>
    </SfGroup>
    </div>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { SfCheckbox, SfGroup } from '@storefront-ui/vue';
import { unrefElement, MaybeElement } from '@vueuse/core';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfGroupExample',
  components: {
    SfGroup,
    ComponentExample,
    SfCheckbox
},
  setup() {
    const checkboxRef = ref<MaybeElement>();
    const indeterminate = ref(false);
    const invalid = ref(false);
    const disabled = ref(false);
    const checkboxes = [
  {
    label: 'Label-1',
    hint: 'hint-1',
    value: 'value-1'
  },
  {
    label: 'Label-2',
    hint: 'hint-2',
    value: 'value-2'
  },{
    label: 'Label-3',
    hint: 'hint-3',
    disabled: true,
    value: 'value-3'
  },{
    label: 'Label-4',
    hint: 'hint-4',
    value: 'value-4'
  },{
    label: 'Label-5',
    hint: 'hint-5',
    value: 'value-5'
  },
]
    watch([indeterminate, invalid], ([newIndeterminate, newInvalid]) => {
      if (unrefElement(checkboxRef)) {
        (unrefElement(checkboxRef) as HTMLInputElement).indeterminate = newInvalid ? false : newIndeterminate;
      }
    });
    return {
      checkboxes,
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
