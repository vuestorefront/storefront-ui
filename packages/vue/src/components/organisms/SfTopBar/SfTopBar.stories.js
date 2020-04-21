import { SfTopBar, SfButton, SfImage } from "@storefront-ui/vue";
export default {
  title: "Organisms|TopBar",
};
export const Common = () => ({
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
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
});
export const SlotLeft = () => ({
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
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
});
SlotLeft.story = {
  name: "[slot] left",
};
export const SlotCenter = () => ({
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
        <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
      </template>
    </SfTopBar>`,
});
SlotCenter.story = {
  name: "[slot] center",
};
export const SlotRight = () => ({
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
    </SfTopBar>`,
});
SlotRight.story = {
  name: "[slot] right",
};
