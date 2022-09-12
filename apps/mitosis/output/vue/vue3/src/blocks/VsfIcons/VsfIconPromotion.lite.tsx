<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'promotion'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconPromotionProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-promotion",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path fill-rule='evenodd' clip-rule='evenodd' d='m20.991 9.077 1.405 1.607a2 2 0 0 1 0 2.633l-1.405 1.606.196 2.12a2 2 0 0 1-1.549 2.134l-2.072.47-1.085 1.831a2 2 0 0 1-2.51.818l-1.947-.836-1.945.841a2 2 0 0 1-2.515-.816l-1.082-1.827-2.073-.47a2 2 0 0 1-1.549-2.134l.196-2.131-1.407-1.609a2 2 0 0 1-.002-2.63l1.41-1.617L2.86 6.94a2 2 0 0 1 1.554-2.134l2.067-.464 1.084-1.83a2 2 0 0 1 2.51-.819l1.948.837 1.945-.836a2 2 0 0 1 2.511.82l1.086 1.838 2.072.471a2 2 0 0 1 1.549 2.134l-.196 2.12ZM7.317 16.722a1.048 1.048 0 0 1 0-1.482l7.947-7.947a1.048 1.048 0 0 1 1.481 1.482l-7.947 7.947a1.047 1.047 0 0 1-1.481 0Zm3.711-7.812a2.095 2.095 0 1 1-4.19 0 2.095 2.095 0 0 1 4.19 0Zm6.286 6.285a2.095 2.095 0 1 1-4.19 0 2.095 2.095 0 0 1 4.19 0Z'/>";
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
