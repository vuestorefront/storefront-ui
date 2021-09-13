import { SfMyAccountContent } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/MyAccount/MyAccountContent",
  component: SfMyAccountContent,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfMyAccountContent },
  template: `
  <SfMyAccountContent>
  </SfMyAccountContent>`,
});

export const Common = Template.bind({});
Common.args = {};
