<script setup lang="ts">
import { PropType } from 'vue';
import { VsfFooterLabelType } from '@sfui/shared/types';

defineProps({
  type: {
    type: String as PropType<VsfFooterLabelType>,
    default: 'subcategory',
  },
});
</script>

<template>
  <p :class="`vsf-footer__label--${type}`"><slot /></p>
</template>
