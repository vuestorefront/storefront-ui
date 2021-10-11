import { SfImage } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Image",
  component: SfImage,
  argTypes: {
    srcsets: {
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
    width: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    height: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    alt: {
      control: "text",
      table: {
        category: "Attributes",
      },
    },
    loading: {
      control: {
        type: "select",
        options: ["", "lazy", "eager"],
      },
      table: {
        category: "Attributes",
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
    :srcsets="srcsets"
    :width="width"
    :height="height"
    :alt="alt"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  src: "/assets/storybook/SfImage/product-216x326.jpg",
  alt: "Vila stripe maxi shirt dress",
  srcsets: [
    {
      src: "/assets/storybook/SfImage/product-109x164.webp",
      width: 109,
      breakpoint: 480,
    },
    {
      src: "/assets/storybook/SfImage/product-216x326.jpg",
      width: 1200,
      breakpoint: 1200,
    },
    {
      src: "/assets/storybook/SfImage/product-109x164.webp",
      width: "400px",
      breakpoint: 768,
    },
  ],
  width: 216,
  height: 326,
};

export const WithSrcOnly = Template.bind({});
WithSrcOnly.args = {
  ...Common.args,
  width: "",
  height: "",
  srcsets: [],
};

export const WithBreakpoints = Template.bind({});
WithBreakpoints.args = {
  ...Common.args,
  width: "",
  height: "",
};

export const WithResolutions = Template.bind({});
WithResolutions.args = {
  ...WithSrcOnly.args,
  srcsets: [
    {
      src: "/assets/storybook/SfImage/product-109x164.webp",
      resolution: 1,
    },
    {
      src: "/assets/storybook/SfImage/product-216x326.jpg",
      resolution: 1.5,
    },
    {
      src: "/assets/storybook/SfImage/product-109x164.webp",
      resolution: 2,
    },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...WithSrcOnly.args,
  placeholder:
    "https://res.cloudinary.com/mayashavin/image/upload/e_pixelate/v1607977495/StorefrontUI/product-216x326.jpg",
};

export const WithAccessibility = Template.bind({});
WithAccessibility.args = {
  ...WithSrcOnly.args,
};
WithAccessibility.decorators = [
  () => ({
    template: `<div>
    <p>
      <span style="color:#b40e01">Red</span> highlight when no Alt text found.
    </p>
    <story />
  </div>`,
  }),
];

export const UseOverlaySlot = (args, { argTypes }) => ({
  components: { SfImage },
  props: Object.keys(argTypes),
  template: `
  <SfImage
    :src="src"
    :srcsets="srcsets"
    :width="width"
    :height="height"
    :alt="alt"
  >{{textOverlay}}</SfImage>`,
});
UseOverlaySlot.args = {
  ...WithSrcOnly.args,
  textOverlay: "Custom overlay",
};
