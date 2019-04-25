import { storiesOf } from "@storybook/vue";

import SfMenuItem from "./SfMenuItem.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("Molecules|MenuItem", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      components: { SfMenuItem },
      props: {
        label: {
          default: text("label (prop)", "label prop")
        },
        count: {
          default: text("count (prop)", "30")
        }
      },
      template: `
      <div style="width: 300px">
        <SfMenuItem
          :label="label"
          :count="count"
        />
      </div>
    `
    }),
    {
      info: true
    }
  );
