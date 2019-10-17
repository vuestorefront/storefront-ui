// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfHeading from "./SfHeading.vue";

storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfHeading },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-heading--no-underline": "sf-heading--no-underline",
            "sf-heading--left": "sf-heading--left",
            "sf-heading--right": "sf-heading--right"
          },
          "null",
          { display: "multi-select" }
        )
      },
      level: {
        default: number("(prop) level", 2, { min: 1, max: 6 })
      },
      title: {
        default: text("(prop) title", "Show how YOU wear it")
      },
      subtitle: {
        default: text("(prop) subtitle", "#YOURLOOK")
      }
    },
    template: `<SfHeading
        :class="customClass"
        :level="level"
        :title="title"
        :subtitle="subtitle"/>`
  }))
  .add("[slot] title", () => ({
    components: { SfHeading },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-heading--no-underline": "sf-heading--no-underline",
            "sf-heading--left": "sf-heading--left",
            "sf-heading--right": "sf-heading--right"
          },
          "null",
          { display: "multi-select" }
        )
      },
      level: {
        default: number("(prop) level", 2, { min: 1, max: 6 })
      },
      title: {
        default: text("(prop) title", "Show how YOU wear it")
      },
      subtitle: {
        default: text("(prop) subtitle", "#YOURLOOK")
      }
    },
    template: `<SfHeading
        :class="customClass"
        :level="level"
        :title="title"
        :subtitle="subtitle">
        <template #title>
          <span></span>
        </template>  
      </SfHeading>`
  }))
  .add("[slot] subtitle", () => ({
    components: { SfHeading },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-heading--no-underline": "sf-heading--no-underline",
            "sf-heading--left": "sf-heading--left",
            "sf-heading--right": "sf-heading--right"
          },
          "null",
          { display: "multi-select" }
        )
      },
      level: {
        default: number("level (prop)", 2, { min: 1, max: 6 })
      },
      title: {
        default: text("title (prop)", "Show how YOU wear it")
      },
      subtitle: {
        default: text("subtitle (prop)", "#YOURLOOK")
      }
    },
    template: `<SfHeading
        :class="customClass"
        :level="level"
        :title="title"
        :subtitle="subtitle">
        <template #subtitle>
          <span></span>
        </template>        
      </SfHeading>`
  }));
