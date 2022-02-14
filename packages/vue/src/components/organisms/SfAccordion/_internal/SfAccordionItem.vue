<template>
  <div class="sf-accordion-item">
    <slot
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
        :data-testid="dataTestDisplay(`accordion-item-${header}`)"
        @click="accordionClick"
      >
        {{ header }}
        <slot name="additional-info" />
        <SfChevron
          tabindex="0"
          class="sf-accordion-item__chevron"
          :class="{ 'sf-chevron--right': !isOpen }"
        />
      </SfButton>
    </slot>
    <SfTransition :transition="$parent.transition">
      <div v-if="isOpen">
        <div class="sf-accordion-item__content">
          <slot />
        </div>
      </div>
    </SfTransition>
  </div>
</template>
<script>
import { focus } from "../../../../utilities/directives";
import SfTransition from "../../../../utilities/transitions/component/SfTransition";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import { dataTestDisplay } from "../../../../utilities/helpers";

export default {
  name: "SfAccordionItem",
  directives: { focus },
  components: {
    SfChevron,
    SfButton,
    SfTransition,
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
    dataTestDisplay,
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfAccordion.scss";
</style>
