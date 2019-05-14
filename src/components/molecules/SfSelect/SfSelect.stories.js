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
        <p><b>Selected: {{selected}}</b></p>
        <div style="width: 300px">
          <SfSelect v-model="selected">
            <SfSelectOption value="amaranth" label="Amaranth pink" color="#F19CBB" />
            <SfSelectOption value="amber" label="Amber" color="#FFBF00" />
            <SfSelectOption value="arctiv" label="Arctic lime" color="#D0FF14" />
            <SfSelectOption value="bluetiful" label="Bluetiful" color="#3C69E7" />
            <SfSelectOption value="brilliant-rose" label="Brilliant rose" color="#FF55A3" />
            <SfSelectOption value="buff" label="Buff" color="#F0DC82" />
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
