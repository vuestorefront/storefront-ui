// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import notes from "./SfSelect.md";
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
          selected: "s"
        };
      },
      components: { SfSelect, SfProductOption },
      props: {
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-select--bordered", "sf-select--underlined"],
            "null"
          )
        }
      },
      template: `
      <div>
        <p><b>Selected: {{selected}}</b></p>
        <div style="max-width: 509px">
          <SfSelect v-model="selected" :class="customClass">
            <SfSelectOption value="xs">
              <SfProductOption label="XS"/>
            </SfSelectOption>
            <SfSelectOption value="s">
              <SfProductOption label="S"/>
            </SfSelectOption>
            <SfSelectOption value="m">
              <SfProductOption label="M"/>
            </SfSelectOption>
            <SfSelectOption value="l">
              <SfProductOption label="L"/>
            </SfSelectOption>
            <SfSelectOption value="xl">
              <SfProductOption label="XL"/>
            </SfSelectOption>
            <SfSelectOption value="xxl">
              <SfProductOption label="XXL"/>
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
