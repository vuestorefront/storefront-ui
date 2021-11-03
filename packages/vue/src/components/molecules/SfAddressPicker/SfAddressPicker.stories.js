import SfAddressPicker from "./SfAddressPicker.vue";
import SfAddress from "./_internal/SfAddress.vue";

export default {
  title: "Components/Molecules/AddressPicker",
  component: SfAddress,
  parameters: {
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
    input: { action: "Address picked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddressPicker },
  props: Object.keys(argTypes),
  template: `
  <SfAddressPicker v-model="selected">
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
