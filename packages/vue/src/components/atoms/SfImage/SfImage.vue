<template>
  <div
    class="sf-image"
    :class="{ 'sf-image--has-size': size && source }"
    :style="size"
    v-on="$listeners"
  >
    <template v-if="isPicture">
      <picture>
        <source
          :srcset="source.desktop.url"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <source
          :srcset="source.mobile.url"
          :media="`(max-width: ${pictureBreakpoint - 1}px)`"
        />
        <img
          v-show="source.desktop.url"
          :src="source.desktop.url"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
      </picture>
    </template>
    <template v-else>
      <img
        v-show="source"
        :src="source"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
    </template>
    <noscript v-if="lazy && noscript" inline-template>
      <img :src="noscript" v-bind="$attrs" :width="width" :height="height" />
    </noscript>
    <div v-if="hasOverlay" class="sf-image__overlay">
      <slot />
    </div>
  </div>
</template>
<script>
import lozad from "lozad";
export default {
  name: "SfImage",
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Object],
      default: "",
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    pictureBreakpoint: {
      type: Number,
      default: 1024,
    },
    rootMargin: {
      type: String,
      default: "0px 0px 0px 0px",
    },
    threshold: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    isPicture() {
      return this.src && typeof this.src === "object";
    },
    source() {
      const allow =
        (this.isLoaded && this.lazy) || (!this.isLoaded && !this.lazy);
      const disallow = this.isPicture
        ? { desktop: { url: null }, mobile: { url: null } }
        : null;
      return allow ? this.src : disallow;
    },
    noscript() {
      return this.isPicture ? (this.src ? this.src.desktop.url : "") : this.src;
    },
    size() {
      return (
        this.width &&
        this.height && {
          "--_image-width": this.width,
          "--_image-height": this.height,
        }
      );
    },
    hasOverlay() {
      return this.$slots.default;
    },
  },
  mounted() {
    if (!this.lazy) return;
    const vm = this;
    this.$nextTick(() => {
      const observer = lozad(vm.$el, {
        load() {
          vm.isLoaded = true;
        },
        rootMargin: vm.rootMargin,
        threshold: vm.threshold,
      });
      observer.observe();
    });
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfImage.scss";
</style>
