<template>
  <SfFieldset :invalid="invalid" hint="Main hint">
    <span class="flex flex-wrap justify-between">
      <label
        v-for="({ label, hint, value }, i) in checkboxes"
        :key="i"
        class="typography-text-base flex flex-wrap mb-1 items-center cursor-pointer"
      >
        <SfRadio v-model="modelValue" :value="value" :array="checkboxes" :invalid="invalid" class="m-0.5" />
        <span class="ml-2 mb-0.5">
          {{ label }}
        </span>
        <span class="block typography-text-xs ml-8 text-neutral-500 flex-[100%]">
          {{ hint }}
        </span>
      </label>
    </span>
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
