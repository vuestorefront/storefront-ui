<script lang="ts">
const sizeClasses = {
  [SfThumbnailSize.sm]: 'w-5 h-5',
  [SfThumbnailSize.base]: 'w-6 h-6',
  [SfThumbnailSize.lg]: 'w-10 h-10',
  [SfThumbnailSize.xl]: 'w-14 h-14',
};
</script>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { SfThumbnailSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfThumbnailSize}`>,
    default: SfThumbnailSize.base,
  },
});
</script>

<template>
  <div :class="['rounded-full overflow-hidden bg-clip-content p-0.5', sizeClasses[size]]" data-testid="chip-thumbnail">
    <slot />
  </div>
</template>
