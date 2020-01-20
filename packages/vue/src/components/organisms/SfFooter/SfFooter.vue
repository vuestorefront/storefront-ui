<template>
  <div class="sf-footer" :style="style">
    <slot />
  </div>
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
      default: 4
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      open: [],
      items: [],
      desktopMin: 1024,
      isMobile: false
    };
  },
  computed: {
    style() {
      return { "--col-width": `${100 / this.column}%` };
    }
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.open = mobile ? [] : [...this.items];
        });
      },
      immediate: true
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .removeListener(this.isMobileHandler);
  },
  methods: {
    toggle(payload) {
      if (!this.isMobile) return;
      if (!this.multiple) {
        this.open = [payload];
      } else if (this.open.includes(payload)) {
        this.open = this.open.filter(item => item !== payload);
      } else {
        this.open.push(payload);
      }
      this.$emit("change", this.open);
    },
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFooter.scss";
</style>
