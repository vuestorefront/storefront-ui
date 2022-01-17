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
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "header-navigation-item-position": { value: "", control: "text" },
      "header-navigation-item-flex": { value: "", control: "text" },
      "header-navigation-item-content-position": {
        value: "",
        control: "text",
      },
      "header-navigation-item-content-width": {
        value: "100%",
        control: "text",
      },
      "header-navigation-item-text-decoration": {
        value: "none",
        control: "text",
      },
      "header-navigation-item-menu-item-display": {
        value: "",
        control: "text",
      },
      "header-navigation-item-menu-item-padding": {
        value: "",
        control: "text",
      },
      "header-navigation-item-menu-item-margin": { value: "", control: "text" },
      "header-navigation-item-menu-item-border": { value: "", control: "text" },
      "header-navigation-item-menu-item-border-width": {
        value: "",
        control: "text",
      },
      "header-navigation-item-display": { value: "", control: "text" },
      "header-navigation-item-color": { value: "", control: "text" },
      "header-navigation-item-padding": { value: "", control: "text" },
      "header-navigation-item-margin": { value: "", control: "text" },
      "header-navigation-item-border": { value: "", control: "text" },
      "header-navigation-item-border-width": { value: "", control: "text" },
      "header-navigation-item-transition": { value: "", control: "text" },
      "header-navigation-item-font": { value: "", control: "text" },
      "header-navigation-item-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "header-navigation-item-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "header-navigation-item-font-line-height": {
        value: "1.2",
        control: "text",
      },
      "header-navigation-item-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "header-navigation-item-width": { value: "", control: "text" },
      "link-text-decoration": {
        value: "var(--header-navigation-item-text-decoration, none) ",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "menu-item-text-transform": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-navigation-item-border-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-navigation-menu-display": {
        value: "",
        control: "text",
      },
      "sidebar-content-padding": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-navigation-sidebar-display": {
        value: "",
        control: "text",
      },
      "image-width": {
        value: "var(--header-logo-width, auto)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "image-height": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-navigation-margin": {
        value: "",
        control: "text",
      },
      "search-bar-display": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-search-flex": {
        value: "0 1 19.875rem",
        control: "text",
      },
      "header-icons-display": {
        value: "none",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-dark-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-badge-top": {
        value: "-0.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-badge-right": {
        value: "-0.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-wrapper-position": {
        value: "",
        control: "text",
      },
      "header-wrapper-transform": {
        value: "",
        control: "text",
      },
      "header-wrapper-transition": {
        value: "transform 300ms ease-in-out",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-box-shadow": {
        value: "0px 4px 11px rgba(29, 31, 34, 0.1)",
        control: "text",
      },
      "header-icons-margin": {
        value: "",
        control: "text",
      },
      "header-icons-order": {
        value: "",
        control: "text",
      },
      "header-actions-flex-wrap": {
        value: "",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      inlineStories: false,
      iframeHeight: "600px",
      description: {
        component:
          "Grouped Product component. Built from main component - SfHeader and internal components - SfHeaderNavigation and SfHeaderNavigationItem.",
      },
    },
    layout: "fullscreen",
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "sf-header--has-mobile-search", "sf-header--multiline"],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    logo: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: ["string", "object"],
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Header logo",
    },
    logoHeight: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 35,
      description: "Header logo height",
    },
    logoWidth: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 34,
      description: "Header logo width",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Header title",
    },
    menuItems: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          summary: "empty_cart",
        },
      },
      defaultValue: "empty_cart",
      description: "Header cartIcon (accepts same value as SfIcon)",
    },
    icons: {
      control: "array",
      table: {
        category: "Props",
        defaultValue: {
          summary: "heart",
        },
      },
      defaultValue: "heart",
      description: "Header wishlistIcon (accepts same value as SfIcon)",
    },
    activeIcon: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: "account",
        },
      },
      defaultValue: "account",
      description: "Number of active icon item (counted from 0)",
    },
    searchPlaceholder: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "Search for items",
        },
      },
      defaultValue: "Search for items",
      description: "Header search placeholder",
    },
    searchValue: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Header search phrase",
    },
    isSidebarOpen: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: "false",
        },
      },
      defaultValue: false,
      description: "Opens sidebar on mobile view",
    },
    openSidebar: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Opens menu in sidebar on mobile view",
    },
    close: {
      action: "change:search event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits change:search event when searchbar value is changed",
    },
    "mouseenter:button": {
      action: "change:search event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits change:search event when searchbar value is changed",
    },
    "mouseleave:button": {
      action: "change:search event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits change:search event when searchbar value is changed",
    },
    "change:search": {
      action: "change:search event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits change:search event when searchbar value is changed",
    },
    "enter:search": {
      action: "enter:search event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits enter:search event when enter key is pressed",
    },
    "click:icon": {
      action: "click:icon event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:icon event when icon is clicked",
    },
    "click:button": {
      action: "click:button event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:button event when navigation button is clicked",
    },
    "logo ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfHeader` component. Use this slot to replace logo element",
    },
    aside: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfHeader` component. Use this slot to pass aside content for example language or currency selector",
    },
    navigation: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfHeader` component. Use this slot to pass navigation elements",
    },
    search: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfHeader` component. Use this slot to pass search element",
    },
    "header-icons": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfHeader` component. Use this slot to replace default icons",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfHeaderNavigation` component. Use this slot to place navigation elements",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeader, SfLink },
  props: Object.keys(argTypes),
  data() {
    return {
      searchValues: "",
      activeSidebar: "",
      activeButton: this.activeIcon,
    };
  },
  methods: {
    changeHandler(value) {
      this.searchValues = value;
      this["change:search"](value);
    },
    acitveIconHandler(icon) {      
      this["click:icon"](icon);
      this.activeButton = icon;
    }
  },
  template: `
    <SfHeader
      :class="classes"
      :title="title"
      :logo="logo"
      :menuItems="menuItems"
      :active-icon="activeButton"
      :search-placeholder="searchPlaceholder"
      :search-value="searchValues"
      :open-sidebar="activeSidebar"
      @click:icon="acitveIconHandler"
      @close="activeSidebar = ''"
      @change:search="changeHandler"
      @enter:search="this['enter:search']"
      @click:button="this['click:button']"
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
      searchValues: "",
      activeButton: this.activeIcon,
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
    changeHandler(value) {
      this.searchValues = value;
      this["change:search"](value);
    },
    acitveIconHandler(icon) {
      this["click:icon"](icon);
      this.activeButton = icon;
    }
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
      :active-icon="activeButton"
      :open-sidebar="currentCategory === 'sidebar'"
      @mouseenter:button="currentCategoryToggle($event)"           
      @click:button="currentCategoryToggle($event)"      
      @close="currentCategoryToggle('')"
      @click:icon="acitveIconHandler"
      @change:search="changeHandler"
      @enter:search="this['enter:search']"
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
    <SfBottomNavigation
      class="smartphone-only"
    >
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
