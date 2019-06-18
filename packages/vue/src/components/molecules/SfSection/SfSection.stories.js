// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSection from "./SfSection.vue";

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
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-section--underline"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      data() {
        return {
          row: {
            display: "flex",
            marginTop: "50px"
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
      template: `<SfSection :class="customClass" :heading="{
        title: 'Share your look',
        subtitle: '#YOURLOOK',
        level: 1
      }">
        <div :style="row">
          <div :style="colFirst">1</div>
          <div :style="col">2</div>
          <div :style="col">3</div>
        </div>
      </SfSection>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import SfSection from "@storefrontui/vue/dist/SfSection.vue"</code></pre>
       ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
       `
      }
    }
  );
