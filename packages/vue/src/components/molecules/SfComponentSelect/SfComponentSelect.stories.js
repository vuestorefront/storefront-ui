import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfComponentSelect, SfProductOption } from "@storefront-ui/vue";
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
storiesOf("Molecules|ComponentSelect", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfComponentSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-component-select--underlined":
              "sf-component-select--underlined",
            "sf-component-select--no-chevron":
              "sf-component-select--no-chevron",
          },
          "sf-component-select--underlined",
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
      persistent: {
        default: boolean("persistent", false, "Props"),
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
      <SfComponentSelect
        v-model="selected"
        :class="customClass"
        :label="label"
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        :persistent="persistent"
        style="max-width: 30rem"
      >
        <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfComponentSelectOption>
      </SfComponentSelect>`,
  }))
  .add("[slot] label", () => ({
    components: { SfComponentSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-component-select--underlined":
              "sf-component-select--underlined",
            "sf-component-select--no-chevron":
              "sf-component-select--no-chevron",
          },
          "sf-component-select--underlined",
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
      persistent: {
        default: boolean("persistent", false, "Props"),
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
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage" 
        :persistent="persistent"       
        >
        <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfComponentSelectOption>
        <template #label>
          CUSTOM LABEL
        </template>
      </SfComponentSelect>
    </div>`,
  }))
  .add("[slot] errorMessage", () => ({
    components: { SfComponentSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-component-select--underlined":
              "sf-component-select--underlined",
            "sf-component-select--no-chevron":
              "sf-component-select--no-chevron",
          },
          "sf-component-select--underlined",
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
      persistent: {
        default: boolean("persistent", false, "Props"),
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
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        :persistent="persistent"
        >
        <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfComponentSelectOption>
        <template #errorMessage>
          CUSTOM ERROR MESSAGE
        </template>
      </SfComponentSelect>
    </div>`,
  }))
  .add("[slot] cancel", () => ({
    components: { SfComponentSelect, SfProductOption },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-component-select--underlined":
              "sf-component-select--underlined",
            "sf-component-select--no-chevron":
              "sf-component-select--no-chevron",
          },
          "sf-component-select--underlined",
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
      persistent: {
        default: boolean("persistent", false, "Props"),
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
        :size="size"
        :required="required"
        :valid="valid"
        :disabled="disabled"
        :error-message="errorMessage"
        :persistent="persistent"
        >
        <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
          <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
        </SfComponentSelectOption>
        <template #cancel>
          CUSTOM CANCEL BUTTON
        </template>
      </SfComponentSelect>
    </div>`,
  }));
