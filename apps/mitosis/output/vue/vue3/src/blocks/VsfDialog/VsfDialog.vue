<template>
  <dialog
    ref="dialogRef"
    :class="
      _classStringToObject(
        `backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`
      )
    "
  >
    <div
      :class="_classStringToObject(`p-6 lg:p-10 relative ${useClassesProp}`)"
    >
      <template v-if="useClosableProp">
        <vsf-button
          classes="rounded-full top-2 right-2 absolute"
          variant="tertiary"
          @click="handleCloseDialog()"
          :icon="true"
        >
          <vsf-icon-close></vsf-icon-close>
        </vsf-button>
      </template>

      <slot />
    </div>
  </dialog>
</template>

<script lang="ts">
export interface VsfDialogProps {
  children?: SlotType;

  modelValue?: boolean;

  classes?: string;
  closeable?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

import { SlotType } from "../../functions/types";
import VsfButton from "../VsfButton/VsfButton.vue";
import VsfIconClose from "../VsfIcons/VsfIconClose.vue";
const DEFAULT_VALUES: Required<VsfDialogProps> = {
  children: "",

  modelValue: false,

  classes: "",
  closeable: true,
  onClose: (isClosed) => isClosed,
};

export default {
  name: "vsf-dialog",
  components: { "vsf-button": VsfButton, "vsf-icon-close": VsfIconClose },
  props: ["classes", "closeable", "modelValue", "onClose"],

  mounted() {
    this.toggleDialog();
    this.$refs.dialogRef.addEventListener("click", this.clickHandler);
  },
  updated() {
    this.toggleDialog();
    setTimeout(() => {
      this.$refs.dialogRef?.querySelector("[autofocus]")?.focus();
    });
  },

  unmounted() {
    // TODO: cannot remove listener in vue because there is no `beforeUnmount` hook :/
    this.$refs.dialogRef.removeEventListener("click", this.clickHandler);
  },

  computed: {
    useClassesProp() {
      return this.classes ?? DEFAULT_VALUES.classes;
    },
    useClosableProp() {
      return this.closeable ?? DEFAULT_VALUES.closeable;
    },
    useOpenProp() {
      return this.modelValue ?? DEFAULT_VALUES.modelValue;
    },
  },

  methods: {
    toggleDialog() {
      if (
        this.useOpenProp &&
        this.$refs.dialogRef.getAttribute("open") === null
      )
        this.$refs.dialogRef?.showModal();
      else if (!this.useOpenProp) this.$refs.dialogRef?.close();
    },
    handleCloseDialog() {
      this.$refs.dialogRef?.close();
      this.$emit("update:modelValue", false);
      this.onClose && this.onClose(false);
    },
    clickHandler(ev) {
      const rect = this.$refs.dialogRef.getBoundingClientRect();
      const isOutsideDialog =
        ev.clientY < rect.top ||
        ev.clientY > rect.top + rect.height ||
        ev.clientX < rect.left ||
        ev.clientX > rect.left + rect.width;

      if (isOutsideDialog) {
        this.handleCloseDialog();
      }
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
