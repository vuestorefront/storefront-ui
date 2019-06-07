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
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import SfRating from "@storefrontui/vue/dist/SfRating.vue"</code></pre>`
      },
      notes
    }
  )
  .add(
    "[slot] icon-positive",
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
    "[slot] icon-negative",
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
