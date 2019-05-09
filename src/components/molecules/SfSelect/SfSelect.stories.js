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
      components: { SfSelect },
      data() {
        return {
          selected: "S"
        };
      },
      template: `
        <div style="width: 300px;">
          <SfSelect v-model="selected">
            <SfSelectOption value="S"/>
            <SfSelectOption value="M"/>
            <SfSelectOption value="L"/>
          </SfSelect>
        </div>
      `
    }),
    {
      info: true,
      notes
    }
  );
