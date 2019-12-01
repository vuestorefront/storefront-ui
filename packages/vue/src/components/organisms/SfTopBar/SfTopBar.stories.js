/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfTopBar from "./SfTopBar.vue";

storiesOf("Organisms|TopBar", module)
  .add("Common", () => ({
    data() {
      return {
        style: {
          textDecoration: "underline"
        }
      };
    },
    components: {
      SfTopBar
    },
    template: `<SfTopBar>
        Download our application.<a :style='style'>Find out more.</a>
      </SfTopBar>`
  }))
  .add("[slot] left", () => ({
    components: {
      SfTopBar
    },
    template: `<SfTopBar>
        <template slot="left">left content</template>
      </SfTopBar>`
  }))
  .add("[slot] right", () => ({
    components: {
      SfTopBar
    },
    template: `<SfTopBar>
        <template slot="right">right content</template>
      </SfTopBar>`
  }));
