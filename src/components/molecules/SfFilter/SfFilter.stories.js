import { storiesOf } from "@storybook/vue";

import SfFilter from "./SfFilter.vue";
import { withKnobs, text } from "@storybook/addon-knobs";

export default storiesOf("Molecules|[WIP] Filter", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfFilter },
      props: {
        title: {
          default: text("label (prop)", "Label prop")
        },
        count: {
          default: text("count (prop)", "30")
        }
      },
      template: `
      <div style="width: 300px">
        <SfFilter
          :label="title"
          :count="count"
        />
      </div>
    `
    }),
    {
      info: true
    }
  );
