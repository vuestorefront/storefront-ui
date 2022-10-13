<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__section--top">
      <slot name="categories" />
    </div>
    <div class="vsf-footer__section--middle">
      <slot name="contact" />
    </div>
    <div class="vsf-footer__section--bottom">
      <slot name="socialMedia" />
      <div class="vsf-footer__bottom-links">
        <slot name="bottomLinks" />
      </div>
      <span class="vsf-footer__label--company-name">
        <slot name="companyName" />
      </span>
    </div>
  </footer>
</template>
