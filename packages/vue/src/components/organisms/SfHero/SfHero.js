import Vue from "vue";

import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfPagination from "../../molecules/SfPagination/SfPagination.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

import Glide from "@glidejs/glide";

Vue.component("SfHeroItem", SfHeroItem);

export default {
  name: "SfHero",
  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 2000,
        perView: 1,
        // slidePerPage: true
      }
    };
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    options: {
      type: Object,
      default: () => ({})
    },
    heroItems: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SfArrow,
    SfPagination,
    SfIcon
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
        ...this.options
      };
    },
    numberOfPages() {
      return (
        this.$slots.default.filter(slot => slot.tag).length +
        this.heroItems.length
      );
    },
    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }
      return 1;
    }
  },
  mounted: function() {
    const glide = new Glide(this.$refs.glide, this.mergedOptions);
    glide.mount();

    this.glide = glide;
  }
};
