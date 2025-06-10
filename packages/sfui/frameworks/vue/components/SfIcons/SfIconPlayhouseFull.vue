<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="playhouse-full"
    ><rect width="100%" height="100%" fill="#d3d3d3" /><text
      x="50%"
      y="50%"
      dominant-baseline="middle"
      font-family="Arial"
      font-size="20"
      text-anchor="middle"
    >
      PlayHouse Full Logo Placeholder
    </text></SfIconBase
  >
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import { SfIconBase, SfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfIconSize}`>,
    default: SfIconSize.base,
  },
});
</script>
