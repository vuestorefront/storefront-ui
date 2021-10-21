import { SfTile } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Tile",
  component: SfTile,
  parameters: {
    docs: {
      description: {
        component: "Tile component with text and background-image",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Tile title",
    },
    background: {
      control: "object",
      table: {
        category: "Props",
      },
      description: "Tile background image",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Tile link",
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
