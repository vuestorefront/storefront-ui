import { SfMegaMenu, SfList, SfMenuItem, SfBanner } from "@storefront-ui/vue";
import "./SfMegaMenu.stories.scss";

const categories = [
  {
    title: "Clothing",
    subcategories: [
      { title: "Skirts" },
      { title: "Sweaters" },
      { title: "Dresses" },
      { title: "TShirts" },
      { title: "Pants" },
      { title: "Underwear" },
      { title: "Jackets" },
      { title: "Blouses" },
    ],
  },
  {
    title: "Accesories",
    subcategories: [
      { title: "Bags & Purses" },
      { title: "Belts" },
      { title: "Gloves" },
      { title: "Hats" },
    ],
  },
  {
    title: "Shoes",
    subcategories: [
      { title: "Boots" },
      { title: "Heels" },
      { title: "Flat shoes" },
      { title: "Loafers" },
      { title: "Sandals" },
      { title: "Slippers" },
      { title: "Trainers" },
    ],
    banners: [
      {
        title: "THE OFFICE LIFE",
        subtitle: "T-shirts",
        pictures: {
          mobile: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
          desktop: "/assets/storybook/SfMegaMenu/bannerSandals.jpg",
        },
      },
      {
        title: "ECO SANDALS",
        subtitle: "T-shirts",
        pictures: {
          mobile: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
          desktop: "/assets/storybook/SfMegaMenu/bannerBeachBag.jpg",
        },
      },
    ],
  },
];

export default {
  title: "Components/Organisms/MegaMenu",
  component: SfMegaMenu,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "mega-menu-column-header-display": { value: "", control: "text" },
      "mega-menu-column-header-padding": {
        value: "var(--spacer-sm)",
        control: "text",
      },
      "mega-menu-column-header-margin": { value: "0", control: "text" },
      "mega-menu-column-header-border": {
        value:
          "var(--mega-menu-column-header-border-style, solid) var(--mega-menu-column-header-border-color, var(--c-light))",
        control: "text",
      },
      "mega-menu-column-header-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "mega-menu-column-content-position": { value: "", control: "text" },
      "mega-menu-column-content-top": { value: "0", control: "text" },
      "mega-menu-column-content-display": { value: "", control: "text" },
      "mega-menu-column-content-transform": { value: "", control: "text" },
      "list-item-padding": {
        value:
          "var(--spacer-sm) var(--spacer-sm) var(--spacer-sm) var(--spacer-lg)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-border-width": {
        value: "0 0 1px 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "list-item-margin": {
        value: "var(--spacer-sm) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-text-transform": {
        value: "uppercase",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "mega-menu-height": {
        value: "auto",
        control: "text",
      },
      "mega-menu-content-transform": {
        value: "",
        control: "text",
      },
      "mega-menu-position": {
        value: "",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "MegaMenu component for page navigation. Built from main component - SfMegaMenu and internal component - SfMegaMenuColumn.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props for main component",
      },
      defaultValue: "",
      description: "Title of main category, displayed on mobile",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Sets mega menu state to visible",
    },
    isAbsolute: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Sets css position to absolute.",
    },
    transitionName: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "sf-fade",
        },
      },
      defaultValue: "sf-fade",
      description:
        "Sets transition name. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    asideTitle: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "*Depraceted. Sets title for aside column.",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfMegaMenuColumn component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Title of the column.",
    },

    change: { action: "Active item changed", table: { category: "Events" } },
    close: { action: "Close button clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: {
    SfMegaMenu,
    SfList,
    SfMenuItem,
    SfBanner,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      categories,
    };
  },
  template: `
  <SfMegaMenu 
  :visible="true" 
  title="Man"
  class="sb-mega-menu"
>
  <SfMegaMenuColumn 
    v-for="(category, key) in categories" 
    :key="key" 
    :title="category.title"
  >
    <SfList>
      <SfListItem v-for="(subcategory, key) in category.subcategories" :key="key">
        <SfMenuItem :label="subcategory.title"></SfMenuItem>
      </SfListItem>
    </SfList>
  </SfMegaMenuColumn>
  <SfMegaMenuColumn title="Featured" class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured">
    <div class="sb-mega-menu__banners">
      <template v-for="(category, key) in categories" >
        <SfBanner
          v-for="(banner, key) in category.banners"
          :key="key"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :image="banner.pictures"
          class="sb-mega-menu__banner"
        />
      </template>
    </div>
  </SfMegaMenuColumn>
</SfMegaMenu>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Menu",
};

export const UseAsideSlot = (args, { argTypes }) => ({
  components: {
    SfMegaMenu,
    SfList,
    SfMenuItem,
    SfBanner,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      categories,
    };
  },
  template: `
  <SfMegaMenu 
    :visible="true" 
    :title="title"
    :isAbsolute="isAbsolute"
    :transitionName="transitionName"
    class="sb-mega-menu"
    @change="change"
    @close="close"
  >
    <SfMegaMenuColumn 
      v-for="(category, key) in categories" 
      :key="key" 
      :title="category.title"
    />
    <template #aside v-for="(category, key) in categories" >
      <div class="sb-mega-menu__banners">
        <SfBanner
            v-for="(banner, key) in category.banners"
            :key="key"
            :title="banner.title"
            :subtitle="banner.subtitle"
            :image="banner.pictures"
            class="sb-mega-menu__banner"
        />
      </div>
    </template>
  </SfMegaMenu>`,
});
UseAsideSlot.args = { ...Common.args };
