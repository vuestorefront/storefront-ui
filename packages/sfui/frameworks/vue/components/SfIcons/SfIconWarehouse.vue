<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="warehouse"
    ><path
      d="m12 5.15-8 3.2V19h2v-6q0-.824.588-1.413A1.93 1.93 0 0 1 8 11h8q.825 0 1.413.587Q18 12.175 18 13v6h2V8.35zM8 21H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 19V8.35A1.96 1.96 0 0 1 3.25 6.5l8-3.2q.35-.15.75-.15t.75.15l8 3.2q.575.225.913.725.337.5.337 1.125V19q0 .825-.587 1.413A1.93 1.93 0 0 1 20 21h-4v-8H8zm1 0v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2z"
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
