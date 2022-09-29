<template>
  <template v-if="useLinkProp">
    <a
      role="button"
      aria-role="menuitem"
      :href="useLinkProp"
      :class="_classStringToObject(mainClass)"
      :disabled="useDisabled"
      :aria-disabled="useDisabled"
    >
      <template v-if="$slots.prefix">
        <span :class="_classStringToObject(slotPrefixClass)">
          <slot name="prefix" />
        </span>
      </template>

      <span :class="_classStringToObject(textClass)">
        <span
          :class="
            _classStringToObject(
              `flex flex-wrap ${useSelectedProp ? 'font-medium' : ''}`
            )
          "
        >
          {{ usePrimaryTextProp }}

          <template v-if="useCounterProp && !useSecondaryTextProp">
            <vsf-counter size="lg" class="ml-2 group-disabled:opacity-40">{{
              useCounterProp
            }}</vsf-counter>
          </template>
        </span>
        <span
          :class="
            _classStringToObject(
              `text-left ${useTruncatedTextProp ? 'truncate' : ''}`
            )
          "
        >
          {{ useSecondaryTextProp }}

          <template v-if="useCounterProp && useSecondaryTextProp">
            <vsf-counter size="lg" class="ml-2 group-disabled:opacity-40">{{
              useCounterProp
            }}</vsf-counter>
          </template>
        </span>
      </span>

      <template v-if="$slots.suffix">
        <span
          :class="
            _classStringToObject(
              `absolute right-3 vsf-icon-${
                useSizeProp === 'sm' ? 'sm' : 'base'
              }`
            )
          "
        >
          <slot name="suffix" />
        </span>
      </template>
    </a>
  </template>

  <template v-else>
    <button
      :class="_classStringToObject(mainClass)"
      :disabled="useDisabled"
      @click="click($event)"
      :aria-disabled="useDisabled"
    >
      <template v-if="$slots.prefix">
        <span :class="_classStringToObject(slotPrefixClass)">
          <slot name="prefix" />
        </span>
      </template>

      <span :class="_classStringToObject(textClass)">
        <span
          :class="
            _classStringToObject(
              `flex flex-wrap ${useSelectedProp ? 'font-medium' : ''}`
            )
          "
        >
          {{ usePrimaryTextProp }}

          <template v-if="useCounterProp && !useSecondaryTextProp">
            <vsf-counter size="lg" class="ml-2 group-disabled:opacity-40">{{
              useCounterProp
            }}</vsf-counter>
          </template>
        </span>
        <span
          :class="
            _classStringToObject(
              `text-left ${useTruncatedTextProp ? 'truncate' : ''}`
            )
          "
        >
          {{ useSecondaryTextProp }}

          <template v-if="useCounterProp && useSecondaryTextProp">
            <vsf-counter size="lg" class="ml-2 group-disabled:opacity-40">{{
              useCounterProp
            }}</vsf-counter>
          </template>
        </span>
      </span>

      <template v-if="$slots.suffix">
        <span
          :class="
            _classStringToObject(
              `absolute right-3 vsf-icon-${
                useSizeProp === 'sm' ? 'sm' : 'base'
              }`
            )
          "
        >
          <slot name="suffix" />
        </span>
      </template>
    </button>
  </template>
</template>

<script lang="ts">
type VsfListItemMenuKeys = keyof typeof VsfListItemMenuSize;
export interface VsfListItemMenuProps {
  link?: string;
  size?: VsfListItemMenuKeys;
  selected: boolean;
  primaryText: string;
  secondaryText?: string;
  truncatedText?: boolean;
  counter?: string;
  disabled?: boolean;
  children?: SlotType;
  slotPrefix?: SlotType;
  slotSuffix?: SlotType;
  handleClick?: (e?: Event) => void;
}

import { SlotType } from "../../functions/types";
import { classStringFromArray } from "../../functions/domUtils";
import VsfCounter from "../VsfCounter/VsfCounter.vue";
export const VsfListItemMenuSize = Object.freeze({
  sm: "sm",
  base: "base",
  lg: "lg",
});
const DEFAULT_VALUES: Required<VsfListItemMenuProps> = {
  link: "",
  size: "base",
  selected: false,
  primaryText: "",
  secondaryText: "",
  counter: "",
  truncatedText: false,
  disabled: false,
};

export default {
  name: "vsf-list-item-menu",
  components: { "vsf-counter": VsfCounter },
  props: [
    "link",
    "size",
    "selected",
    "primaryText",
    "secondaryText",
    "counter",
    "truncatedText",
    "disabled",
    "handleClick",
    "slotPrefix",
    "slotSuffix",
  ],

  computed: {
    useLinkProp() {
      return this.link || DEFAULT_VALUES.link;
    },
    useSizeProp() {
      return this.size || DEFAULT_VALUES.size;
    },
    useSelectedProp() {
      return this.selected || DEFAULT_VALUES.selected;
    },
    usePrimaryTextProp() {
      return this.primaryText || DEFAULT_VALUES.primaryText;
    },
    useSecondaryTextProp() {
      return this.secondaryText || DEFAULT_VALUES.secondaryText;
    },
    useCounterProp() {
      return this.counter || DEFAULT_VALUES.counter;
    },
    useTruncatedTextProp() {
      return this.truncatedText || DEFAULT_VALUES.truncatedText;
    },
    useDisabled() {
      return this.disabled || DEFAULT_VALUES.disabled;
    },
    slotPrefixClass() {
      return classStringFromArray([
        this.$slots.prefix && "pr-2",
        `vsf-icon-${this.useSizeProp === "sm" ? "sm" : "base"}`,
        this.useSelectedProp ? "text-gray-900" : "text-gray-500",
        "flex items-center group-hover:text-primary-600 group-active:text-primary-700",
      ]);
    },
    textClass() {
      return classStringFromArray([
        this.useSizeProp === "sm" ? "pr-7" : "pr-8",
        this.useTruncatedTextProp ? "inline-block truncate" : "break-all",
        "flex flex-col",
      ]);
    },
    listItemMenuSizes() {
      switch (this.useSizeProp) {
        case VsfListItemMenuSize.sm:
          return "h-8 text-sm py-[1.5] pr-3 pl-4";

        case VsfListItemMenuSize.lg:
          return "h-14 py-4 pr-3 pl-4";

        default:
          return "h-10 py-2 pr-3 pl-4";
      }
    },
    mainClass() {
      return classStringFromArray([
        "group flex w-full justify-start items-center relative font-body text-gray-900 cursor-pointer",
        this.useSecondaryTextProp ? "pl-4" : this.listItemMenuSizes,
        this.useTruncatedTextProp ? "overflow-hidden" : "",
        this.useSelectedProp ? "bg-gray-100" : "",
        this.useDisabled
          ? "gray-900/40 pointer-events-none opacity-50"
          : "hover:text-primary-600 hover:bg-gray-100 active:text-primary-700 active:bg-gray-200 focus-within:outline focus-within:outline-4 focus-within:outline-offset-2 focus-within:outline-violet-400",
      ]);
    },
  },

  methods: {
    click(event) {
      this.$emit("click", event);
      this.handleClick && this.handleClick(event);
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
