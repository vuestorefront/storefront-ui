<template>
  <div class="sf-accordion-item">
    <div class="accordion__single">
      <input
        :id="header"
        class="accordion__single__hidden"
        type="checkbox"
        autocomplete="off"
        checked
      />
      <label
        class="accordion__single__question sf-accordion-item__header"
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
      <div class="accordion__single__answer sf-accordion-item__content">
        <!-- @slot -->
        <slot />
      </div>
    </div>
    <!-- @slot -->
    <!-- <slot
      name="header"
      v-bind="{
        header,
        isOpen,
        accordionClick,
        showChevron: $parent.showChevron,
      }"
    >
      <SfButton
        :aria-pressed="isOpen.toString()"
        :aria-expanded="isOpen.toString()"
        :class="{ 'is-open': isOpen }"
        class="sf-button--pure sf-accordion-item__header"
        @click="accordionClick"
      > -->
    <!-- {{ header }} -->
    <!-- @slot here you can add additional information about this item -->
    <!-- <slot name="additional-info" />
        <SfChevron
          tabindex="0"
          class="sf-accordion-item__chevron"
          :class="{ 'sf-chevron--right': !isOpen }"
        />
      </SfButton> -->
    <!-- </slot> -->
    <!-- <SfExpand :transition="$parent.transition"> -->
    <!-- <div v-if="isOpen">
        <div class="sf-accordion-item__content"> -->
    <!-- @slot -->
    <!-- <slot />
        </div>
      </div> -->
    <!-- </SfExpand> -->
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives";
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
