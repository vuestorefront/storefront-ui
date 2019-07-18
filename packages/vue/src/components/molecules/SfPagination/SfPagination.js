import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfPagination",

  model: {
    prop: "current",
    event: "change"
  },

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
    currentPage: {
      get() {
        return this.current;
      },
      set(value) {
        /**
         * Event for current page change (`v-model`)
         * @type {Event}
         */
        this.$emit("change", value);
      }
    },
    listOfPageNumbers() {
      return Array.from(Array(this.total), (_, i) => i + 1);
    },
    limitedPageNumbers() {
      return this.setLimitedPageNumber();
    }
  },

  methods: {
    setLimitedPageNumber() {
      if (this.total <= this.visible) {
        this.showFirst = false;
        this.showLast = false;

        return this.listOfPageNumbers;
      }

      if (this.currentPage < this.visible - Math.floor(this.visible / 2) + 1) {
        this.showFirst = false;
        this.showLast = true;

        return this.listOfPageNumbers.slice(0, this.visible);
      }

      if (
        this.total - this.currentPage <
        this.visible - Math.floor(this.visible / 2) + 1
      ) {
        this.showFirst = true;
        this.showLast = false;

        return this.listOfPageNumbers.slice(this.total - this.visible);
      }

      this.showFirst = true;
      this.showLast = true;

      return this.listOfPageNumbers.slice(
        this.currentPage - Math.ceil(this.visible / 2),
        this.currentPage + Math.floor(this.visible / 2)
      );
    },

    setCurrentPage(value) {
      this.currentPage = value;
    }
  },
  components: {
    SfIcon
  }
};
