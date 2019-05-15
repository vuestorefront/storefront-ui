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
            <SfSelectOption value="amaranth">amaranth</SfSelectOption>
            <SfSelectOption value="amber">amber</SfSelectOption>
            <SfSelectOption value="arctiv">arctiv</SfSelectOption>
            <SfSelectOption value="bluetiful">bluetiful</SfSelectOption>
            <SfSelectOption value="brilliant-rose">brilliant-rose</SfSelectOption>
            <SfSelectOption value="buff">buff</SfSelectOption>
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
