import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import { SfHeader, SfLink } from "@storefront-ui/vue";
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
            <SfLink href="#">{{item}}</SfLink>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <div style="display: flex; align-items: center; justify-content: center; height: 155vh; background-color: #f2f2f2;">
        [page content]
      </div>
    </div>`,
  }))
  .add("with Search and Navigation items", () => ({
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
            <a href="#" :style="{ display: 'flex',alignItems: 'center',height: '100%' }">{{item}}</a>
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <div style="display: flex; align-items: center; justify-content: center; height: 155vh; background-color: #f2f2f2;">
        [page content]
      </div>
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
        <div :style="{margin: '0 0 0 1rem'}" class="mobile-only">ASIDE</div>
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
