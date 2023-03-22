<template>
  <ul class="flex flex-wrap gap-4 sm:flex-row">
    <li v-for="(item, index) in chipValues" :key="item.value">
      <SfChip
        v-model="selectedValues"
        :input-props="{ value: item.value }"
        @update:model-value="handleChipRemove(index)"
      >
        <template #prefix><SfThumbnail :class="`bg-${item.value}-500`" /></template>
        {{ item.label }}
        <template #suffix>
          <SfIconCloseSm class="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
        </template>
      </SfChip>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip, SfIconCloseSm, SfThumbnail } from '@storefront-ui/vue';

const chipValues = ref([
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Gray', value: 'gray' },
]);
const selectedValues = chipValues.value.map((item) => item.value);
const handleChipRemove = (index: number) => {
  chipValues.value.splice(index, 1);
};
</script>
