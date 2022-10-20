<script setup lang="ts">
import { PropType } from 'vue';
import { VsfFooterLabelType } from '../../shared/types';

defineProps({
  type: {
    type: String as PropType<VsfFooterLabelType>,
    default: 'subcategory',
  },
});
</script>

<template>
  <span :class="`vsf-footer__label--${type}`"><slot /></span>
</template>
