import { SfRange } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Range",
  component: SfRange,
  parameters: {
    docs: {
      description: {
        component:
          "Range component based on [nouislider library](https://refreshless.com/nouislider/). ",
      },
    },
  },
  argTypes: {
    value: {
      control: {
        type: "array",
      },
      table: {
        category: "Props",
      },
      defaultValue: [0, 1],
      description:
        "Sets the starting values for slider(s), if only one number is given than only one slider appears",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Sets the state of range to disabled",
    },
    config: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: {
        start: [0, 1],
        range: {
          min: 0,
          max: 10,
        },
        step: 1,
      },
      description:
        "Sets the configuration of range component according to [nouislider library](https://refreshless.com/nouislider/slider-options/). Default config object consists only from basic properties, but can be widen by properties mentioned in above section.",
    },
    start: {
      control: {
        type: "array",
      },
      name: "config.start",
      defaultValue: [0, 1],
      description:
        "Property in config prop object (only for testing purposes).",
    },
    range: {
      control: "object",
      name: "config.range",
      defaultValue: {
        min: 0,
        max: 10,
      },
      description:
        "Property in config prop object (only for testing purposes).",
    },
    step: {
      control: "number",
      name: "config.step",
      defaultValue: 1,
      description:
        "Property in config prop object (only for testing purposes).",
    },
    connect: {
      control: "boolean",
      name: "config.connect",
      defaultValue: true,
      description:
        "Property in config prop object (only for testing purposes).",
    },
    direction: {
      control: {
        type: "radio",
        options: ["ltr", "rtl"],
      },
      name: "config.direction",
      defaultValue: "ltr",
      description:
        "Property in config prop object (only for testing purposes).",
    },
    orientation: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      name: "config.orientation",
      defaultValue: "horizontal",
      description:
        "Property in config prop object (only for testing purposes).",
    },
    behaviour: {
      control: {
        type: "select",
        options: [
          "drag",
          "drag-fixed",
          "tap",
          "tap-drag",
          "hover",
          "unconstrained-tap",
          "none",
        ],
      },
      name: "config.behaviour",
      description:
        "Property in config prop object (only for testing purposes). For detailed description please see: https://refreshless.com/nouislider/behaviour-option/",
      defaultValue: "tap-drag",
    },
    tooltips: {
      control: "boolean",
      name: "config.tooltips",
      defaultValue: true,
      description:
        "Property in config prop object (only for testing purposes).",
    },
    keyboardSupport: {
      control: "boolean",
      name: "config.keyboardSupport",
      defaultValue: true,
      description:
        "Property in config prop object (only for testing purposes).",
    },
    format: {
      control: "object",
      name: "config.format",
      description:
        "Property in config prop object (only for testing purposes). For details of tooltips number formatting please see: https://refreshless.com/nouislider/number-formatting/",
      defaultValue: {
        to: function (value) {
          return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(value);
        },
        from: function (value) {
          const parsedValue = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).formatToParts(value);
          return parsedValue[0].value;
        },
      },
    },
    change: { action: "New value", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfRange },
  data() {
    return {
      rangeValue: this.value,
    };
  },
  props: Object.keys(argTypes),
  template: `
  <div style="padding: 100px">
    <SfRange
      v-model="rangeValue"
      :disabled="disabled"
      :config="{
        start,
        range,
        step,
        connect,
        direction,
        orientation,
        behaviour,
        tooltips,
        keyboardSupport,
        format,
      }"        
      @change="change"
    />  
  </div>`,
});

export const Common = Template.bind({});
Common.args = {
  disabled: false,
};

export const OneSlider = Template.bind({});
OneSlider.args = {
  ...Common.args,
  value: [0],
  start: 0,
  range: {
    min: 0,
    max: 10,
  },
  step: 1,
  connect: true,
  direction: "ltr",
  orientation: "horizontal",
  behaviour: "tap-drag",
  tooltips: true,
  format: {
    to: function (value) {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(value);
    },
    from: function (value) {
      const parsedValue = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).formatToParts(value);
      return parsedValue[0].value;
    },
  },
  keyboardSupport: true,
};
