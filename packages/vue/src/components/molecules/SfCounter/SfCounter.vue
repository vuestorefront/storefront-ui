<template>
  <div class="sf-counter">
    <div
      v-if="controls"
      class="sf-counter__control sf-counter__control--down"
      @click="decrease"
    >
      <slot name="down">
        <SfIcon icon="chevron_left" size="23px" />
      </slot>
    </div>
    <slot
      name="field"
      v-bind="{
        stringValue,
        increase,
        decrease,
        keypress,
        type,
        name,
        required,
        disabled,
        placeholder
      }"
    >
      <input
        v-model="stringValue"
        class="sf-counter__field"
        aria-label="current value"
        :type="type"
        :name="name"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder"
        @keyup.up="increase"
        @keyup.down="decrease"
        @keypress="keypress"
      />
    </slot>
    <div
      v-if="controls"
      class="sf-counter__control"
      role="button"
      aria-label="Increase"
      @click="increase"
    >
      <slot name="up">
        <SfIcon icon="chevron_right" size="23px" />
      </slot>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfCounter",
  components: {
    SfIcon
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    // whether the input should be auto filled if left empty
    autoFill: {
      type: Boolean
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    // decimal precision
    precision: {
      type: Number,
      default: 0
    },
    // number format delimiters
    delimiter: {
      type: String,
      default: "."
    },
    thousands: {
      type: String,
      default: ","
    },
    // whether to enable the control buttons
    controls: {
      type: Boolean,
      default: true
    },
    // native input attributes
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    }
  },
  data() {
    return {
      currentValue:
        this.value || this.autoFill ? this.parseNumber(this.value) : null
    };
  },
  computed: {
    stringValue: {
      get() {
        if (typeof this.currentValue === "number") {
          let str;
          if (this.precision) {
            str = this.currentValue.toFixed(this.precision);
            if (this.delimiter !== ".") {
              str = str.replace(".", this.delimiter);
            }
          } else {
            str = parseInt(this.currentValue, 10).toString();
          }
          if (typeof this.thousands === "string" && this.thousands !== "") {
            // add thousands delimiter
            return str.replace(/\B(?=(\d{3})+(?!\d))/g, this.thousands);
          } else {
            return str;
          }
        }
        return this.currentValue;
      },
      set(value) {
        if ((value !== null && value !== "") || this.autoFill) {
          let num = this.parseNumber(value);
          if (isNaN(num)) {
            num = 0;
          }
          // force current number value to sync with input value
          this.currentValue = num;
          // check if number is valid
          this.setCurrentValue(num);
        } else {
          // sey empty
          this.setCurrentValue(null);
        }
      }
    }
  },
  watch: {
    value(val) {
      if (val !== this.currentValue) {
        // value prop externally changed
        this.setCurrentValue(this.value);
      }
    }
  },
  methods: {
    parseNumber(value) {
      switch (typeof value) {
        case "string":
          if (typeof this.thousands === "string" && this.thousands !== "") {
            // remove thousands separator first
            value = value.replace(new RegExp(this.thousands, "g"), "");
          }
          if (this.precision) {
            let parts = value.split(this.delimiter, 2);
            if (parts.length === 1) {
              // no decimals
              return parseInt(value, 10);
            }
            // fix up to maximum precision on decimal places
            let decimalPlaces = parts[1].length;
            if (decimalPlaces > this.precision) {
              // user may have added digit at the end of input
              let digits = parts[0] + parts[1];
              value =
                digits.slice(0, -this.precision) +
                "." +
                digits.slice(-this.precision);
            } else if (this.delimiter !== ".") {
              // just fix the delimiter before parsing to float
              value = value.replace(this.delimiter, ".");
            }
            return parseFloat(value);
          }
          // no decimal precision: integer value
          return parseInt(value, 10);
        case "number":
          if (!isNaN(value)) {
            return value;
          }
      }
      return this.min || 0;
    },
    keypress(e) {
      if (e && e.key) {
        switch (e.key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "Enter":
            return true;
          case this.delimiter:
            if (this.precision) {
              return true;
            }
        }
        e.preventDefault();
      }
    },
    setCurrentValue(val) {
      if (typeof val === "number") {
        // check minimum and maximum
        if (typeof this.min === "number" && val < this.min) {
          val = this.min;
        } else if (typeof this.max === "number" && val > this.max) {
          val = this.max;
        }
      }
      this.currentValue = val;
      this.$emit("input", val);
    },
    increase() {
      this.setCurrentValue(this.currentValue + this.step);
    },
    decrease() {
      this.setCurrentValue(this.currentValue - this.step);
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCounter.scss";
</style>
