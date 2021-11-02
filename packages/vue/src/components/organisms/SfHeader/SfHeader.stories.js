import { SfHeader, SfLink } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/Header",
  component: SfHeader,
  parameters: {
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
        value: "var(--spacer-sm)",
        control: "text",
      },
      "header-navigation-item-menu-item-margin": {
        value: "0",
        control: "text",
      },
      "header-navigation-item-menu-item-border": {
        value:
          "var(--header-navigation-item-menu-item-border-style, solid) var(--header-navigation-item-menu-item-border-color, var(--c-light))",
        control: "text",
      },
      "header-navigation-item-menu-item-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "header-navigation-item-display": { value: "", control: "text" },
      "header-navigation-item-color": {
        value: "var(--c-dark-variant)",
        control: "text",
      },
      "header-navigation-item-padding": {
        value: "calc(var(--spacer-sm) - 1px) var(--spacer-sm)",
        control: "text",
      },
      "header-navigation-item-margin": { value: "", control: "text" },
      "header-navigation-item-border": {
        value:
          "var(--header-navigation-item-border-style, solid) var(--header-navigation-item-border-color, transparent)",
        control: "text",
      },
      "header-navigation-item-border-width": {
        value: "0 0 2px 0",
        control: "text",
      },
      "header-navigation-item-transition": {
        value: "border-color 150ms ease-in-out, color 150ms ease-in-out",
        control: "text",
      },
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
        value: "uppercase",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "header-navigation-item-border-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-color": {
        value: "var(--header-navigation-item-color, var(--c-dark-variant))",
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
        value: "flex",
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

    docs: {
      description: {
        component:
          "Grouped Product component. Built from main component - SfHeader and internal components - SfHeaderNavigation and SfHeaderNavigationItem.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-header--has-mobile-search",
          "sf-header--has-mobile-navigation",
          "sf-header--multiline",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    logo: {
      control: "text",
      table: {
        category: "Props for main component",
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
        category: "Props for main component",
      },
      defaultValue: 35,
      description: "Header logo height",
    },
    logoWidth: {
      control: "number",
      table: {
        category: "Props for main component",
      },
      defaultValue: 34,
      description: "Header logo width",
    },
    title: {
      control: "text",
      table: {
        category: "Props for main component",
      },
      description: "Header title",
    },
    cartIcon: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "empty_cart",
        },
      },
      defaultValue: "empty_cart",
      description: "Header cartIcon (accepts same value as SfIcon)",
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "heart",
        },
      },
      defaultValue: "heart",
      description: "Header wishlistIcon (accepts same value as SfIcon)",
    },
    accountIcon: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "profile",
        },
      },
      defaultValue: "profile",
      description: "Header accountIcon (accepts same value as SfIcon)",
    },
    activeIcon: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "account",
        },
      },
      defaultValue: "account",
      description: "Header activeIcon (accepts account, wishlist and cart)",
    },
    searchPlaceholder: {
      control: "text",
      table: {
        category: "Props for main component",
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
        category: "Props for main component",
      },
      defaultValue: "",
      description: "Header search phrase",
    },
    cartItemsQty: {
      control: "number",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: 0,
        },
      },
      defaultValue: 0,
      description: "Header cart items quantity",
    },
    wishlistItemsQty: {
      control: "number",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: 0,
        },
      },
      defaultValue: 0,
      description: "Header wishlist items quantity",
    },
    isSticky: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Header sticky to top",
    },
    isNavVisible: {
      control: "boolean",
      table: {
        category: "Props for main component",
      },
      defaultValue: false,
      description: "Is nav slot visible on mobile view",
    },
    label: {
      control: "text",
      table: {
        category: "Props for SfHeaderNavigationItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: false,
      description: "Label for header navigation item",
    },
    link: {
      control: "text",
      table: {
        category: "Props for SfHeaderNavigationItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "link for header navigation item",
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
      action: "Clicked on Wishlist",
      table: { category: "Events" },
    },
    "click:account": {
      action: "Clicked on Account",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeader, SfLink },
  props: Object.keys(argTypes),
  data() {
    return {
      navigationItems: ["women", "man", "kids"],
      searchValues: "",
    };
  },
  template: `
  <SfHeader
    :class="classes"
    :title="title"
    :logo="logo"
    :logoHeight="logoHeight"
    :logoWidth="logoWidth"
    :active-icon="activeIcon"
    :search-placeholder="searchPlaceholder"
    :search-value="searchValues"
    :cart-icon="cartIcon"
    :wishlist-icon="wishlistIcon"
    :is-sticky="isSticky"
    :is-nav-visible="isNavVisible"
    :account-icon="accountIcon"
    :cart-items-qty="cartItemsQty"
    :wishlist-items-qty="wishlistItemsQty"
    @click:cart="this['click:cart']"
    @click:wishlist="this['click:wishlist']"
    @click:account="this['click:account']"
    @change:search="searchValues = $event"
>
  <template #navigation>
    <SfHeaderNavigationItem
      v-for="item in navigationItems"
      :key="item"
      :label="item"
    />
  </template>
</SfHeader>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Storefront UI",
  logo: "/assets/logo.svg",
};
