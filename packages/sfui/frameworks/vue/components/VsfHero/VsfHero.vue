<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';
import { VsfHeroDirection } from './types';

const props = defineProps({
  direction: {
    type: String as PropType<`${VsfHeroDirection}`>,
    default: VsfHeroDirection.horizontal,
  },
  bgImgMobileSrc: {
    type: String,
    default: undefined,
  },
  bgImgDesktopSrc: {
    type: String,
    default: undefined,
  },
});
const variables = ref({
  '--vsf-hero-bg-img-mobile': props.bgImgMobileSrc && `url(${props.bgImgMobileSrc})`,
  '--vsf-hero-bg-img-desktop': props.bgImgDesktopSrc && `url(${props.bgImgDesktopSrc})`,
});
</script>

<template>
  <div class="vsf-hero" :style="variables" data-testid="hero">
    <div :class="['vsf-hero__container', `vsf-hero__container--${direction}`]">
      <div class="vsf-hero__media">
        <slot name="media" />
      </div>
      <div class="vsf-hero__content">
        <slot />
      </div>
    </div>
  </div>
</template>
