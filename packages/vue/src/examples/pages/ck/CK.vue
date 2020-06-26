<template>
  <div>
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
      :cart-items-qty="cartItemsQty"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="alert('@click:account')"
      @change:search="searchValue = $event"
    >
      <template #logo>
        <div class="ck-header__logo">
          <div class="ck-header__title mobile-only">click & collect</div>
          <SfLink link="/">
            <SfImage :src="logo" :alt="title" class="sf-header__logo" />
          </SfLink>
        </div>
      </template>
      <template #search>
        <SfSearchBar class="ck-se desktop-only" />
      </template>
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <SfLink href="#">{{ item }}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <div class="ck-home">
      <SfSearchBar
        placeholder="search"
        class="ck-se mobile-only" 
      />
    </div>
  </div>
</template>
<script>
import { SfHeader, SfLink, SfImage, SfSearchBar } from "@storefront-ui/vue";
export default {
  name: "CK",
  components: {
    SfHeader,
    SfLink,
    SfImage,
    SfSearchBar,
  },
  data() {
    return {
      isMobile: true,
      navigation: ["home", "products", "our stores"],
      searchValue: "",
      title: "Storefront UI",
      activeIcon: "account",
      isSticky: true,
      searchPlaceholder: "Search for items",
      cartIcon: "empty_cart",
      wishlistIcon: "heart",
      accountIcon: "profile",
      cartItemsQty: "0",
    };
  },
  computed: {
    logo() {
      return require("./logo/logo.svg");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/vue/styles";

.ck-home {
  margin: 40px 16px 0;
}

.sf-header {
  --header-background: transparent;
  --header-navigation-item-border: none;
  --header-box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08),
    1px 10px 10px rgba(102, 62, 51, 0.02);
}

.sf-search-bar {
  --icon-color: #ee2e24;
}

.ck-header {
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include for-mobile {
      width: 100%;
    }
  }
  &__title {
    color: #EE2E24;
  }
}

.ck-se {
  --search-bar-border: none;
  border: 1px solid #EE2E24;
  border-radius: 34px;
  --search-bar-height: 48px;
}
.sf-search-bar {
  // --search-bar-height: 50px;
align-items: flex-start;

  .sf-icon {
    fill: red;
    margin-right: 10px;
  }
}
</style>
