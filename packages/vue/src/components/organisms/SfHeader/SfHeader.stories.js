import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from "@storybook/addon-knobs";
import SfHeader from "./SfHeader.vue";
const StoriesPlaceholder = {
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    style() {
      const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "155vh",
        background: "#f2f2f2",
      };
      return style;
    },
  },
  template: `<div :style="style">[page content]</div>`,
};
storiesOf("Organisms|Header", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfHeader, StoriesPlaceholder },
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
          :title="title"
          :logo="logo"
          :active-icon="activeIcon"
          :has-mobile-search="hasMobileSearch"
          :search-placeholder="searchPlaceholder"
          :search-value="searchValue"
          :cart-icon="cartIcon"
          :wishlist-icon="wishlistIcon"
          :is-sticky="isSticky"
          :account-icon="accountIcon"
          :style="spacer"
          :cart-items-qty="cartItemsQty"
          @click:cart="alert('@click:cart')"
          @click:wishlist="alert('@click:wishlist')"
          @click:account="alert('@click:account')"
          @change:search="searchValue = $event"
      >
        <template #navigation>
          <SfHeaderNavigationItem
              v-for="item in navigation"
              :key="item">
            <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <StoriesPlaceholder :mobile="isMobile"/>
    </div>`,
  }))
  .add("[slot] navigation", () => ({
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
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
        @change:search="searchValue = $event"
    >
      <template #navigation>
        <div :style="{margin: '0 0 0 1.25rem', display: 'flex', alignItems:'center', height: '100%'}">CUSTOM NAVIGATION</div>
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
  .add("[slot] language-selector", () => ({
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
        :style="spacer"
        :cart-items-qty="cartItemsQty"
        @change:search="searchValue = $event"
    >
      <template #language-selector>
        <div :style="{margin: '0 0 0 1rem'}">LANGUAGE SELECTOR</div>
      </template>
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>`,
  }));
