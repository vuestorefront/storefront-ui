<template>
  <span
    class="sf-image--wrapper"
    :style="imageStyle"
    data-testid="image-wrapper"
  >
    <component
      :is="imageComponentTag"
      :loading="loading"
      v-bind="attributes"
      :src="src"
      :srcset="srcset"
      :class="classes"
      :width="width"
      :height="height"
      :alt="alt"
      @load="onLoad"
      v-on="$listeners"
    />
    <img
      :class="{ 'display-none': imageComponentTag !== 'img' || (loaded || (loaded && placeholder)) }"
      class="sf-image--placeholder"
      :src="placeholder"
      alt="Placeholder"
      :width="width"
      :height="height"
    />
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
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    loading: {
      type: String,
      default: "lazy",
      validator: (value) => ["", "lazy", "eager"].includes(value),
    },
    imageTag: {
      type: String,
      default: "img",
      validator: (value) => ["img", "nuxt-img", "nuxt-picture"].includes(value),
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
      return this.sortedSrcsets.reduce(
        (str, set) =>
          `${this.prefix(str)}${set.src} ${this.srcsetDescriptor(set)}`,
        ""
      );
    },
    srcsetsSizes() {
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
    imageStyle() {
      return {
        "--image-width":
          typeof this.width === "string"
            ? this.formatDimension(this.width)
            : `${this.width}px`,
        "--image-height":
          typeof this.height === "string"
            ? this.formatDimension(this.height)
            : `${this.height}px`,
      };
    },
    imageComponentTag() {
      return !this.$nuxt ? "img" : this.imageTag;
    },
    conditionalFit() {
      const fitCheck = () => {
        if (this.nuxtImgConfig.fit) { 
          return this.nuxtImgConfig.fit
         } else { 
          console.error('Missing prop fit.')
        };
      }
      return this.imageTag === "img" ? this.nuxtImgConfig.fit : fitCheck();
    },
    attributes() {
      return this.imageTag === "img" ? this.$attrs : { ...this.$attrs, ...this.nuxtImgConfig, sizes: this.srcsetsSizes || this.nuxtImgConfig.sizes }
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
  created() {
    if (this.imageComponentTag !== 'img') this.loaded = true;    
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfImage.scss";
</style>
