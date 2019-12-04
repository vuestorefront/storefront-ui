import Glide from "@glidejs/glide";
import SfImage from "../../atoms/SfImage/SfImage.vue";

export default {
  name: "SfGallery",

  components: {
    SfImage
  },

  props: {
    /**
     * Images list
     */
    images: {
      type: Array,
      default: () => []
    },
    /**
     * Initial image number (starting from 1)
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Glide slider options (https://glidejs.com/docs/options/)
     */
    sliderOptions: {
      type: Object,
      default() {
        return {
          type: "slider",
          autoplay: false,
          rewind: false,
          gap: 0
        };
      }
    }
  },

  data() {
    return {
      glide: null,
      activeIndex: this.current - 1
    };
  },

  computed: {
    mapPictures() {
      // map images to handle picture tags with SfImage
      return this.images.map(({ normal, big }) => {
        return {
          small: normal,
          normal: big
        };
      });
    }
  },

  methods: {
    go(index) {
      this.activeIndex = index;
      /**
       * Event for current image change (`v-model`)
       * @type {Event}
       */
      this.$emit("click", index + 1);
      if (this.glide) {
        this.glide.go("=" + index);
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      // handle slider with swipe and transitions with Glide.js
      // https://glidejs.com/docs/
      const glide = new Glide(this.$refs.glide, this.sliderOptions);
      glide.on("run", () => {
        this.go(glide.index);
      });
      glide.mount();
      this.glide = glide;
    });
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  }
};
