import {
  SfHeader,
  SfList,
  SfBottomNavigation,
  SfMegaMenu,
  SfLink,
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
        options: [
          "sf-header--has-mobile-search",
          "sf-header--has-mobile-navigation",
          "sf-header--multiline",
        ],
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
    cartIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "empty_cart",
      },
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "heart",
      },
    },
    accountIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "profile",
      },
    },
    activeIcon: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: "",
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
    cartItemsQty: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: 0,
      },
    },
    isSticky: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isNavVisible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    "change:search": { 
      action: "Changed search value", 
      table: { category: "Events" }
    },
    "click:cart": { 
      action: "Clicked on cart", 
      table: { category: "Events" }
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
  components: { SfHeader },
  props: Object.keys(argTypes),
  template: `
  <SfHeader
    :class="classes"
    :title="title"
    :logo="logo"
    :active-icon="activeIcon"
    :search-placeholder="searchPlaceholder"
    :search-value="searchValue"
    :cart-icon="cartIcon"
    :wishlist-icon="wishlistIcon"
    :is-sticky="isSticky"
    :account-icon="accountIcon"
    :cart-items-qty="cartItemsQty"
    :wishlist-items-qty="wishlistItemsQty"
    @click:cart="this['click:cart']"
    @click:wishlist="this['click:wishlist']"
    @click:account="this['click:account']"
    @change:search="searchValue = $event"
>
  <template #navigation>
    <SfHeaderNavigationItem
      v-for="item in navigation"
      :key="item">
      <template slot="desktop-navigation-item">
        <SfLink href="#">{{item}}</SfLink>
      </template>
    </SfHeaderNavigationItem>
  </template>
</SfHeader>`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Storefront UI",
  logo: "/assets/logo.svg",
  searchValue: "",
  navigation: ["woman", "man", "kids"],
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
      isVisible: true,
      currentCategory: "",
      categories: [
        {
          title: "Clothing",
          link: "/clothing",
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
          title: "Accesories",
          link: "/accesories",
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
          title: "Shoes",
          link: "/shoes",
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
  methods: {
    changeVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
  template: `
    <div>
      <SfOverlay :visible="!!currentCategory" />
      <SfHeader
      :logo="shopLogo"
      :title="shopName"
      active-icon="account"
      :is-nav-visible="isNavVisible"
      is-sticky
      >
        <template #navigation>
          <SfHeaderNavigation
            @close="isVisible = false"
          >
            <SfHeaderNavigationItem 
              v-for="(category, index) in categories"
              :key="index"
              :label="category.title"
              @mouseenter="currentCategory = category.title"
              @mouseleave="currentCategory = ''"
              @click="currentCategory = category.title"
            >
              <SfMegaMenu
                :is-absolute="true"
                :visible="currentCategory === category.title"
                :title="category.title"
                @close="currentCategory = ''"
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
                <SfMegaMenuColumn v-if="currentCategory === 'Clothing'" title="Featured" class="sf-mega-menu-column--pined-content-on-mobile sf-mega-menu-column--hide-header-on-mobile sb-mega-menu__featured">
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
            </SfHeaderNavigationItem>
          </SfHeaderNavigation>
        </template>
      </SfHeader>
      <SfBottomNavigation>
        <SfBottomNavigationItem
          :icon="'menu'"
          :label="'Menu'"
          icon-size="20px"
          @click="changeVisibility"
        />
      </SfBottomNavigation>
    </div>`,
});

WithSfHeaderNavigation.args = {
  isNavVisible: true,
};

WithSfHeaderNavigation.storyName = "With SfHeader Navigation";
