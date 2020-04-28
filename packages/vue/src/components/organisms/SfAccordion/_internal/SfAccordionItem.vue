<template>
  <div class="sf-accordion-item">
    <!-- @slot -->
    <slot
      name="header"
      v-bind="{
        header,
        isOpen,
        accordionClick,
        showChevron: $parent.showChevron,
      }"
    >
      <button
        v-focus
        :aria-pressed="isOpen.toString()"
        :aria-expanded="isOpen.toString()"
        :class="{ 'sf-accordion-item__header--open': isOpen }"
        class="sf-accordion-item__header"
        @click="accordionClick"
      >
        {{ header }}
        <SfChevron
          tabindex="0"
          class="sf-accordion-item__chevron"
          :class="{ 'sf-chevron--right': !isOpen }"
        />
      </button>
    </slot>
    <transition :name="$parent.transition">
      <div v-if="isOpen" class="sf-accordion-item__content">
        <!-- @slot -->
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives/focus-directive.js";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfAccordionItem",
  directives: { focus },
  components: {
    SfChevron,
  },
  props: {
    header: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
