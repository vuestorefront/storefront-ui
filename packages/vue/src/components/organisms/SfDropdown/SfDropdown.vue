<template>
  <div class="sf-dropdown">
    <SfButton
      class="sf-button--underlined sf-dropdown__button sf-dropdown__button--trigger "
      :class="isOpen ? 'sf-dropdown__button--trigger--active' : ''"
      @click="triggerDropdown"
    >
      {{ label }}
      <SfChevron :class="dropdownUp ? 'sf-chevron--top' : ''" />
    </SfButton>
    <SfOverlay :visible="isOpen" class="mobile-only" @click="closeDropdown" />
    <transition :name="transition">
      <div v-if="isOpen" class="sf-dropdown__list ">
        <SfButton
          class="sf-dropdown__button sf-dropdown__button--mobile-label mobile-only"
        >
          {{ label }}
        </SfButton>
        <div :class="dropdownUp ? 'sf-dropdown__list--up' : ''">
          <slot />
        </div>
        <SfButton
          class="sf-dropdown__button sf-dropdown__button--cancell mobile-only"
          @click="closeDropdown"
        >
          {{ cancelLabel }}
        </SfButton>
      </div>
    </transition>
  </div>
</template>

<script>
import { SfButton, SfOverlay, SfChevron } from "@storefront-ui/vue";

export default {
  name: "SfDropdown",
  components: {
    SfButton,
    SfOverlay,
    SfChevron
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
    dropdownUp: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "Name"
    },
    cancelLabel: {
      type: String,
      default: "Cancel"
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
