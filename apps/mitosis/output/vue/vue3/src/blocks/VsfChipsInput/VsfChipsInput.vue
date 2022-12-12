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

    <template v-if="label">
      <span class="text-gray-900 chip__content">{{ label }}</span>
    </template>

    <slot name="close" />

    <template v-if="!$slots.close && !disabled">
      <button
        class="inline-flex bg-transparent chip__right-icon group"
        @click="close($event)"
      >
        <!-- <vsf-icon-close
          class="text-gray-500 transition-colors duration-300 ease group-hover:text-primary-600 group-focus-within:text-primary-600 group-active:text-primary-700"
          :size="closeSize"
          :ariaLabel="`Close ${label} chip`"
        ></vsf-icon-close> -->
      </button>
    </template>
  </div>
</template>

<script lang="ts">
export type VsfChipsInputVariantsKeys = keyof typeof VsfChipsInputVariants;
export interface VsfChipsInputProps {
  size?: VsfChipsInputVariantsKeys;
  label?: any;
  disabled?: boolean;
  slotPrefix?: any;
  slotClose?: any;
  handleChipClose?: (e?: Event) => void;
} // TODO: refactor, no important, no borders, icon changed so spacings as well

// import VsfIconClose from "../VsfIcons/VsfIconClose.vue";
export const VsfChipsInputVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});

export default {
  name: "vsf-chips-input",
  // components: { "vsf-icon-close": VsfIconClose },
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
      this.$emit("close", event);
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
