<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'triangle-left'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-triangle-left",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M8.359 11.059a1 1 0 0 0 0 1.518l4.463 3.826a1 1 0 0 0 1.651-.76v-7.65a1 1 0 0 0-1.65-.76L8.358 11.06Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M8.359 11.059a1 1 0 0 0 0 1.518l4.463 3.826a1 1 0 0 0 1.651-.76v-7.65a1 1 0 0 0-1.65-.76L8.358 11.06Z" />
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
