<script setup lang="ts">
import type { PropType } from 'vue';
import { VsfFooterLabelType } from '@storefront-ui/shared';

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
