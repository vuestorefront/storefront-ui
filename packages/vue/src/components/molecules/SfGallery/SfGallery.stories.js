import { SfGallery } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Gallery",
  component: SfGallery,
  argTypes: {
    images: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    thumbWidth: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    thumbHeight: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    current: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    sliderOptions: {
      control: "object",
      defaultValue: {
        type: "slider",
        autoplay: false,
        rewind: false,
        gap: 0,
      },
      table: {
        category: "Props",
      },
    },
    outsideZoom: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    enableZoom: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    click: { action: "Image clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfGallery },
  props: Object.keys(argTypes),
  template: `
  <SfGallery
    :images="images"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :slider-options="sliderOptions"
    :current="current"
    :enable-zoom="enableZoom"
    :outsideZoom="outsideZoom"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  images: [
    {
      desktop: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      mobile: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      zoom: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      alt: "Product A",
    },
    {
      desktop: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      mobile: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      zoom: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      alt: "Product B",
    },
    {
      desktop: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      mobile: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      zoom: {
        url: "assets/storybook/SfGallery/productA.png",
      },
      alt: "Product A",
    },
    {
      desktop: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      mobile: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      zoom: {
        url: "assets/storybook/SfGallery/productB.jpg",
      },
      alt: "Product B",
    },
  ],
  current: 1,
};

export const WithZoom = Template.bind({});
WithZoom.args = { ...Common.args, enableZoom: true };

export const WithOutsideZoom = Template.bind({});
WithOutsideZoom.args = { ...Common.args, enableZoom: true, outsideZoom: true };

export const AutoSlide = Template.bind({});
AutoSlide.args = {
  ...Common.args,
  sliderOptions: {
    autoplay: true,
    rewind: true,
    gap: 0,
  },
};
