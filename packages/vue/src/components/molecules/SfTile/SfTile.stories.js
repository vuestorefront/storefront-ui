import { SfTile } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Tile",
  component: SfTile,
  argTypes: {
    title: {
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
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTile },
  props: Object.keys(argTypes),
  template: `
  <SfTile
    :title="title"
    :background="background"
    :link="link"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Bags",
  background: {
    mobile: "/assets/storybook/SfTile/tileB-m.jpg",
    desktop: "/assets/storybook/SfTile/tileB.jpg",
  },
  link: "https://www.storefrontui.io/",
};
