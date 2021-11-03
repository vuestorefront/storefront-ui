import { SfNotification, SfIcon } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Notification",
  component: SfNotification,
  parameters: {
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
    "click:action": { action: "Action clicked", table: { category: "Events" } },
    "click:close": {
      action: "Close notification clicked",
      table: { category: "Events" },
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
