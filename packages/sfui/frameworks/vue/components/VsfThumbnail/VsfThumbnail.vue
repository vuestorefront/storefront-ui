<script lang="ts">
const sizeClasses = {
  [VsfThumbnailSize.sm]: 'w-5 h-5',
  [VsfThumbnailSize.base]: 'w-6 h-6',
  [VsfThumbnailSize.lg]: 'w-10 h-10',
  [VsfThumbnailSize.xl]: 'w-14 h-14',
};
</script>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfThumbnailSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${VsfThumbnailSize}`>,
    default: VsfThumbnailSize.base,
  },
});
</script>

<template>
  <div :class="['rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size]]" data-testid="chip-thumbnail">
    <slot />
  </div>
</template>
