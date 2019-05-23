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
          selected: "amber"
        };
      },
      components: { SfSelect, SfProductOption },
      template: `
      <div>
        <p><b>Selected: {{selected}}</b></p>
        <div style="width: 300px">
          <SfSelect v-model="selected">
            <SfSelectOption value="amaranth">
              <SfProductOption color="#E52B50" label="Amaranth"/>
            </SfSelectOption>
            <SfSelectOption value="amber">
              <SfProductOption color="#FFBF00" label="Amber"/>
            </SfSelectOption>
            <SfSelectOption value="arctic-lime">
              <SfProductOption color="#D0FF14" label="Arctic lime"/>
            </SfSelectOption>
            <SfSelectOption value="bluetiful">
              <SfProductOption color="#3C69E7" label="Bluetiful"/>
            </SfSelectOption>
            <SfSelectOption value="brilliant-rose">
              <SfProductOption color="#FF55A3" label="Brilliant rose"/>
            </SfSelectOption>
            <SfSelectOption value="buff">
              <SfProductOption color="#F0DC82" label="Buff"/>
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
