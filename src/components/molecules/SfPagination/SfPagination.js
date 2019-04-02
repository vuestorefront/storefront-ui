export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    totalSize: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 5
    }
  },

  data () {
    return {
      showFirst: false,
      showLast: false,
      limitPerPage: this.limit || 5
    }
  },

  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (value) {
        this.$emit('update:page', value)
      }
    },
    numberOfPages () {
      return Math.ceil(this.totalSize / this.limitPerPage)
    },
    listOfPageNumbers () {
      return Array.from(Array(this.numberOfPages), (_, i) => i + 1)
    },
    limitedPageNumbers () {
      return this.setLimitedPageNumber()
    }
  },

  methods: {
    setLimitedPageNumber () {
      if (this.numberOfPages <= this.limitPerPage) {
        this.showFirst = false
        this.showLast = false

        return this.listOfPageNumbers
      }

      if (this.page < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
        this.showFirst = false
        this.showLast = true

        return this.listOfPageNumbers.slice(
          0,
          this.limitPerPage
        )
      }

      if (this.numberOfPages - this.page < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
        this.showFirst = true
        this.showLast = false

        return this.listOfPageNumbers.slice(
          this.numberOfPages - this.limitPerPage
        )
      }

      this.showFirst = true
      this.showLast = true

      return this.listOfPageNumbers.slice(
        this.currentPage - Math.floor(this.limitPerPage / 2) - 1,
        this.currentPage + Math.floor(this.limitPerPage / 2)
      )
    },

    setCurrentPage (value) {
      this.currentPage = value
    }
  }
}
