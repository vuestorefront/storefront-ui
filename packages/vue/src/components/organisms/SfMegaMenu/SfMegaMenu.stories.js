import { SfMegaMenu, SfList, SfMenuItem, SfBanner } from "@storefront-ui/vue";
import "./SfMegaMenu.stories.scss";

const categories = {
  title: "Menu",
  subcategories: [
    {
      title: "Clothing",
      subcategories: [
        {
          title: "Skirts",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Sweaters",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Dresses",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "TShirts",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Pants",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Underwear",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Jackets",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
        {
          title: "Blouses",
          subcategories: [
            {
              title: "long",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "middle",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
            {
              title: "short",
              subcategories: [
                { title: "red" },
                { title: "white" },
                { title: "blue" },
              ],
            },
          ],
        },
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
  ],
};

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
    multilevel: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
    },
    subcategories: {
      control: "pbject",
      table: {
        category: "Props",
      },
      defaultValue: categories,
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

export const UseMultilevelNavigation = (args, { argTypes }) => ({
	components: {
		SfMegaMenu,
	},
	props: Object.keys(argTypes),
	template: `
  <SfMegaMenu 
    :title="subcategories.title"
    :isAbsolute="isAbsolute"
    :transitionName="transitionName"
    class="sb-mega-menu"
    @change="change"
    @close="close"
    :multilevel="multilevel"
    :subcategories="subcategories.subcategories"
  >    
  </SfMegaMenu>`,
});

UseMultilevelNavigation.args = {
  ...Common.args,
  multilevel: true,
};
