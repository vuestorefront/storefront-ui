import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import {
  SfHeader,
  SfLink,
  SfMegaMenu,
  SfList,
  SfMenuItem,
  SfBottomNavigation,
  SfBanner,
  SfOverlay,
} from "@storefront-ui/vue";
storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader, SfLink },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-header--has-mobile-search": "sf-header--has-mobile-search",
            "sf-header--has-mobile-navigation":
              "sf-header--has-mobile-navigation",
            "sf-header--multiline": "sf-header--multiline",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      isSticky: {
        default: boolean("isSticky", true, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return;
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<div>
      <SfHeader
          :class="customClass"
          :title="title"
          :logo="logo"
          :active-icon="activeIcon"
          :search-placeholder="searchPlaceholder"
          :search-value="searchValue"
          :cart-icon="cartIcon"
          :wishlist-icon="wishlistIcon"
          :is-sticky="isSticky"
        	:account-icon="accountIcon"
          :style="spacer"
          :cart-items-qty="cartItemsQty"
          :wishlist-items-qty="wishlistItemsQty"
          @click:cart="alert('@click:cart')"
          @click:wishlist="alert('@click:wishlist')"
          @click:account="alert('@click:account')"
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
      </SfHeader>
      <div style="display: flex; align-items: center; justify-content: center; height: 155vh; background-color: #f2f2f2;">
        [page content]
      </div>
    </div>`,
  }))
  .add("With SfHeaderNavigation", () => ({
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
        searchValue: "",
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
      is-sticky
      is-nav-visible
      >
        <template #navigation>
          <SfHeaderNavigation
            :is-visible-on-mobile="isVisible"
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
  }))
  .add("[slot] navigation", () => ({
    components: { SfHeader, SfLink },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { margin: "auto", padding: "0 1.25rem" }
          : { margin: "auto", padding: "0 2.5rem" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :search-value="searchValue"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        :cart-items-qty="cartItemsQty"
        :wishlist-items-qty="wishlistItemsQty"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        @change:search="searchValue = $event"
    >
      <template #navigation>
        <SfLink link="/">CUSTOM NAVIGATION</SfLink>
      </template>
    </SfHeader>`,
  }))
  .add("[slot] logo", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { margin: "auto", padding: "0 1.25rem" }
          : { margin: "auto", padding: "0 2.5rem" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :search-value="searchValue"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        :cart-items-qty="cartItemsQty"
        :wishlist-items-qty="wishlistItemsQty"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        @change:search="searchValue = $event"
    >
      <template #logo="{logo,title}">
        CUSTOM LOGO
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`,
  }))
  .add("[slot] search", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { margin: "auto", padding: "0 1.25rem" }
          : { margin: "auto", padding: "0 2.5rem" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :search-value="searchValue"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        :cart-items-qty="cartItemsQty"
        :wishlist-items-qty="wishlistItemsQty"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        @change:search="searchValue = $event"
    >
      <template #search>
        <div :style="{margin: '0 0 0 auto'}">CUSTOM SEARCH</div>
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`,
  }))
  .add("[slot] header-icons", () => ({
    components: { SfHeader },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { margin: "auto", padding: "0 1.25rem" }
          : { margin: "auto", padding: "0 2.5rem" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :search-value="searchValue"
        :cart-icon="cartIcon"
        :wishlist-icon="wishlistIcon"
        :account-icon="accountIcon"
        :style="spacer"
        :cart-items-qty="cartItemsQty"
        :wishlist-items-qty="wishlistItemsQty"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        @change:search="searchValue = $event"
    >
      <template #header-icons="{ accountIcon, wishlistIcon, cartIcon }">
        <div :style="{margin: '0 0 0 1.25rem'}">CUSTOM HEADER ICONS</div>
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`,
  }))
  .add("[slot] aside", () => ({
    components: { SfHeader, SfLink },
    props: {
      title: {
        default: text("title", "Storefront UI", "Props"),
      },
      logo: {
        default: object(
          "logo",
          {
            mobile: { url: "/assets/logo.svg" },
            desktop: { url: "/assets/logo.svg" },
          },
          "Props"
        ),
      },
      activeIcon: {
        default: select(
          "activeIcon",
          ["", "account", "wishlist", "cart"],
          "account",
          "Props"
        ),
      },
      hasMobileSearch: {
        default: boolean("hasMobileSearch", false, "Props"),
      },
      searchPlaceholder: {
        default: text("searchPlaceholder", "Search for items", "Props"),
      },
      cartIcon: {
        default: text("cartIcon", "empty_cart", "Props"),
      },
      wishlistIcon: {
        default: text("wishlistIcon", "heart", "Props"),
      },
      accountIcon: {
        default: text("accountIcon", "profile", "Props"),
      },
      cartItemsQty: {
        default: text("cartItemsQty", "0", "Props"),
      },
      wishlistItemsQty: {
        default: text("wishlistItemsQty", "0", "Props"),
      },
    },
    data() {
      return {
        isMobile: false,
        navigation: ["women", "man", "kids"],
        searchValue: "",
      };
    },
    computed: {
      spacer() {
        return this.isMobile
          ? { margin: "auto", padding: "0 1.25rem" }
          : { margin: "auto", padding: "0 2.5rem" };
      },
    },
    mounted() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <=
        1023;
      window.matchMedia("(max-width: 1023px)").addListener(this.mobileHandler);
    },
    beforeDestroy() {
      window
        .matchMedia("(max-width: 1023px)")
        .removeListener(this.mobileHandler);
    },
    methods: {
      alert(label) {
        alert(label);
      },
      mobileHandler(event) {
        this.isMobile = event.matches;
      },
    },
    template: `<SfHeader
        :title="title"
        :logo="logo"
        :active-icon="activeIcon"
        :has-mobile-search="hasMobileSearch"
        :search-placeholder="searchPlaceholder"
        :search-value="searchValue"
        :cart-items-qty="cartItemsQty"
        :wishlist-items-qty="wishlistItemsQty"
        @change:search="searchValue = $event"
        class="sf-header--has-mobile-search sf-header--has-mobile-navigation"
    >
      <template #aside>
        <div :style="{margin: '0 0 0 1rem'}" class="smartphone-only">ASIDE</div>
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <SfLink href="#">{{item}}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`,
  }));
