import {
  SfHeader,
  SfLink,
  SfList,
  SfBottomNavigation,
  SfMegaMenu,
  SfMenuItem,
  SfBanner,
  SfOverlay,
} from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/Header",
  component: SfHeader,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "sf-header--has-mobile-search", "sf-header--multiline"],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    menuItems: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    icons: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    activeIcon: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: 0,
      },
    },
    searchPlaceholder: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "Search for items",
      },
    },
    searchValue: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    openSidebar: {
      control: "string",
      table: {
        category: "Props",
      },
      defaultValue: "sidebar",
    },
    "change:search": {
      action: "Changed search value",
      table: { category: "Events" },
    },
    "click:cart": {
      action: "Clicked on cart",
      table: { category: "Events" },
    },
    "click:wishlist": {
      action: "Clicked on wishlist",
      table: { category: "Events" },
    },
    "click:account": {
      action: "Clicked on account",
      table: { category: "Events" },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeader, SfLink },
  props: Object.keys(argTypes),
  data() {
    return {
      searchValues: "",
      activeSidebar: "",
    };
  },
  watch: {
    openSidebar: {
      handler(newValue) {
        if (newValue === true) {
          this.activeSidebar = "sidebar";
        } else {
          this.activeSidebar = newValue;
        }
      },
      immediate: true,
    },
  },
  template: `
  <SfHeader
    :class="classes"
    :title="title"
    :logo="logo"
    :menuItems="menuItems"
    :active-icon="activeIcon"
    :search-placeholder="searchPlaceholder"
    :search-value="searchValues"
    :open-sidebar="activeSidebar"
    @click:icon-0="this['click:cart']"
    @click:icon-1="this['click:wishlist']"
    @click:icon-2="this['click:account']"
    @change:search="searchValues = $event"
    @close="activeSidebar = false"
>
</SfHeader>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Storefront UI",
  logo: "/assets/logo.svg",
  menuItems: ["woman", "man", "kids"],
  icons: ["empty_cart", "heart", "profile"],
  activeIcon: 0,
};

export const WithSfHeaderNavigation = (args, { argTypes }) => ({
  components: {
    SfHeader,
    SfList,
    SfBottomNavigation,
    SfMegaMenu,
    SfLink,
    SfMenuItem,
    SfBanner,
    SfOverlay,
  },
  props: Object.keys(argTypes),
  data() {
    return {
      shopLogo: "/assets/logo.svg",
      shopName: "Storefront UI",
      currentCategory: this.openSidebar,
      buttons: this.menuItems.map((item) => item.title),
      categories: this.menuItems,
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
    };
  },
  watch: {
    openSidebar: {
      handler(newValue) {
        if (newValue === true) {
          this.currentCategory = "sidebar";
        } else {
          this.currentCategory = newValue;
        }
      },
      immediate: true,
    },
  },
  methods: {
    currentCategoryToggle(event) {
      if (this.currentCategory === "sidebar" && event === "sidebar") {
        return (this.currentCategory = "");
      } else {
        return (this.currentCategory = event);
      }
    },
  },
  template: `
  <div>
    <SfOverlay 
      :visible="!!currentCategory"
    />
    <SfHeader
      :class="classes"
      :logo="shopLogo"
      :title="shopName"
      :menuItems="buttons"
      :active-icon=0
      :open-sidebar="currentCategory === 'sidebar'"
      @mouseenter:button="currentCategoryToggle($event)"           
      @click:button="currentCategoryToggle($event)"      
      @close="currentCategoryToggle('')"
    >    
      <template 
        v-for="(category, index) in categories"
        v-slot:[category.title]          
      >      
        <SfMegaMenu
          :key="index"
          :is-absolute="true"
          :title="category.title"
          :visible="currentCategory === category.title"
          @close="currentCategoryToggle('sidebar')"                                     
        >
          <SfMegaMenuColumn
            v-for="(subcategory, subIndex) in category.subcategories"
            :key="subIndex"
            :title="subcategory.title"
          >
            <SfList>
              <SfListItem
              v-for="(subcategoryChild,
              childIndex) in subcategory.subcategories"
              :key="childIndex"
              >
                <SfMenuItem :label="subcategoryChild.title">
                  <SfLink :link="subcategoryChild.link">
                    {{ subcategoryChild.title }}
                  </SfLink>
                </SfMenuItem>
              </SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfMegaMenuColumn 
            v-if="currentCategory === 'Kids'" 
            title="Featured" 
            class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured"
          >
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
          </SfMegaMenuColumn>
        </SfMegaMenu>
      </template>
    </SfHeader>
    <SfBottomNavigation>
      <SfBottomNavigationItem
        :icon="'menu'"
        :label="'Menu'"
        icon-size="20px"
        @click="currentCategoryToggle('sidebar')"
      />
    </SfBottomNavigation>
  </div>`,
});

WithSfHeaderNavigation.args = {
  ...Common.args,
  menuItems: [
    {
      title: "Woman",
      link: "/woman",
      subcategories: [
        {
          title: "Skirts",
          link: "/skirts",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Sweaters",
          link: "/sweaters",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Dresses",
          link: "/dresses",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
      ],
    },
    {
      title: "Man",
      link: "/man",
      subcategories: [
        {
          title: "Bags & Purses",
          link: "/skirts",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Belts",
          link: "/belts",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Gloves",
          link: "/gloves",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
      ],
    },
    {
      title: "Kids",
      link: "/kids",
      subcategories: [
        {
          title: "Boots",
          link: "/boots",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Heels",
          link: "/heels",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
        {
          title: "Flat shoes",
          link: "/flat",
          subcategories: [
            {
              title: "Long",
              link: "/long",
            },
            {
              title: "Short",
              link: "/short",
            },
          ],
        },
      ],
    },
  ],
};

WithSfHeaderNavigation.storyName = "With SfMegaMenu Navigation";
