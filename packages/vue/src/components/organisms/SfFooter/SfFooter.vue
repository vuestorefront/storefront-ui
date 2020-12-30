<template>
  <footer class="sf-footer" :style="style">
    <div class="sf-footer__container">
      <slot />
    </div>
    <div class="sf-footer__bottom smartphone-only">
      <slot name="bottom" />
      <SfLink link="/">
        <SfImage
          v-if="logo"
          :src="logo"
          :alt="title"
          class="sf-footer__bottom-logo"
        />
        <h1 v-else class="sf-footer__bottom-title">{{ title }}</h1>
      </SfLink>
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
import SfLink from "../../atoms/SfLink/SfLink";
import SfImage from "../../atoms/SfImage/SfImage";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  components: { SfLink, SfImage },
  props: {
    /**
     * Number of footer columns
     */
    column: {
      type: Number,
      default: 4,
    },
    /**
     * Multiple footer columns open at the same time on mobile
     */
    multiple: {
      type: Boolean,
      default: true,
    },
    /**
     * Footer columns open on mobile
     */
    open: {
      type: [String, Array],
      default: () => [],
    },
    /**
     * Footer logo
     */
    logo: {
      type: String,
      default: "",
    },
    /**
     * Footer title
     */
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: [],
      items: [],
    };
  },
  computed: {
    ...mapMobileObserver(),
    style() {
      return !this.isMobile
        ? { "--_footer-column-width": `${100 / this.column}%` }
        : { "--_footer-column-width": "100%" };
    },
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.isOpen = mobile ? [...this.open] : [...this.items];
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
