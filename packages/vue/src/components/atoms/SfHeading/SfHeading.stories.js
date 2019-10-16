// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfHeading from "./SfHeading.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$heading-border-color", "#f1f2f4 !default;", "border color for heading"],
    ["$heading-line-height", "1.6 !default;", "line height for heading"],
    [
      "$heading__title-font-family",
      "$body-font-family-primary !default;",
      "font family for heading title"
    ],
    [
      "$heading__title-font-size",
      "$font-size-extra-big-mobile !default;",
      "font size for heading title"
    ],
    [
      "$heading__title-font-size-desktop",
      "$font-size-extra-big-desktop !default;",
      "font size for heading title on desktop"
    ],
    [
      "$heading__subtitle-font-family",
      "$body-font-family-primary !default;",
      "font family for subtitle"
    ],
    [
      "$heading__subtitle-font-size",
      "$font-size-regular-mobile !default;",
      "font size for subtitle"
    ],
    [
      "$heading__subtitle-font-size-desktop",
      "$font-size-big-desktop !default;",
      "font size for subtitle on desktop"
    ]
  ]
};
const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["sf-heading--no-underline", "removed underline"],
    ["sf-heading--left", "adjusted heading to left side"],
    ["sf-heading--right", "adjusted heading to right side"]
  ]
};

const summary = `<h2>Usage</h2>
<pre><code>import { SfHeading } from "@storefront-ui/vue"</code></pre>
${generateStorybookTable(scssTableConfig, "SCSS variables")}
${generateStorybookTable(cssTableConfig, "CSS modifiers")}`

storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        title: {
          default: text("(prop) title", "Show how YOU wear it")
        },
        subtitle: {
          default: text("(prop) subtitle", "#YOURLOOK")
        },
        level: {
          default: number("(prop) level", 2)
        },
        customClass: {
          default: options(
            "CSS Modifier",
            {
              "sf-heading--no-underline": "sf-heading--no-underline",
              "sf-heading--left": "sf-heading--left",
              "sf-heading--right": "sf-heading--right"
            },
            "null",
            { display: "multi-select" },
            "CSS-Modifiers"
          )
        }
      },
      components: { SfHeading },
      template: `<SfHeading
        :title="title"
        :subtitle="subtitle"
        :level="level"
        :class="customClass" />`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "[slot] title",
    () => ({
      props: {
        title: {
          default: text("(slot) default", "Share your look")
        },
        subtitle: {
          default: text("(slot) subtitle", "#YOURLOOK")
        },
        level: {
          default: number("(prop) level", 2)
        },
        customClass: {
          default: options(
            "CSS Modifier",
            {
              null: "null",
              "sf-heading--no-underline": "sf-heading--no-underline",
              "sf-heading--left": "sf-heading--left",
              "sf-heading--right": "sf-heading--right"
            },
            "null",
            { display: "multi-select" },
            "CSS-Modifiers"
          )
        }
      },
      components: { SfHeading },
      template: `<SfHeading :level="level" :class="customClass">
        <template #title>{{title}}</template>
      </SfHeading>`
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "[slot] subtitle",
    () => ({
      props: {
        title: {
          default: text("(slot) default", "Share your look")
        },
        subtitle: {
          default: text("(slot) subtitle", "#YOURLOOK")
        },
        level: {
          default: number("(prop) level", 2)
        },
        customClass: {
          default: options(
            "CSS Modifier",
            {
              "sf-heading--no-underline": "sf-heading--no-underline",
              "sf-heading--left": "sf-heading--left",
              "sf-heading--right": "sf-heading--right"
            },
            "null",
            { display: "multi-select" },
            "CSS-Modifiers"
          )
        }
      },
      components: { SfHeading },
      template: `<SfHeading :level="level" :class="customClass">
        <template #subtitle>{{subtitle}}</template>
      </SfHeading>`
    }),
    {
      info: {
        summary
      }
    }
  );
