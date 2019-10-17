// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import notes from "./storybook-notes.md";
import SfSelect from "./SfSelect.vue";
import SfProductOption from "../SfProductOption/SfProductOption.vue";

storiesOf("Molecules|Select", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          options: [
            { value: "amaranth", color: "#E52B50", label: "Amaranth" },
            { value: "amber", color: "#FFBF00", label: "Amber" },
            { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
            { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
            {
              value: "brilliant-rose",
              color: "#FF55A3",
              label: "Brilliant rose"
            },
            { value: "buff", color: "#F0DC82", label: "Buff" }
          ],
          selected: ""
        };
      },
      components: { SfSelect, SfProductOption },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-select--bordered": "sf-select--bordered",
              "sf-select--underlined": "sf-select--underlined"
            },
            "sf-select--underlined",
            { display: "multi-select" }
          )
        },
        size: {
          default: number("size (prop)", 5)
        },
        required: {
          default: boolean("required (prop)", true)
        },
        valid: {
          default: boolean("valid (prop)", true)
        },
        label: {
          default: text("label (prop)", "Color")
        },
        errorMessage: {
          default: text("errorMessage (prop)", "This field is not correct.")
        }
      },
      template: `
      <div>
        <p><b>Selected: {{selected}}</b></p>
        <div style="max-width: 300px">
          <SfSelect v-model="selected" :label="label" :class="customClass" :size="size" :required="required" :valid="valid" :errorMessage="errorMessage">
            <SfSelectOption v-for="option in options" :key="option.value" :value="option.value">
              <SfProductOption :color="option.color" :label="option.label"/>
            </SfSelectOption>
          </SfSelect>
        </div>
      </div>
      `
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "Object",
    () => ({
      data() {
        return {
          options: [
            { color: "#E52B50", label: "Amaranth" },
            { color: "#FFBF00", label: "Amber" },
            { color: "#D0FF14", label: "Arctic lime" },
            { color: "#3C69E7", label: "Bluetiful" },
            { color: "#FF55A3", label: "Brilliant rose" },
            { color: "#F0DC82", label: "Buff" }
          ],
          selected: { color: "#E52B50", label: "Amaranth" }
        };
      },
      components: { SfSelect, SfProductOption },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-select--bordered": "sf-select--bordered",
              "sf-select--underlined": "sf-select--underlined"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `
      <div>
        <p><b>Selected: {{selected}}</b></p>
        <div style="max-width: 509px">
          <SfSelect v-model="selected" :class="customClass">
            <SfSelectOption v-for="option in options" :key="option.label" :value="option">
              <SfProductOption :color="option.color" :label="option.label"/>
            </SfSelectOption>
          </SfSelect>

        </div>
      </div>
      `
    }),
    {
      info: true,
      notes
    }
  );
