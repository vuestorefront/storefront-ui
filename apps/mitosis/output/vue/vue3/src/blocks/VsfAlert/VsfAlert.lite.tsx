<template>
  <div
    role="alert"
    :class="
      _classStringToObject(
        `flex flex-wrap justify-between min-h-[3.5rem] pl-4 pr-4 pt-3.5 pb-3.5 rounded-md shadow-medium border ${typeClasses}`
      )
    "
  >
    <div class="flex gap-2">
      <template v-if="!$slots.icon">
        <vsf-icon-info
          :class="_classStringToObject(iconClasses)"
        ></vsf-icon-info>
      </template>

      <template v-else>
        <div><slot name="icon" /></div>
      </template>

      <div class="flex flex-col flex-shrink text-gray-900 font-body">
        <span class="text-lg font-medium">{{ header }}</span>
        <span class="text-base font-normal leading-6">{{ description }}</span>
      </div>
    </div>

    <template v-if="!$slots.button">
      <button
        :class="_classStringToObject(usePersistentProp && 'hidden')"
        @click="close()"
      >
        <vsf-icon-close
          aria-hidden="true"
          :class="_classStringToObject(iconClasses)"
        ></vsf-icon-close>
      </button>
    </template>

    <template v-else>
      <div class="button"><slot name="button" /></div>
    </template>
  </div>
</template>

<script lang="ts">
type VsfAlertTypesKeys = keyof typeof VsfAlertTypes;
export interface VsfAlertProps {
  type?: VsfAlertTypesKeys;
  persistent?: boolean;
  header?: string;
  description?: string;
  slotIcon?: Element | Element[] | string; // TODO: replace with SlotType after Button merge

  slotButton?: Element | Element[] | string;
  handleCloseClick?: () => void;
}

import { classStringFromArray } from "../../functions/domUtils";
import VsfIconInfo from "../VsfIcons/VsfIconInfo.vue";
import VsfIconClose from "../VsfIcons/VsfIconClose.vue";
export const VsfAlertTypes = Object.freeze({
  info: "info",
  positive: "positive",
  warning: "warning",
  error: "error",
});
const DEFAULT_VALUES = {
  type: VsfAlertTypes.info,
  persistent: false,
};

export default {
  name: "vsf-alert",
  components: { "vsf-icon-info": VsfIconInfo, "vsf-icon-close": VsfIconClose },
  props: [
    "type",
    "persistent",
    "handleCloseClick",
    "slotIcon",
    "header",
    "description",
    "slotButton",
  ],

  computed: {
    useTypeProp() {
      return this.type ?? DEFAULT_VALUES.type;
    },
    usePersistentProp() {
      return this.persistent ?? DEFAULT_VALUES.persistent;
    },
    typeClasses() {
      return classStringFromArray([
        this.type === VsfAlertTypes.positive &&
          "bg-primary-100 border-primary-400",
        this.type === VsfAlertTypes.warning &&
          "bg-warning-100 border-warning-500",
        this.type === VsfAlertTypes.error &&
          "bg-negative-100 border-negative-400",
        this.type === VsfAlertTypes.info &&
          "bg-secondary-100 border-secondary-400",
      ]);
    },
    iconClasses() {
      return classStringFromArray([
        this.type === VsfAlertTypes.positive && "text-primary-600",
        this.type === VsfAlertTypes.warning && "text-warning-700",
        this.type === VsfAlertTypes.error && "text-negative-700",
        this.type === VsfAlertTypes.info && "text-secondary-800",
      ]);
    },
  },

  methods: {
    close() {
      this.$emit("close");
      this.handleCloseClick && this.handleCloseClick();
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
