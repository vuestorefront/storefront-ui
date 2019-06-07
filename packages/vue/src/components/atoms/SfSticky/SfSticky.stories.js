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
        const mixin = {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem"
        };
        return {
          row: {
            display: "flex",
            margin: "auto",
            maxWidth: "720px"
          },
          col: {
            flex: "1",
            padding: ".95rem"
          },
          sticker: {
            ...mixin,
            height: "300px",
            backgroundColor: "#5ECE7B",
            color: "#FFF"
          },
          content: {
            ...mixin,
            height: "600px",
            backgroundColor: "#F2F2F2",
            color: "#999"
          },
          distance: {
            height: "300px"
          }
        };
      },
      components: { SfSticky },
      template: `
        <div>
          <div :style="row">
            <div :style="col">
              <div :style="content">content</div>
              <p></p>
              <div :style="content">content</div>
            </div>
            <div :style="col">
              <sf-sticky>
                <div :style="sticker">sticker</div>
              </sf-sticky>
            </div>
          </div>
          <div :style="distance"></div>
        </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import SfSticky from "@storefrontui/vue/dist/SfSticky.vue"</code></pre>`
      }
    }
  );
