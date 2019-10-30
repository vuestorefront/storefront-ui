import Vue from "vue";
import Glide from "@glidejs/glide";
import SfGroupedProductItem from "./_internal/SfGroupedProductItem.vue";

Vue.component("SfGroupedProductItem", SfGroupedProductItem);

export default {
  name: "SfGroupedProduct",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      glide: null,
      options: {
        type: "slider",
        rewind: true,
        gap: 0,
        slidePerPage: true,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50
            }
          }
        }
      }
    };
  },
  provide() {
    const provided = {};
    Object.defineProperty(provided, "input", {
      value: this.input
    });
    return { provided };
  },
  methods: {
    input(payload) {
      const groupedProduct = [...this.value];
      const index = groupedProduct.findIndex(product => {
        return product.sku === payload.sku && product.name === payload.name;
      });

      groupedProduct[index] = payload;

      this.$emit("input", groupedProduct);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const glide = new Glide(this.$refs.glide, this.options);

      glide.mount();
      glide.on("run.before", move => {
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
    });
  }
};
