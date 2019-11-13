// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfSection from "./SfSection.vue";

storiesOf("Molecules|Section", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfSection },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-section--no-underline": "sf-section--no-underline"
          },
          "sf-section--no-underline",
          { display: "multi-select" }
        )
      },
      titleHeading: {
        default: text("title-heading (prop)", "Share your look")
      },
      subtitleHeading: {
        default: text("subtitle-heading (prop)", "#YOURLOOK")
      },
      levelHeading: {
        default: number("level-heading (prop)", 2)
      }
    },
    template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <div style="display: flex; align-items:center; justify-content:center; height: 300px; background-color: #f2f2f2;">
        [#default slot content]
      </div>
    </SfSection>`
  }))
  .add("[slot] heading", () => ({
    components: { SfSection },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-section--no-underline": "sf-section--no-underline"
          },
          "sf-section--no-underline",
          { display: "multi-select" }
        )
      },
      titleHeading: {
        default: text("title-heading (prop)", "Share your look")
      },
      subtitleHeading: {
        default: text("subtitle-heading (prop)", "#YOURLOOK")
      },
      levelHeading: {
        default: number("level-heading (prop)", 2)
      }
    },
    template: `<SfSection
      :title-heading="titleHeading"
      :subtitle-heading="subtitleHeading"
      :level-heading="levelHeading">
      <template #heading>
        <!-- slot content -->
      </template>
      <div style="display: flex; align-items:center; justify-content:center; height: 300px; background-color: #f2f2f2;">
        [#default slot content]
      </div>
    </SfSection>`
  }));
