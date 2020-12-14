<template>
  <div id="confirm-order">
    <SfHeading
      title="Order details"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <SfAccordion class="accordion smartphone-only">
      <SfAccordionItem header="Personal Details">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">
              {{ order.firstName }} {{ order.lastName }}<br />
            </p>
            <p class="content">
              {{ order.email }}
            </p>
          </div>
          <SfButton
            class="sf-button--text color-secondary accordion__edit"
            @click="$emit('click:edit', 0)"
            >Edit
          </SfButton>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Shipping address">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">
              <span class="content__label">{{ shippingMethod.label }}</span
              ><br />
              {{ shipping.streetName }} {{ shipping.apartment }},
              {{ shipping.zipCode }}<br />
              {{ shipping.city }}, {{ shipping.country }}
            </p>
            <p class="content">{{ shipping.phoneNumber }}</p>
          </div>
          <SfButton
            class="sf-button--text color-secondary accordion__edit"
            @click="$emit('click:edit', 1)"
            >Edit
          </SfButton>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Billing address">
        <div class="accordion__item">
          <div class="accordion__content">
            <p v-if="payment.sameAsShipping" class="content">
              Same as shipping address
            </p>
            <template v-else>
              <p class="content">
                <span class="content__label">{{ payment.shippingMethod }}</span
                ><br />
                {{ payment.streetName }} {{ payment.apartment }},
                {{ payment.zipCode }}<br />
                {{ payment.city }}, {{ payment.country }}
              </p>
              <p class="content">{{ payment.phoneNumber }}</p>
            </template>
            <SfButton
              class="sf-button--text color-secondary accordion__edit"
              @click="$emit('click:edit', 2)"
              >Edit
            </SfButton>
          </div>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Payment method">
        <div class="accordion__item">
          <div class="accordion__content">
            <p class="content">{{ paymentMethod.label }}</p>
            <SfButton
              class="sf-button--text color-secondary accordion__edit"
              @click="$emit('click:edit', 2)"
              >Edit
            </SfButton>
          </div>
        </div>
      </SfAccordionItem>
      <SfAccordionItem header="Order details">
        <div class="accordion__item">
          <transition name="sf-fade">
            <div class="accordion__content accordion__content">
              <SfCollectedProduct
                v-for="(product, index) in products"
                :key="index"
                v-model="product.qty"
                :image="product.image"
                :title="product.title"
                :regular-price="product.price.regular"
                :special-price="product.price.special"
                :stock="product.stock"
                class="collected-product"
              >
                <template #configuration>
                  <div class="collected-product__properties">
                    <SfProperty
                      v-for="(property, key) in product.configuration"
                      :key="key"
                      :name="property.name"
                      :value="property.value"
                      class="collected-product__property"
                    />
                  </div>
                </template>
                <template #actions>
                  <div>
                    <div class="collected-product__action">
                      {{ product.sku }}
                    </div>
                    <div class="collected-product__action">
                      Quantity:
                      <span class="product__qty">{{ product.qty }}</span>
                    </div>
                  </div>
                </template>
                <template #input>
                  <span></span>
                </template>
              </SfCollectedProduct>
            </div>
          </transition>
        </div>
      </SfAccordionItem>
    </SfAccordion>
    <SfTable class="sf-table--bordered table desktop-only">
      <SfTableHeading class="table__row">
        <SfTableHeader class="table__header table__image">Item</SfTableHeader>
        <SfTableHeader
          v-for="tableHeader in tableHeaders"
          :key="tableHeader"
          class="table__header"
          :class="{ table__description: tableHeader === 'Description' }"
          >{{ tableHeader }}
        </SfTableHeader>
      </SfTableHeading>
      <SfTableRow
        v-for="(product, index) in products"
        :key="index"
        class="table__row"
      >
        <SfTableData class="table__image">
          <SfImage :src="product.image" :alt="product.title" />
        </SfTableData>
        <SfTableData class="table__description">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-sku">{{ product.sku }}</div>
        </SfTableData>
        <SfTableData class="table__data"
          >{{ product.configuration[1].value }}
        </SfTableData>
        <SfTableData class="table__data"
          >{{ product.configuration[0].value }}
        </SfTableData>
        <SfTableData class="table__data">{{ product.qty }}</SfTableData>
        <SfTableData class="table__data">
          <SfPrice
            :regular="product.price.regular"
            :special="product.price.special"
            class="product-price"
          />
        </SfTableData>
      </SfTableRow>
    </SfTable>
    <div class="summary smartphone-only">
      <div class="summary__content">
        <SfHeading
          title="Totals"
          :level="1"
          class="sf-heading--left sf-heading--no-underline summary__title"
        />
        <SfProperty
          name="Products"
          :value="products.length"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Subtotal"
          :value="subtotal"
          class="sf-property--full-width property"
        />
        <SfProperty
          name="Shipping"
          :value="shippingMethod.price"
          class="sf-property--full-width property"
        />
        <SfDivider class="divider" />
        <SfProperty
          name="Total price"
          :value="total"
          class="sf-property--full-width property"
        />
        <SfCheckbox v-model="terms" name="terms" class="summary__terms">
          <template #label>
            <div class="sf-checkbox__label">
              I agree to <a href="#">Terms and conditions</a>
            </div>
          </template>
        </SfCheckbox>
      </div>
    </div>
    <div class="characteristics smartphone-only">
      <SfCharacteristic
        v-for="characteristic in characteristics"
        :key="characteristic.title"
        :title="characteristic.title"
        :description="characteristic.description"
        :icon="characteristic.icon"
        color-icon="green-primary"
        class="characteristics__item"
      />
    </div>
    <div class="totals desktop-only">
      <SfProperty
        name="Subtotal"
        :value="subtotal"
        class="sf-property--full-width property__subtotal"
      >
      </SfProperty>
      <SfProperty
        name="Shipping"
        :value="shippingMethod.price"
        class="sf-property--full-width property"
      >
      </SfProperty>
      <SfDivider class="divider" />
      <SfProperty
        name="Total price"
        :value="total"
        class="sf-property--full-width sf-property--large property__total"
      >
      </SfProperty>
      <SfCheckbox v-model="terms" name="terms" class="totals__terms">
        <template #label>
          <div class="sf-checkbox__label">
            I agree to <a href="#">Terms and conditions</a>
          </div>
        </template>
      </SfCheckbox>
    </div>
    <div class="actions">
      <SfButton class="sf-button--full-width actions__button"
        >Place my order
      </SfButton>
      <SfButton
        class="sf-button--full-width sf-button--underlined color-secondary actions__button actions__button--secondary smartphone-only"
        @click="$emit('click:back')"
      >
        Go back
      </SfButton>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfTable,
  SfCheckbox,
  SfCharacteristic,
  SfCollectedProduct,
  SfDivider,
  SfButton,
  SfImage,
  SfPrice,
  SfProperty,
  SfAccordion,
} from "@storefront-ui/vue";
export default {
  name: "ReviewOrder",
  components: {
    SfHeading,
    SfTable,
    SfCheckbox,
    SfCharacteristic,
    SfCollectedProduct,
    SfDivider,
    SfButton,
    SfImage,
    SfPrice,
    SfProperty,
    SfAccordion,
  },
  props: {
    order: {
      type: Object,
      default: () => ({}),
    },
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    paymentMethods: {
      type: Array,
      default: () => [],
    },
    characteristics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      terms: false,
      promoCode: "",
      tableHeaders: ["Description", "Colour", "Size", "Quantity", "Amount"],
    };
  },
  computed: {
    products() {
      return this.order.products;
    },
    shipping() {
      return this.order.shipping;
    },
    shippingMethod() {
      const shippingMethod = this.shipping.shippingMethod;
      const method = this.shippingMethods.find(
        (method) => method.value === shippingMethod
      );
      return method ? method : { price: "$0.00" };
    },
    payment() {
      return this.order.payment;
    },
    paymentMethod() {
      const paymentMethod = this.payment.paymentMethod;
      const method = this.paymentMethods.find(
        (method) => method.value === paymentMethod
      );
      return method ? method : { label: "" };
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
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-base) 0;
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.table {
  margin: 0 0 var(--spacer-base) 0;
  &__row {
    justify-content: space-between;
  }
  @include for-desktop {
    &__header {
      text-align: center;
      &:last-child {
        text-align: right;
      }
    }
    &__data {
      text-align: center;
    }
    &__description {
      text-align: left;
      flex: 0 0 12rem;
    }
    &__image {
      --image-width: 5.125rem;
      text-align: left;
      margin: 0 var(--spacer-xl) 0 0;
    }
  }
}
.product-price {
  text-align: right;
  display: flex;
  flex-direction: column;
}
.totals {
  &__terms {
    margin-top: var(--spacer-xl);
  }
  &__element:first-child {
    margin-bottom: var(--spacer-base);
  }
}
.promo-code {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &__circle-icon {
    --button-size: 2rem;
    --icon-size: 0.6875rem;
  }
  &__input {
    --input-margin: 0;
    flex: 1;
    margin: 0 var(--spacer-base) 0 0;
  }
}
.product-sku {
  color: var(--c-text-muted);
}
.button {
  cursor: pointer;
}
.property {
  margin: 0 0 var(--spacer-base) 0;
  --property-value-font-weight: var(--font-weight--semibold);
  --property-value-font-size: var(--font-size--base);
  @include for-desktop {
    margin: 0 0 var(--spacer-sm) 0;
    &__total {
      padding: var(--spacer-base) 0 0 0;
    }
  }
}
.divider {
  --divider-border-color: var(--c-primary);
  --divider-width: 100%;
  --divider-margin: 0 0 var(--spacer-base) 0;
}
.characteristics {
  padding: var(--spacer-sm);
  &__item {
    margin: var(--spacer-base) 0;
  }
}
.summary,
.accordion {
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
}
.accordion {
  --accordion-item-content-padding: 0;
  --collected-product-padding: 0;
  --heading-padding: 0;
  &__item {
    position: relative;
  }
  &__content {
    flex: 1;
    padding: var(--spacer-sm);
  }
  &__edit {
    flex: unset;
    position: absolute;
    right: var(--spacer-base);
    top: var(--spacer-base);
  }
}
.collected-product {
  padding: var(--spacer-sm) 0;
  &:not(:last-of-type) {
    border: 1px solid var(--_c-light-primary);
    border-width: 0 0 1px 0;
  }
}
.summary {
  background: var(--c-light);
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--spacer-base) var(--spacer-lg);
  }
  &__title {
    margin: 0 0 var(--spacer-xs) 0;
  }
  &__terms {
    margin: 0 0 0 var(--spacer-xs);
  }
}
.content {
  margin: 0 0 var(--spacer-base) 0;
  color: var(--c-text);
  &__label {
    font-weight: var(--font-weight--normal);
  }
}
.actions {
  &__button {
    margin-top: var(--spacer-xl);
    &--secondary {
      margin: var(--spacer-base) 0;
    }
    @include for-desktop {
      --button-width: 25rem;
    }
  }
}
a {
  color: var(--c-text);
  &:hover {
    color: var(--c-primary);
  }
}
</style>
