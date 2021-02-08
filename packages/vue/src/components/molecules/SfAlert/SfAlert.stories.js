import { SfAlert } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Alert",
  component: SfAlert,
  argTypes: {
    message: {
      control: "text",
      table: {
        category: "Props",
      },
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
