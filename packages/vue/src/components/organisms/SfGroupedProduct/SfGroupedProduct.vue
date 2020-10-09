<template>
  <div
    ref="glide"
    class="sf-grouped-product"
    :class="{
      glide: hasCarousel,
      'without-carousel': !hasCarousel,
    }"
  >
    <div :class="{ glide__track: true }" data-glide-el="track">
      <ul
        ref="slides"
        :class="{
          glide__slides: true,
        }"
      >
        <!-- @slot Slot for Grouped Product Items -->
        <slot />
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Glide from "@glidejs/glide";
import SfGroupedProductItem from "./_internal/SfGroupedProductItem.vue";
Vue.component("SfGroupedProductItem", SfGroupedProductItem);
export default {
  name: "SfGroupedProduct",
  props: {
    settings: {
      type: Object,
      default: () => ({}),
    },
    hasCarousel: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      glide: undefined,
      defaultSettings: {
        type: "slider",
        rewind: true,
        gap: 0,
        slidePerPage: true,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50,
            },
          },
        },
      },
    };
  },
  computed: {
    glideSettings() {
      let breakpoints = { ...this.defaultSettings.breakpoints };
      if (this.settings.breakpoints) {
        breakpoints = { ...breakpoints, ...this.settings.breakpoints };
      }
      return {
        ...this.defaultSettings,
        ...this.settings,
        breakpoints,
      };
    },
  },
  watch: {
    hasCarousel(state) {
      if (!state && this.glide) {
        this.glide.destroy();
        this.glide = undefined;
      }
      this.glideMount();
    },
  },
  mounted() {
    this.$nextTick(this.glideMount);
  },
  methods: {
    glideMount() {
      if (!this.$slots.default || !this.hasCarousel) return;
      const glide = new Glide(this.$refs.glide, this.glideSettings);
      glide.mount();
      glide.on("run.before", (move) => {
        const { perView, slidePerPage, rewind } = this.glide.settings,
          { index } = this.glide,
          { direction } = move,
          length = this.glide._c.Sizes.length;
        let page, steps;
        if (direction === "=" || !slidePerPage || perView <= 1) return;
        page = Math.ceil(index / perView);
        steps = page * perView + (direction === ">" ? perView : -perView);
        if (steps === length - 1) {
          steps = steps - 1;
        } else if (steps >= length) {
          steps = rewind ? 0 : index;
        } else if (steps < 0) {
          steps = 0;
        }
        move.direction = "=";
        move.steps = steps;
      });
      this.glide = glide;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfGroupedProduct.scss";
</style>
