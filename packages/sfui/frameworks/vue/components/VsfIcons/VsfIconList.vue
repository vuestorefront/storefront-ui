<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="list"
    content="<path d='M5 7.273C5 6.57 5.57 6 6.273 6h11.454a1.273 1.273 0 0 1 0 2.545H6.273C5.57 8.545 5 7.975 5 7.273Zm0 10.181c0-.702.57-1.272 1.273-1.272h11.454a1.273 1.273 0 1 1 0 2.545H6.273c-.703 0-1.273-.57-1.273-1.273Zm1.273-6.364a1.273 1.273 0 0 0 0 2.546h6.363a1.273 1.273 0 1 0 0-2.545H6.273Z'/><path d='M5 7.273C5 6.57 5.57 6 6.273 6h11.454a1.273 1.273 0 0 1 0 2.545H6.273C5.57 8.545 5 7.975 5 7.273Zm0 10.181c0-.702.57-1.272 1.273-1.272h11.454a1.273 1.273 0 1 1 0 2.545H6.273c-.703 0-1.273-.57-1.273-1.273Zm1.273-6.364a1.273 1.273 0 0 0 0 2.546h6.363a1.273 1.273 0 1 0 0-2.545H6.273Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
