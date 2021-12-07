import { SfAlert } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Alert",
  component: SfAlert,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "alert-color": { value: "", control: "text" },
      "alert-font": { value: "", control: "text" },
      "alert-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "alert-font-size": { value: "var(--font-size--base)", control: "text" },
      "alert-font-line-height": { value: "1.6", control: "text" },
      "alert-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "alert-message-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "icon-size": {
        value: "1.25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-dark)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component for displaying brief information of varying importance to the user, enriched with an icon.",
      },
    },
  },
  argTypes: {
    message: {
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
      description: "Message that will be displayed in Alert.",
      defaultValue: "",
    },
    type: {
      control: {
        type: "select",
        options: ["", "secondary", "info", "success", "warning", "danger"],
      },
      table: {
        category: "Props",
      },
      description:
        "Alert type ('secondary', 'info', 'success', 'warning', 'danger'). Check 'Knobs' section to see how they look like.",
      defaultValue: "secondary",
    },
    "message*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `message`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Use the `message` name if you want to use this slot. This slot content will replace default message <span> tag",
    },
    icon: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "This slot content will replace default icon",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAlert },
  props: Object.keys(argTypes),
  template: `<SfAlert :message="message" :type="type" />`,
});

export const Default = Template.bind({});
Default.args = {
  message: "Low in stock",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  type: "secondary",
};
export const Info = Template.bind({});
Info.args = {
  ...Default.args,
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  type: "danger",
};

export const WithMessageSlot = (args, { argTypes }) => ({
  components: { SfAlert },
  props: Object.keys(argTypes),
  template: `
  <SfAlert
    :message="message"
    :type="type">
    <template #message="{message}">
      CUSTOM MESSAGE
    </template>  
  </SfAlert>`,
});

export const WithIconSlot = (args, { argTypes }) => ({
  components: { SfAlert },
  props: Object.keys(argTypes),
  template: `
  <SfAlert
    :message="message"
    :type="type">
    <template #icon="{icon}">
      ❤️
    </template>  
  </SfAlert>`,
});

WithIconSlot.args = { ...Default.args };
