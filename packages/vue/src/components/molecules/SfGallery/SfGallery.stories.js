import { SfGallery } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Gallery",
  component: SfGallery,
  parameters: {
    cssprops: {
      "gallery-flex-direction": { value: "column", control: "text" },
      "gallery-thumbs-display": { value: "flex", control: "text" },
      "gallery-thumbs-flex": { value: "", control: "text" },
      "gallery-thumbs-flex-direction": { value: "", control: "text" },
      "gallery-thumbs-margin": {
        value: "var(--spacer-xs) 0 0 0",
        control: "text",
      },
      "gallery-thumbs-order": { value: "", control: "text" },
      "gallery-thumb-width": { value: "10rem", control: "text" },
      "gallery-item-margin": {
        value: "0 var(--spacer-xs) 0 0",
        control: "text",
      },
      "gallery-item-opacity": { value: "0.5", control: "text" },
      "gallery-item-transition": {
        value: "opacity 150ms ease-in-out",
        control: "text",
      },
      "gallery-item-cursor": { value: "pointer", control: "text" },
      "gallery-stage-width": { value: "26.375rem", control: "text" },
    },

    docs: {
      description: {
        component:
          "Gallery with one main and few side pictures that user can browse through.",
      },
    },
  },
  argTypes: {
    images: {
      control: "object",
      table: {
        category: "Props",
      },
      description: "Images list",
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 422,
      description: "Images width, without unit",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 664,
      description: "Images height, without unit",
    },
    thumbWidth: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 160,
      description: "Thumb width, without unit",
    },
    thumbHeight: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 160,
      description: "Thumb height, without unit",
    },
    current: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 1,
      description: "Initial image number (starting from 1)",
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
      description: "Glide slider options (https://glidejs.com/docs/options/)",
    },
    outsideZoom: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Image zoom inside or overlap the stage",
    },
    enableZoom: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Toogle for image zoom or overlap the stage",
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
