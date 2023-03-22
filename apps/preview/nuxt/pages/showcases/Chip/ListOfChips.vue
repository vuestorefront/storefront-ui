<template>
  <ul class="flex flex-col flex-wrap gap-4 sm:flex-row">
    <li v-for="({ label, value }, index) in chipValues" :key="index">
      <SfChip :input-props="{ value: value }">
        <template #prefix>
          <SfThumbnail
            :class="{
              'bg-red-500': value === 'red',
              'bg-blue-500': value === 'blue',
              'bg-gray-500': value === 'gray',
            }"
          />
        </template>
        {{ label }}
      </SfChip>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip, SfThumbnail } from '@storefront-ui/vue';

const chipValues = ref([
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
]);
</script>
