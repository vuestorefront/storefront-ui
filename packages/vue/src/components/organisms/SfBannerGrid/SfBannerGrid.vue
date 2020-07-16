<template>
  <div class="sf-banner-grid">
    <template v-if="bannerGrid === 1">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col">
          <slot name="banner-A" />
        </div>
        <div class="sf-banner-grid__col sf-banner-grid__col--medium">
          <slot name="banner-B" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="banner-C" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="banner-D" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="bannerGrid === 2">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col sf-banner-grid__col--small">
          <slot name="banner-A" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col sf-banner-grid__col--higher">
              <slot name="banner-B" />
            </div>
            <div class="sf-banner-grid__col sf-banner-grid__col--higher">
              <slot name="banner-C" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <slot name="banner-D" />
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
      default: 1,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfBannerGrid.scss";
</style>
