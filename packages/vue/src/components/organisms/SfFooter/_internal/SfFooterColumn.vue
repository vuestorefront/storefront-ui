<template>
  <div class="sf-footer-column">
    <button v-focus class="sf-footer-column__title" @click="toggle(title)">
      {{ title }}
      <span class="sf-footer-column__chevron">
        <SfChevron :class="{ 'sf-chevron--top': isColumnOpen }" />
      </span>
    </button>
    <transition name="sf-fade">
      <div
        :class="{ 'display-none': !isColumnOpen }"
        class="sf-footer-column__content"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
import { focus } from "../../../../utilities/directives";
export default {
  name: "SfFooterColumn",
  directives: { focus },
  components: { SfChevron },
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
