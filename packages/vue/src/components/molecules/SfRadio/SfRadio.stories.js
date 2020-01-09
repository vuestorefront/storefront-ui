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
  .add("Common", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Pickup in the store", "Props")
      },
      description: {
        default: text(
          "description",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
          "Props"
        )
      },
      name: {
        default: text("name", "shipping", "Props")
      },
      value: {
        default: text("value", "store", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked"/>`
  }))
  .add("[slot] checkmark", () => ({
    components: { SfRadio },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          { "sf-radio--transparent": "sf-radio--transparent" },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Pickup in the store", "Props")
      },
      description: {
        default: text(
          "description",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
          "Props"
        )
      },
      name: {
        default: text("name", "shipping", "Props")
      },
      value: {
        default: text("value", "store", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #checkmark="{isChecked, disabled}">
          <div v-if="isChecked">😀</div>
          <div v-else>😔</div>
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
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Pickup in the store", "Props")
      },
      description: {
        default: text(
          "description",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
          "Props"
        )
      },
      name: {
        default: text("name", "shipping", "Props")
      },
      value: {
        default: text("value", "store", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #label="{label, isChecked, disabled}">
          CUSTOM LABEL
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
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      label: {
        default: text("label", "Pickup in the store", "Props")
      },
      description: {
        default: text(
          "description",
          "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
          "Props"
        )
      },
      name: {
        default: text("name", "shipping", "Props")
      },
      value: {
        default: text("value", "store", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        checked: ""
      };
    },
    template: `<SfRadio 
       :class="customClass"
       :label="label"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #description="{description}">
          CUSTOM DESCRIPTION
       </template>
    </SfRadio>`
  }));
