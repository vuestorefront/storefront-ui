/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfTopBar from "./SfTopBar.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";

storiesOf("Organisms|TopBar", module)
  .add("Common", () => ({
    components: { SfTopBar, SfButton, SfImage },
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
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag"/>
      </template>
    </SfTopBar>`
  }))
  .add("[slot] left", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
        <p style="margin-right: 5px;">Download our application.</p>
        <SfButton class="sf-button--text">Find out more</SfButton>
      </template>
      <template #left>
        CUSTOM LEFT
      </template>
      <template #right>
        <div style="margin-right: 27px">Location:</div>
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag"/>
      </template>
    </SfTopBar>`
  }))
  .add("[slot] center", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
        CUSTOM CENTER
      </template>
      <template #left>
        <SfButton class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        <div style="margin-right: 27px">Location:</div>
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag"/>
      </template>
    </SfTopBar>`
  }))
  .add("[slot] right", () => ({
    components: { SfTopBar, SfButton, SfImage },
    template: `<SfTopBar>
      <template #center>
        <p style="margin-right: 5px;">Download our application.</p>
        <SfButton class="sf-button--text">Find out more</SfButton>
      </template>
      <template #left>
        <SfButton class="sf-button--text">Help & FAQs</SfButton>
      </template>
      <template #right>
        CUSTOM RIGHT
      </template>
    </SfTopBar>`
  }));
