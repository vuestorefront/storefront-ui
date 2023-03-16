<template>
  <h6 class="bg-neutral-100 mb-4 px-4 py-2 rounded uppercase typography-headline-6 font-bold tracking-widest">
    Sort by
  </h6>
  <div class="px-4">
    <VsfSelect v-model="selected" aria-label="Sort by">
      <option v-for="{ value, label } in options" :key="value" :value="value">
        {{ label }}
      </option>
    </VsfSelect>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfSelect } from '@storefront-ui/vue';

const options = ref([
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price low to high' },
  { label: 'Price: High to Low', value: 'price high to low' },
  { label: 'New Arrivals', value: 'new arrivals' },
  { label: 'Customer Rating', value: 'customer rating' },
  { label: 'Bestsellers', value: 'bestsellers' },
]);
const selected = ref('');
</script>
