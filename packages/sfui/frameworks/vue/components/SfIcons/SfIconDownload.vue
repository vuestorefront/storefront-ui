<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="download"
    ><path
      d="M12 15.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.6-3.6a.92.92 0 0 1-.288-.7q.014-.4.288-.7.3-.3.712-.312a.93.93 0 0 1 .713.287L11 12.15V5q0-.424.287-.713A.97.97 0 0 1 12 4q.424 0 .713.287Q13 4.576 13 5v7.15l1.875-1.875a.93.93 0 0 1 .713-.287Q16 10 16.3 10.3q.276.3.287.7a.92.92 0 0 1-.287.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18v-2q0-.424.287-.713A.97.97 0 0 1 5 15q.424 0 .713.287Q6 15.576 6 16v2h12v-2q0-.424.288-.713A.97.97 0 0 1 19 15q.424 0 .712.287.288.288.288.713v2q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20z"
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
