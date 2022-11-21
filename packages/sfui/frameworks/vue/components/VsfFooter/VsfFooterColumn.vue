<script setup lang="ts">
import { PropType } from 'vue';
import { VsfFooterColumnType } from '@sfui/shared/types';

defineProps({
  type: {
    type: String as PropType<VsfFooterColumnType>,
    default: VsfFooterColumnType.top,
  },
});
</script>

<template>
  <div :class="`vsf-footer__column--${type}`"><slot /></div>
</template>
