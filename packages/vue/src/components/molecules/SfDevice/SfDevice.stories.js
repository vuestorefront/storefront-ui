import { SfDevice } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Device",
  component: SfDevice,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {},
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component for showing content in a representation of a user device (phone/tablet/laptop)",
      },
    },
  },
  argTypes: {
    defaultDevice: {
      control: {
        type: "select",
        options: Object.values(SfDevice.data().devices),
      },
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: null,
      description: "Default device to show",
    },
    detectDevice: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Whether to auto detect device via media query",
    },
    switchOnClick: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Whether device switch should be triggered on click",
    },
    switchInterval: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "Milliseconds before automatically switching devices",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfDevice },
  props: Object.keys(argTypes),
  template: `
    <SfDevice
      :device="device"
      :switch-on-click="switchOnClick"
      :switch-interval="switchInterval">
      <iframe src="https://voices.org.ua/en/" style="pointer-events: none;" width="100%" height="100%" role="presentation" title=""></iframe>
    </SfDevice>`,
});

export const Common = Template.bind({});
Common.args = {
  device: "tablet",
  switchOnClick: true,
};
