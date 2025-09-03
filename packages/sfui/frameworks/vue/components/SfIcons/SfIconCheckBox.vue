<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="check-box"
    ><path
      d="M5 21q-.825 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.825.587-1.413A1.93 1.93 0 0 1 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413A1.93 1.93 0 0 1 19 21zm5.6-5.225q.2 0 .375-.062a.9.9 0 0 0 .325-.213l5.675-5.675a.92.92 0 0 0 .275-.675q0-.4-.3-.7a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275L10.6 13.4l-2.175-2.175a.92.92 0 0 0-.675-.275q-.4 0-.7.3a.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.5q.15.15.325.213.175.062.375.062"
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
