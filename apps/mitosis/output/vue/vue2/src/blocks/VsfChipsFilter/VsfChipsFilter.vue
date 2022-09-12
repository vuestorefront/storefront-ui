<template>
  <label class="chips-filter inline-flex rounded-full relative">
    <input
      v-model="vueProxyValue"
      class="peer appearance-none outline-none absolute"
      :type="useTypeProp"
      :disabled="disabled"
      @input="onChangeHandler($event)"
      :value="value"
    />
    <div :class="_classStringToObject(chipClass)">
      <div v-if="$slots.thumb" :class="_classStringToObject(thumbClass)">
        <slot name="thumb" />
      </div>

      <span
        class="chips-filter__label chip__content font-normal text-gray-900"
        v-if="label"
        >{{ label }}</span
      >
    </div>
  </label>
</template>

<script>
import { classStringFromArray } from "../../functions/domUtils";
export const VsfChipsFilterVariants = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});

export default {
  name: "vsf-chips-filter",

  props: [
    "type",
    "size",
    "disabled",
    "modelValue",
    "onChange",
    "value",
    "slotThumb",
    "label",
  ],

  computed: {
    useTypeProp() {
      return this.type === "radio" ? "radio" : "checkbox";
    },
    sizeClass() {
      switch (this.size) {
        case VsfChipsFilterVariants.sm:
          return "size--sm";

        case VsfChipsFilterVariants.lg:
          return "size--lg";

        default:
          return "size--base";
      }
    },
    chipClass() {
      return classStringFromArray([
        "chips-filter__wrapper chip transition duration-300 ease",
        "peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500",
        "peer-hover:bg-primary-100 peer-active:bg-primary-200",
        "peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50",
        "outline-offset-2 outline-violet-400 peer-focus:outline",
        this.disabled ? "chip--disabled" : "",
        this.sizeClass,
      ]);
    },
    thumbClass() {
      return classStringFromArray([
        "chips-filter__thumb chip__left-icon",
        "rounded-full flex opacity-50",
        this.size === VsfChipsFilterVariants.sm ? "h-5 w-5" : "h-6 w-6",
      ]);
    },
    vueProxyValue() {
      return {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
      };
    },
  },

  methods: {
    onChangeHandler(event) {
      this.onChange && this.onChange(event);
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
