import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfSelect, SfProductOption } from "@storefront-ui/vue";
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
storiesOf("Molecules|Select", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
      placeholder: {
        default: text("placeholder", "Select color", "Props"),
      },
    },
    data() {
      return {
        selected: "",
        options: optionsList,
      };
    },
    template: `
      <SfSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        :placeholder="placeholder"
        style="max-width: 30rem; margin: 10px;"
      >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
      </SfSelect>`,
  }))
  .add("[slot] label", () => ({
    components: { SfSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-select--underlined": "sf-select--underlined",
            "sf-select--no-chevron": "sf-select--no-chevron",
          },
          "sf-select--underlined",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      label: {
        default: text("label", "Color", "Props"),
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
      placeholder: {
        default: text("placeholder", "", "Props"),
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
        :required="required"
        :valid="valid"
        :disabled="disabled"  
        :error-message="errorMessage"
        :placeholder="placeholder"    
        >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #label>
          CUSTOM LABEL
        </template>
      </SfSelect>
    </div>`,
  }))
  .add("[slot] errorMessage", () => ({
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
      placeholder: {
        default: text("placeholder", "", "Props"),
      },
    },
    data() {
      return {
        selected: "",
        options: optionsList,
      };
    },
    template: `<div style="max-width: 30rem">
      <SfComponentSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        >
        <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfComponentSelectOption>
        <template #errorMessage>
          CUSTOM ERROR MESSAGE
        </template>
      </SfComponentSelect>
    </div>`,
  }));
