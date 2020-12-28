<template>
  <div class="sf-dropdown">
    <SfOverlay :visible="isOpen" class="sf-dropdown__overlay" />
    <slot name="opener">
      <SfButton
        class="sf-button--full-width sf-dropdown__opener"
        @click.stop="open"
        >Choose your action</SfButton
      >
    </slot>
    <transition name="sf-dropdown">
      <div
        v-show="isOpen"
        v-click-outside="checkPersistence"
        class="sf-dropdown__container"
      >
        <!--@slot Use this slot to replace title. -->
        <slot name="title" v-bind="{ title }">
          <div v-if="title" class="sf-dropdown__title">{{ title }}</div>
        </slot>
        <!--@slot Use this slot to place content inside the dropdown.-->
        <slot />
        <!--@slot Use this slot to replace cancel button. -->
        <slot name="cancel">
          <SfButton
            class="sf-button--full-width sf-dropdown__cancel"
            @click.stop="close"
            >Cancel</SfButton
          >
        </slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { clickOutside } from "../../../utilities/directives/";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { isClient } from "../../../utilities/helpers";

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
    /**
     * If true clicking outside will not dismiss the dropdown
     */
    persistent: {
      type: Boolean,
      default: false,
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
    open() {
      this.$emit("click:open");
    },
    close() {
      this.$emit("click:close");
    },
    checkPersistence() {
      if (!this.persistent) return this.close();
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
