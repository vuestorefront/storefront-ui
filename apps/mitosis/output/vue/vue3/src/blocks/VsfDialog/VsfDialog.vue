<template>
  <dialog
    ref="dialogRef"
    :class="
      _classStringToObject(
        `backdrop:bg-gray-500 backdrop:opacity-50 p-0 shadow-extra-large rounded-xl`
      )
    "
    @click="clickHandler($event)"
  >
    <div
      :class="_classStringToObject(`p-6 lg:p-10 relative ${useClassesProp}`)"
    >
      <template v-if="disableClose">
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
  disableClose?: boolean;
  onClose?: (isClosed: boolean) => boolean;
}

import { SlotType } from "../../functions/types";
import VsfButton from "../VsfButton/VsfButton";
import VsfIconClose from "../VsfIcons/VsfIconClose";
const DEFAULT_VALUES: Omit<
  Required<VsfDialogProps>,
  "open" | "disableClose"
> = {
  children: "",

  modelValue: false,

  classes: "",
  onClose: (isClosed) => isClosed,
};

export default {
  name: "vsf-dialog",
  components: { VsfButton: VsfButton, VsfIconClose: VsfIconClose },
  props: ["classes", "modelValue", "onClose", "disableClose"],

  mounted() {
    this.toggleDialog();
  },
  updated() {
    this.toggleDialog();
    setTimeout(() => {
      this.$refs.dialogRef?.querySelector("[autofocus]")?.focus();
    });
  },

  computed: {
    useClassesProp() {
      return this.classes ?? DEFAULT_VALUES.classes;
    },
    useOpenProp() {
      return this.modelValue;
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
      if (ev.target === this.$refs.dialogRef) {
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
