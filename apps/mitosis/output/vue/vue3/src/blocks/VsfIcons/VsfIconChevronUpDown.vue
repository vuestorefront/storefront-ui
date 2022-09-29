<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'chevron-up-down'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconChevronUpDownProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-chevron-up-down",
  components: { VsfIconBase: VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path fill-rule='evenodd' clip-rule='evenodd' d='M6.41 8.291c.39.39 1.02.39 1.41 0l3.885-3.875 3.885 3.876A.998.998 0 0 0 17 6.88l-4.588-4.587a1 1 0 0 0-1.414 0L6.41 6.88a.998.998 0 0 0 0 1.411ZM17 15.71a.998.998 0 0 0-1.41 0l-3.885 3.875-3.884-3.876a.998.998 0 0 0-1.41 1.412l4.587 4.587a1 1 0 0 0 1.414 0L17 17.12a.998.998 0 0 0 0-1.411Z'/>";
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
