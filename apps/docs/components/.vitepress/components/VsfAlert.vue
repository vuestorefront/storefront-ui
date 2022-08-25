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
      <template v-if="useDefaultIconProp">
        <div name="icon">
          <template v-if="useTypeProp === VsfAlertTypes.info">
            <svg
                aria-hidden="true"
                class="w-6 h-6 fill-secondary-800"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17Z"
              ></path>
              <path
                  d="M12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25Z"
              ></path>
              <path
                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
              ></path>
              <path
                  d="M12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17Z"
              ></path>
              <path
                  d="M12 9.25C12.6904 9.25 13.25 8.69036 13.25 8C13.25 7.30964 12.6904 6.75 12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25Z"
              ></path>
              <path
                  d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
              ></path>
            </svg>
          </template>

          <template v-if="useTypeProp === VsfAlertTypes.positive">
            <svg
                class="w-6 h-6 fill-positive-600"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.7071 16.2929C10.3166 16.6834 9.68342 16.6834 9.29289 16.2929L5.70549 12.7055C5.31586 12.3159 5.31586 11.6841 5.70549 11.2945C6.09474 10.9053 6.7257 10.9048 7.11549 11.2935L10 14.17L16.5829 7.4971C16.9744 7.1056 17.6099 7.10712 18 7.5C18.3882 7.89092 18.3874 8.52255 17.9979 8.9121L10.7071 16.2929Z"
              ></path>
              <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.7071 16.2929C10.3166 16.6834 9.68342 16.6834 9.29289 16.2929L5.70549 12.7055C5.31586 12.3159 5.31586 11.6841 5.70549 11.2945C6.09474 10.9053 6.7257 10.9048 7.11549 11.2935L10 14.17L16.5829 7.4971C16.9744 7.1056 17.6099 7.10712 18 7.5C18.3882 7.89092 18.3874 8.52255 17.9979 8.9121L10.7071 16.2929Z"
              ></path>
              <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.7071 16.2929C10.3166 16.6834 9.68342 16.6834 9.29289 16.2929L5.70549 12.7055C5.31586 12.3159 5.31586 11.6841 5.70549 11.2945C6.09474 10.9053 6.7257 10.9048 7.11549 11.2935L10 14.17L16.5829 7.4971C16.9744 7.1056 17.6099 7.10712 18 7.5C18.3882 7.89092 18.3874 8.52255 17.9979 8.9121L10.7071 16.2929Z"
              ></path>
              <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.7071 16.2929C10.3166 16.6834 9.68342 16.6834 9.29289 16.2929L5.70549 12.7055C5.31586 12.3159 5.31586 11.6841 5.70549 11.2945C6.09474 10.9053 6.7257 10.9048 7.11549 11.2935L10 14.17L16.5829 7.4971C16.9744 7.1056 17.6099 7.10712 18 7.5C18.3882 7.89092 18.3874 8.52255 17.9979 8.9121L10.7071 16.2929Z"
              ></path>
            </svg>
          </template>

          <template v-if="useTypeProp === VsfAlertTypes.warning">
            <svg
                class="w-6 h-6 fill-warning-700"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12.0024 9C12.5547 9 13.0024 9.44772 13.0024 10V12.5C13.0024 13.0523 12.5547 13.5 12.0024 13.5C11.4502 13.5 11.0024 13.0523 11.0024 12.5V10C11.0024 9.44772 11.4502 9 12.0024 9Z"
              ></path>
              <path
                  d="M13.3064 16.4149C13.3064 17.1362 12.7216 17.7209 12.0004 17.7209C11.2791 17.7209 10.6943 17.1362 10.6943 16.4149C10.6943 15.6936 11.2791 15.1089 12.0004 15.1089C12.7216 15.1089 13.3064 15.6936 13.3064 16.4149Z"
              ></path>
              <path
                  d="M10.2578 4.06725C11.0217 2.70447 12.9832 2.70447 13.7471 4.06725L21.5664 18.0171C22.3137 19.3503 21.3501 20.995 19.8218 20.995H4.18308C2.65475 20.995 1.69117 19.3503 2.43846 18.0171L10.2578 4.06725ZM19.3951 18.995C19.5861 18.995 19.7066 18.7894 19.6131 18.6228L12.2205 5.43422C12.125 5.26387 11.8798 5.26387 11.7844 5.43422L4.39173 18.6228C4.29832 18.7894 4.41877 18.995 4.60981 18.995L19.3951 18.995Z"
              ></path>
            </svg>
          </template>

          <template v-if="useTypeProp === VsfAlertTypes.error">
            <svg
                class="w-6 h-6 fill-negative-700"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8L11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12L13 8ZM10.75 16C10.75 15.3096 11.3096 14.75 12 14.75C12.6904 14.75 13.25 15.3096 13.25 16C13.25 16.6904 12.6904 17.25 12 17.25C11.3096 17.25 10.75 16.6904 10.75 16Z"
              ></path>
              <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8L11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12L13 8ZM10.75 16C10.75 15.3096 11.3096 14.75 12 14.75C12.6904 14.75 13.25 15.3096 13.25 16C13.25 16.6904 12.6904 17.25 12 17.25C11.3096 17.25 10.75 16.6904 10.75 16Z"
              ></path>
            </svg>
          </template>
        </div>
      </template>

      <template v-else>
        <div class="icon" name="icon"><slot name="icon" /></div>
      </template>

      <div class="flex flex-col flex-shrink text-gray-900 font-body">
        <span class="text-lg font-medium">{{ header }}</span>
        <span class="text-base font-normal leading-6">{{ description }}</span>
      </div>
    </div>

    <template v-if="useDefaultButtonProp">
      <button
          :class="
          _classStringToObject(`w-6 h-6 ${usePersistentProp && 'hidden'}`)
        "
          @click="close()"
      >
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            :class="_classStringToObject(`w-6 h-6 ${closeIconClasses}`)"
        >
          <path
              d="M18.2947 7.11511C18.6841 6.72575 18.6841 6.09447 18.2947 5.70511C17.9054 5.31575 17.2741 5.31575 16.8847 5.70511L11.9997 10.5901L7.11474 5.70511C6.72538 5.31575 6.0941 5.31575 5.70474 5.70511C5.31538 6.09447 5.31538 6.72575 5.70474 7.11511L10.5897 12.0001L5.70474 16.8851C5.31538 17.2745 5.31538 17.9057 5.70474 18.2951C6.0941 18.6845 6.72538 18.6845 7.11474 18.2951L11.9997 13.4101L16.8847 18.2951C17.2741 18.6845 17.9054 18.6845 18.2947 18.2951C18.6841 17.9057 18.6841 17.2745 18.2947 16.8851L13.4097 12.0001L18.2947 7.11511Z"
          ></path>
          <path
              d="M18.2947 7.11511C18.6841 6.72575 18.6841 6.09447 18.2947 5.70511C17.9054 5.31575 17.2741 5.31575 16.8847 5.70511L11.9997 10.5901L7.11474 5.70511C6.72538 5.31575 6.0941 5.31575 5.70474 5.70511C5.31538 6.09447 5.31538 6.72575 5.70474 7.11511L10.5897 12.0001L5.70474 16.8851C5.31538 17.2745 5.31538 17.9057 5.70474 18.2951C6.0941 18.6845 6.72538 18.6845 7.11474 18.2951L11.9997 13.4101L16.8847 18.2951C17.2741 18.6845 17.9054 18.6845 18.2947 18.2951C18.6841 17.9057 18.6841 17.2745 18.2947 16.8851L13.4097 12.0001L18.2947 7.11511Z"
          ></path>
        </svg>
      </button>
    </template>

    <template v-else>
      <div class="button"><slot name="button" /></div>
    </template>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import { classStringFromArray } from "@sfui/mitosis/src/functions/domUtils";
