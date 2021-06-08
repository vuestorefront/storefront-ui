import { SfRange } from "@storefront-ui/vue";
export default {
	title: "Components/Molecules/Range",
	component: SfRange,
	argTypes: {
		value: {
			control: {
				type: "array",
			},
			table: {
				category: "Props",
			},
			defaultValue: [0, 1],
		},
		disabled: {
			control: "boolean",
			table: {
				category: "Props",
			},
			description: "Disabled",
		},
		start: {
			control: {
				type: "array",
			},
			table: {
				category: "Props",
			},
			defaultValue: [0, 1],
		},
		range: {
			control: "object",
			table: {
				category: "Props",
			},
			defaultValue: {
				min: 0,
				max: 10,
			},
		},
		step: {
			control: "number",
			table: {
				category: "Props",
			},
			defaultValue: 1,
		},
		connect: {
			control: "boolean",
			table: {
				category: "Props",
			},
			defaultValue: true,
		},
		direction: {
			control: {
				type: "radio",
				options: ["ltr", "rtl"],
			},
			table: {
				category: "Props",
			},
			defaultValue: "ltr",
		},
		orientation: {
			control: {
				type: "radio",
				options: ["horizontal", "vertical"],
			},
			table: {
				category: "Props",
			},
			defaultValue: "horizontal",
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
			table: {
				category: "Props",
			},
      description: "For detailed description please see: https://refreshless.com/nouislider/behaviour-option/",
			defaultValue: "tap-drag",
		},
		tooltips: {
			control: "boolean",
			table: {
				category: "Props",
			},
			defaultValue: true,
		},
		keyboardSupport: {
			control: "boolean",
			table: {
				category: "Props",
			},
			defaultValue: true,
		},
		format: {
			control: "object",
			table: {
				category: "Props",
			},
      description: "For details of tooltips number formatting please see: https://refreshless.com/nouislider/number-formatting/",
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
