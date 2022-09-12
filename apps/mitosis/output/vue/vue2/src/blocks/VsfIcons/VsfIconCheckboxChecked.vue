<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'checkbox-checked'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-checkbox-checked",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z'/><path d='M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-8.293 13.293a1 1 0 0 1-1.414 0l-3.585-3.585a1 1 0 0 1 1.414-1.415L10 14.17l6.878-6.877a1 1 0 0 1 1.415 1.414l-7.586 7.586Z" />
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
