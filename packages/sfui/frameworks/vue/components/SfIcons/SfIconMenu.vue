<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="menu"
    ><path
      d="M4 18a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm0-5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zM3 7a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
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
