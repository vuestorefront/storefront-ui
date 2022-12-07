<template>
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    v-html="useContentVue"
    :viewBox="viewBoxFromSvg || viewBox"
    :aria-label="ariaLabel"
    :class="`vsf-icon vsf-icon-${useSize} ${className || ''}`"
  ></svg>
</template>

<script lang="ts">
type VsfIconSizeKeys = keyof typeof VsfIconSize; // TODO: write separate overwrite components when possible (bug react component create es6 bundle with import, not copying file)
// TODO: think later about if maybe better would be to require user to strip svg element and pass only paths
// TODO: write separate overwrite components when possible (bug react component create es6 bundle with import, not copying file)
// TODO: think later about if maybe better would be to require user to strip svg element and pass only paths
export interface VsfIconBaseProps {
  content: React.ReactElement[] | React.ReactElement | string;
  size?: VsfIconSizeKeys;
  viewBox: string;
  className?: string;
  ariaLabel?: string;
}

export const VsfIconSize = Object.freeze({
  xs: "xs",
  sm: "sm",
  base: "base",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
  "3xl": "3xl",
});
const DEFAULT_VALUES = {
  content: "",
  size: VsfIconSize.base,
};

export default {
  name: "vsf-icon-base",

  props: ["size", "content", "viewBox", "ariaLabel", "className"],

  computed: {
    useSize() {
      return this.size || DEFAULT_VALUES.size;
    },
    useContentVue() {
      if (this.content && typeof this.content === "string") {
        if (this.content.substring(0, 4) === "<svg") {
          return this.content.substring(
            this.content.indexOf(">") + 1,
            this.content.lastIndexOf("<")
          );
        } else {
          return this.content;
        }
      } else {
        return DEFAULT_VALUES.content;
      }
    },
    useContentReact() {},
    viewBoxFromSvg() {
      return /viewBox="([^"]+)"/.exec(this.content)?.[1];
    },
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
