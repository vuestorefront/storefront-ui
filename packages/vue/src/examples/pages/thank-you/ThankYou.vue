<template>
  <div id="thank-you">
    <div class="thank-you__banner">
      <div class="thank-you__banner-info">
        <SfHeading title="It's ordered!" />
        <p class="thank-you__order-number">
          Order No. <strong>#80932031-030-00</strong>
        </p>
      </div>
    </div>
    <div class="thank-you__wrapper">
      <SfHeading
        title="You've successfully placed the order"
        class="thank-you__heading sf-heading--left"
      />
      <p class="thank-you__text">
        You can check status of your order by using our delivery status feature.
        You will receive an order confirmation e-mail with details of your order
        and a link to track its progress.
      </p>
      <SfButton class="thank-you__notifications-button"
        >ALLOW ORDER NOTIFICATIONS</SfButton
      >
      <div class="thank-you__contact">
        <SfHeading
          :level="3"
          class="sf-heading--left"
          title="Primary contacts for any questions"
        ></SfHeading>
        <p class="thank-you__text">
          <span>{{ address.name }}</span
          ><br />
          <span>{{ address.street }}</span
          ><br />
          <span>{{ address.city }}</span
          ><br /><br />
          <span>{{ address.email }}</span>
        </p>
      </div>
      <SfHeading
        title="Your Account"
        class="thank-you__heading sf-heading--left"
      />
      <p class="thank-you__text">
        You can log to your account using e-mail and password defined earlier.
        On your account you can edit your profile data, check history of
        transactions, edit subscription to newsletter.
      </p>
      <SfHeading
        title="What can we improve"
        class="thank-you__heading sf-heading--left"
      />
      <p class="thank-you__text">
        Your feedback is important to us. Let us know what we could improve.
      </p>
      <div class="thank-you__buttons">
        <SfButton class="color-secondary sf-button--full-width"
          >SEND MY FEEDBACK</SfButton
        >
        <SfButton
          class="sf-button--outline color-secondary sf-button--full-width"
          >BACK TO SHOP</SfButton
        >
      </div>
    </div>
  </div>
</template>
<script>
import { SfHeading, SfButton } from "@storefront-ui/vue";
export default {
  name: "Product",
  components: {
    SfHeading,
    SfButton
  },
  data() {
    return {
      address: {
        name: "Divante Headquarter",
        street: "St. Dmowskiego 17, 53-534",
        city: "Wroclaw, Poland",
        email: "demo@vuestorefront.io"
      }
    };
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
#thank-you {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}

.thank-you {
  $this: &;
  &__wrapper {
    max-width: 586px;
    margin: 0 auto;
  }
  &__banner {
    background-color: #f1f2f3;

    &-info {
      padding: 2rem;
      text-align: center;
    }
    #{$this}__order-number {
      font-size: 14px;
    }
  }
  &__heading {
    margin: 3.75rem 0 0 0;
  }
  &__text {
    font-size: 18px;
  }
  &__contact {
    padding: 1.3rem 2.5rem;
    border: 1px solid #f1f2f3;
  }
  &__notifications-button {
    margin: 2.5rem 0 2.5rem 0;
  }
  &__buttons {
    width: 100%;
    display: flex;
    margin: 2.5rem 0 2.5rem 0;
    justify-content: space-between;

    & > button {
      margin: 0 1rem 0 0;
    }
  }
}
</style>
