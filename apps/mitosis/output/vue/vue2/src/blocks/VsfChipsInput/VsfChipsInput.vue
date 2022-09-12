<template>
  <div
    :class="
      _classStringToObject(
        `chip chip--primary transition duration-300 ease ${sizeClass} ${disabledClass}`
      )
    "
  >
    <div :class="_classStringToObject(`chip__left-icon vsf-icon-${chipsSize}`)">
      <slot name="prefix" />
    </div>

    <span class="chip__content text-gray-900" v-if="label">{{ label }}</span>

    <slot name="close" />

    <button
      class="bg-transparent inline-flex chip__right-icon group"
      v-if="!$slots.close && !disabled"
      @click="close($event)"
    >
      <vsf-icon-close
        class="transition-colors duration-300 ease text-gray-500 group-hover:text-primary-600 group-focus-within:text-primary-600 group-active:text-primary-700"
        :size="closeSize"
        :ariaLabel="`Close ${label} chip`"
      ></vsf-icon-close>
    </button>
  </div>
</template>

<script>
import VsfIconClose from "../VsfIcons/VsfIconClose.vue";
export const VsfChipsInputVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});

export default {
  name: "vsf-chips-input",
  components: { "vsf-icon-close": VsfIconClose },
  props: [
    "size",
    "disabled",
    "handleChipClose",
    "slotPrefix",
    "label",
    "slotClose",
  ],

  computed: {
    chipsSize() {
      switch (this.size) {
        case VsfChipsInputVariants.sm:
          return "sm";

        default:
          return "base";
      }
    },
    closeSize() {
      switch (this.size) {
        case VsfChipsInputVariants.lg:
          return "base";

        default:
          return "sm";
      }
    },
    sizeClass() {
      switch (this.size) {
        case VsfChipsInputVariants.sm:
          return "size--sm";

        case VsfChipsInputVariants.lg:
          return "size--lg";

        default:
          return "size--base";
      }
    },
    disabledClass() {
      return this.disabled ? "chip--disabled" : "";
    },
  },

  methods: {
    close(event) {
      /* IF-vue */
      this.$emit("close", event);
      /* ENDIF-vue */

      this.handleChipClose && this.handleChipClose(event);
    },
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
