<template>
  <div class="sf-accordion-item">
    <!-- @slot -->
    <slot
      name="header"
      v-bind="{
        header,
        isOpen,
        accordionClick,
        showChevron: $parent.showChevron
      }"
    >
      <div
        :class="{ 'sf-accordion-item__header--open': isOpen }"
        class="sf-accordion-item__header"
        @click="accordionClick"
      >
        {{ header }}
        <div v-if="$parent.showChevron" class="sf-accordion-item__chevron">
          <SfChevron :class="{ 'sf-chevron--top': isOpen }" />
        </div>
      </div>
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
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfAccordionItem",
  components: {
    SfChevron
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfAccordion.scss";
</style>
