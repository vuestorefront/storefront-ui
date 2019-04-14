export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      activeIndex: this.current - 1
    };
  },

  computed: {
    currentImage: {
      get() {
        return this.images[this.activeIndex];
      }
    }
  },

  methods: {
    setCurrentImage(index) {
      this.activeIndex = index;
      this.$emit("change:current", index + 1);
    }
  }
};
