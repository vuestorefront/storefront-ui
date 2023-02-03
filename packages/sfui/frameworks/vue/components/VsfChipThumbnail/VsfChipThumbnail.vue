<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfChipThumbnailSize } from './types';

defineProps({
  color: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<`${VsfChipThumbnailSize}`>,
    default: VsfChipThumbnailSize.base,
  },
});
</script>

<template>
  <div
    :class="['vsf-chip-thumbnail', `vsf-chip-thumbnail--${size}`]"
    :style="{ '--vsf-chip-thumbnail': color }"
    data-testid="chip-thumbnail"
  >
    <slot />
  </div>
</template>
