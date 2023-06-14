<template>
  <ComponentExample :controls-attrs="controlsAttrs">
    <SfFieldset :invalid="invalid" :disabled="disabled" hint-text="Hint">
      <label
        v-for="({ label, hint, value }, i) in checkboxes"
        :key="`${value}-${i}`"
        :class="[
          'text-base block font-body mb-4 first-of-type:mt-2 last-of-type:mb-2',
          disabled ? 'text-disabled-900 cursor-not-allowed' : 'text-gray-900 cursor-pointer',
        ]"
      >
        <SfCheckbox v-model="modelValue" :value="value" :disabled="disabled" :invalid="invalid"/>
        {{ label }}
        <span :class="['block typography-text-xs ml-6 pt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500']">
          {{ hint }}
        </span>
      </label>
    </SfFieldset>
  </ComponentExample>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SfCheckbox, SfFieldset } from '@storefront-ui/vue';
import { MaybeElement } from '@vueuse/core';
import { prepareControls } from '../../components/utils/Controls.vue';
import ComponentExample from '../../components/utils/ComponentExample.vue';

export default defineComponent({
  name: 'SfFieldsetExample',
  components: {
    SfFieldset,
    ComponentExample,
    SfCheckbox,
  },
  setup() {
    const checkboxRef = ref<MaybeElement>();
    const invalid = ref(false);
    const disabled = ref(false);
    const checkboxes = [
      {
        label: 'Label-1',
        hint: 'hint-1',
        value: 'value-1',
      },
      {
        label: 'Label-2',
        hint: 'hint-2',
        value: 'value-2',
      },
      {
        label: 'Label-3',
        hint: 'hint-3',
        disabled: true,
        value: 'value-3',
      },
      {
        label: 'Label-4',
        hint: 'hint-4',
        value: 'value-4',
      },
      {
        label: 'Label-5',
        hint: 'hint-5',
        value: 'value-5',
      },
    ];

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
            type: 'boolean',
            modelName: 'invalid',
            propType: 'boolean',
          },
          {
            type: 'boolean',
            modelName: 'disabled',
            propType: 'boolean',
          },
        ],
        {
          modelValue: ref([]),
          disabled: disabled,
          invalid: invalid,
        },
      ),
      checkboxRef,
    };
  },
});
</script>
