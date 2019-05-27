import Vue from "vue";
import SfCarouselItem from "@/components/organisms/SfCarousel/_internal/SfCarouselItem.vue";
import Glide, { Controls } from "@glidejs/glide";

Vue.component("SfCarouselItem", SfCarouselItem);

export default {
  name: "SfCarousel",
  data() {
    return {
      glide: null
    };
  },
  props: {
    perPage: {
      type: Number,
      default: 1
    }
  },
  mounted: function() {
    const glide = new Glide(this.$refs.glide, {
      perView: this.perPage
    });
    glide.mount({ Controls });
  }
};
