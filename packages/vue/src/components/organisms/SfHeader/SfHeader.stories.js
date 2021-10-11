import { SfHeader, SfLink } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/Header",
  component: SfHeader,
  parameters: {
    docs: {
      description: {
        component: "Grouped Product component.",
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
    cartIcon: {
      control: "text",
      table: {
        category: "Props",
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
        category: "Props",
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
        category: "Props",
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
        category: "Props",
        defaultValue: {
          summary: "profile",
        },
      },
      defaultValue: "profile",
      description: "Header activeIcon (accepts account, wishlist and cart)",
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
    cartItemsQty: {
      control: "number",
      table: {
        category: "Props",
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
        category: "Props",
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
        category: "Props",
      },
      defaultValue: false,
      description: "Header sticky to top",
    },
    isNavVisible: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Is nav slot visible on mobile view",
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
