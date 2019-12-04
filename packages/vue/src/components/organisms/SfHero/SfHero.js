import Vue from "vue";

import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfBullets from "../../atoms/SfBullets/SfBullets.vue";

import Glide from "@glidejs/glide";

Vue.component("SfHeroItem", SfHeroItem);

export default {
  name: "SfHero",

  components: {
    SfArrow,
    SfBullets
  },

  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1,
        gap: 0
      }
    };
  },

  props: {
    /**
     * Slider options like glide.js (https://glidejs.com/docs/)
     */
    sliderOptions: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    go(direct) {
      switch (direct) {
        case "prev":
          this.glide.go("<");
          break;
        case "next":
          this.glide.go(">");
          break;
        default:
          this.glide.go(`=${direct}`);
          break;
      }
    }
  },

  computed: {
    mergedOptions() {
      return {
        ...this.defaultOptions,
        ...this.sliderOptions
      };
    },

    numberOfPages() {
      return this.$slots.default
        ? this.$slots.default.filter(slot => slot.tag).length
        : 0;
    },

    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }
      return 1;
    }
  },

  mounted() {
    if (this.numberOfPages) {
      this.$nextTick(() => {
        const glide = new Glide(this.$refs.glide, this.mergedOptions);
        glide.mount();
        this.glide = glide;
      });
    }
  }
};
