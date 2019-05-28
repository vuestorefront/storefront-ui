import Vue from "vue";
import SfCarouselItem from "@/components/organisms/SfCarousel/_internal/SfCarouselItem.vue";
import SfArrow from "@/components/atoms/SfArrow/SfArrow.vue";
import Glide from "@glidejs/glide";

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
    }
  },
  components: {
    SfArrow
  },
  methods: {
    go(direct) {
      switch (direct) {
        case "<":
          this.glide.go("<");
          break;
        case ">":
          this.glide.go(">");
          break;
      }
    }
  },
  mounted: function() {
    const glide = new Glide(this.$refs.glide, {
      type: "carousel",
      perView: this.perPage,
      peek: 0,
      breakpoints: {
        768: {
          perView: 2,
          peek: {
            before: 0,
            after: 100
          }
        }
      }
    });
    glide.mount();
    this.glide = glide;
  }
};
