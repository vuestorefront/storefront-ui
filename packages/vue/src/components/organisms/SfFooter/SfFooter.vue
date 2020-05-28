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
    isOpenOnMobile: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      open: [],
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
          this.decodeString();
          mobile ? this.open : (this.open = [...this.items]);
        });
      },
      immediate: true,
    },
  },
  created() {
    if (this.isOpenOnMobile && this.isMobile) {
      this.decodeString();
      return this.open;
    }
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    toggle(payload) {
      if (!this.isMobile) return;
      if (!this.multiple) {
        this.open = [payload];
      } else if (this.open.includes(payload)) {
        this.open = this.open.filter((item) => item !== payload);
      } else {
        this.open.push(payload);
      }
      this.$emit("change", this.open);
    },
    /* 
      function to decode string into HTML
    */
    decodeString() {
      let txt = document.createElement("textarea");
      this.open = this.isOpenOnMobile.map((columnTitle) => {
        txt.innerHTML = columnTitle;
        return txt.value;
      });
      return this.open;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfFooter.scss";
</style>
