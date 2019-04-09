export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    length: {
      type: Number,
      default: 5
    },
    visible: {
      type: Number,
      default: 5
    }
  },

  data () {
    return {
      showFirst: false,
      showLast: false
    }
  },

  computed: {
    currentPage: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('change', value)
      }
    },
    listOfPageNumbers () {
      return Array.from(Array(this.length), (_, i) => i + 1)
    },
    limitedPageNumbers () {
      return this.setLimitedPageNumber()
    }
  },

  methods: {
    setLimitedPageNumber () {
      if (this.length <= this.visible) {
        this.showFirst = false
        this.showLast = false

        return this.listOfPageNumbers
      }

      if (this.currentPage < this.visible - Math.floor(this.visible / 2) + 1) {
        this.showFirst = false
        this.showLast = true

        return this.listOfPageNumbers.slice(
          0,
          this.visible
        )
      }

      if (this.length - this.currentPage < this.visible - Math.floor(this.visible / 2) + 1) {
        this.showFirst = true
        this.showLast = false

        return this.listOfPageNumbers.slice(
          this.length - this.visible
        )
      }

      this.showFirst = true
      this.showLast = true

      return this.listOfPageNumbers.slice(
        this.currentPage - Math.ceil(this.visible / 2),
        this.currentPage + Math.floor(this.visible / 2)
      )
    },

    setCurrentPage (value) {
      this.currentPage = value
    }
  }
}
