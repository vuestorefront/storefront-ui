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
    default: {
      control: "text",
      description: "Slot content",
      defaultValue:
        '<iframe src="https://voices.org.ua/en/" style="pointer-events: none;" width="100%" height="100%" role="presentation" title=""></iframe>',
    },
    detectDevice: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Whether to auto detect device via media query",
    },
    defaultDevice: {
      control: {
        type: "select",
        options: ["phone", "tablet", "laptop"],
      },
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: "phone",
      description: "Default device to show (may be overriden by detectDevice)",
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
    switchableDevices: {
      control: "array",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: ["phone", "tablet", "laptop"],
      description: "Devices that will be switched between",
    },
    phoneScale: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "Scale factor for phone device (f.ex: 0.5 for 50%)",
    },
    tabletScale: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "Scale factor for tablet device (f.ex: 0.8 for 80%)",
    },
    laptopScale: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "Scale factor for laptop device (f.ex: 1.0 for 100%)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfDevice },
  props: Object.keys(argTypes),
  template: `
    <SfDevice
      :detect-device="detectDevice"
      :default-device="defaultDevice"
      :switchable-devices="switchableDevices"
      :switch-on-click="switchOnClick"
      :switch-interval="switchInterval"
      :phone-scale="phoneScale"
      :tablet-scale="tabletScale"
      :laptop-scale="laptopScale">
      ${args.default}
    </SfDevice>`,
});

export const Common = Template.bind({});

export const SwitchOnClickWithScale = Template.bind({});
SwitchOnClickWithScale.args = {
  default:
    '<img src="https://voices.org.ua/wp-content/themes/voices-2021/img/logo_en.svg" style="width: 100%; height: 100%" />',
  switchOnClick: true,
  phoneScale: 0.5,
  tabletScale: 0.8,
};

export const SwitchOnClickToggleInterval = Template.bind({});
SwitchOnClickToggleInterval.args = {
  default:
    '<img src="https://voices.org.ua/wp-content/themes/voices-2021/img/logo_en.svg" style="width: 100%; height: 100%" />',
  switchOnClick: true,
  switchInterval: 1000,
};

export const SwitchOnClickSwitchableDevicesOnly = Template.bind({});
SwitchOnClickSwitchableDevicesOnly.args = {
  default:
    '<img src="https://voices.org.ua/wp-content/themes/voices-2021/img/logo_en.svg" style="width: 100%; height: 100%" />',
  switchOnClick: true,
  defaultDevice: "laptop",
  switchableDevices: ["tablet", "laptop"],
};
