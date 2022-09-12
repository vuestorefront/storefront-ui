<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'minus'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-minus",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path fill-rule='evenodd' clip-rule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z"
          />
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
