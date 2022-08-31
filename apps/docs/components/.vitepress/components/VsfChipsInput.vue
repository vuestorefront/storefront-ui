<template>
  <div
    :class="
      _classStringToObject(
        `rounded-full group pl-0.5 pr-1 py-0.5 text-gray-900 bg-white border-2 border-primary-500 font-body font-normal inline-flex items-center align-center w-max cursor-pointer transition duration-300 ease outline-violet ${disabledClass} ${valueClass}`
      )
    "
  >
    <div :class="_classStringToObject(chipsIconSize)">
      <slot name="icon" />
    </div>

    <template v-if="!!useValueProp">
      <span :class="_classStringToObject(`ml-1 ${chipsFontSize}`)">{{
        useValueProp
      }}</span>
    </template>

    <slot name="close" />

    <template v-if="!slotClose && !useDisabledProp">
      <button
        :class="
          _classStringToObject(
            `bg-transparent ${chipsButtonSpacing} ${hideButton}`
          )
        "
        @click="close($event)"
      >
        <svg
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          :class="
            _classStringToObject(
              `first-letter:transition duration-300 fill-gray-500 group-hover:fill-primary-600 group-active:fill-primary-700 ease ${chipsSize}`
            )
          "
          :aria-label="`Close ${useValueProp} chip`"
        >
          <path
            d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z"
          ></path>
          <path
            d="M12.1964 4.74332C12.456 4.48375 12.456 4.0629 12.1964 3.80332C11.9368 3.54375 11.516 3.54375 11.2564 3.80332L7.99975 7.05999L4.74308 3.80332C4.4835 3.54375 4.06265 3.54375 3.80308 3.80332C3.5435 4.0629 3.5435 4.48375 3.80308 4.74332L7.05975 7.99999L3.80308 11.2567C3.5435 11.5162 3.5435 11.9371 3.80308 12.1967C4.06265 12.4562 4.4835 12.4562 4.74308 12.1967L7.99975 8.93999L11.2564 12.1967C11.516 12.4562 11.9368 12.4562 12.1964 12.1967C12.456 11.9371 12.456 11.5162 12.1964 11.2567L8.93975 7.99999L12.1964 4.74332Z"
          ></path>
        </svg>
      </button>
    </template>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export const SizeTypes = Object.freeze({
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
});
const DEFAULT_VALUES = {
  size: SizeTypes.MEDIUM,
  disabled: false,
  value: "",
};

export default {
  name: "chips-input",

  props: [
    "size",
    "value",
    "disabled",
    "handleChipClose",
    "slotIcon",
    "slotClose",
  ],

  computed: {
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    useValueProp() {
      return this.value || DEFAULT_VALUES.value;
    },
    useDisabledProp() {
      return this.disabled || DEFAULT_VALUES.disabled;
    },
    chipsSize() {
      switch (this.useSizeProp) {
        case SizeTypes.SMALL:
          return "w-4 h-4";

        case SizeTypes.LARGE:
          return "w-5 h-5";

        default:
          return "w-4 h-4";
      }
    },
    chipsIconSize() {
      switch (this.useSizeProp) {
        case SizeTypes.SMALL:
          return "w-5 h-5";

        case SizeTypes.LARGE:
          return "w-8 h-8";

        default:
          return "w-6 h-6";
      }
    },
    chipsFontSize() {
      switch (this.useSizeProp) {
        case SizeTypes.SMALL:
          return "text-sm";

        case SizeTypes.LARGE:
          return "text-base";

        default:
          return "text-sm";
      }
    },
    chipsButtonSpacing() {
      switch (this.useSizeProp) {
        case SizeTypes.SMALL:
          return "ml-2 mr-1";

        case SizeTypes.LARGE:
          return "ml-3 mr-1.5";

        default:
          return "ml-2.5 mr-1";
      }
    },
    hideButton() {
      return !this.useValueProp ? "hidden" : "block";
    },
    disabledClass() {
      return this.useDisabledProp
        ? "!pr-3 bg-gray-100 border-gray-200 opacity-50 !cursor-not-allowed"
        : "";
    },
    valueClass() {
      return this.useValueProp ? "!pr-0. " : "";
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
