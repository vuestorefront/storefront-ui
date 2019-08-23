import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfRadio from "./SfRadio.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$radio--active-background",
      "$c-light-primary",
      "background-color for active option"
    ],
    [
      "$radio-transition",
      "background-color 0.25s cubic-bezier(1, 0.5, 0.8, 1)",
      "transition for option background"
    ],
    [
      "$radio__checkmark-transition",
      "border 0.25s cubic-bezier(1, 0.5, 0.8, 1)",
      "transition for checkmark"
    ],
    ["$radio__checkmark-size", "1.4375rem", "size for checkmark"],
    [
      "$radio__checkmark-primary-color",
      "$c-green-primary",
      "primary color for checkmark"
    ],
    [
      "$radio__checkmark-secondary-color",
      "$c-gray-secondary",
      "secondary color for checkmark"
    ],
    ["$radio__label-font-size", "1.125rem", "font size for label"],
    ["$radio__description-font-size", "0.75rem", "font size for description"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-radio--transparent", "removed background from active option"]
  ]
};

storiesOf("Molecules|Radio", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          checked: "inpost",
          radios: [
            {
              name: "shipping",
              value: "store",
              label: "Pickup in the store",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
            },
            {
              name: "shipping",
              value: "home",
              label: "Delivery to home",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
            },
            {
              name: "shipping",
              value: "coffee",
              label: "48 hours coffee",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
            },
            {
              name: "shipping",
              value: "inpost",
              label: "Paczkomaty Inpost",
              description:
                "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
            }
          ]
        };
      },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-radio--transparent": "sf-radio--transparent"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: {
        SfRadio
      },
      template: `<div :style="{maxWidth: '710px'}">
        <p><b>Checked: {{checked}}</b></p>
        <SfRadio v-for="(radio, key) in radios" :key="key" v-model="checked" :disabled="radio.disabled" :name="radio.name" :value="radio.value" :label="radio.label" :description="radio.description" :class="customClass"/>
      </div>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
          <pre><code>import { SfRadio } from "@storefront-ui/vue"</code></pre>
          ${generateStorybookTable(scssTableConfig, "SCSS variables")}
          ${generateStorybookTable(cssTableConfig, "CSS modifiers")}`
      }
    }
  );
