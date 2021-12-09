import { SfMenuItem, SfIcon } from "@storefront-ui/vue";
import { icons } from "@storefront-ui/shared/icons/icons";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Molecules/MenuItem",
  component: SfMenuItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "menu-item-text-transform": { value: "", control: "text" },
      "menu-item-font": { value: "", control: "text" },
      "menu-item-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "menu-item-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "menu-item-font-line-height": { value: "1.4", control: "text" },
      "menu-item-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "menu-item-icon-margin": {
        value: "0 var(--spacer-xs) 0 0",
        control: "text",
      },
      "menu-item-count-margin": { value: "0 0 0 auto", control: "text" },
      "menu-item-count-color": { value: "var(--c-gray)", control: "text" },
      "menu-item-mobile-nav-icon-display": { value: "flex", control: "text" },
      "menu-item-mobile-nav-icon-margin": {
        value: "0 0 0 var(--spacer-base)",
        control: "text",
      },
      "menu-item-label-color": {
        value: "var(--c-dark-variant)",
        control: "text",
      },
      "link-text-decoration": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-gray)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component with text and counter, usable for menus and listing.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 300px"><story/></div>' }),
  ],
  argTypes: {
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Menu-item label",
    },
    count: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Menu - item count of items",
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "chevron_right",
      description: "Menu-item icon (visible on mobile)",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Menu-item link (if is empty then SfMenuItem is SfButton)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
  :label="label"
  :count="count"
  :icon="icon" />`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Red",
  count: 30,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Common.args,
  link: "https://www.storefrontui.io/",
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #icon>
      ❤️
    </template>
  </SfMenuItem>`,
});
UseIconSlot.args = { ...Common.args };

export const UseMobileNavIconSlot = (args, { argTypes }) => ({
  components: { SfMenuItem, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #mobile-nav-icon="{icon}">
      <SfIcon icon="arrow_right" size="xxs" style="margin-left: 0.625rem"/>
    </template>
  </SfMenuItem>`,
});
UseMobileNavIconSlot.args = { ...Common.args };

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #label="{label}">
      CUSTOM LABEL
    </template>
  </SfMenuItem>`,
});
UseLabelSlot.args = { ...Common.args };

export const UseCountSlot = (args, { argTypes }) => ({
  components: { SfMenuItem },
  props: Object.keys(argTypes),
  template: `
  <SfMenuItem
    :label="label"
    :count="count"
    :icon="icon">
    <template #count="{count}">
      CUSTOM COUNT
    </template>
  </SfMenuItem>`,
});
UseCountSlot.args = { ...Common.args };
