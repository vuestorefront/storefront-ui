<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="vuestorefront"
    ><path
      d="m9.747 2.824.839-.838a2 2 0 0 1 2.828 0l.838.838a2 2 0 0 1 0 2.828l-.838.839a2 2 0 0 1-2.828 0l-.839-.839a2 2 0 0 1 0-2.828Zm3.69 10.978 4.482-4.483a2 2 0 0 1 2.829 0L23 11.571l-11 11-11-11 2.276-2.276a1.999 1.999 0 0 1 2.827 0l4.506 4.507a1.998 1.998 0 0 0 2.828 0Z"
  /></VsfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
