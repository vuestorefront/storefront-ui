import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfSelect, SfProductOption, SfInput } from "@storefront-ui/vue";
const optionsList = [
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" },
];
const knobOptionsList = optionsList.reduce(
  (a, c) => ({ ...a, [c.label]: c.value }),
  {}
);
export default {
  title: "Molecules|Select",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfSelect, SfProductOption, SfInput },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-select--underlined": "sf-select--underlined",
        },
        "sf-select--underlined",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Color", "Props"),
    },
    size: {
      default: number("size", 5, {}, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
    valid: {
      default: boolean("valid", true, "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    errorMessage: {
      default: text("errorMessage", "Color", "Props"),
    },
    selected: {
      default: options(
        "selected",
        knobOptionsList,
        optionsList[0].value,
        { display: "select" },
        "Data"
      ),
    },
  },
  data() {
    return {
      options: optionsList,
    };
  },
  template: `
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        style="max-width: 30rem"
      >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
      </SfSelect>`,
});
export const SlotLabel = () => ({
  components: { SfSelect, SfProductOption },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-select--underlined": "sf-select--underlined",
        },
        "sf-select--underlined",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Color", "Props"),
    },
    size: {
      default: number("size", 5, {}, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
    valid: {
      default: boolean("valid", true, "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    errorMessage: {
      default: text("errorMessage", "Color", "Props"),
    },
  },
  data() {
    return {
      selected: "",
      options: optionsList,
    };
  },
  template: `<div style="max-width: 30rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #label>
          CUSTOM LABEL
        </template>
      </SfSelect>
    </div>`,
});
SlotLabel.story = {
  name: "[slot] label",
};
export const SlotErrorMessage = () => ({
  components: { SfSelect, SfProductOption },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-select--underlined": "sf-select--underlined",
        },
        "sf-select--underlined",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Color", "Props"),
    },
    size: {
      default: number("size", 5, {}, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
    valid: {
      default: boolean("valid", false, "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    errorMessage: {
      default: text("errorMessage", "Color", "Props"),
    },
  },
  data() {
    return {
      selected: "",
      options: optionsList,
    };
  },
  template: `<div style="max-width: 30rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #errorMessage>
          CUSTOM ERROR MESSAGE
        </template>
      </SfSelect>
    </div>`,
});
SlotErrorMessage.story = {
  name: "[slot] errorMessage",
};
export const SlotCancel = () => ({
  components: { SfSelect, SfProductOption },
  props: {
    customClass: {
      default: options(
        "CSS modifiers",
        {
          "sf-select--underlined": "sf-select--underlined",
        },
        "sf-select--underlined",
        { display: "multi-select" },
        "CSS Modifiers"
      ),
    },
    label: {
      default: text("label", "Color", "Props"),
    },
    size: {
      default: number("size", 5, {}, "Props"),
    },
    required: {
      default: boolean("required", false, "Props"),
    },
    valid: {
      default: boolean("valid", false, "Props"),
    },
    disabled: {
      default: boolean("disabled", false, "Props"),
    },
    errorMessage: {
      default: text("errorMessage", "Color", "Props"),
    },
  },
  data() {
    return {
      selected: "",
      options: optionsList,
    };
  },
  template: `<div style="max-width: 30rem">
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage">
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #cancel>
          CUSTOM CANCEL BUTTON
        </template>
      </SfSelect>
    </div>`,
});
SlotCancel.story = {
  name: "[slot] cancel",
};
