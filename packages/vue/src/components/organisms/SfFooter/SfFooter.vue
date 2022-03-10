<template>
  <footer class="sf-footer">
    <div
      class="sf-footer__container"
      :style="{ 'grid-template-columns': ' 1fr'.repeat(column) }"
    >
      <slot />
    </div>
  </footer>
</template>
<script>
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";
Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  props: {
    column: {
      type: Number,
      default: 4,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    open: {
      type: [String, Array],
      default: () => [],
    },
  },
  provide() {
    return {
      items: this.items,
    };
  },
  data() {
    return {
      isOpen: [],
      items: [],
    };
  },
  methods: {
    toggle(payload) {
      if (!this.multiple) {
        this.isOpen = [payload];
      } else if (this.isOpen.includes(payload)) {
        this.isOpen = this.isOpen.filter((item) => item !== payload);
      } else {
        this.isOpen.push(payload);
      }
      this.$emit("change", this.isOpen);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfFooter.scss";
</style>
