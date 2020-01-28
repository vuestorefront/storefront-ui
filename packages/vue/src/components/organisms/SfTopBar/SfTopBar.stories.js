/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import SfTopBar from "./SfTopBar.vue";
storiesOf("Organisms|TopBar", module)
  .add("Common", () => ({
    components: { SfTopBar },
    template: `<SfTopBar>
      Download our application. Find out more.
      <template #right>
        Help & FAQs
      </template>
    </SfTopBar>`
  }))
  .add("[slot] default", () => ({
    components: { SfTopBar },
    template: `<SfTopBar>
      CUSTOM DEFAULT
    </SfTopBar>`
  }))
  .add("[slot] left", () => ({
    components: { SfTopBar },
    template: `<SfTopBar>
      <template #left>
        CUSTOM LEFT
      </template>
      Download our application. Find out more.
    </SfTopBar>`
  }))
  .add("[slot] right", () => ({
    components: { SfTopBar },
    template: `<SfTopBar>
      <template #right>
        CUSTOM RIGHT
      </template>
      Download our application. Find out more.
    </SfTopBar>`
  }));
