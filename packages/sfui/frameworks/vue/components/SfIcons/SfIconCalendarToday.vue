<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="calendar-today"
    ><path
      d="M5 22q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2.975q0-.425.287-.7A1 1 0 0 1 7 2a.97.97 0 0 1 .713.287A.97.97 0 0 1 8 3v1h8V2.975q0-.425.288-.7A1 1 0 0 1 17 2q.424 0 .712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V10H5z"
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
