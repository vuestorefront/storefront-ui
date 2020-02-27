<template>
  <div class="sf-banner-grid">
    <template v-if="bannerGrid === 1">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col">
          <!-- @slot Use this slot to place custom content in banner A -->
          <slot name="banner-A" />
        </div>
        <div class="sf-banner-grid__col sf-banner-grid__col--medium">
          <!-- @slot Use this slot to place custom content in banner B -->
          <slot name="banner-B" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <!-- @slot Use this slot to place custom content in banner C -->
              <slot name="banner-C" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <!-- @slot Use this slot to place custom content in banner D -->
              <slot name="banner-D" />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-if="bannerGrid === 2">
      <div class="sf-banner-grid__row">
        <div class="sf-banner-grid__col sf-banner-grid__col--small">
          <!-- @slot Use this slot to place custom content in banner A -->
          <slot name="banner-A" />
        </div>
        <div class="sf-banner-grid__col">
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <!-- @slot Use this slot to place custom content in banner B -->
              <slot name="banner-B" />
            </div>
            <div class="sf-banner-grid__col">
              <!-- @slot Use this slot to place custom content in banner C -->
              <slot name="banner-C" />
            </div>
          </div>
          <div class="sf-banner-grid__row">
            <div class="sf-banner-grid__col">
              <!-- @slot Use this slot to place custom content in banner D -->
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
      default: 1
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfBannerGrid.scss";
</style>
