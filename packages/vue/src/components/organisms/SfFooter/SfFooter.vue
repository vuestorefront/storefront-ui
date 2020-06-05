<template>
  <footer class="sf-footer" :style="style">
    <div class="sf-footer__container">
      <slot />
    </div>
  </footer>
</template>
<script>
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
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
  data() {
    return {
      setOpen: [],
      items: [],
    };
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      return { "--_footer-column-width": `${100 / this.column}%` };
    },
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.setOpen = mobile ? [...this.open] : [...this.items];
        });
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    toggle(payload) {
      if (!this.isMobile) return;
      if (!this.multiple) {
        this.setOpen = [payload];
      } else if (this.setOpen.includes(payload)) {
        this.setOpen = this.setOpen.filter((item) => item !== payload);
      } else {
        this.setOpen.push(payload);
      }
      this.$emit("change", this.setOpen);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfFooter.scss";
</style>
