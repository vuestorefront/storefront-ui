<template>
  <details
    :class="
      _classStringToObject(
        `${headerSizeClass} vsf-accordion w-full text-gray-900 normal-case border-none rounded-none shadow-none cursor-pointer h-11 font-body disabled:cursor-not-allowed`
      )
    "
    :open="open"
  >
    <summary
      :class="
        _classStringToObject(
          `${
            useChevronLeftProp
              ? 'flex-row-reverse justify-end'
              : 'justify-between'
          } vsf-accordion__header group w-full inline-flex items-center p-4 hover:shadow-none hover:text-primary-600 hover:bg-gray-100 active:text-gray-900 outline-violet`
        )
      "
    >
      <slot name="prefix" />

      <template v-if="!$slots.prefix">
        <span
          :class="
            _classStringToObject(
              `${useChevronLeftProp ? 'ml-2' : ''} text-base font-medium`
            )
          "
        >
          {{ title }}
        </span>
      </template>

      <slot name="suffix" />

      <template v-if="!$slots.suffix">
        <vsf-icon-triangle-up
          class="w-6 h-6 transition-transform vsf-accordion__icon fill-gray-500 group-hover:fill-primary-600 group-active:fill-gray-500"
        ></vsf-icon-triangle-up>
      </template>
    </summary>
    <div class="px-4 py-2 text-gray-500">
      <slot />
    </div>
  </details>
</template>

<script lang="ts">
type VsfAccordionHeaderSizeKeys = keyof typeof VsfAccordionHeaderSize;
export interface VsfAccordionProps {
  open: boolean;
  title?: string;
  chevronLeft?: boolean;
  headerSize?: VsfAccordionHeaderSizeKeys;
  slotSuffix?: SlotType;
  children?: SlotType;
}

import { validator } from "../../functions/propUtils";
import { SlotType } from "../../functions/types";
import VsfIconTriangleUp from "../VsfIcons/VsfIconTriangleUp";
export const VsfAccordionHeaderSize = Object.freeze({
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES = {
  open: false,
  title: "",
  chevronLeft: false,
  headerSize: VsfAccordionHeaderSize.base,
};

export default {
  name: "vsf-accordion",
  components: { VsfIconTriangleUp: VsfIconTriangleUp },
  props: ["chevronLeft", "headerSize", "open", "title"],

  computed: {
    useChevronLeftProp() {
      return this.chevronLeft || DEFAULT_VALUES.chevronLeft;
    },
    useHeaderSizeProp() {
      return validator(
        Object.keys(VsfAccordionHeaderSize),
        this.headerSize,
        DEFAULT_VALUES.headerSize
      );
    },
    headerSizeClass() {
      switch (this.useHeaderSizeProp) {
        case VsfAccordionHeaderSize.lg:
          return "h-14";

        default:
          return "h-10";
      }
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
