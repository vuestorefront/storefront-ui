// @vue/component
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfPagination",
  props: {
    /**
     * Current page number
     */
    current: {
      type: Number,
      default: 1
    },
    /**
     * Total number of pages
     */
    total: {
      type: Number,
      default: 5
    },
    /**
     * Maximum visible pagination items
     */
    visible: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      showFirst: false,
      showLast: false
    };
  },

  computed: {
    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },
    limitedPageNumbers() {
      return this.setLimitedPageNumber();
    },
    canGoPrev() {
      return this.current === 1;
    },
    canGoNext() {
      return this.current > this.total - 1;
    }
  },

  methods: {
    setLimitedPageNumber() {
      if (this.total <= this.visible) {
        this.showFirst = false;
        this.showLast = false;

        return this.listOfPageNumbers;
      }

      if (this.current < this.visible - Math.floor(this.visible / 2) + 1) {
        this.showFirst = false;
        this.showLast = true;

        return this.listOfPageNumbers.slice(0, this.visible);
      }

      if (
        this.total - this.current <
        this.visible - Math.floor(this.visible / 2) + 1
      ) {
        this.showFirst = true;
        this.showLast = false;

        return this.listOfPageNumbers.slice(this.total - this.visible);
      }

      this.showFirst = true;
      this.showLast = true;

      return this.listOfPageNumbers.slice(
        this.current - Math.ceil(this.visible / 2),
        this.current + Math.floor(this.visible / 2)
      );
    },
    go(direct) {
      switch (direct) {
        case "prev":
          this.$emit("click", this.current < 2 ? 1 : this.current - 1);
          break;
        case "next":
          this.$emit(
            "click",
            this.current > this.total - 1 ? this.total : this.current + 1
          );
          break;
        default:
          if (this.current !== direct) this.$emit("click", direct);
      }
    },
    goNext() {
      this.$emit(
        "click",
        this.current > this.total - 1 ? this.total : this.current + 1
      );
    },
    goPrev() {
      this.$emit("click", this.current < 2 ? 1 : this.current - 1);
    },
    isDisabled(direct) {
      switch (direct) {
        case "prev":
          return this.current < 2;
        case "next":
          return this.current > this.total - 1;
        default:
          return true;
      }
    }
  },
  components: {
    SfIcon
  }
};
