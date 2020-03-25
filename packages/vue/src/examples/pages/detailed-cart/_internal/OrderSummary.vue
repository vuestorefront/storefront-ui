<template>
  <div>
    <SfHeading
      title="Totals"
      :level="1"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="highlighted highlighted--total">
      <SfProperty
        name="Products"
        :value="totalItems"
        class="sf-property--full-width sf-propert--large property"
      />
      <SfProperty
        name="Subtotal"
        :value="subtotal"
        class="sf-property--full-width sf-propert--large property"
      />
      <SfProperty
        name="Shipping"
        :value="`From ${shippingMethod.price}`"
        class="sf-property--full-width sf-propert--large property"
      />
      <SfDivider class="divider" />
      <SfProperty
        name="Total price"
        :value="total"
        class="sf-property--full-width sf-propert--large property property__total"
      />
    </div>
    <div class="actions">
      <SfButton
        class="sf-button--full-width actions__button desktop-only"
        @click="$emit('click:next')"
        >Go to checkout</SfButton
      >
      <div class="actions__email">
        <SfIcon icon="mail" size="12px" />
        <SfButton
          class="sf-button--text actions__button actions__button--secondary"
          >Send my basket to email</SfButton
        >
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfProperty,
  SfDivider,
  SfIcon
} from "@storefront-ui/vue";

export default {
  name: "OrderSummary",
  components: {
    SfHeading,
    SfButton,
    SfDivider,
    SfIcon,
    SfProperty
  },
  props: {
    order: {
      type: Object,
      default: () => ({})
    },
    products: {
      type: Array,
      default: () => []
    },
    shippingMethods: {
      type: Array,
      default: () => []
    },
    totalItems: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      promoCode: "",
      showPromoCode: false,
      listIsHidden: false,
      characteristics: [
        {
          title: "Safety",
          description: "It carefully packaged with a personal touch",
          icon: "safety"
        },
        {
          title: "Easy shipping",
          description:
            "You’ll receive dispatch confirmation and an arrival date",
          icon: "shipping"
        },
        {
          title: "Changed your mind?",
          description: "Rest assured, we offer free returns within 30 days",
          icon: "return"
        }
      ]
    };
  },
  computed: {
    shippingMethod() {
      const methods = this.shippingMethods.filter(
        method => method.price !== "Free"
      );
      const cheapestMethod = methods.reduce((previous, current) => {
        const price = parseFloat(current.price.replace("$", ""));
        const previousPrice = parseFloat(previous.price.replace("$", ""));
        return price < previousPrice ? current : previous;
      });
      return cheapestMethod;
    },
    subtotal() {
      const products = this.products;
      const subtotal = products.reduce((previous, current) => {
        const qty = current.qty;
        const price = current.price.special
          ? current.price.special
          : current.price.regular;
        const total = qty * parseFloat(price.replace("$", ""));
        return previous + total;
      }, 0);
      return "$" + subtotal.toFixed(2);
    },
    total() {
      const subtotal = parseFloat(this.subtotal.replace("$", ""));
      const shipping = parseFloat(this.shippingMethod.price.replace("$", ""));
      const total = subtotal + (isNaN(shipping) ? 0 : shipping);
      return "$" + total.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.title {
  @include for-desktop {
    --heading-title-margin: 0 0 var(--spacer-2xl) 0;
    --heading-title-font-size: var(--h3-font-size);
  }
}
.property {
  margin: var(--spacer-base) 0;
  --property-name-font-size: var(--font-base);
  --property-value-font-size: var(--font-lg);
  --property-value-font-weight: var(--font-semibold);
  &__total {
    --property-value-font-weight: var(--font-bold);
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
    display: flex;
    margin: var(--spacer-lg) 0 0 0;
  }
  &__button {
    margin: var(--spacer-sm) 0;
    &--secondary {
      margin: 0 0 0 var(--spacer-xs);
      text-align: left;
    }
  }
}
</style>
