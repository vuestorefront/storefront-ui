import Vue from "vue";

import SfHeroItem from "./_internal/SfHeroItem.vue";
import SfArrow from "../../atoms/SfArrow/SfArrow.vue";
import SfBullets from "../../atoms/SfBullets/SfBullets.vue";

import Glide from "@glidejs/glide";

const BULLETS_POSITION = ["top"];

Vue.component("SfHeroItem", SfHeroItem);

export default {
  name: "SfHero",
  data() {
    return {
      glide: null,
      defaultOptions: {
        type: "slider",
        rewind: true,
        autoplay: 5000,
        perView: 1
      }
    };
  },
  props: {
    /** Carousel options like glide.js (https://glidejs.com/docs/) */
    options: {
      type: Object,
      default: () => ({})
    },
    /** Items to display in SfHero component */
    heroItems: {
      type: Array,
      default: () => []
    },
    /** Position of the bullets, either 'top' or 'bottom' */
    bulletsPosition: {
      type: String,
      default: ""
    }
  },
  components: {
    SfArrow,
    SfBullets
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
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!this.$slots.default) {
        return (
          this.$slots.default.filter(slot => slot.tag).length +
          this.heroItems.length
        );
      } else {
        return this.heroItems.length;
      }
    },
    page() {
      if (this.glide) {
        return this.glide.index + 1;
      }
      return 1;
    },
    bulletsPositionClass() {
      return BULLETS_POSITION.includes(this.bulletsPosition)
        ? "sf-hero__bullets-top"
        : "";
    }
  },
  mounted: function() {
    const glide = new Glide(this.$refs.glide, this.mergedOptions);
    glide.mount();

    this.glide = glide;
  }
};
