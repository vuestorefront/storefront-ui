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
          selected: "s"
        };
      },
      template: `
        <div style="width: 300px;">
          <SfSelect v-model="selected">
            <SfSelectOption value="s" label="S"></SfSelectOption>
            <SfSelectOption value="m" label="M""></SfSelectOption>
            <SfSelectOption value="l" label="L""></SfSelectOption>
          </SfSelect>
        </div>
      `
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "Colors",
    () => ({
      components: { SfSelect },
      data() {
        return {
          selected: "red"
        };
      },
      template: `
        <div style="width: 300px;">
          <SfSelect v-model="selected">
            <SfSelectOption value="red" label="Red" color="red"></SfSelectOption>
            <SfSelectOption value="blue" label="Blue" color="blue"></SfSelectOption>
            <SfSelectOption value="pink" label="Pink" color="pink"></SfSelectOption>
          </SfSelect>
        </div>
      `
    }),
    {
      info: true,
      notes
    }
  );
