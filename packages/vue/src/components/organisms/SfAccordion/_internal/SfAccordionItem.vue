<template>
  <div class="sf-accordion-item">
    <input
      :id="header"
      class="sf-accordion-item__hidden"
      type="checkbox"
      autocomplete="off"
      checked
    />
    <label
      class="sf-accordion-item__header"
      :for="header"
      :aria-pressed="isOpen.toString()"
      :aria-expanded="isOpen.toString()"
      @click="accordionClick"
    >
      <span>{{ header }}</span>
      <!-- @slot here you can add additional information about this item -->
      <slot name="additional-info" />
      <SfChevron tabindex="0" class="sf-accordion-item__chevron" />
    </label>
    <div class="sf-accordion-item__content">
      <!-- @slot -->
      <slot />
    </div>
  </div>
</template>
<script>
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfAccordionItem",
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
