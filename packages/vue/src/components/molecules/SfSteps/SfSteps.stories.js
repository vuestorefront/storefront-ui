// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, array } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSteps from "./SfSteps.vue";

const info = () => ({
  summary: `
        <p>SfSteps allow to break the UI in steps it supports two modes, one with slots and one with events.</p>
        <h2>Usage</h2>
        <pre><code>import { SfSteps } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
      `
});

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$steps__active-line-height-mobile",
      "0.1875rem",
      "Active line height mobile"
    ],
    [
      "$steps__active-line-height-desktop",
      "0.125rem",
      "Active line height desktop"
    ],
    ["$steps__active-line-coilor", "$c-dark", "Active line color"],
    [
      "$steps__default-border",
      "0.0625rem solid #f1f2f4",
      "Default border of steps line"
    ],
    ["$steps__step-font-weight", "500", "Step font weight"],
    ["$steps__step-font-size", "0.75rem", "Step font size"],
    ["$steps__step-font-color", "$c-gray-variant", "Step font color"],
    ["$steps__step-padding", "1.23rem 0", "Step padding"],
    ["$steps__step-text-transform", "uppercase", "Step text transform"]
  ]
};

// // use this to document events
// const eventsTableConfig = {
//   tableHeadConfig: ["NAME", "DESCRIPTION"],
//   tableBodyConfig: [["input", "event emited when option is selected"]]
// };

storiesOf("Molecules|Steps", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      props: {
        steps: {
          default: array("steps", ["One", "Two", "Three", "Four"])
        },
        canGoBack: {
          default: boolean("canGoBack", true)
        }
      },
      data() {
        return {
          active: 0
        };
      },
      components: { SfSteps },
      template: `
        <SfSteps :steps="steps" :can-go-back="canGoBack" :active="active" @change="active = $event" >
          <SfStep v-for="step in steps" :key="step" :name="step">
            STEP {{ step }}
          </SfStep>
        </SfSteps>
      `
    }),
    {
      info: info()
    }
  )
  .add(
    "[slot] default with v-model",
    () => ({
      props: {
        steps: {
          default: array("steps", ["One", "Two", "Three", "Four"])
        },
        canGoBack: {
          default: boolean("canGoBack", true)
        }
      },
      data() {
        return {
          active: 0
        };
      },
      components: { SfSteps },
      template: `
        <SfSteps :steps="steps" :can-go-back="canGoBack" v-model="active">
          <SfStep v-for="step in steps" :key="step" :name="step">
            STEP {{ step }}
          </SfStep>
        </SfSteps>
      `
    }),
    {
      info: info()
    }
  )
  .add(
    "Events usage",
    () => ({
      props: {
        steps: {
          default: array("steps", ["One", "Two", "Three", "Four"])
        },
        canGoBack: {
          default: boolean("canGoBack", true)
        }
      },
      data() {
        return {
          active: 0
        };
      },
      components: { SfSteps },
      template: `
        <div>
          <SfSteps :steps="steps" :can-go-back="canGoBack" v-model="active"></SfSteps>
          <div v-if="active === 0">
            FIRST
          </div>
          <div v-if="active === 1">
            SECOND
          </div>
        </div>
      `
    }),
    {
      info: info()
    }
  );
