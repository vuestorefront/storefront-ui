/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfArrow.md"
import SfArrow from "./SfArrow.vue";

storiesOf("Atoms|Arrow", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfArrow },
      template: `
      <SfArrow aria-label="prev"/>
      `
    }),
    {
      info: true,
      notes
    }
  );
