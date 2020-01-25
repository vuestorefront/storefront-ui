<template>
  <div class="sf-footer" :style="style">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";
import {
  mapMobileObserver,
  unMapMobileObserver
} from "../../../utilities/mobile-observer";

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
      items: []
    };
  },
  computed: {
    ...mapMobileObserver(),
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
  beforeDestroy() {
    unMapMobileObserver();
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
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfFooter.scss";
</style>
