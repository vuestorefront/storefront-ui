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

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$heading--border-color",
      "#F1F2F4",
      "border color for underlined heading"
    ],
    [
      "$heading--underline-subtitle-color",
      "#A3A5AD",
      "subtitle color for underlined heading"
    ],
    ["$heading--mobile-breakpoint", "$mobile-max", "default mobile breakpoint"]
  ]
};

// use this to document events
const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-heading--underline", "change heading to underlined mobile version"],
    [".sf-heading--left", "align text to left"],
    [".sf-heading--right", "align text to right"]
  ]
};

storiesOf("Atoms|Heading", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        title: {
          default: text("(prop) title", "Share your look")
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
      template: `<div style="max-width: 1140px">
        <sf-heading :title="title" :subtitle="subtitle" :level="level" :class="customClass" />
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import { SfHeading } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
       `
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
              "sf-heading--underline": "sf-heading--underline",
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
      template: `<div style="max-width: 1140px">
        <sf-heading :title="title" :subtitle="subtitle" :level="level" :class="customClass">
          <tenplate #title="title">{{title}}</title>
        </sf-heading>
      </div>`
    }),
    {
      info: true
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
              null: "null",
              "sf-heading--underline": "sf-heading--underline",
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
      template: `<div style="max-width: 1140px">
        <sf-heading :title="title" :level="level" :class="customClass">
          <template v-slot:subtitle>{{subtitle}}</template>
        </sf-heading>
      </div>`
    }),
    {
      info: true
    }
  );
