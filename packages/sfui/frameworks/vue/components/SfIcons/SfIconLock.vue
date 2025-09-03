<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="lock"
    ><path
      d="M6 23q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 21V11q0-.825.588-1.413A1.93 1.93 0 0 1 6 9h1V7q0-2.075 1.463-3.538T12 2t3.538 1.462Q17 4.925 17 7v2h1q.825 0 1.413.587Q20 10.175 20 11v10q0 .825-.587 1.413A1.93 1.93 0 0 1 18 23zm6-5q.825 0 1.413-.587Q14 16.825 14 16t-.587-1.413A1.93 1.93 0 0 0 12 14q-.825 0-1.412.587A1.93 1.93 0 0 0 10 16q0 .825.588 1.413Q11.175 18 12 18M9 9h6V7q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 4q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 7z"
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
