<template>
  <div>
    <SfHeader
      :logo="logo"
      :active-icon="activeIcon"
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
            <SfImage :src="logo" alt="Logo" class="ck-header__svg" />
          </SfLink>
        </div>
      </template>
      <template #search>
        <SfSearchBar
          class="ck-search--mobile desktop-only"
          placeholder="Search for items"
        />
      </template>
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigation" :key="item">
          <SfLink class="ck-nav-item" href="#">{{ item }}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <SfSearchBar
      placeholder="Search items"
      class="ck-search--desktop mobile-only"
    />
  </div>
</template>
<script>
import { SfHeader, SfLink, SfImage, SfSearchBar } from "@storefront-ui/vue";
export default {
  name: "CkNav",
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
      activeIcon: "",
      isSticky: true,
      cartIcon: "empty_cart",
      wishlistIcon: "marker",
      accountIcon: "account",
      cartItemsQty: "0",
    };
  },
  computed: {
    logo() {
      return require("../assets/logo.svg");
    },
  },
};
</script>
<style lang="scss">
@import "@storefront-ui/vue/styles.scss";

.sf-header {
  --header-background: transparent;
  --header-navigation-item-border: none;
  --header-box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08),
    1px 10px 10px rgba(102, 62, 51, 0.02);
  &__wrapper {
    @include for-desktop {
      border-radius: 60px;
    }
  }
}

.ck-header {
  &__logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include for-mobile {
      width: 100%;
      margin: 15px 0;
    }
  }
  &__title {
    color: var(--_c-red-primary);
    font-weight: var(--font-bold);
    font-size: 18px;
  }
  &__svg {
    width: 79px;
    display: flex;
    @include for-desktop {
      width: 105px;
    }
  }
}

.ck-nav-item {
  white-space: nowrap;
  &:hover {
    color: var(--_c-red-primary);
  }
}

.ck-search {
  &--mobile,
  &--desktop {
    --search-bar-padding: 12px 20px;
    --search-bar-border: none;
    --search-bar-font-size: 14px;
    --search-bar-height: 48px;
    --search-bar-placeholder-color: var(--_c-dark-primary);
    border: 1px solid var(--_c-red-primary);
    border-radius: 34px;
    margin: 24px 16px;
    text-align: left;
    fill: var(--_c-red-primary);
    .sf-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      fill: var(--_c-red-primary);
      margin-right: 10px;
      padding-bottom: 19px;
    }
  }
}

.sf-header__icon {
  &--is-active {
    --icon-color: yellow;
  }
}
</style>
