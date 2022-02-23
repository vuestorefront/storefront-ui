import SfAddressPicker from "./SfAddressPicker.vue";
import SfAddress from "./_internal/SfAddress.vue";

export default {
  title: "Components/Molecules/AddressPicker",
  component: SfAddress,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "address-font": { value: "", control: "text" },
      "address-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "address-font-size": { value: "var(--font-size--base)", control: "text" },
      "address-font-line-height": { value: "1.6", control: "text" },
      "address-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-size": {
        value: "0.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-content-margin": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component for chosing addresses.  Built from main component - SfAddressPicker and internal components - SfAddress.",
      },
    },
  },
  argTypes: {
    selected: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "",
        },
      },
      description: "Sets address as chosen by its name",
      defaultValue: "",
    },
    name: {
      control: "text",
      table: {
        category: "Props for SfAddress component",
      },
      description:
        "Name for address. Each address should have different name. For example 'first', 'second', 'default'.",
      defaultValue: "",
    },
    title: {
      control: "text",
      description:
        "Title (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    street: {
      control: "text",
      description:
        "Street (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    postCode: {
      control: "text",
      description:
        "PostCode (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    city: {
      control: "text",
      description:
        "City (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    country: {
      control: "text",
      description:
        "Country (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    phone: {
      control: "text",
      description:
        "Phone (only for testing puropses). For development use default slot in SfAddress component, to change the content.",
      defaultValue: "",
    },
    change: {
      action: "Change event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits change event with the name of picked address component",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfAddress` component. Here you should pass address details",
    },
    "default ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfAddressPicker` component. Use this slot to pass addresses in `SfAddress` components",
    },
    icon: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to have custom checkmark",
    },
    "v-model": {
      control: "text",
      table: {
        type: {
          summary: "text",
        },
        category: "v-model",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "v-model accepts `selected` prop and emits `change` event",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddressPicker },
  props: Object.keys(argTypes),
  data() {
    return {
      checked: this.selected,
    };
  },
  template: `
  <SfAddressPicker v-model="checked" @change="change">
    <SfAddress :name="name">
      <span>{{title}}</span>
      <span>{{street}}</span>
      <span>{{postCode}}</span>
      <span>{{city}}</span>
      <span>{{country}}</span>
      <span>{{phone}}</span>
    </SfAddress>
  </SfAddressPicker>`,
});

export const Common = Template.bind({});
Common.args = {
  name: "first",
  title: "Jack Smith",
  street: "Mazowiecka 34",
  postCode: "02-020",
  city: "Warszawa, Mazowieckie",
  country: "Poland",
  phone: "+48 777 777 777",
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: Common.args.name,
};
