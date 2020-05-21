<template>
  <div
    class="sf-image"
    :class="{ 'sf-image--has-size': size }"
    :style="size"
    v-on="$listeners"
  >
    <template v-if="isPicture">
      <picture v-if="!isSrcSet">
        <source
          :srcset="source.desktop.url"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <source
          :srcset="source.mobile.url"
          :media="`(max-width: ${pictureBreakpoint}px)`"
        />
        <img
          v-show="source.desktop.url"
          ref="image"
          :src="source.desktop.url"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
      </picture>
      <picture v-else>
        <source
          v-for="(srcItem, i) in source.srcset"
          :key="i"
          :srcset="srcItem.src"
          :media="srcItem.media"
          :type="srcItem.type"
        />
        <img
          v-show="source.srcset"
          :src="source.srcset[0].src"
          :srcset="source.srcset[0].srcset"
          :sizes="source.srcset[0].sizes"
          v-bind="$attrs"
        />
      </picture>
    </template>
    <template v-else>
      <img
        v-show="source"
        ref="image"
        :src="source"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
    </template>
    <noscript v-if="lazy && noscript" inline-template>
      <img
        class="noscript"
        :src="noscript"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
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
      type: [String, Array, Object],
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
      return !!this.src && typeof this.src === "object";
    },
    isSrcSet() {
      return this.src.srcset;
    },
    source() {
      if (!(!this.isLoaded && this.lazy)) return this.src;

      if (this.isPicture && this.isSrcSet) {
        return {
          srcset: [{ media: null, src: null, type: null }],
        };
      }
      if (this.isPicture && !this.isSrcSet) {
        return {
          mobile: { url: null },
          desktop: { url: null },
        };
      }
      return null;
    },
    noscript() {
      return this.src.desktop?.url || this.src.srcset?.src || this.src;
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
        loaded() {
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
