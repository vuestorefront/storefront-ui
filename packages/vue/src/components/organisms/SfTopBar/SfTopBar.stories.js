/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfTopBar from "./SfTopBar.vue";

storiesOf("Organisms|TopBar", module)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          style: {
            textDecoration: "underline"
          }
        };
      },
      template:
        "<sf-top-bar>Download our application.<a :style='style'>Find out more.</a></sf-top-bar>",
      components: {
        SfTopBar
      }
    }),
    {
      info: {
        summary: "<p>Component for displaying Topbar</p>"
      }
    }
  )
  .add(
    "[slot] left",
    () => ({
      template: `
    <sf-top-bar>
      <template slot="left">left content</template>
    </sf-top-bar>
    `,
      components: {
        SfTopBar
      }
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] right",
    () => ({
      template: `
    <sf-top-bar>
      <template slot="right">right content</template>
    </sf-top-bar>
    `,
      components: {
        SfTopBar
      }
    }),
    {
      info: true
    }
  );
