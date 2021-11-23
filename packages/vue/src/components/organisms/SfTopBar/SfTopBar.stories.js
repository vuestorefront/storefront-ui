import { SfTopBar, SfButton, SfImage } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/TopBar",
  component: SfTopBar,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "top-bar-background": { value: "var(--c-light)", control: "text" },
      "top-bar-padding": { value: "0 var(--spacer-base)", control: "text" },
      "top-bar-height": { value: "2.5rem", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Top Bar component with righ or left aligned content.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTopBar, SfImage, SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfTopBar>
    <template #center>
      <div style="display: flex;" class="desktop-only">
        <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
        <SfButton style="padding: 0" class="sf-button--text">Find out more</SfButton>
      </div>
      <SfImage :width="24" :height="24" class="smartphone-only" src="/assets/storybook/SfTopBar/logo.svg" alt="logo"/>
    </template>
    <template #left>
      <SfButton style="padding: 0" class="sf-button--text">Help & FAQs</SfButton>
    </template>
    <template #right>
      <SfImage :width="32" :height="32" style="margin-right: var(--spacer-sm)" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTEiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC4wOTYgMTMuMjY4QzE4IDEzLjE2NCAxNy44OCAxMy4wNjQgMTcuNzM2IDEyLjk2OEMxNy41OTIgMTIuODY0IDE3LjQyNCAxMi43NzIgMTcuMjMyIDEyLjY5MkMxNy4wNDggMTIuNjA0IDE2Ljg0OCAxMi41MzYgMTYuNjMyIDEyLjQ4OEMxNi40MTYgMTIuNDMyIDE2LjE4OCAxMi40IDE1Ljk0OCAxMi4zOTJWMTUuMjM2TDE2LjEwNCAxNS4yNzJDMTYuNTQ0IDE1LjM2OCAxNi45NCAxNS40OCAxNy4yOTIgMTUuNjA4QzE3LjY1MiAxNS43MjggMTcuOTU2IDE1Ljg4IDE4LjIwNCAxNi4wNjRDMTguNDYgMTYuMjQ4IDE4LjY1MiAxNi40NzIgMTguNzggMTYuNzM2QzE4LjkxNiAxNyAxOC45ODQgMTcuMzI0IDE4Ljk4NCAxNy43MDhDMTguOTg0IDE4LjEwOCAxOC45MDggMTguNDU2IDE4Ljc1NiAxOC43NTJDMTguNjA0IDE5LjA0OCAxOC4zOTYgMTkuMjkyIDE4LjEzMiAxOS40ODRDMTcuODY4IDE5LjY3NiAxNy41NTIgMTkuODI0IDE3LjE4NCAxOS45MjhDMTYuODI0IDIwLjAyNCAxNi40MzYgMjAuMDc2IDE2LjAyIDIwLjA4NFYyMS4yODRIMTUuNDkyVjIwLjA3MkMxNC4zMjQgMjAgMTMuMyAxOS42MDQgMTIuNDIgMTguODg0TDEyLjkzNiAxNy45NzJDMTMuMDU2IDE4LjA5MiAxMy4yMDQgMTguMjE2IDEzLjM4IDE4LjM0NEMxMy41NTYgMTguNDY0IDEzLjc1NiAxOC41NzYgMTMuOTggMTguNjhDMTQuMjEyIDE4Ljc4NCAxNC40NiAxOC44NzYgMTQuNzI0IDE4Ljk1NkMxNC45ODggMTkuMDI4IDE1LjI2NCAxOS4wNzYgMTUuNTUyIDE5LjFWMTYuMjMyTDE1LjM3MiAxNi4xODRDMTQuOTQgMTYuMDggMTQuNTYgMTUuOTY4IDE0LjIzMiAxNS44NDhDMTMuOTA0IDE1LjcyOCAxMy42MjggMTUuNTg0IDEzLjQwNCAxNS40MTZDMTMuMTg4IDE1LjI0OCAxMy4wMjQgMTUuMDQ0IDEyLjkxMiAxNC44MDRDMTIuOCAxNC41NjQgMTIuNzQ0IDE0LjI3NiAxMi43NDQgMTMuOTRDMTIuNzQ0IDEzLjU1NiAxMi44MTIgMTMuMjE2IDEyLjk0OCAxMi45MkMxMy4wODQgMTIuNjE2IDEzLjI3MiAxMi4zNiAxMy41MTIgMTIuMTUyQzEzLjc2IDExLjkzNiAxNC4wNTIgMTEuNzY4IDE0LjM4OCAxMS42NDhDMTQuNzI0IDExLjUyOCAxNS4wOTIgMTEuNDU2IDE1LjQ5MiAxMS40MzJWMTAuMjJIMTYuMDJWMTEuNDMyQzE2LjU0OCAxMS40NTYgMTcuMDI0IDExLjU1MiAxNy40NDggMTEuNzJDMTcuODggMTEuODg4IDE4LjI2NCAxMi4xMTIgMTguNiAxMi4zOTJMMTguMDk2IDEzLjI2OFpNMTcuODMyIDE3LjgxNkMxNy44MzIgMTcuNjA4IDE3Ljc4OCAxNy40MzIgMTcuNyAxNy4yODhDMTcuNjIgMTcuMTM2IDE3LjUgMTcuMDA0IDE3LjM0IDE2Ljg5MkMxNy4xOCAxNi43NzIgMTYuOTg0IDE2LjY2OCAxNi43NTIgMTYuNThDMTYuNTIgMTYuNDkyIDE2LjI1MiAxNi40MDggMTUuOTQ4IDE2LjMyOFYxOS4xMTJDMTYuNTQ4IDE5LjExMiAxNy4wMTIgMTkuMDA0IDE3LjM0IDE4Ljc4OEMxNy42NjggMTguNTcyIDE3LjgzMiAxOC4yNDggMTcuODMyIDE3LjgxNlpNMTMuODYgMTMuNzcyQzEzLjg2IDEzLjk3MiAxMy44OTIgMTQuMTQ0IDEzLjk1NiAxNC4yODhDMTQuMDI4IDE0LjQzMiAxNC4xMzIgMTQuNTU2IDE0LjI2OCAxNC42NkMxNC40MDQgMTQuNzY0IDE0LjU4IDE0Ljg1NiAxNC43OTYgMTQuOTM2QzE1LjAxMiAxNS4wMDggMTUuMjY0IDE1LjA4IDE1LjU1MiAxNS4xNTJWMTIuMzkyQzE0Ljk2OCAxMi40MjQgMTQuNTQgMTIuNTYgMTQuMjY4IDEyLjhDMTMuOTk2IDEzLjA0IDEzLjg2IDEzLjM2NCAxMy44NiAxMy43NzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K" alt="currency"/>
      <SfImage :width="20" :height="20" src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
    </template>
  </SfTopBar>`,
});

export const Common = Template.bind({});
Common.args = {};

export const UseLeftSlot = (args, { argTypes }) => ({
  components: { SfTopBar, SfImage },
  props: Object.keys(argTypes),
  template: `
  <SfTopBar>
    <template #left>
      <div style="display: flex;" class="desktop-only">
        #left slot
      </div>
    </template>
    <template #center>
      <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
    </template>
    <template #right>
      <SfImage :width="32" :height="32" style="margin-right: var(--spacer-sm)" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTEiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC4wOTYgMTMuMjY4QzE4IDEzLjE2NCAxNy44OCAxMy4wNjQgMTcuNzM2IDEyLjk2OEMxNy41OTIgMTIuODY0IDE3LjQyNCAxMi43NzIgMTcuMjMyIDEyLjY5MkMxNy4wNDggMTIuNjA0IDE2Ljg0OCAxMi41MzYgMTYuNjMyIDEyLjQ4OEMxNi40MTYgMTIuNDMyIDE2LjE4OCAxMi40IDE1Ljk0OCAxMi4zOTJWMTUuMjM2TDE2LjEwNCAxNS4yNzJDMTYuNTQ0IDE1LjM2OCAxNi45NCAxNS40OCAxNy4yOTIgMTUuNjA4QzE3LjY1MiAxNS43MjggMTcuOTU2IDE1Ljg4IDE4LjIwNCAxNi4wNjRDMTguNDYgMTYuMjQ4IDE4LjY1MiAxNi40NzIgMTguNzggMTYuNzM2QzE4LjkxNiAxNyAxOC45ODQgMTcuMzI0IDE4Ljk4NCAxNy43MDhDMTguOTg0IDE4LjEwOCAxOC45MDggMTguNDU2IDE4Ljc1NiAxOC43NTJDMTguNjA0IDE5LjA0OCAxOC4zOTYgMTkuMjkyIDE4LjEzMiAxOS40ODRDMTcuODY4IDE5LjY3NiAxNy41NTIgMTkuODI0IDE3LjE4NCAxOS45MjhDMTYuODI0IDIwLjAyNCAxNi40MzYgMjAuMDc2IDE2LjAyIDIwLjA4NFYyMS4yODRIMTUuNDkyVjIwLjA3MkMxNC4zMjQgMjAgMTMuMyAxOS42MDQgMTIuNDIgMTguODg0TDEyLjkzNiAxNy45NzJDMTMuMDU2IDE4LjA5MiAxMy4yMDQgMTguMjE2IDEzLjM4IDE4LjM0NEMxMy41NTYgMTguNDY0IDEzLjc1NiAxOC41NzYgMTMuOTggMTguNjhDMTQuMjEyIDE4Ljc4NCAxNC40NiAxOC44NzYgMTQuNzI0IDE4Ljk1NkMxNC45ODggMTkuMDI4IDE1LjI2NCAxOS4wNzYgMTUuNTUyIDE5LjFWMTYuMjMyTDE1LjM3MiAxNi4xODRDMTQuOTQgMTYuMDggMTQuNTYgMTUuOTY4IDE0LjIzMiAxNS44NDhDMTMuOTA0IDE1LjcyOCAxMy42MjggMTUuNTg0IDEzLjQwNCAxNS40MTZDMTMuMTg4IDE1LjI0OCAxMy4wMjQgMTUuMDQ0IDEyLjkxMiAxNC44MDRDMTIuOCAxNC41NjQgMTIuNzQ0IDE0LjI3NiAxMi43NDQgMTMuOTRDMTIuNzQ0IDEzLjU1NiAxMi44MTIgMTMuMjE2IDEyLjk0OCAxMi45MkMxMy4wODQgMTIuNjE2IDEzLjI3MiAxMi4zNiAxMy41MTIgMTIuMTUyQzEzLjc2IDExLjkzNiAxNC4wNTIgMTEuNzY4IDE0LjM4OCAxMS42NDhDMTQuNzI0IDExLjUyOCAxNS4wOTIgMTEuNDU2IDE1LjQ5MiAxMS40MzJWMTAuMjJIMTYuMDJWMTEuNDMyQzE2LjU0OCAxMS40NTYgMTcuMDI0IDExLjU1MiAxNy40NDggMTEuNzJDMTcuODggMTEuODg4IDE4LjI2NCAxMi4xMTIgMTguNiAxMi4zOTJMMTguMDk2IDEzLjI2OFpNMTcuODMyIDE3LjgxNkMxNy44MzIgMTcuNjA4IDE3Ljc4OCAxNy40MzIgMTcuNyAxNy4yODhDMTcuNjIgMTcuMTM2IDE3LjUgMTcuMDA0IDE3LjM0IDE2Ljg5MkMxNy4xOCAxNi43NzIgMTYuOTg0IDE2LjY2OCAxNi43NTIgMTYuNThDMTYuNTIgMTYuNDkyIDE2LjI1MiAxNi40MDggMTUuOTQ4IDE2LjMyOFYxOS4xMTJDMTYuNTQ4IDE5LjExMiAxNy4wMTIgMTkuMDA0IDE3LjM0IDE4Ljc4OEMxNy42NjggMTguNTcyIDE3LjgzMiAxOC4yNDggMTcuODMyIDE3LjgxNlpNMTMuODYgMTMuNzcyQzEzLjg2IDEzLjk3MiAxMy44OTIgMTQuMTQ0IDEzLjk1NiAxNC4yODhDMTQuMDI4IDE0LjQzMiAxNC4xMzIgMTQuNTU2IDE0LjI2OCAxNC42NkMxNC40MDQgMTQuNzY0IDE0LjU4IDE0Ljg1NiAxNC43OTYgMTQuOTM2QzE1LjAxMiAxNS4wMDggMTUuMjY0IDE1LjA4IDE1LjU1MiAxNS4xNTJWMTIuMzkyQzE0Ljk2OCAxMi40MjQgMTQuNTQgMTIuNTYgMTQuMjY4IDEyLjhDMTMuOTk2IDEzLjA0IDEzLjg2IDEzLjM2NCAxMy44NiAxMy43NzJaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K" alt="currency"/>
      <SfImage :width="20" :height="20" src="/assets/storybook/SfTopBar/flag.png" alt="flag of the USA"/>
    </template>
  </SfTopBar>`,
});

export const UseRightSlot = (args, { argTypes }) => ({
  components: { SfTopBar },
  props: Object.keys(argTypes),
  template: `
  <SfTopBar>
    <template #right>
      <div style="display: flex;" class="desktop-only">
        #right slot
      </div>
    </template>
    <template #center>
      <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">Download our application.</p>
    </template>
    <template #left>
      <div>Help & FAQs</div>
    </template>
  </SfTopBar>`,
});

export const UseCenterSlot = (args, { argTypes }) => ({
  components: { SfTopBar },
  props: Object.keys(argTypes),
  template: `
  <SfTopBar>
    <template #right>
      <div style="display: flex;" class="desktop-only">
        RIGHT
      </div>
    </template>
    <template #center>
      <p style="margin: 0 var(--spacer-sm) 0 0; font-size: var(--font-size--base); color: var(--c-link);">#center slot</p>
    </template>
    <template #left>
      <div>Help & FAQs</div>
    </template>
  </SfTopBar>`,
});
