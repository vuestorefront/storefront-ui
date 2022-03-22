import { SfDevice } from "@storefront-ui/vue";
import { defaultDevices, defaultDeviceNames } from "./SfDevice.vue";

let config = {
  title: "Components/Molecules/Device",
  component: SfDevice,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {},
    // end of code generated automatically
    docs: {
      description: {
        component: `The component for showing content in a representation of a user device (${defaultDeviceNames.join(
          "/"
        )})`,
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
        options: defaultDeviceNames,
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
    switchDevices: {
      control: "array",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: defaultDeviceNames,
      description: "Devices that will be switched between",
    },
  },
};

let scaleProps = [];
defaultDevices.forEach((device) => {
  config.argTypes[`${device.name}Scale`] = {
    control: { type: "range", min: 0.1, max: 1.0, step: 0.1 },
    table: {
      category: "Props",
    },
    defaultValue: 1,
    description: `Scale factor for ${device.name} device (f.ex: ${
      device.scale
    } for ${device.scale * 100}%)`,
  };

  scaleProps.push(`:${device.name}-scale="${device.name}Scale"`);
});

export default config;

const Template = (args, { argTypes }) => ({
  components: { SfDevice },
  props: Object.keys(argTypes),
  template: `
    <SfDevice
      :detect-device="detectDevice"
      :default-device="defaultDevice"
      :switch-devices="switchDevices"
      :switch-on-click="switchOnClick"
      :switch-interval="switchInterval"
      ${scaleProps.join("\n")}>
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
  switchDevices: ["tablet", "laptop"],
};
