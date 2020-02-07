<template>
  <div id="thank-you">
    <div class="banner">
      <div class="banner__info">
        <SfHeading title="It's ordered!" class="sf-heading--no-underline" />
        <p class="banner__order-number">
          Order No. <strong>#80932031-030-00</strong>
        </p>
      </div>
    </div>
    <div class="wrapper">
      <SfHeading
        title="You've successfully placed the order"
        class="heading sf-heading--left"
      />
      <p class="paragraph">
        You can check status of your order by using our delivery status feature.
        You will receive an order confirmation e-mail with details of your order
        and a link to track its progress.
      </p>
      <SfButton class="wrapper__notifications-button"
        >ALLOW ORDER NOTIFICATIONS</SfButton
      >
      <div class="wrapper__contact">
        <SfHeading
          :level="3"
          class="sf-heading--left sf-heading--no-underline"
          title="Primary contacts for any questions"
        ></SfHeading>
        <p class="paragraph">
          <span>{{ address.name }}</span
          ><br />
          <span>{{ address.street }}</span
          ><br />
          <span>{{ address.city }}</span
          ><br /><br />
          <span>{{ address.email }}</span>
        </p>
      </div>
      <SfHeading title="Your Account" class="heading sf-heading--left" />
      <p class="paragraph">
        You can log to your account using e-mail and password defined earlier.
        On your account you can edit your profile data, check history of
        transactions, edit subscription to newsletter.
      </p>
      <SfHeading title="What can we improve" class="heading sf-heading--left" />
      <p class="paragraph">
        Your feedback is important to us. Let us know what we could improve.
      </p>
      <div class="wrapper__buttons">
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

.banner {
  background-color: #f1f2f3;

  &__info {
    padding: 2rem;
    text-align: left;
    @media screen and (min-width: $desktop-min) {
      text-align: center;
    }
  }
  &__order-number {
    font-size: 0.875rem;
  }
}
.wrapper {
  max-width: 586px;
  margin: 0 auto;
  padding: 0 1rem 0 1rem;

  &__contact {
    padding: 1.3rem 2.5rem;
    border: 1px solid #f1f2f3;
  }
  &__notifications-button {
    margin: 2.5rem 0 2.5rem 0;
    @media screen and (max-width: $desktop-min) {
      width: 100%;
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    margin: 2.5rem 0 2.5rem 0;
    justify-content: space-between;

    & > button {
      margin: 0 1rem 0 0;
    }

    @media screen and (max-width: $desktop-min) {
      flex-direction: column;

      & > button {
        margin: 0 0 0.5rem 0;
      }
    }
  }

  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
.heading {
  margin: 3.75rem 0 0 0;
}
.paragraph {
  font-size: 1.125rem;
  line-height: 1.875rem;
}
</style>
