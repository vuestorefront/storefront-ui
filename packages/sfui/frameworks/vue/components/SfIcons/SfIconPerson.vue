<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="person"
    ><path
      d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m6 8H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-.8q0-.85.438-1.563A2.9 2.9 0 0 1 5.6 14.55a15 15 0 0 1 3.15-1.163A13.8 13.8 0 0 1 12 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.162 1.087T20 17.2v.8q0 .825-.587 1.413A1.93 1.93 0 0 1 18 20M6 18h12v-.8a.94.94 0 0 0-.137-.5 1 1 0 0 0-.363-.35q-1.35-.675-2.725-1.013a11.6 11.6 0 0 0-5.55 0Q7.85 15.675 6.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.413-.588Q14 8.825 14 8q0-.824-.587-1.412A1.93 1.93 0 0 0 12 6q-.825 0-1.412.588A1.92 1.92 0 0 0 10 8q0 .825.588 1.412Q11.175 10 12 10"
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
