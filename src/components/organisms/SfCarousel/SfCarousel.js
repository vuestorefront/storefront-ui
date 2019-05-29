import Vue from "vue";

import SfCarouselItem from "@/components/organisms/SfCarousel/_internal/SfCarouselItem.vue";
import SfArrow from "@/components/atoms/SfArrow/SfArrow.vue";

import Glide from "@glidejs/glide";

Vue.component("SfCarouselItem", SfCarouselItem);

export default {
  name: "SfCarousel",
  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "carousel",
        perView: 4,
        slidePerPage: true,
        breakpoints: {
          768: {
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
  props: {
    options: {
      type: Object,
      default: () => ({})
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
  computed: {
    mergedOptions() {
      let breakpoints = { ...this.defaultOptions.breakpoints };

      if (this.options.breakpoints) {
        breakpoints = { ...breakpoints, ...this.options.breakpoints };
      }

      return {
        ...this.defaultOptions,
        ...this.options,
        breakpoints: breakpoints
      };
    }
  },
  mounted: function() {
    const glide = new Glide(this.$refs.glide, this.mergedOptions);
    glide.mount();
    glide.on("run.before", move => {
      const { slidePerPage } = this.mergedOptions;

      if (!slidePerPage) return;

      const { perView } = glide.settings;
      const { direction } = move;

      move.steps = direction === "<" ? perView : -perView;
    });
    this.glide = glide;
  }
};
