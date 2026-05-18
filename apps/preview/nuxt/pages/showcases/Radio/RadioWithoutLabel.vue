<template>
  <SfRadio
    v-for="{ name, value } in radioOptions"
    :key="value"
    class="block mt-4"
    :value="value"
    :name="name"
    v-model="radioModel"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRadio } from '@storefront-ui/vue';

const radioModel = ref('');
const radioOptions = [
  {
    value: 'value-1',
    name: 'radio-1',
  },
  {
    value: 'value-2',
    name: 'radio-2',
  },
];
</script>
