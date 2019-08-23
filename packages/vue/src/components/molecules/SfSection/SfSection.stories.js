// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  select,
  text,
  number
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSection from "./SfSection.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$section--spacing", "100px", "section spacing"],
    ["$section--mobile-breakpoint", "$mobile-max", "default mobile breakpoint"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-section--underline", "changed section heading to underlined version"]
  ]
};

storiesOf("Molecules|Section", module)
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
          default: select(
            "CSS Modifier",
            ["null", "sf-section--no-underline"],
            "sf-section--no-underline",
            "CSS-Modifiers"
          )
        }
      },
      data() {
        return {
          row: {
            display: "flex"
          },
          col: {
            flex: 1,
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "1rem",
            backgroundColor: "rgb(94, 206, 123)",
            color: "#FFF",
            fontSize: "2em"
          },
          colFirst: {
            flex: 1,
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "0",
            backgroundColor: "rgb(94, 206, 123)",
            color: "#FFF",
            fontSize: "3rem"
          }
        };
      },
      components: { SfSection },
      template: `
      <div>
        <SfSection :class="customClass" :title="title" :subtitle="subtitle" :level="level">
          <div :style="row">
            <div :style="colFirst">1</div>
            <div :style="col">2</div>
            <div :style="col">3</div>
          </div>
        </SfSection>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfSection } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
       `
      }
    }
  );
