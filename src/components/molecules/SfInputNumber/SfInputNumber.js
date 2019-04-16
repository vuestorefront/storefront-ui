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
  }
};
