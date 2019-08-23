// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfSticky from "./SfSticky.vue";

storiesOf("Molecules|Sticky", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        const mixin = {};
        return {
          row: {
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "600px",
            margin: "auto"
          },
          col: {
            flex: "0 0 300px"
          },
          content: {
            height: "880px",
            backgroundColor: "#F2F2F2"
          },
          sticky: {
            height: "300px",
            backgroundColor: "#5ECE7B"
          },
          top: {
            height: "5rem"
          },
          bottom: {
            height: "35rem"
          }
        };
      },
      components: { SfSticky },
      template: `
      <div>
        <div :style="top"></div>
        <div :style="row">
          <div :style="col"> 
            <div :style="content"></div>
            <p></p>
            <div :style="content"></div>
          </div>
          <div :style="col">
            <sf-sticky>
              <div :style="sticky"></div>
            </sf-sticky>
          </div>
        </div>
        <div :style="bottom"></div>
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import { SfSticky } from "@storefront-ui/vue"</code></pre>`
      }
    }
  );
