<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="upload"
    ><path
      d="M6 19.787q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 17.787v-2q0-.424.287-.712A.97.97 0 0 1 5 14.787q.424 0 .713.288.287.288.287.712v2h12v-2q0-.424.288-.712a.97.97 0 0 1 .712-.288q.424 0 .712.288t.288.712v2q0 .825-.587 1.413a1.93 1.93 0 0 1-1.413.587zm5-12.15L9.125 9.512a.93.93 0 0 1-.713.288 1.02 1.02 0 0 1-.712-.313q-.275-.3-.288-.7a.92.92 0 0 1 .288-.7l3.6-3.6q.15-.15.325-.212.175-.063.375-.063t.375.063a.9.9 0 0 1 .325.212l3.6 3.6q.3.3.287.7-.012.4-.287.7-.3.3-.713.313a.93.93 0 0 1-.712-.288L13 7.637v7.15q0 .426-.287.713a.97.97 0 0 1-.713.287.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713z"
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
