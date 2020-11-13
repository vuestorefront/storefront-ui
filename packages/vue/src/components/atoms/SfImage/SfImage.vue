<template>
  <div
    class="sf-image"
    :class="{ 'has-size': size }"
    :style="size"
    v-on="$listeners"
  >
    <template v-if="(isSrcset && isSrcsetArray) || isSrcObject">
      <picture>
        <source
          v-for="(srcItem, i) in getSrcsetWhenIsArray.srcset"
          :key="i"
          :srcset="srcItem.src"
          :media="srcItem.media"
          :type="srcItem.type"
        />
        <img
          v-show="getSrcsetWhenIsArray.src"
          :src="getSrcsetWhenIsArray.src"
          v-bind="$attrs"
          :width="width"
          :height="height"
        />
      </picture>
    </template>
    <template v-else>
      <img
        v-show="getSrcOrSrcset"
        v-bind="{ ...$attrs, ...getSrcOrSrcset }"
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
import { deprecationWarning } from "../../../utilities/helpers";
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
    // TODO: To be removed if src as an object will not be available anymore
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
    getSrcsetWhenIsArray() {
      if (this.isLazyAndNotLoaded) {
        return {
          srcset: [{ media: null, src: null, type: null }],
          src: this.src,
        };
      }
      // TODO: To be removed if src as an object will not be available anymore
      if (this.isSrcObject) {
        deprecationWarning(
          this.$options.name,
          "Prop 'src' type should be a string, the object type is deprecated, change the prop type."
        );
        return {
          src: this.src.desktop && this.src.desktop.url,
          srcset: [
            {
              src: this.src.mobile && this.src.mobile.url,
              media: `(max-width: 1023px)`,
            },
            {
              src: this.src.desktop && this.src.desktop.url,
              media: `(min-width: 1024px)`,
            },
          ],
        };
      }
      return { srcset: this.srcset, src: this.src };
    },
    getSrcOrSrcset() {
      if (this.isLazyAndNotLoaded) {
        return this.isSrcset ? { src: null, srcset: null } : { src: null };
      }
      return this.isSrcset
        ? { src: this.src, srcset: this.srcset }
        : { src: this.src };
    },
    noscript() {
      return (
        (this.isSrcsetArray && this.srcset.length && this.srcset[0].src) ||
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
