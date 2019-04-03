export default {
  props: {
    currentPage: {
      type: Number
    },
    pageSize: {
      type: Number,
      default: 5
    },
    totalSize: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      showFirst: false,
      showLast: false,
      limitPerPage: this.pageSize || 5
    }
  },

  computed: {
    page: {
      get () {
        return this.currentPage || 1
      },
      set (value) {
        this.$emit('current-change', value)
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

      if (this.currentPage < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
        this.showFirst = false
        this.showLast = true

        return this.listOfPageNumbers.slice(
          0,
          this.limitPerPage
        )
      }

      if (this.numberOfPages - this.currentPage < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
        this.showFirst = true
        this.showLast = false

        return this.listOfPageNumbers.slice(
          this.numberOfPages - this.limitPerPage
        )
      }

      this.showFirst = true
      this.showLast = true

      return this.listOfPageNumbers.slice(
        this.page - Math.floor(this.limitPerPage / 2) - 1,
        this.page + Math.floor(this.limitPerPage / 2)
      )
    },

    setCurrentPage (value) {
      this.page = value
    }
  }
}
