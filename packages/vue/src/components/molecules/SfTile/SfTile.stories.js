import { SfTile } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Tile",
  component: SfTile,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "font-tile": {
        value:
          "var(--font-tile-weight, var(--font-weight--bold)) var(--font-tile-size, var(--h3-font-size))/var(--font-tile-line-height, 1.6) var(--font-tile-family, var(--font-family--secondary))",
        control: "text",
      },
      "font-tile-weight": {
        value: "var(--font-weight--semibold)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
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
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace title content",
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
