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

  data () {
    return {
      currentImage: this.images.length && this.images[current]
    }
  },

  methods: {
    setCurrentImage (index) {
      this.currentImage = this.images[index]
      this.$emit('change:current', index)
    }
  }
};
