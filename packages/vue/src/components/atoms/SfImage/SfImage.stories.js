import { SfImage, SfArrow } from "@storefront-ui/vue";

export default {
  title: "Atoms/Image",
  component: SfImage,
  argTypes: {
    srcset: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    src: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfImage },
  props: Object.keys(argTypes),
  template: `
  <SfImage
    :src="src"
    :srcset="srcset"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  srcset: [
    {
      src: `/assets/storybook/SfImage/product-109x164.webp`,
      media: `(max-width: 480px)`,
      type: `image/webp`,
    },
    {
      src: `/assets/storybook/SfImage/product-109x164.webp`,
      media: `(min-width: 480px) and (max-width: 720px)`,
      type: `image/webp`,
    },
    {
      src: `/assets/storybook/SfImage/product-216x326.jpg`,
      media: `(min-width: 1240px)`,
      type: `image/jpg`,
    },
  ],
};
