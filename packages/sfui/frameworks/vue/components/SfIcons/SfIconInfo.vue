<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="info"
    ><path d="M13.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11 16a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0z" /><path
      fill-rule="evenodd"
      d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12m2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8"
      clip-rule="evenodd"
  /></SfIconBase>
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
