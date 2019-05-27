/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./SfCarousel.md";
import SfCarousel from "./SfCarousel.vue";

storiesOf("Organisms|[WIP] Carousel", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfCarousel },
      template: `<SfCarousel>
        <SfCarosuelItem>
          Hi!
        </SfCarosuelItem>
      </SfCarousel>`
    }),
    {
      info: true,
      notes
    }
  );
