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
      <template v-if="$slots.thumb">
        <div :class="_classStringToObject(thumbClass)">
          <slot name="thumb" />
        </div>
      </template>

      <template v-if="label">
        <span
          class="chips-filter__label chip__content font-normal text-gray-900"
          >{{ label }}</span
        >
      </template>
    </div>
  </label>
</template>

<script lang="ts">
type VsfChipsFilterVariantsKeys = keyof typeof VsfChipsFilterVariants;
export interface VsfChipsFilterProps {
  size?: VsfChipsFilterVariantsKeys;
  type?: "checkbox" | "radio";
  slotThumb?: any;
  label?: string;
  disabled?: boolean;
  noThumb?: boolean;
  onChange?: (...args: any[]) => void;
  value?: any;
}

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
    vueProxyValue: {
        get: function () {
          return this.modelValue;
        },
        set: function (value) {
          this.$emit("update:modelValue", value);
        },
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
