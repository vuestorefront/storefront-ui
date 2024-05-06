<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="compare-arrows"
    ><path
      d="m15.3 13.3-3.6-3.6a.9.9 0 0 1-.212-.325A1.1 1.1 0 0 1 11.425 9q0-.2.063-.375A.9.9 0 0 1 11.7 8.3l3.6-3.6q.3-.3.7-.3t.7.3.3.712q0 .413-.3.713L14.825 8H21q.424 0 .712.287Q22 8.575 22 9q0 .424-.288.712A.97.97 0 0 1 21 10h-6.175l1.875 1.875q.3.3.3.7t-.3.7-.687.325-.713-.3m-8 5.975q.3.3.7.312t.7-.287l3.6-3.6q.15-.15.213-.325.062-.176.062-.375 0-.2-.062-.375a.9.9 0 0 0-.213-.325l-3.6-3.6a.96.96 0 0 0-.7-.3q-.4 0-.7.3t-.3.712.3.713L9.175 14H3a.97.97 0 0 0-.712.287A.97.97 0 0 0 2 15q0 .424.288.712A.97.97 0 0 0 3 16h6.175L7.3 17.875q-.3.3-.3.7t.3.7"
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
