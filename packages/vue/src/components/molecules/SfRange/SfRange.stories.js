import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  boolean,
  object,
} from "@storybook/addon-knobs";
import SfRange from "./SfRange.vue";
storiesOf("Molecules|Range", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      config: {
        default: object("config",
          {
            start: [0, 1],
            range: {
              min: 0,
              max: 10
            },
            step: 1,
            connect: true,
            direction: "ltr",
            orientation: "horizontal",
            behaviour: "tap-drag",
            tooltips: [
              {
                to: function (value) {
                  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)
                },
              },
              {
                to: function (value) {
                  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
                },
              }
            ],
            keyboardSupport: true,
          },
          "Props"),
      }
    },
    data() {
      return {
        value: [0, 1],
      }
    },
    methods: {
      alert(value) {
        console.log("slider current value:", value);
      },
    },
    components: { SfRange },
    template:
      `<div style="padding: 100px">
			<SfRange
        v-model="value"
        :disabled="disabled"
        :config="config"        
				@change="alert"
			/>  
		</div>`,
  }))
  .add("One slider", () => ({
    props: {
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      config: {
        default: object("config",
          {
            start: 0,
            range: {
              min: 0,
              max: 10
            },
            step: 1,
            connect: true,
            direction: "ltr",
            orientation: "horizontal",
            behaviour: "tap-drag",
            tooltips: [
              {
                to: function (value) {
                  return new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(value)
                },
              },
            ],
            keyboardSupport: true,
          },
          "Props"),
      }
    },
    data() {
      return {
        value: 0,
      }
    },
    methods: {
      alertValues(value) {
        console.log("slider current value:", value);
      },
    },
    components: { SfRange },
    template:
      `<div style="padding: 100px">
			<SfRange
				v-model="value"
				:disabled="disabled"
				:config="config"
        @change="alertValues"
      />
		</div>`,
  }));
