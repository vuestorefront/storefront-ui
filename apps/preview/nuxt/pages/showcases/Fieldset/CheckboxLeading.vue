<template>
  <SfFieldset :invalid="invalid">
    <span class="flex flex-wrap justify-between">
      <label
        v-for="({ label, hint, value }, i) in checkboxes"
        :key="i"
        class="typography-text-base flex flex-wrap items-center mb-1 cursor-pointer"
      >
        <SfCheckbox v-model="modelValue" :value="value" :array="checkboxes" :invalid="invalid" class="m-0.5" />
        <span class="ml-2">
          {{ label }}
        </span>
        <span class="block typography-text-xs ml-8 pt-0.5 text-neutral-500 flex-[100%]">
          {{ hint }}
        </span>
      </label>
    </span>
  </SfFieldset>
  <SfButton @click="invalid = !invalid">Invalid</SfButton>
</template>
<script lang="ts" setup>
import { SfCheckbox, SfFieldset, SfButton } from '@storefront-ui/vue';
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

const modelValue = ref([]);
const invalid = ref(false);
</script>
