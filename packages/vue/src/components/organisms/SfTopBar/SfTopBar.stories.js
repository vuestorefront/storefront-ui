/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

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
      template: `<SfTopBar>
          <template slot="center">Download our application.<a :style='style'>Find out more.</a></template>
        </SfTopBar>`,
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
    <SfTopBar>
      <template slot="left">left content</template>
    </SfTopBar>
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
    <SfTopBar>
      <template slot="right">right content</template>
    </SfTopBar>
    `,
      components: {
        SfTopBar
      }
    }),
    {
      info: true
    }
  );
