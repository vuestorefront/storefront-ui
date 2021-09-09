import { SfPersonalDetails } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/PersonalDetails",
  component: SfPersonalDetails,
  argTypes: {
    value: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    buttonName: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPersonalDetails },
  template: `
  <SfPersonalDetails 
    :value="value"
    :button-name="buttonName"
  >
  </SfPersonalDetails>`,
});

export const Common = Template.bind({});
Common.args = {};
