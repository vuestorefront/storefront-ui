import { SfNotification, SfIcon } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Notification",
  component: SfNotification,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "notification-align-items": { value: "center", control: "text" },
      "notification-max-width": { value: "20.9375rem", control: "text" },
      "notification-padding": {
        value: "var(--spacer-sm) var(--spacer-xs)",
        control: "text",
      },
      "notification-box-shadow": {
        value: "0 4px 11px rgba(var(--c-dark-base), 0.1)",
        control: "text",
      },
      "notification-border-radius": { value: "5px", control: "text" },
      "notification-background": { value: "", control: "text" },
      "notification-color": { value: "var(--c-white)", control: "text" },
      "notification-font": { value: "", control: "text" },
      "notification-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "notification-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "notification-font-line-height": { value: "normal", control: "text" },
      "notification-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "notification-title-display": { value: "block", control: "text" },
      "notification-title-font": { value: "", control: "text" },
      "notification-title-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "notification-title-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "notification-title-font-line-height": {
        value: "normal",
        control: "text",
      },
      "notification-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "notification-action-display": { value: "none", control: "text" },
      "notification-action-color": { value: "", control: "text" },
      "notification-action-font": { value: "", control: "text" },
      "notification-action-text-decoration": {
        value: "underline",
        control: "text",
      },
      "notification-icon-margin": {
        value: "0 var(--spacer-xs) 0 0",
        control: "text",
      },
      "notification-close-top": { value: "var(--spacer-xs)", control: "text" },
      "notification-close-right": {
        value: "var(--spacer-xs)",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-size": {
        value: "0.85rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component used for informative function e.g. products added to cart or successful login.",
      },
    },
  },
  argTypes: {
    title: {
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
      defaultValue: "",
      description: "Title text visible only on mobile.",
    },
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
      defaultValue: "",
      description: "Message displayed in component.",
    },
    action: {
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
      defaultValue: "",
      description: "Action text button displayed in component.",
    },
    visible: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Visibility of the Notification. Default value is false.",
    },
    persistent: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Persistence of the Notification. Default value is false.",
    },
    type: {
      control: {
        type: "select",
        options: ["", "secondary", "info", "success", "warning", "danger"],
      },
      table: {
        category: "Props",
      },
      defaultValue: "secondary",
      description:
        "Notification type ('secondary', 'info', 'success', 'warning', 'danger'). Check 'Knobs' section to see how they look like.",
    },
    "click:action": {
      action: "click:action event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:action event when action slot is clicked",
    },
    "click:close": {
      action: "click:close event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:close event when close button is clicked",
    },
    "title*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `title`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk.Custom title. Slot content will replace default title",
    },
    "message*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `message`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Custom message. Slot content will replace default message",
    },
    "action*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `action`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Custom action. Slot content will replace default action.",
    },
    icon: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Custom notification icon. Slot content will replace default icon",
    },
    close: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Custom action. Slot content will replace default close button",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfNotification },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :persistent="persistent"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  message: "This is an information message",
  visible: true,
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  ...Common.args,
  title: "Added to Cart",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Common.args,
  type: "secondary",
};

export const Info = Template.bind({});
Info.args = {
  ...Common.args,
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  ...Common.args,
  type: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Common.args,
  type: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Common.args,
  type: "danger",
};

export const WithAction = Template.bind({});
WithAction.args = {
  ...Common.args,
  action: "View cart",
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  persistent: true,
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfNotification, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  >
    <template #icon="{icon}">
      <SfIcon icon="heart" color="white"/>
    </template>
  </SfNotification>`,
});

UseIconSlot.args = { ...WithTitle.args };

export const UseMessageSlot = (args, { argTypes }) => ({
  components: { SfNotification },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  >
    <template #message="{message}">
       CUSTOM MESSAGE
    </template>
  </SfNotification>`,
});

UseMessageSlot.args = { ...WithTitle.args };

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfNotification },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  >
    <template #title="{title}">
      CUSTOM TITLE
    </template>
  </SfNotification>`,
});
UseTitleSlot.args = { ...WithTitle.args };

export const UseActionSlot = (args, { argTypes }) => ({
  components: { SfNotification },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  >
    <template #action="{action, actionHandler}">
      CUSTOM ACTION
    </template>
  </SfNotification>`,
});
UseActionSlot.args = { ...WithTitle.args };

export const UseCloseSlot = (args, { argTypes }) => ({
  components: { SfNotification },
  props: Object.keys(argTypes),
  template: `
  <SfNotification
    :visible="visible"
    :title="title"
    :message="message"
    :action="action"
    :type="type"
    @click:close="this['click:close']"
    @click:action="this['click:action']"
  >
    <template #close="closeHandler">
      <div style="position: absolute; top: 1rem; right: 1rem">close</div>
    </template>
  </SfNotification>`,
});
UseCloseSlot.args = { ...WithTitle.args };
