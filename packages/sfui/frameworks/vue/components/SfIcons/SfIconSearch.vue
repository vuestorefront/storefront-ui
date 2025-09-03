<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="search"
    ><path
      d="m18.9 20.3-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.613Q6.775 3 9.5 3t4.613 1.887T16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.625 5.625a.92.92 0 0 1 .275.675q0 .4-.3.7a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5t-1.312-3.188Q11.375 5 9.5 5T6.312 6.312 5 9.5t1.312 3.188Q7.625 14 9.5 14"
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
