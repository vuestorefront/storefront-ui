/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfHeading from "./SfHeading.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

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
      :subtitle="subtitle"/>`
  }))
  .add("[slot] title", () => ({
    components: {
      SfHeading,
      SfIcon
    },
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
      <template #title="{title}">
        <h2 style="display: flex; align-items: center">
          <SfIcon icon="heart" size="xxs" style="margin-right: 1rem"/> {{title}}
        </h2>
      </template>  
    </SfHeading>`
  }))
  .add("[slot] subtitle", () => ({
    components: {
      SfHeading,
      SfIcon
    },
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
      <template #subtitle="{subtitle}">
        <div style="display: flex; align-items: center">
          {{subtitle}} <SfIcon icon="notify" size="xxs" style="margin-left: 1rem"/>
        </div>
      </template>        
    </SfHeading>`
  }));
