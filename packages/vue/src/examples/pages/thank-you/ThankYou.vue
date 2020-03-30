<template>
  <div id="thank-you">
    <div class="banner">
      <div class="banner__info">
        <SfHeading
          title="Thank You for your order!"
          class="heading sf-heading--left"
          :level="3"
        />
        <div class="banner__order-number">
          <span>Order No.</span>
          <strong>{{ order.number }}</strong>
        </div>
      </div>
    </div>
    <section class="section">
      <div class="section__section">
        <SfHeading
          title="Your Purchase"
          class="heading--full sf-heading--left"
          :level="3"
        />
        <p class="paragraph">
          You have successfuly placed the order. You can check status of your
          order by using our delivery status feature. You will receive an order
          confirmation e-mail with details of your order and a link to track its
          progress.
        </p>
        <div class="section__contact">
          <SfHeading
            :level="6"
            class="heading--full sf-heading--left sf-heading--no-underline"
            title="Primary contacts for any questions"
          ></SfHeading>
          <p class="paragraph--contact">
            <span>{{ address.name }}</span
            ><br />
            <span>{{ address.street }}</span
            ><br />
            <span>{{ address.city }}</span
            ><br /><br />
            <span>{{ address.email }}</span>
          </p>
        </div>
        <SfButton
          class="section__notifications-button sf-button--full-width desktop-only"
          >ALLOW ORDER NOTIFICATIONS</SfButton
        >
      </div>
      <div class="additional-info">
        <SfButton
          class="section__notifications-button sf-button--full-width mobile-only"
          >ALLOW ORDER NOTIFICATIONS</SfButton
        >
        <div>
          <SfHeading
            title="Your Account"
            class="heading sf-heading--left"
            :level="3"
          />
          <p class="paragraph">
            You can log to your account using e-mail and password defined
            earlier. On your account you can edit your profile data, check
            history of transactions, edit subscription to newsletter.
          </p>
        </div>
        <div>
          <SfHeading
            title="What can we improve"
            class="heading--full sf-heading--left"
            :level="3"
          />
          <p class="paragraph">
            Your feedback is important to us. Let us know what we could improve.
          </p>
          <div class="section__buttons">
            <SfButton
              class="feedback-button color-secondary sf-button--full-width button-size"
              >SEND MY FEEDBACK</SfButton
            >
            <SfButton
              class="sf-button--full-width color-primary mobile-only button-size"
              >GO BACK TO SHOP</SfButton
            >
          </div>
        </div>
      </div>
    </section>
    <SfButton class="back-button color-secondary desktop-only button-size"
      >GO BACK TO SHOP</SfButton
    >
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
      },
      order: {
        number: "#80932031-030-00"
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
      padding: var(--spacer-2xl) 0 var(--spacer-3xl) var(--spacer-2xl);
    }
  }
  &__order-number {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-primary);
    font-size: var(--font-sm);
    font-weight: var(--font-light);
    @include for-desktop {
      font-size: var(--font-normal);
      flex-direction: row;
    }
  }
}
.section {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @include for-desktop {
    flex-direction: row;
  }

  &__section {
    background: var(--c-light);
    padding: 0 var(--spacer-sm) var(--spacer-xs) var(--spacer-sm);
    @include for-desktop {
      width: 100%;
      padding: var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl)
        var(--spacer-2xl);
    }
  }

  &__contact {
    padding: 0 0 var(--spacer-xs) var(--spacer-sm);
    border: 2px solid var(--c-white);
    border-width: 2px 0 2px 0;
  }
  &__notifications-button {
    margin: var(--spacer-base) 0 0 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 0 0;
    }
  }
  &__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include for-desktop {
      flex: auto 0 0 0;
      flex-direction: row;
    }
  }

  @include for-desktop {
    padding: 0;
  }
}
.feedback-button {
  margin: var(--spacer-sm) 0;

  @include for-desktop {
    margin: var(--spacer-sm) 0 0 0;
  }
}
.additional-info {
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: var(--spacer-xl) var(--spacer-xl) var(--spacer-2xl)
      var(--spacer-2xl);
    background: var(--c-light);
  }
}
.heading {
  --heading-padding: var(--spacer-base) 0;
  max-width: 11rem;
  &--full {
    --heading-padding: var(--spacer-base) 0;
    max-width: 100%;
  }
  @include for-desktop {
    max-width: 100%;
  }
}
.paragraph {
  font-family: var(--font-family-primary);
  font-weight: var(--font-light);
  color: var(--c-dark-variant);
  margin: 0;
  line-height: 1.6rem;
  @include for-desktop {
    font-weight: var(--font-normal);
    &--contact {
      margin: 0;
      color: var(--c-dark-variant);
      font-family: var(--font-family-secondary);
    }
  }
}

.back-button {
  margin: var(--spacer-xl) auto;
}
.button-size {
  @include for-desktop {
    --button-width: 25rem;
  }
}
</style>
