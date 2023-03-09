<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfThumbnailSize } from './types';

const sizeClasses = {
  [VsfThumbnailSize.sm]: 'w-4 h-4',
  [VsfThumbnailSize.base]: 'w-5 h-5',
  [VsfThumbnailSize.lg]: 'w-[2.125rem] h-[2.125rem]',
  [VsfThumbnailSize.xl]: 'w-12 h-12',
};

defineProps({
  size: {
    type: String as PropType<`${VsfThumbnailSize}`>,
    default: VsfThumbnailSize.base,
  },
});
</script>

<template>
  <div :class="['rounded-full overflow-hidden', sizeClasses[size]]" data-testid="chip-thumbnail">
    <slot />
  </div>
</template>
