import SfCategoryCard from "./SfCategoryCard.vue";

export default {
  title: "Components/Molecules/CategoryCard",
  component: SfCategoryCard,
  argTypes: {
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    count: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    background: {
      control: "object",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCategoryCard },
  props: Object.keys(argTypes),
  template: `
  <SfCategoryCard
    :link="link"
    :label="label"
    :count="count"
    :background="background"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Personal Care",
  count: "32",
  link: "#",
  background: {
    mobile: "assets/storybook/SfCategoryCard/category-cardM.jpg",
    desktop: "assets/storybook/SfCategoryCard/category-cardD.jpg",
  },
};
