<template>
  <div id="my-account">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <SfContentPages
      title="My Account"
      :active="activePage"
      @click:change="changeActivePage"
    >
      <SfContentCategory title="Personal Details">
        <SfContentPage title="My profile">
          <MyProfile />
        </SfContentPage>
        <SfContentPage title="Shipping details">
          <ShippingDetails />
        </SfContentPage>
        <SfContentPage title="Loyalty Card">
          <LoyaltyCard />
        </SfContentPage>
        <SfContentPage title="My newsletter">
          <MyNewsletter />
        </SfContentPage>
      </SfContentCategory>
      <SfContentCategory title="Order details">
        <SfContentPage title="Order history">
          <OrderHistory />
        </SfContentPage>
        <SfContentPage title="My reviews">
          <MyReviews />
        </SfContentPage>
      </SfContentCategory>
      <SfContentPage title="Log out" />
    </SfContentPages>
  </div>
</template>
<script>
import { SfBreadcrumbs, SfContentPages } from "../../../../index.js";
import {
  MyProfile,
  ShippingDetails,
  LoyaltyCard,
  MyNewsletter,
  OrderHistory,
  MyReviews
} from "./_internal/index.js";
export default {
  name: "MyAccount",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    MyProfile,
    ShippingDetails,
    LoyaltyCard,
    MyNewsletter,
    OrderHistory,
    MyReviews
  },
  data() {
    return {
      activePage: "Order history",
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "My Account",
          route: {
            link: "#"
          }
        }
      ]
    };
  },
  methods: {
    changeActivePage(title) {
      if (title === "Log out") {
        alert("You are logged out!");
        return;
      }
      this.activePage = title;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#my-account {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
.breadcrumbs {
  padding: $spacer-big $spacer-extra-big $spacer-extra-big;
}
.content {
  flex: 1;
}
.sf-tabs {
  ::v-deep &__content {
    padding: $spacer-big 0;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
  }
  &__input {
    margin-bottom: $spacer-extra-big;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 0 0 50%;
        & + &:not(:nth-child(odd)) {
          padding-left: 3.75rem;
        }
      }
    }
  }
  &__select {
    // todo: [bug] fix padding to adjust to rest form elements
    ::v-deep .sf-select__selected {
      padding: 5px 0;
    }
  }
  &__checkbox {
    margin-bottom: $spacer-big;
  }
  &__button {
    margin-top: $spacer-big;
  }
  &__title {
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-desktop;
    font-weight: 500;
    line-height: 1.6;
  }
}
.message,
.notice {
  font-family: $body-font-family-primary;
  font-weight: $body-font-weight-primary;
  line-height: 1.6;
}
.message {
  margin: 0 0 $spacer-extra-big 0;
  font-size: $font-size-regular-desktop;
}
.notice {
  max-width: 70%;
  margin: $spacer 0 0 0;
  font-size: $font-size-extra-small-desktop;
}
.orders {
  &__title {
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-desktop;
    font-weight: 500;
    line-height: 1.6;
  }
  &__message {
    font-family: $body-font-family-primary;
    font-size: $font-size-regular-desktop;
    font-weight: $body-font-weight-primary;
    line-height: 1.6;
  }
  &__button {
    margin-top: $spacer-big;
  }
}
.button-download-all {
  &.sf-button {
    padding: 10px 1.25rem;
    font-size: 0.75rem;
  }
}
</style>
