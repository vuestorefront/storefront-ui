<template>
  <div>
    <SfHeading
      title="Totals"
      :level="2"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="highlighted highlighted--total">
      <SfProperty
        name="Products"
        :value="totalItems"
        class="sf-property--full-width sf-property--large property"
      />
      <SfProperty
        name="Subtotal"
        :value="subtotal"
        class="sf-property--full-width sf-property--large property"
      />
      <SfProperty
        name="Shipping"
        :value="`From ${cheapestShippingMethod.price}`"
        class="sf-property--full-width sf-property--large property"
      />
      <SfDivider class="divider" />
      <SfProperty
        name="Total price"
        :value="total"
        class="
          sf-property--full-width sf-property--large
          property property__total
        "
      />
    </div>
    <div class="actions">
      <SfButton
        class="sf-button--full-width actions__button desktop-only"
        @click="$emit('click:next')"
        >Go to checkout</SfButton
      >
      <SfButton
        class="
          sf-button--full-width
          actions__button
          color-secondary
          desktop-only
        "
        @click="$emit('click:back')"
        >Go back shopping</SfButton
      >
      <div class="actions__email">
        <SfCharacteristic icon="mail" size-icon="15px" color-icon="#0468DB">
          <template #text>
            <SfButton
              class="sf-button--text actions__button actions__button--secondary"
              >Send my basket to email</SfButton
            >
          </template>
        </SfCharacteristic>
      </div>
    </div>
    <div class="info desktop-only">
      <p>Helpful information:</p>
      <ul class="info__list">
        <li>Questions? Chat with us or call 1.888.282.6060.</li>
        <li>Shipping internationally? Choose your destination & currency.</li>
        <li>Shipping methods & charges</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfCharacteristic,
  SfProperty,
  SfDivider,
} from "@storefront-ui/vue"
export default {
  name: "SfCartOrderSummary",
  components: {
    SfHeading,
    SfButton,
    SfDivider,
    SfCharacteristic,
    SfProperty,
  },
  props: {
    order: {
      type: Object,
      default: () => ({}),
    },
    products: {
      type: Array,
      default: () => [],
    },
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    totalItems: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      characteristics: [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "safety",
        },
        {
          title: "Easy shipping",
          description:
            "You’ll receive dispatch confirmation and an arrival date",
          icon: "shipping",
        },
        {
          title: "Changed your mind?",
          description: "Rest assured, we offer free returns within 30 days",
          icon: "return",
        },
      ],
    }
  },
  computed: {
    cheapestShippingMethod() {
      const methods = this.shippingMethods.filter(
        (method) => method.price !== "Free"
      )
      const cheapestMethod = methods.reduce((previous, current) => {
        const price = parseFloat(current.price.replace("$", ""))
        const previousPrice = parseFloat(previous.price.replace("$", ""))
        return price < previousPrice ? current : previous
      })
      return cheapestMethod
    },
    subtotal() {
      const products = this.products
      const subtotal = products.reduce((previous, current) => {
        const qty = current.qty
        const price = current.price.special
          ? current.price.special
          : current.price.regular
        const total = qty * parseFloat(price.replace("$", ""))
        return previous + total
      }, 0)
      return "$" + subtotal.toFixed(2)
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""))
      const shipping = parseFloat(
        this.cheapestShippingMethod.price.replace("$", "")
      )
      const total = subtotal + (isNaN(shipping) ? 0 : shipping)
      return "$" + total.toFixed(2)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-title-font-weight: var(--font-weight--bold);
  --heading-title-font-size: var(--h4-font-size);
  @include for-desktop {
    --heading-title-margin: 0 0 var(--spacer-2xl) 0;
    --heading-title-font-weight: var(--font-weight--semibold);
  }
}
.property {
  margin: var(--spacer-base) 0;
  @include for-mobile {
    --property-name-font-size: var(--font-size--base);
    --property-value-font-size: var(--font-size--lg);
    --property-value-font-weight: var(--font-weight--semibold);
    &__total {
      --property-value-font-weight: var(--font-weight--bold);
    }
  }
  &:last-of-type {
    @include for-desktop {
      margin: var(--spacer-base) 0 var(--spacer-2xl) 0;
    }
  }
}
.divider {
  --divider-border-color: var(--c-white);
  --divider-margin: var(--spacer-lg) 0 0 0;
  @include for-desktop {
    --divider-margin: calc(var(--spacer-base) * 2) 0 0 0;
  }
}
.actions {
  &__email {
    margin: var(--spacer-lg) auto 0;
  }
  &__button {
    margin: var(--spacer-sm) 0;
    &--secondary {
      margin: 0;
      text-align: left;
    }
  }
}
.info {
  margin: var(--spacer-lg) 0 var(--spacer-xl);
  color: var(--c-link);
  font-family: var(--font-family--primary);
  font-size: var(--font-size--base);
  font-weight: var(--font-weight--light);
  line-height: 1.6;
  &__list {
    padding: 0;
    list-style: none;
    li::before {
      content: "•";
      color: var(--c-primary);
      padding: 0 var(--spacer-xs) 0 0;
    }
  }
}
</style>
