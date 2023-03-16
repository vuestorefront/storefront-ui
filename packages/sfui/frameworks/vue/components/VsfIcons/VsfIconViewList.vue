<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="view-list"
    ><path
      d="M3 17V7c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 5h14c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v10a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 19H5a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 17Zm2-8h2V7H5v2Zm4 0h10V7H9v2Zm0 4h10v-2H9v2Zm0 4h10v-2H9v2Zm-4 0h2v-2H5v2Zm0-4h2v-2H5v2Z"
  /></VsfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
