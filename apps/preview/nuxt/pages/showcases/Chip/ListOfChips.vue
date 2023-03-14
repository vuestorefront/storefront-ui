<template>
  <ul class="flex flex-col flex-wrap gap-4 sm:flex-row">
    <li v-for="({ label, value }, index) in chipValues" :key="index">
      <VsfChip :input-props="{ value: value }">
        <VsfThumbnail :class="`mr-2 bg-${value}-500`" />
        {{ label }}
      </VsfChip>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';

const chipValues = ref([
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
]);
</script>
