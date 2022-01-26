import { SfBannerGrid, SfBanner, SfCimage } from "@storefront-ui/vue";
const banners = [
  {
    slot: "banner-A",
    subtitle: "Dresses",
    title: "Cocktail & Party",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
    buttonText: "Shop now",
    image: "/assets/storybook/Home/bannerF.jpg",
    class: "sf-banner--slim",
  },
  {
    slot: "banner-B",
    subtitle: "Dresses",
    title: "Linen Dresses",
    image: "/assets/storybook/Home/bannerE.jpg",
    class: "sf-banner--slim",
    style: "padding-right: 20%",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
  },
  {
    slot: "banner-C",
    subtitle: "T-Shirts",
    title: "The Office Life",
    buttonText: "Shop now",
    image: "/assets/storybook/Home/bannerC.jpg",
    class: "sf-banner--slim",
  },
  {
    slot: "banner-D",
    subtitle: "Summer Sandals",
    title: "Eco Sandals",
    buttonText: "Shop now",
    image: "/assets/storybook/Home/bannerG.jpg",
    class: "sf-banner--slim",
  },
];

const bannersCloudinary = [
  {
    slot: "banner-A",
    cloud: { cloudName: "demo" },
    alt: "Sunset",
    id: "country_sunset",
    transformations: [
      {
        resize: {
          width: 322,
          height: 840,
          type: "crop",
        },
        crop: "fill",
        gravity: "auto",
      },
    ],
    placeholder: "blur",
    subtitle: "Dresses",
    title: "Cocktail & Party",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
    buttonText: "Shop now",
    class: "sf-banner--slim",
  },
  {
    slot: "banner-B",
    cloud: { cloudName: "demo" },
    alt: "Coast",
    id: "coast",
    transformations: [
      {
        resize: {
          width: 500,
          height: 850,
          type: "crop",
        },
        gravity: "auto",
      },
    ],
    placeholder: "blur",
    subtitle: "Dresses",
    title: "Linen Dresses",
    class: "sf-banner--slim",
    style: "padding-right: 20%",
    description:
      "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
  },
  {
    slot: "banner-C",
    cloud: { cloudName: "demo" },
    alt: "Cat",
    id: "kitten",
    transformations: [
      {
        resize: {
          width: 322,
          height: 400,
          type: "crop",
        },
        gravity: "center",
      },
    ],
    placeholder: "blur",
    subtitle: "T-Shirts",
    title: "The Office Life",
    buttonText: "Shop now",
    class: "sf-banner--slim",
  },
  {
    slot: "banner-D",
    cloud: { cloudName: "demo" },
    alt: "Dog",
    id: "dog",
    transformations: [
      {
        resize: {
          width: 322,
          height: 400,
          type: "fill",
        },
        gravity: "auto",
      },
    ],
    placeholder: "blur",
    subtitle: "Summer Sandals",
    title: "Eco Sandals",
    buttonText: "Shop now",
    class: "sf-banner--slim",
  },
];

export default {
  title: "Components/Organisms/BannerGrid",
  component: SfBannerGrid,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "banner-grid-row-display": { value: "block", control: "text" },
      "banner-grid-row-flex": { value: "", control: "text" },
      "banner-grid-row-margin": { value: "0", control: "text" },
      "banner-grid-col-display": { value: "block", control: "text" },
      "banner-grid-col-flex": { value: "", control: "text" },
      "banner-grid-col-margin": { value: "0", control: "text" },
      "banner-align-items": {
        value: "flex-start",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "banner-container-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "banner-description-margin": {
        value: "var(--spacer-xl) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "banner-height": {
        value: "510px",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Full width grid made with banners.",
      },
    },
  },
  argTypes: {
    bannerGrid: {
      control: {
        type: "select",
        options: [1, 2],
      },
      defaultValue: 1,
      table: {
        category: "Props",
        defaultValue: {
          summary: 1,
        },
      },
      description: "Number of grid for banners.",
    },
    "banner-A": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot for banner image",
    },
    "banner-B": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot for banner image",
    },
    "banner-C": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot for banner image",
    },
    "banner-D": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Slot for banner image",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBannerGrid, SfBanner },
  props: Object.keys(argTypes),
  data() {
    return { banners };
  },
  template: `
  <SfBannerGrid
    :banner-grid="bannerGrid"
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <template 
      v-for="item in banners"
      v-slot:[item.slot]
    >
      <SfBanner
        :key="item.slot"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description" 
        :button-text="item.buttonText"
        :image="item.image"
        :class="item.class"
      />
    </template>
  </SfBannerGrid>`,
});

export const Common = Template.bind({});
Common.args = {};

export const WithCimage = (args, { argTypes }) => ({
  components: {
    SfBannerGrid,
    SfBanner,
    SfCimage,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      bannersCloudinary,
    };
  },
  template: `
  <SfBannerGrid
    :banner-grid="1"
    :style="{maxWidth: '1240px', margin: 'auto'}"
  >
    <template 
      v-for="item in bannersCloudinary"
      v-slot:[item.slot]
    >
      <SfBanner 
        :key="item.slot"
        :title="item.title"
        :subtitle="item.subtitle"
        :description="item.description" 
        :button-text="item.buttonText"
        :class="item.class"
      >
        <template #img-tag>
          <SfCimage
            :public-id="item.id"
            :cloud="{ cloudName: 'demo' }"
            :alt="item.alt"
            :transformations="item.transformations"
          />
        </template>
      </SfBanner>
    </template>
  </SfBannerGrid>`,
});
WithCimage.args = { ...Common.args };
