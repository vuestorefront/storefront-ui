<template>
  <div class="sf-image--wrapper">
    <img
      loading="lazy"
      v-bind="$attrs"
      :src="src"
      :srcset="srcset"
      :sizes="sizes"
      :class="classes"
      :width="width"
      :height="height"
      :alt="alt && alt.trim()"
      @load="loading"
      v-on="$listeners"
    />
    <img
      v-if="!loaded && placeholder"
      class="sf-image--placeholder"
      :src="placeholder"
      alt="Placeholder"
    />
    <div v-if="$slots.default" class="sf-image--overlay">
      <slot />
    </div>
  </div>
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
      validator: (value) => value && !!value.trim(),
    },
    width: {
      type: [String, Number],
      default: "",
    },
    height: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
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
    sizes() {
      const hasBreakpoints = this.sortedSrcsets.every(
        (set) => set.breakpoint && set.width
      );

      if (!hasBreakpoints) return null;

      return this.sortedSrcsets.reduce(
        (str, set) =>
          `${this.prefix(str)}${this.formatBreakpoint(
            set.breakpoint
          )}${this.formatWidth(set.width)}`,
        ""
      );
    },
    classes() {
      return `sf-image ${this.loaded && "sf-image-loaded"}`;
    },
  },
  methods: {
    loading() {
      this.loaded = true;
    },
    formatResolution(resolution) {
      return ("" + resolution).endsWith("x") ? resolution : `${resolution}x`;
    },
    formatWidth(width) {
      return ["em", "px", "vw"].includes(`${width}`.slice(-2))
        ? width
        : `${width}px`;
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
