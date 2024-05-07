<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="undo"
    ><path
      d="M8 19.5a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 18.5q0-.425.288-.713A.97.97 0 0 1 8 17.5h6.1q1.576 0 2.737-1Q18 15.5 18 14t-1.163-2.5-2.737-1H7.8l1.9 1.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275l-3.6-3.6a.9.9 0 0 1-.212-.325 1.1 1.1 0 0 1-.063-.375q0-.201.063-.375A.9.9 0 0 1 4.7 8.8l3.6-3.6a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L7.8 8.5h6.3q2.425 0 4.163 1.575Q20 11.65 20 14t-1.738 3.925Q16.526 19.5 14.1 19.5z"
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
