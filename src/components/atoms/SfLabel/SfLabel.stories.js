/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfLabel from "./SfLabel.vue";

storiesOf("Atoms|Label", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          label: {
            default: text("label", "Hello World!")
          }
        };
      },
      components: { SfLabel },
      template: "<SfLabel>Hello world!</SfLabel>"
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfLabel },
      template: "<SfLabel><h1>Hello World!</h1></SfLabel>"
    }),
    {
      info: true,
      notes
    }
  );
