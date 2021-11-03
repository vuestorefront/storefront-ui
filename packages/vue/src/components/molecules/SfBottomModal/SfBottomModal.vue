<template>
  <div class="sf-bottom-modal">
    <SfOverlay
      :visible="isOpen"
      class="sf-bottom-modal__overlay"
      @click="close"
    />
    <SfTransition :transition="transition">
      <div
        v-show="isOpen"
        role="dialog"
        aria-modal="true"
        class="sf-bottom-modal__container"
      >
        <!--@slot Use this slot to replace title. -->
        <slot name="title">
          <SfHeading
            v-if="title"
            :level="3"
            :title="title"
            class="sf-bottom-modal__title"
          />
        </slot>
        <!--@slot Use this slot to replace close button for desktop. -->
        <slot name="close-desktop">
          <SfCircleIcon
            class="sf-circle-icon--small sf-bottom-modal__close"
            aria-label="Close"
            icon="cross"
            @click="close"
          />
        </slot>
        <!--@slot Use this slot to replace content. -->
        <slot />
        <!--@slot Use this slot to replace close button for mobile. -->
        <slot name="close-mobile">
          <SfButton
            class="sf-button--full-width sf-bottom-modal__cancel"
            aria-label="Close"
            @click="close"
            >Cancel</SfButton
          >
        </slot>
      </div>
    </SfTransition>
  </div>
</template>
<script>
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfTransition from "../../../utilities/transitions/component/SfTransition.js";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import { isClient } from "../../../utilities/helpers";
export default {
  name: "SfBottomModal",
  components: { SfOverlay, SfButton, SfCircleIcon, SfHeading, SfTransition },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    transition: {
      type: [String, Boolean],
      default: "",
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!isClient) return;
        if (value) {
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("click:close");
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfBottomModal.scss";
</style>
