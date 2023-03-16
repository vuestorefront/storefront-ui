<template>
  <div class="flex flex-col gap-y-6 font-body">
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <VsfSelect size="sm">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </VsfSelect>
    </label>
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <VsfSelect size="base">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </VsfSelect>
    </label>
    <label>
      <span class="pb-1 text-sm font-medium text-neutral-900"> Label </span>
      <VsfSelect size="lg">
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}
        </option>
      </VsfSelect>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { VsfSelect } from '@storefront-ui/vue';

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
