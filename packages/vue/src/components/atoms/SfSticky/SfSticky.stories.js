// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfSticky from "./SfSticky.vue";

storiesOf("Atoms|Sticky", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        const mixin = {};
        return {
          row:{
            display: "flex",
            maxWidth: "740px",
            margin: "auto",
            paddingTop: "140px",
            paddingBottom: "1140px"
          },
          col: {
            flex: 1
          },
          content: {
            height: "600px",
            backgroundColor: "#F2F2F2"
          },
          sticky: {
            height: "300px",
            backgroundColor: "#5ECE7B"
          }
        };
      },
      components: { SfSticky },
      template: `<div class="row">
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
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import SfSticky from "@storefrontui/vue/dist/SfSticky.vue"</code></pre>`
      }
    }
  );
