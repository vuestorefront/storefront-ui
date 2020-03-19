<template>
  <div id="thank-you">
    <div class="banner">
      <div class="banner__info">
        <SfHeading
          title="Thank You for your order!"
          class="heading sf-heading--left"
          :level="1"
        />
        <div class="banner__order-number">
          Order No.<br />
          <strong>#80932031-030-00</strong>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper__section">
        <SfHeading
          title="Your Purchase"
          class="heading--full sf-heading--left"
          :level="2"
        />
        <p class="paragraph">
          You have successfuly placed the order. You can check status of your
          order by using our delivery status feature. You will receive an order
          confirmation e-mail with details of your order and a link to track its
          progress.
        </p>
        <SfDivider class="first-divider" />
        <div class="wrapper__contact">
          <SfHeading
            :level="3"
            class="heading--full sf-heading--left sf-heading--no-underline"
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
        <SfDivider class="second-divider" />
      </div>
      <div class="wrapper__additional-info">
        <SfButton class="wrapper__notifications-button"
          >ALLOW ORDER NOTIFICATIONS</SfButton
        >
        <SfHeading title="Your Account" class="heading sf-heading--left" />
        <p class="paragraph">
          You can log to your account using e-mail and password defined earlier.
          On your account you can edit your profile data, check history of
          transactions, edit subscription to newsletter.
        </p>
        <SfHeading
          title="What can we improve"
          class="heading--full sf-heading--left"
        />
        <p class="paragraph">
          Your feedback is important to us. Let us know what we could improve.
        </p>
        <div class="wrapper__buttons">
          <SfButton
            class="feedback-button color-secondary sf-button--full-width"
            >SEND MY FEEDBACK</SfButton
          >
          <SfButton class="sf-button--full-width color-primary"
            >GO BACK TO SHOP</SfButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { SfHeading, SfButton, SfDivider } from "@storefront-ui/vue";
export default {
  name: "Product",
  components: {
    SfHeading,
    SfButton,
    SfDivider
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

#thank-you {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}

.banner {
  &__info {
    padding: var(--spacer-xl) var(--spacer-lg);
    text-align: left;
    @include for-desktop {
      text-align: center;
    }
  }
  &__order-number {
    font-family: var(--font-family-primary);
    font-size: var(--font-sm);
    font-weight: var(--font-light);
  }
}
.wrapper {
  max-width: 586px;
  margin: 0 auto;

  &__section {
    background: var(--c-light);
    padding: 0 var(--spacer-sm) var(--spacer-xs) var(--spacer-sm);
  }

  &__contact {
    padding: 1.3rem var(--spacer-extra-big);
    border: 1px solid var(--c-light);
  }
  &__additional-info {
    padding: 0 var(--spacer-sm);
  }
  &__notifications-button {
    margin: var(--spacer-base) 0 0 0;
    @include for-mobile {
      --button-width: 100%;
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    margin: var(--spacer-extra-big) 0 var(--spacer-extra-big) 0;
    justify-content: space-between;

    @include for-mobile {
      flex-direction: column;
    }
  }

  @include for-desktop {
    padding: 0;
  }
}
.feedback-button {
  margin: var(--spacer-sm) 0;

  @include for-desktop {
    margin: 0 var(--spacer-base) 0 0;
  }
}
.heading {
  --heading-padding: var(--spacer-base) 0;
  max-width: 11rem;
  &--full {
    --heading-padding: var(--spacer-base) 0;
    max-width: 100%;
  }
}
.paragraph {
  font-family: var(--font-family-primary);
  font-weight: var(--font-light);
  color: var(--c-dark-variant);
  margin: 0;
  line-height: 1.75rem;
}

.first-divider {
  --divider-margin: var(--spacer-base) 0 var(--spacer-sm) 0;
  border-color: var(--c-white);
}

.second-divider {
  --divider-margin: var(--spacer-sm) 0 0 0;
  border-color: var(--c-white);
}
</style>
