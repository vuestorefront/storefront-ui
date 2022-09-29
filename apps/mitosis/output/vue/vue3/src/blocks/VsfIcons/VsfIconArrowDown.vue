<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'arrow-down'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconArrowDownProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-arrow-down",
  components: { VsfIconBase: VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z'/><path d='M18.294 15.705a.998.998 0 0 0-1.41-1.411L13 18.17V3a1 1 0 1 0-2 0v15.17l-3.88-3.88a1 1 0 0 0-1.415 1.415l5.588 5.588a1 1 0 0 0 1.414 0l5.587-5.588Z'/>";
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
