<template>
  <ul class="flex flex-wrap gap-4 sm:flex-row">
    <li v-for="(item, index) in chipValues" :key="item.value">
      <VsfChip
        v-model="selectedValues"
        :input-props="{ value: item.value }"
        @update:model-value="handleChipRemove(index)"
      >
        <VsfThumbnail :class="`mr-2 bg-${item.value}-500`" />
        {{ item.label }}
        <VsfIconClose
          class="ml-2 text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20"
        />
      </VsfChip>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfIconClose } from '@storefront-ui/vue/components/VsfIcons/index';
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';

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
