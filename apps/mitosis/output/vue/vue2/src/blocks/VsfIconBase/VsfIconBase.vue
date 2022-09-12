<template>
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    v-html="useContentVue"
    :viewBox="viewBoxFromSvg || viewBox"
    :aria-label="ariaLabel"
    :class="
      _classStringToObject(`vsf-icon vsf-icon-${useSize} ${className || ''}`)
    "
  >
    /* IF-react */{{ useContentReact }}/* ENDIF-react */
  </svg>
</template>

<script>
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
      /* IF-vue */
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
      /* ENDIF-vue */
    },
    useContentReact() {
      /* IF-react */
      const reactElement = this.content;

      if (reactElement.length && reactElement[0].type === "svg") {
        return reactElement[0].this.children;
      } else if (!Array.isArray(reactElement)) {
        return reactElement.this.children;
      } else {
        return DEFAULT_VALUES.content;
      }
      /* ENDIF-react */
    },
    viewBoxFromSvg() {
      /* IF-vue */
      return /viewBox="([^"]+)"/.exec(this.content)?.[1];
      /* ENDIF-vue */

      /* IF-react */

      const reactElement = this.content;
      return reactElement?.[0]?.type === "svg"
        ? reactElement?.[0]?.props?.viewbox
        : void 0;
      /* ENDIF-react */
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
