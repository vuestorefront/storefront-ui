<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="remove"
    ><path
      d="M6 13a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.712A.97.97 0 0 1 18 13z"
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
