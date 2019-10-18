// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfRating from "./SfRating.vue";

storiesOf("Atoms|Rating", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfRating },
    props: {
      max: {
        default: number("max (prop)", 5)
      },
      score: {
        default: number("score (prop)", 3)
      }
    },
    template: `<SfRating
      :max="max"
      :score="score" />`
  }))
  .add("[slot] icon-positive", () => ({
    components: { SfRating },
    props: {
      max: {
        default: number("max (prop)", 5)
      },
      score: {
        default: number("score (prop)", 3)
      }
    },
    template: `<SfRating
      :max="max"
      :score="score">
      <template #icon-positive>
        <!-- add content to replace slot fallback -->  
      </template>  
    </SfRating>`
  }))
  .add("[slot] icon-negative", () => ({
    components: { SfRating },
    props: {
      max: {
        default: number("max (prop)", 5)
      },
      score: {
        default: number("score (prop)", 3)
      }
    },
    template: `<SfRating
      :max="max"
      :score="score">
      <template #icon-positive>
        <!-- add content to replace slot fallback -->
      </template>  
    </SfRating>`
  }));
