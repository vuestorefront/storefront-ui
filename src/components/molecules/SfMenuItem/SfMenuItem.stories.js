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
        title: {
          default: text("title (prop)", "Title prop")
        },
        count: {
          default: text("count (prop)", "30")
        }
      },
      template: `
      <div style="width: 300px">
        <SfMenuItem
          :title="title"
          :count="count"
        />
      </div>
    `
    }),
    {
      info: true
    }
  );
