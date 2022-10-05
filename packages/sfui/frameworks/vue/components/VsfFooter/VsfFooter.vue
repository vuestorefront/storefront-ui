<script setup lang="ts">
defineProps({
  companyName: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__wrapper--categories">
      <slot name="categories" />
    </div>
    <div class="vsf-footer__wrapper--contact">
      <slot name="contact" />
    </div>
    <div class="vsf-footer__wrapper--social-media">
      <slot name="socialMedia" />
      <div class="vsf-footer__bottom-links">
        <slot name="bottomLinks" />
      </div>
      <span class="vsf-footer__company-name">{{ companyName }}</span>
    </div>
  </footer>
</template>
