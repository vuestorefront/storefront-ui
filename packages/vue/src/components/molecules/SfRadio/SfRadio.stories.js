import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfRadio from "./SfRadio.vue";

export default {
  title: "Molecules|Radio",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfRadio },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        { "sf-radio--transparent": "sf-radio--transparent" },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Pickup in the store", "Props"),
    },
    details: {
      default: text("details", "Delivery from 4 to 6 business days", "Props"),
    },
    description: {
      default: text(
        "description",
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        "Props"
      ),
    },
    name: {
      default: text("name", "shipping", "Props"),
    },
    value: {
      default: text("value", "store", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
  },
  data() {
    return {
      checked: "",
    };
  },
  template: `<SfRadio 
       :class="customClass"
       :label="label"
       :details="details"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked"/>`,
});

export const SlotCheckmark = () => ({
  components: { SfRadio },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        { "sf-radio--transparent": "sf-radio--transparent" },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Pickup in the store", "Props"),
    },
    details: {
      default: text("details", "Delivery from 4 to 6 business days", "Props"),
    },
    description: {
      default: text(
        "description",
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        "Props"
      ),
    },
    name: {
      default: text("name", "shipping", "Props"),
    },
    value: {
      default: text("value", "store", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
  },
  data() {
    return {
      checked: "",
    };
  },
  template: `<SfRadio 
       :class="customClass"
       :label="label"
       :details="details"
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
    </SfRadio>`,
});

SlotCheckmark.story = {
  name: "[slot] checkmark",
};

export const SlotLabel = () => ({
  components: { SfRadio },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        { "sf-radio--transparent": "sf-radio--transparent" },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Pickup in the store", "Props"),
    },
    details: {
      default: text("details", "Delivery from 4 to 6 business days", "Props"),
    },
    description: {
      default: text(
        "description",
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        "Props"
      ),
    },
    name: {
      default: text("name", "shipping", "Props"),
    },
    value: {
      default: text("value", "store", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
  },
  data() {
    return {
      checked: "",
    };
  },
  template: `<SfRadio 
       :class="customClass"
       :label="label"
       :details="details"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #label="{label, isChecked, disabled}">
          CUSTOM LABEL
       </template>
    </SfRadio>`,
});

SlotLabel.story = {
  name: "[slot] label",
};

export const SlotDetails = () => ({
  components: { SfRadio },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        { "sf-radio--transparent": "sf-radio--transparent" },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Pickup in the store", "Props"),
    },
    details: {
      default: text("details", "Delivery from 4 to 6 business days", "Props"),
    },
    description: {
      default: text(
        "description",
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        "Props"
      ),
    },
    name: {
      default: text("name", "shipping", "Props"),
    },
    value: {
      default: text("value", "store", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
  },
  data() {
    return {
      checked: "",
    };
  },
  template: `<SfRadio 
       :class="customClass"
       :label="label"
       :details="details"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #details="{details}">
          CUSTOM DETAILS
       </template>
    </SfRadio>`,
});

SlotDetails.story = {
  name: "[slot] details",
};

export const SlotDescription = () => ({
  components: { SfRadio },
  props: {
    customClass: {
      default: options(
        "CSS Modifiers",
        { "sf-radio--transparent": "sf-radio--transparent" },
        "",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Pickup in the store", "Props"),
    },
    details: {
      default: text("details", "Delivery from 4 to 6 business days", "Props"),
    },
    description: {
      default: text(
        "description",
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceler. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
        "Props"
      ),
    },
    name: {
      default: text("name", "shipping", "Props"),
    },
    value: {
      default: text("value", "store", "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
  },
  data() {
    return {
      checked: "",
    };
  },
  template: `<SfRadio 
       :class="customClass"
       :label="label"
       :details="details"
       :description="description"
       :name="name"
       :value="value"
       :disbled="disabled"
       :required="required"
       v-model="checked">
       <template #description="{description}">
          CUSTOM DESCRIPTION
       </template>
    </SfRadio>`,
});

SlotDescription.story = {
  name: "[slot] description",
};
