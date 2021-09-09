import { SfLoyaltyCard } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/LoyaltyCard",
  component: SfLoyaltyCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfLoyaltyCard },
  template: `
  <SfLoyaltyCard>
  </SfLoyaltyCard>`,
});

export const Common = Template.bind({});
Common.args = {};
