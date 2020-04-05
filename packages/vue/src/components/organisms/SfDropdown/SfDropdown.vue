<template>
  <div class="sf-dropdown">
    <SfOverlay :visible="isOpen" class="mobile-only" @click="closeDropdown" />
    <slot name="trigger" />
    <transition :name="transition">
      <div v-if="isOpen" class="sf-dropdown__list">
        <SfButton
          class="sf-dropdown__button sf-dropdown__button--title mobile-only"
        >
          {{ title }}
        </SfButton>
        <slot />
        <SfButton
          class="sf-dropdown__button sf-dropdown__button--cancell mobile-only"
          @click="closeDropdown"
        >
          Cancel
        </SfButton>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import SfDropdownItem from "./_internal/SfDropdownItem.vue";
import { SfButton, SfOverlay } from "@storefront-ui/vue";
Vue.component("SfDropdownItem", SfDropdownItem);
export default {
  name: "SfDropdown",
  components: {
    SfButton,
    SfOverlay
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: "fade"
    },
    title: {
      type: String,
      default: "Name"
    }
  },
  methods: {
    closeDropdown() {
      this.$emit("close");
    },
    triggerDropdown() {
      this.$emit("triggerDropdown");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfDropdown.scss";
</style>
