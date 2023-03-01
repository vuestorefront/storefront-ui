<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="thumb-up"
    ><path
      d="M7 22V9l6-5.95c.25-.25.546-.396.887-.438a1.66 1.66 0 0 1 .988.188c.317.167.55.4.7.7.15.3.183.609.1.925L14.55 9H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.334-.4.617-.75.85-.35.234-.717.35-1.1.35H7ZM9 9.85V20h9l3-7v-2h-9l1.35-5.5L9 9.85ZM4 22c-.55 0-1.02-.195-1.412-.587A1.927 1.927 0 0 1 2 20v-9c0-.55.196-1.02.588-1.413A1.925 1.925 0 0 1 4 9h3v2H4v9h3v2H4Z"
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
