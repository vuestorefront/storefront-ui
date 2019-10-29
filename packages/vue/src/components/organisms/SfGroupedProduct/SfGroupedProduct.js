import Vue from "vue";
import SfGroupedProductItem from "./_internal/SfGroupedProductItem.vue";

Vue.component("SfGroupedProductItem", SfGroupedProductItem);

import SfCarousel from "../SfCarousel/SfCarousel.vue";
export default {
  name: "SfGroupedProduct",
  components: {
    SfCarousel
  }
};
