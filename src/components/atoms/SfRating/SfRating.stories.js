/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfRating from "./SfRating.vue";

storiesOf("Atoms|Rating", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        rating: {
          default: number("score (prop)", 3)
        },
        max: {
          default: number("max (prop)", 5)
        }
      },
      components: { SfRating },
      template: '<SfRating :score="rating" :max="max"/>'
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] iconPositive",
    () => ({
      props: {
        rating: {
          default: number("score (prop)", 3)
        },
        max: {
          default: number("max (prop)", 5)
        }
      },
      components: { SfRating },
      template: `<SfRating :score="rating" :max="max">
        <template #icon-positive>
          <img src="assets/storybook/cat_green.svg" height="14px" />    
        </template>
      </SfRating>`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] iconNegative",
    () => ({
      props: {
        rating: {
          default: number("score (prop)", 3)
        },
        max: {
          default: number("max (prop)", 5)
        }
      },
      components: { SfRating },
      template: `<SfRating :score="rating" :max="max">
      <template #icon-negative>
        <img src="assets/storybook/cat.svg" height="14px" />
      </template>
    </SfRating>`
    }),
    {
      info: true,
      notes
    }
  );
