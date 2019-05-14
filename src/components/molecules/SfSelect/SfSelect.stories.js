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
        <p>Selected: {{selected}}</p>
        <div style="width: 300px">
          <SfSelect v-model="selected">
            <SfSelectOption value="amaranth" label="Amaranth pink" color="#F19CBB">
              <div style="background-color:#F19CBB; width: 25px; height: 25px;"></div>
            </SfSelectOption>
            <SfSelectOption value="amber" label="Amber" color="#FFBF00">
              <div style="background-color:#FFBF00; width: 25px; height: 25px;"></div>
            </SfSelectOption>
            <SfSelectOption value="arctiv" label="Arctic lime" color="#D0FF14">
              <div style="background-color:#D0FF14; width: 25px; height: 25px;"></div>
            </SfSelectOption>
            <SfSelectOption value="bluetiful" label="Bluetiful" color="#3C69E7">
              <div style="background-color:#3C69E7; width: 25px; height: 25px;"></div>
            </SfSelectOption>
            <SfSelectOption value="brilliant-rose" label="Brilliant rose" color="#FF55A3">
              <div style="background-color:#FF55A3; width: 25px; height: 25px;"></div>
            </SfSelectOption>
            <SfSelectOption value="buff" label="Buff" color="#F0DC82">
              <div style="background-color:#F0DC82; width: 25px; height: 25px;"></div>
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
