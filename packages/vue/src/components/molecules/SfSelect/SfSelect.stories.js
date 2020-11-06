import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfSelect, SfProductOption } from "@storefront-ui/vue";
const optionsList = [
  {value: ""},
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
        default: text("placeholder", "select color", "Props"),
      },
      selectedValue: {
        default: options(
          "selectedValue",                   
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
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        :placeholder="placeholder"       
        @input="alert(selectedValue)"
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
     selectedValue: {
        default: options(
          "selectedValue",
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
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `<div style="max-width: 30rem">    
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :required="required"
        :valid="valid"
        :disabled="disabled"  
        :error-message="errorMessage"
        :placeholder="placeholder" 
        @input="alert(selectedValue)"   
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
     selectedValue: {
        default: options(
          "selectedValue",
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
    methods: {
      alert(label) {
        console.log(label);
      },
    },
    template: `<div style="max-width: 30rem">
      <SfSelect
        v-model="selectedValue"
        :class="customClass"
        :label="label"
        :required="required"
        :valid="valid"
        :error-message="errorMessage"
        :disabled="disabled"
        @input="alert(selectedValue)"
        >
        <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfSelectOption>
        <template #errorMessage>
          <span>
            CUSTOM ERROR MESSAGE
          </span>
        </template>
      </SfSelect>
    </div>`,
  }));
