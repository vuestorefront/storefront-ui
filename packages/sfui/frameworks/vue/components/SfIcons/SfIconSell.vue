<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="sell"
    ><path
      d="M14.25 21.4q-.575.575-1.425.575T11.4 21.4l-8.8-8.8a2.07 2.07 0 0 1-.6-1.45V4q0-.825.588-1.413A1.93 1.93 0 0 1 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412a1.92 1.92 0 0 1-.575 1.413zM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062A1.44 1.44 0 0 0 6.5 5q-.625 0-1.062.438A1.44 1.44 0 0 0 5 6.5q0 .625.438 1.062Q5.875 8 6.5 8"
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
