<template>
  <div class="sf-banner-sf-banner-grid">
    <template v-if="bannerGrid === 1">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col">
          <slot name="bannerA" />
        </div>
        <div class="sf-banner-grid__col sf-banner-grid__col--medium">
          <slot name="bannerB" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="bannerC" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="bannerD" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="bannerGrid === 2">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col sf-banner-grid__col--small">
          <slot name="bannerA" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="bannerB" />
            </div>
            <div class="sf-banner-grid__col">
              <slot name="bannerC" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="bannerD" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "SfBannerGrid",
  props: {
    bannerGrid: {
      type: Number,
      default: 1
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBannerGrid.scss";
</style>
