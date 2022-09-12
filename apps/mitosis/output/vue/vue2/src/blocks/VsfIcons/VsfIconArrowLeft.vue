<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'arrow-left'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-arrow-left",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z'/><path d='M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
          <path d="M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z" />
        </>
      );
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
