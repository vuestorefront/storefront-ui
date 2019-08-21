export default {
  name: "SfBullets",
  props: {
    /**
     * Number of bullets in total (active + inactive)
     */
    total: {
      type: Number,
      default: 0
    },
    /**
     * Index of the curretly active bullet
     */
    current: {
      type: Number,
      default: 0
    }
  },
  computed: {
    inactiveRight() {
      return this.total - 1 - this.current;
    },
    inactiveLeft() {
      return this.total - this.inactiveRight - 1;
    }
  },
  methods: {
    go(index){
      this.$emit("click", index);
    }
  }
};
