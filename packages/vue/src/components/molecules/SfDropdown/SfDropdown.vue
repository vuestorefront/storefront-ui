<template>
  <div class="sf-dropdown">
    <SfOverlay :visible="isOpen" class="sf-dropdown__overlay" />
    <transition name="sf-dropdown">
      <div
        v-show="isOpen"
        v-click-outside="close"
        class="sf-dropdown__container"
      >
        <!--@slot Use this slot to replace title. -->
        <slot name="title" v-bind="{ title }">
          <div v-if="title" class="sf-dropdown__title">{{ title }}</div>
        </slot>
        <!--@slot Use this slot to place content inside the dropdown.-->
        <slot />
        <!--@slot Use this slot to replace cancel button. -->
        <slot name="cancel" v-bind="{ close }">
          <SfButton
            class="sf-button--full-width sf-dropdown__cancel"
            @click="close"
            >Cancel</SfButton
          >
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { clickOutside } from "../../../utilities/directives/click-outside-directive.js";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfDropdown",
  components: {
    SfOverlay,
    SfButton,
  },
  directives: {
    clickOutside,
  },
  props: {
    /**
     * Dropdown is open
     */
    isOpen: {
      type: Boolean,
      default: false,
    },
    /**
     * Title for dropdown content, visible on mobile.
     */
    title: {
      type: String,
      default: "",
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (typeof window === "undefined" || typeof document === "undefined")
          return;
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
@import "~@storefront-ui/shared/styles/components/molecules/SfDropdown.scss";
</style>
