<template>
  <span class="sf-image--wrapper" data-testid="image-wrapper">
    <component
      :is="imageComponentTag"
      :loading="loading"
      v-bind="attributes"
      :src="src"
      :class="classes"
      :style="styles"
      :alt="alt"
      @load="onLoad"
      v-on="$listeners"
    />
    <slot
      name="placeholder"
      v-bind="{
        isPlaceholderVisible,
        placeholder,
        width,
        height,
        nuxtImgConfig,
      }"
    >
      <img
        :class="{ 'display-none': isPlaceholderVisible }"
        class="sf-image--placeholder"
        :src="placeholder"
        alt="Placeholder"
        :width="width || nuxtImgConfig.width"
        :height="height || nuxtImgConfig.height"
      />
    </slot>
    <span
      :class="{ 'display-none': !$slots.default }"
      class="sf-image--overlay"
    >
      <slot />
    </span>
    <noscript inline-template>
      <img
        :src="src"
        :alt="alt"
        class="sf-image sf-image-loaded"
        v-bind="$attrs"
        :width="width"
        :height="height"
      />
    </noscript>
  </span>
</template>
<script>
import imagePlaceholder from "@storefront-ui/shared/images/product_placeholder.svg";

export default {
  name: "SfImage",
  props: {
    src: {
      type: String,
      required: true,
    },
    srcsets: {
      type: Array,
      default: () => [],
      validator: (value) =>
        value.length === 0 ||
        value.every((item) => item.resolution && item.src) ||
        value.every((item) => item.src && item.width),
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: null,
      validator: (value) => !isNaN(value),
    },
    height: {
      type: [Number, String],
      default: null,
      validator: (value) => !isNaN(value),
    },
    placeholder: {
      type: String,
      default: imagePlaceholder,
    },
    loading: {
      type: String,
      default: "lazy",
      validator: (value) => ["", "lazy", "eager"].includes(value),
    },
    imageTag: {
      type: String,
      default: "img",
      validator: (value) =>
        ["", "img", "nuxt-img", "nuxt-picture"].includes(value),
    },
    nuxtImgConfig: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    sortedSrcsets() {
      const arr = [...this.srcsets];

      arr.sort((setA, setB) =>
        setA.width && setB.width
          ? Number.parseInt(setA.width) - Number.parseInt(setB.width)
          : Number.parseInt(setA.resolution) - Number.parseInt(setB.resolution)
      );
      return arr;
    },
    srcset() {
      if (this.sortedSrcsets.length === 0) return null;
      return this.sortedSrcsets.reduce(
        (str, set) =>
          `${this.prefix(str)}${set.src} ${this.srcsetDescriptor(set)}`,
        ""
      );
    },
    sizes() {
      const hasBreakpoints = this.sortedSrcsets.every(
        (set) => set.breakpoint && set.width
      );
      if (!hasBreakpoints) return null;
      return this.sortedSrcsets.reduce(
        (str, set) =>
          `${this.prefix(str)}${this.formatBreakpoint(
            set.breakpoint
          )}${this.formatDimension(set.width)}`,
        ""
      );
    },
    classes() {
      if (this.loaded) {
        return "sf-image sf-image-loaded";
      } else {
        return "sf-image";
      }
    },
    imageComponentTag() {
      return !this.$nuxt ? "img" : this.imageTag || "img";
    },
    isPlaceholderVisible() {
      return this.loaded || (!this.loaded && !this.placeholder);
    },
    attributes() {
      return this.imageTag === "img" || this.imageTag === ""
        ? {
            ...this.$attrs,
            sizes: this.sizes,
            srcset: this.srcset,
          }
        : {
            ...this.$attrs,
            width: this.width ? this.width : null,
            height: this.height ? this.height : null,
            ...this.nuxtImgConfig,
          };
    },
    styles() {
      if (
        !this.width &&
        !this.srcset &&
        (this.imageTag === "img" || this.imageTag === "")
      ) {
        console.error(`Missing required prop width.`);
      }
      if (
        !this.height &&
        !this.srcset &&
        (this.imageTag === "img" || this.imageTag === "")
      ) {
        console.error(`Missing required prop height.`);
      }
      const sizeHandler = (size) => {
        return size === null ? null : `${size}px`;
      };
      return {
        "--_image-width": sizeHandler(this.width),
        "--_image-height": sizeHandler(this.height),
      };
    },
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
    formatResolution(resolution) {
      return ("" + resolution).endsWith("x") ? resolution : `${resolution}x`;
    },
    formatDimension(size) {
      if (typeof size === null) return;
      if (
        ["%"].includes(`${size}`.slice(-1)) ||
        ["rem"].includes(`${size}`.slice(-3)) ||
        ["em", "px", "vw", "vh"].includes(`${size}`.slice(-2)) ||
        !parseInt(size, 10)
      ) {
        return size;
      } else {
        return `${size}px`;
      }
    },
    formatBreakpoint(breakpoint) {
      return breakpoint ? `(max-width: ${breakpoint}px) ` : "";
    },
    prefix(str) {
      return str ? `${str}, ` : "";
    },
    srcsetDescriptor(srcset) {
      return srcset.width
        ? `${Number.parseInt(srcset.width) || ""}w`
        : this.formatResolution(srcset.resolution);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfImage.scss";
</style>
