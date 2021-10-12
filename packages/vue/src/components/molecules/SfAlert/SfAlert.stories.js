import { SfAlert } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Alert",
  component: SfAlert,
  parameters: {
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
