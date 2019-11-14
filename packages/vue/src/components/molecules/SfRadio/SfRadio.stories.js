import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfRadio from "./SfRadio.vue";

storiesOf("Molecules|Radio", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" }
        )
      },
      label: {
        default: text("label (prop)", "Pickup in the store")
      },
      description: {
        default: text(
          "description (prop)",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        )
      },
      name: {
        default: text("name (prop)", "shipping")
      },
      value: {
        default: text("value (prop)", "store")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
      }
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="value"/>`
  }))
  .add("[slot] checkmark", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" }
        )
      },
      label: {
        default: text("label (prop)", "Pickup in the store")
      },
      description: {
        default: text(
          "description (prop)",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        )
      },
      name: {
        default: text("name (prop)", "shipping")
      },
      value: {
        default: text("value (prop)", "store")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
      }
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="value">
       <template #checkmark="{isChecked, disabled}">
          <!-- -->
       </template>
    </SfRadio>`
  }))
  .add("[slot] label", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" }
        )
      },
      label: {
        default: text("label (prop)", "Pickup in the store")
      },
      description: {
        default: text(
          "description (prop)",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        )
      },
      name: {
        default: text("name (prop)", "shipping")
      },
      value: {
        default: text("value (prop)", "store")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
      }
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="value">
       <template #label="{label, isChecked, disabled}">
          <!-- -->
       </template>
    </SfRadio>`
  }))
  .add("[slot] description", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" }
        )
      },
      label: {
        default: text("label (prop)", "Pickup in the store")
      },
      description: {
        default: text(
          "description (prop)",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted."
        )
      },
      name: {
        default: text("name (prop)", "shipping")
      },
      value: {
        default: text("value (prop)", "store")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
      }
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="value">
       <template #description="{description}">
          <!-- -->
       </template>
    </SfRadio>`
  }));
