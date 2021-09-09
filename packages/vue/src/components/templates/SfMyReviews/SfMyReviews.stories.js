import { SfMyReviews } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/MyReviews",
  component: SfMyReviews,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfMyReviews },
  template: `
  <SfMyReviews>
  </SfMyReviews>`,
});

export const Common = Template.bind({});
Common.args = {};
