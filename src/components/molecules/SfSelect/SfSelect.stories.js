// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import notes from "./SfSelect.md";
import SfSelect from "./SfSelect.vue";

storiesOf("Molecules|[WIP] Select", module)
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
      components: { SfSelect },
      template: `
      <div>
        <p>{{selected}}</p>
        <div style="width: 300px">
          <SfSelect v-model="selected">
            <SfSelectOption value="amaranth" label="Amaranth pink" color="#F19CBB">
            </SfSelectOption>
            <SfSelectOption value="amber" label="Amber" color="#FFBF00">
            </SfSelectOption>
            <SfSelectOption value="arctiv" label="Arctic lime" color="#D0FF14">
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
