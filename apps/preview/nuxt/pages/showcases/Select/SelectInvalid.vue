<template>
  <label>
    <span class="pb-1 text-sm font-medium text-neutral-900 font-body"> Label </span>
    <VsfSelect :invalid="true" placeholder="-- Select --">
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </VsfSelect>
  </label>
</template>

<script lang="ts" setup>
import { VsfSelect } from '@storefront-ui/vue/components/VsfSelect/index';

const options = [
  { label: 'red', value: 'red' },
  { label: 'blue', value: 'blue' },
  { label: 'yellow', value: 'yellow' },
  { label: 'green', value: 'green' },
  { label: 'gray', value: 'gray' },
  { label: 'black', value: 'black' },
  { label: 'brown', value: 'brown' },
];
</script>