export const VsfAlertTypes = Object.freeze({
  info: "info",
  positive: "positive",
  warning: "warning",
  error: "error",
});
const DEFAULT_VALUES = {
  type: VsfAlertTypes.info,
  persistent: false,
  defaultIcon: true,
  defaultButton: true,
};

export default {
  name: "vsf-alert",

  props: [
    "type",
    "persistent",
    "defaultIcon",
    "defaultButton",
    "handleCloseClick",
    "slotIcon",
    "header",
    "description",
    "slotButton",
  ],

  data: () => ({ VsfAlertTypes }),

  computed: {
    useTypeProp() {
      return this.type ?? DEFAULT_VALUES.type;
    },
    usePersistentProp() {
      return this.persistent ?? DEFAULT_VALUES.persistent;
    },
    useDefaultIconProp() {
      return this.defaultIcon ?? DEFAULT_VALUES.defaultIcon;
    },
    useDefaultButtonProp() {
      return this.defaultButton ?? DEFAULT_VALUES.defaultButton;
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
    closeIconClasses() {
      switch (this.type) {
        case VsfAlertTypes.positive:
          return "fill-primary-600";

        case VsfAlertTypes.warning:
          return "fill-warning-700";

        case VsfAlertTypes.error:
          return "fill-negative-700";

        default:
          return "fill-secondary-800";
      }
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
