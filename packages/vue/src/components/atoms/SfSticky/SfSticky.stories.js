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
            flex: "1 1 100%",
            padding: ".95rem",
            margin: "1rem"
          },
          sticker: {
            ...mixin,
            height: "300px",
            // backgroundColor: "#5ECE7B",
            color: "#FFF"
          },
          stickerB: {
            ...mixin,
            height: "500px",
            // backgroundColor: "#5ECE7B",
            color: "#FFF"
          },
          content: {
            ...mixin,
            height: "600px",
            backgroundColor: "#F2F2F2",
            color: "#999"
          },
          distanceTop: {
            height: "44px"
          },
          distanceBottom: {
            height: "1111px"
          }
        };
      },
      components: { SfSticky },
      template: `
        <div>
          <div :style="distanceTop"></div>
          <div class="row">
            <div class="col">
              <sf-sticky>
                <div :style="sticker">sticker</div>
              </sf-sticky>
              <div :style="content">content</div>
              <p></p>
              <div :style="content">content</div>
            </div>
            <div class="col">
              <sf-sticky>
                <div :style="stickerB">sticker</div>
              </sf-sticky>
            </div>
          </div>
          <div :style="distanceBottom"></div>
        </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import SfSticky from "@storefrontui/vue/dist/SfSticky.vue"</code></pre>`
      }
    }
  );
