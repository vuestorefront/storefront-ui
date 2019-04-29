/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfSpinner from "./SfSpinner.vue";

storiesOf("Atoms|Spinner", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        show: {
          default: boolean("show (prop)", true)
        }
      },
      components: { SfSpinner },
      template: '<SfSpinner :show="show"/>'
    }),
    {
      info: true,
      notes
    }
  );
