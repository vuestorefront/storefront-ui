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
        return this.value;
      },
      set(value) {
        let num = this.precision ? parseFloat(value) : parseInt(value, 10);
        if (num >= this.min && (typeof this.max !== 'number' || num <= this.max)) {
          this.$emit("update:value", num);
        }
      }
    }
  },

  methods: {
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
        }
        e.preventDefault()
      }
    },

    increase () {
      this.currentValue += this.step
    },

    decrease () {
      this.currentValue -= this.step
    }
  }
};
