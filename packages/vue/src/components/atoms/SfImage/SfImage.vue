<template>
  <div
    class="sf-image"
    :class="{ 'sf-image--has-size': size }"
    :style="size"
    v-on="$listeners"
  >
    <template v-if="isSrcObject">
      <picture>
        <source
          :srcset="source.desktop.url"
          :media="`(min-width: ${pictureBreakpoint}px)`"
        />
        <img
          v-show="source"
          :src="source.mobile.url"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
      </picture>
    </template>
    <template v-else-if="isSrcset && isSrcsetArray">
      <picture>
        <source
          v-for="(srcItem, i) in source"
          :key="i"
          :srcset="srcItem.src"
          :media="srcItem.media"
          :type="srcItem.type"
        />
        <img
          v-show="src"
          :src="(src && src.desktop && src.desktop.url) || src"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
      </picture>
    </template>
    <template v-else-if="isSrcset">
      <img
        v-show="source"
        :src="(src && src.desktop && src.desktop.url) || src"
        :srcset="source"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
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
    <noscript v-if="noscript" inline-template>
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
      type: [String, Object],
      default: "",
    },
    srcset: {
      type: [String, Array],
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
    isSrcObject() {
      return !!this.src && typeof this.src === "object";
    },
    isSrcset() {
      return !!this.srcset.length;
    },
    isSrcsetArray() {
      return !!Array.isArray(this.srcset);
    },
    isLazyAndNotLoaded() {
      return !this.isLoaded && this.lazy;
    },
    source() {
      if (this.isLazyAndNotLoaded && this.isSrcset && this.isSrcsetArray) {
        return [{ media: null, src: null, type: null }];
      }
      if (this.isLazyAndNotLoaded && this.isSrcObject) {
        return {
          mobile: {
            url: null,
          },
          desktop: {
            url: null,
          },
        };
      }
      if (this.isLazyAndNotLoaded) {
        return null;
      }
      if (this.isSrcset) {
        return this.srcset;
      }

      return this.src;
    },
    noscript() {
      return (
        (this.isSrcset && this.isSrcsetArray && this.srcset[0].src) ||
        (this.isSrcset && this.srcset) ||
        (this.isSrcObject && this.src.desktop?.url) ||
        this.src
      );
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
