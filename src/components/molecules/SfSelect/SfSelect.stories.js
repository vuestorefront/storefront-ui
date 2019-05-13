// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfSelect.md";
import SfSelect from "./SfSelect.vue";

storiesOf("Molecules|[WIP] Select", module)
  .addDecorator(withKnobs)
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
        <div style="width: 300px">
          <SfSelect v-model="selected">
            <SfSelectOption value="amaranth" label="Amaranth pink">
            </SfSelectOption>
            <SfSelectOption value="amber" label="Amber">
            </SfSelectOption>
            <SfSelectOption value="arctiv" label="Arctic lime">
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
