<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="delete"
    ><path
      d="M7 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 18V5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 3h4c0-.283.096-.521.288-.713A.967.967 0 0 1 10 2h4a.97.97 0 0 1 .713.287A.97.97 0 0 1 15 3h4a.97.97 0 0 1 .712.287c.192.192.288.43.288.713a.968.968 0 0 1-.288.713A.967.967 0 0 1 19 5v13a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 17 20zM7 5v13h10V5zm2 10c0 .283.096.52.288.712A.965.965 0 0 0 10 16a.968.968 0 0 0 .713-.288A.967.967 0 0 0 11 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 9 8zm4 0c0 .283.096.52.288.712A.965.965 0 0 0 14 16a.968.968 0 0 0 .713-.288A.967.967 0 0 0 15 15V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 7a.967.967 0 0 0-.712.287A.968.968 0 0 0 13 8z"
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
