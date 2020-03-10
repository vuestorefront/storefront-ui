/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfTopBar from "./SfTopBar.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

storiesOf("Organisms|TopBar", module)
  .add("Common", () => ({
    components: { SfTopBar, SfButton },
    template: `<SfTopBar>
    <template #center>
      <p style="margin-right: 5px;">Download our application.</p>
      <SfButton class="sf-button--text">Find out more</SfButton>
      </template>
      <template #left>
        <SfButton class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        <div style="margin-right: 27px">Location:</div>
        <img src="assets/storybook/SfTopBar/flag.png" alt="flag"/>
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
