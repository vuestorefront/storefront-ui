import SfAddressPicker from "./SfAddressPicker.vue";
import SfAddress from "./_internal/SfAddress.vue";

export default {
  title: "Components/Molecules/AddressPicker",
  component: SfAddress,
  parameters: {
    docs: {
      description: {
        component: "The component for chosing addresses.",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Sets name of the address field",
    },
    selected: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Sets address as chosen by its name",
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
