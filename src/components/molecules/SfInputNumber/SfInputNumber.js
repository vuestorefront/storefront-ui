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

  data () {
    return {
      currentValue: this.parseNumber(this.value)
    }
  },

  computed: {
    stringValue: {
      get() {
        let str
        if (this.precision) {
          str = this.currentValue.toFixed(this.precision)
          if (this.delimiter !== '.') {
            str = str.replace('.', this.delimiter)
          }
        } else {
          str = parseInt(this.currentValue, 10).toString()
        }
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands)
      },
      set(value) {
        let num = this.parseNumber(value)
        if (isNaN(num)) {
          num = 0
        }
        // force current number value to sync with input value
        this.currentValue = num
        // check if number is valid
        this.setCurrentValue(num)
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
      return 1
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

    setCurrentValue (num) {
      if (num >= this.min && (typeof this.max !== 'number' || num <= this.max)) {
        // valid number
        this.currentValue = num
        this.$emit("change", num)
      } else {
        // reset to default value
        this.currentValue = this.value
      }
    },

    increase () {
      this.setCurrentValue(this.currentValue + this.step)
    },

    decrease () {
      this.setCurrentValue(this.currentValue - this.step)
    }
  }
};
