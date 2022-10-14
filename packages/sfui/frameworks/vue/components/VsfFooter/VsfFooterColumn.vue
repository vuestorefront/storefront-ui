<script setup lang="ts">
import { PropType } from 'vue';
import { VsfFooterColumnType } from '@sfui/sfui/shared/types';

defineProps({
  type: {
    type: String as PropType<VsfFooterColumnType>,
    default: 'top',
  },
});
</script>

<template>
  <div :class="`vsf-footer__column--${type}`"><slot /></div>
</template>
