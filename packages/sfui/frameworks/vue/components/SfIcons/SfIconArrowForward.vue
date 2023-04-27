<template>
  <SfIconBase :size="size" viewBox="0 0 24 24" data-testid="arrow-forward"
    ><path
      d="M11.3 19.3a.994.994 0 0 1-.288-.7.91.91 0 0 1 .263-.7l4.9-4.9H5a.968.968 0 0 1-.713-.288A.967.967 0 0 1 4 12a.97.97 0 0 1 .287-.713A.97.97 0 0 1 5 11h11.175l-4.9-4.9a.91.91 0 0 1-.263-.7.994.994 0 0 1 .288-.7.948.948 0 0 1 .7-.275.95.95 0 0 1 .7.275l6.6 6.6c.1.083.171.187.213.312.041.125.062.255.062.388s-.02.258-.062.375a.883.883 0 0 1-.213.325l-6.6 6.6a.948.948 0 0 1-.7.275.948.948 0 0 1-.7-.275Z"
  /></SfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { SfIconBase, SfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfIconSize}`>,
    default: SfIconSize.base,
  },
});
</script>
