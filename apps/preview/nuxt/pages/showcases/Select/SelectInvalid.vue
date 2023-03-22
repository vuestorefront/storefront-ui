<template>
  <label>
    <span class="pb-1 text-sm font-medium text-neutral-900 font-body"> Label </span>
    <SfSelect :invalid="true" placeholder="-- Select --">
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </SfSelect>
  </label>
</template>

<script lang="ts" setup>
import { SfSelect } from '@storefront-ui/vue';

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
