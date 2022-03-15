<template>
  <div class="sf-footer-column">
    <SfButton
      v-focus
      type="button"
      class="sf-button--pure sf-footer-column__title smartphone-only"
      @click="toggle(title)"
    >
      {{ title }}
      <span class="sf-footer-column__chevron">
        <SfChevron :class="{ 'sf-chevron--top': isColumnOpen }" />
      </span>
    </SfButton>
    <SfHeading
      class="sf-footer-column__title desktop-only"
      :title="title"
      :level="5"
    />
    <transition name="sf-fade">
      <div
        :class="{
          'sf-footer-column__content--hidden-on-mobile': !isColumnOpen,
        }"
        class="sf-footer-column__content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import SfHeading from "../../../atoms/SfHeading/SfHeading.vue";
import { focus } from "../../../../utilities/directives";
export default {
  name: "SfFooterColumn",
  directives: { focus },
  components: {
    SfChevron,
    SfButton,
    SfHeading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  inject: ["items"],
  data() {
    return {
      isColumnOpen: true,
    };
  },
  watch: {
    "$parent.isOpen": {
      handler(newVal) {
        this.isColumnOpen = newVal.includes(this.title);
      },
    },
  },
  created() {
    this.items.push(this.title);
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    },
  },
};
</script>
