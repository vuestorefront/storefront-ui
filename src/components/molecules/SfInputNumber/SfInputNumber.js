export default {
  name: "SfInputNumber",

  props: {
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number
    },
    placeholder: {
      type: String
    },
    precision: {
      type: Number,
      default: 0
    },
    delimiter: {
      type: String,
      default: '.'
    },
    thousands: {
      type: String,
      default: ','
    },
    name: {
      type: String
    }
  },

  computed: {
    currentValue: {
      get() {
        let str
        if (this.precision) {
          str = this.value.toFixed(this.precision)
          if (this.delimiter !== '.') {
            str = str.replace('.', this.delimiter)
          }
        } else {
          str = parseInt(this.value, 10).toString()
        }
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands)
      },
      set(value) {
        let num = this.parseNumber(value)
        if (num >= this.min && (typeof this.max !== 'number' || num <= this.max)) {
          this.$emit("update:value", num)
        }
      }
    }
  },

  methods: {
    parseNumber (value) {
      switch (typeof value) {
        case 'string':
          // remove thousands separator first
          value = value.replace(new RegExp(this.thousands, 'g'), '')
          if (this.precision) {
            let parts = value.split(this.delimiter, 2)
            if (parts.length === 1) {
              // no decimals
              return parseInt(value)
            }
            // fix up to maximum precision on decimal places
            let decimalPlaces = parts[1].length
            if (decimalPlaces > this.precision) {
              // user may have added digit at the end of input
              let digits = parts[0] + parts[1]
              value = digits.slice(0, -this.precision) + '.' + digits.slice(-this.precision)
            } else if (this.delimiter !== '.') {
              // just fix the delimiter before parsing to float
              value = value.replace(this.delimiter, '.')
            }
            return parseFloat(value)
          }
          // no decimal precision: integer value
          return parseInt(value, 10)
        case 'number':
          if (!isNaN(value)) {
            return value
          }
      }
      return this.value
    },

    keypress (e) {
      if (e && e.key) {
        switch (e.key) {
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
          case 'Enter':
            return true
          case this.delimiter:
            if (this.precision) {
              return true
            }
        }
        e.preventDefault()
      }
    },

    increase () {
      this.currentValue = this.value + this.step
    },

    decrease () {
      this.currentValue = this.value - this.step
    }
  }
};
