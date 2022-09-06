<template>
  <label :class="_classStringToObject(labelClass)">
    <input
      v-model="vueProxyValue"
      class="hidden peer"
      :type="useTypeProp"
      :disabled="disabled"
      @input="onChangeHandler($event)"
      :value="value"
    />

    <template v-if="!noThumb">
      <div :class="_classStringToObject(thumbClass)">
        <template v-if="$slots.thumb">
          <slot name="thumb" />
        </template>

        <template v-else>
          <div
            class="w-full rounded-full overflow-hidden m-0.5 bg-black"
            :style="{
              background: thumbColor,
            }"
          ></div>
        </template>
      </div>
    </template>

    <template v-if="label">
      <span
        class="font-normal ml-1.5 mr-2 first-of-type:mx-2 text-gray-900 peer-disabled:text-opacity-40"
      >
        {{ label }}
      </span>
    </template>

    <div :class="_classStringToObject(backgroundClass)"></div>
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
  thumbColor?: string;
}

import { classStringFromArray } from "@sfui/mitosis/src/functions/domUtils";
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
    "noThumb",
    "thumbColor",
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
          return "text-sm h-7 p-1";

        case VsfChipsFilterVariants.lg:
          return "text-base h-10 p-2 gap-0.5";

        default:
          return "text-sm h-8 p-1";
      }
    },
    backgroundClass() {
      return classStringFromArray([
        "w-full h-full absolute top-0 left-0 ring-1 ring-gray-200 ring-inset cursor-pointer -z-10 rounded-full ",
        "peer-checked:ring-2 peer-checked:ring-primary-500 peer-hover:ring-primary-500 peer-active:ring-primary-500",
        "peer-hover:bg-primary-100 peer-active:bg-primary-200",
        "peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100/50 peer-disabled:ring-1 peer-disabled:ring-gray-200/50",
      ]);
    },
    labelClass() {
      return classStringFromArray([
        "inline-flex relative items-center ",
        this.disabled ? "cursor-not-allowed" : "cursor-pointer",
        this.sizeClass,
      ]);
    },
    thumbClass() {
      return classStringFromArray([
        "rounded-full overflow-hidden flex opacity-50 peer-checked:opacity-100 peer-disabled:opacity-20",
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
