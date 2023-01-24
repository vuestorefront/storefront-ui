<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfDisplayDirection } from './types';

defineProps({
  direction: {
    type: String as PropType<`${VsfDisplayDirection}`>,
    default: VsfDisplayDirection.horizontal,
  },
});
</script>

<template>
  <div class="vsf-display" data-testid="display">
    <div :class="['vsf-display__container', `vsf-display__container--${direction}`]">
      <div class="vsf-display__media">
        <slot name="media" />
      </div>
      <div class="vsf-display__content">
        <slot />
      </div>
    </div>
  </div>
</template>
