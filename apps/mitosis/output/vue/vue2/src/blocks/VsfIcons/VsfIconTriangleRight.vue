<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'triangle-right'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-triangle-right",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M14.124 10.886a1 1 0 0 1 0 1.519L9.661 16.23a1 1 0 0 1-1.651-.76V7.82a1 1 0 0 1 1.65-.76l4.464 3.826Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M14.124 10.886a1 1 0 0 1 0 1.519L9.661 16.23a1 1 0 0 1-1.651-.76V7.82a1 1 0 0 1 1.65-.76l4.464 3.826Z" />
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
