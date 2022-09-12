<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'arrow-right'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-arrow-right",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z'/><path d='M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
          <path d="M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z" />
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
