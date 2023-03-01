<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="check-box"
    ><path
      d="M5 21a1.93 1.93 0 0 1-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14a1.93 1.93 0 0 1-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm5.6-5.225c.133 0 .258-.02.375-.062a.883.883 0 0 0 .325-.213l5.675-5.675a.918.918 0 0 0 .275-.675c0-.267-.1-.5-.3-.7a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L10.6 13.4l-2.175-2.175a.918.918 0 0 0-.675-.275c-.267 0-.5.1-.7.3a.948.948 0 0 0-.275.7.95.95 0 0 0 .275.7L9.9 15.5c.1.1.208.171.325.213.117.041.242.062.375.062Z"
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
