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
      default: 4
    },
    breakpoints: {
      type: Object,
      default: () => ({
        480: {
          perView: 1
        }
      })
    }
  },
  methods: {},
  mounted: function() {
    const glide = new Glide(this.$refs.glide, {
      type: "carousel",
      perView: this.perPage
    });

    glide.mount({ Controls });

    this.glide = glide;
  }
};
