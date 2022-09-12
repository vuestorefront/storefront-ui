<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'help'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconHelpProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-help",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 15.833a1.25 1.25 0 1 1 0-2.501 1.25 1.25 0 0 1 0 2.501Zm1.333-5.066a.834.834 0 0 0-.5.764.834.834 0 0 1-1.666 0 2.5 2.5 0 0 1 1.5-2.292 1.667 1.667 0 1 0-2.334-1.527.834.834 0 0 1-1.666 0 3.333 3.333 0 1 1 4.666 3.056v-.001Z'/>";
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
