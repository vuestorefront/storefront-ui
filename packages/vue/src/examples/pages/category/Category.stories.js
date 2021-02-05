import Category from "./Category";
export default {
  title: "Pages/Category",
  component: Category,
};

const Template = (args, { argTypes }) => ({
  components: { Category },
  props: Object.keys(argTypes),
  template: `<Category />`,
});

export const Common = Template.bind({});
Common.args = {};
