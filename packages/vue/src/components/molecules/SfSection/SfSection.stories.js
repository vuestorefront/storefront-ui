/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

const StoriesPlaceholder = {
  template: `<div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
    [#default slot content]
  </div>`
};

import SfSection from "./SfSection.vue";

storiesOf("Molecules|Section", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfSection, StoriesPlaceholder },
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
      <StoriesPlaceholder />
    </SfSection>`
  }))
  .add("[slot] heading", () => ({
    components: { SfSection, StoriesPlaceholder },
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
      <template #heading="{levelHeading, titleHeading, subtitleHeading}">
        CUSTOM HEADING
      </template>
      <StoriesPlaceholder/>
    </SfSection>`
  }));
