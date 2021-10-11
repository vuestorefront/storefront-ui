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
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
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
  computed: {
    ...mapMobileObserver(),
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
