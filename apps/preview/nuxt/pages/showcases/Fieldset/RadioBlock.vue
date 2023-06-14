<template>
  <SfFieldset :invalid="invalid" hint="Hint">
    <label
      v-for="({ label, hint, value }, i) in checkboxes"
      :key="i"
      class="typography-text-base flex flex-wrap mb-4 first-of-type:mt-2 last-of-type:mb-2 cursor-pointer"
    >
      <SfRadio v-model="modelValue" :value="value" :array="checkboxes" :invalid="invalid" />
      <span class="ml-2">
        {{ label }}
      </span>
      <span class="block typography-text-xs ml-7 pt-0.5 text-neutral-500 flex-[100%]">
        {{ hint }}
      </span>
    </label>
  </SfFieldset>
  <SfButton @click="invalid = !invalid">Invalid</SfButton>
</template>
<script lang="ts" setup>
import { SfRadio, SfFieldset, SfButton } from '@storefront-ui/vue';
import { ref } from 'vue';

const checkboxes = [
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-1',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-2',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-3',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-4',
  },
  {
    label: 'Label',
    hint: 'hint',
    value: 'value-5',
  },
];

const modelValue = ref('');
const invalid = ref(false);
</script>
