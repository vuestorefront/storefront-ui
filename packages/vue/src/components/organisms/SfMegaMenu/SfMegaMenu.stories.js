import { SfMegaMenu, SfList, SfMenuItem, SfBanner } from "@storefront-ui/vue";

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
  },
];

export default {
  title: "Components/Organisms/MegaMenu",
  component: SfMegaMenu,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isAbsolute: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    transitionName: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "sf-fade",
        },
      },
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
    <template #aside>
      <div class="sb-mega-menu__banners">
        <SfBanner
            v-for="(banner, key) in banners"
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
