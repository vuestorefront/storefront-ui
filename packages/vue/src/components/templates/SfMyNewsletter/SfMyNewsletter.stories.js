import { SfMyNewsletter } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/MyAccount/MyNewsletter",
  component: SfMyNewsletter,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfMyNewsletter },
  template: `
  <SfMyNewsletter>
  </SfMyNewsletter>`,
});

export const Common = Template.bind({});
Common.args = {};
