<template>
  <div>
    <SfHeading
      title="2. Shipping"
      :level="2"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <SfInput
        v-model="firstName"
        :value="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
        @input="updateField('firstName', $event)"
      />
      <SfInput
        v-model="lastName"
        :value="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('lastName', $event)"
      />
      <SfInput
        v-model="streetName"
        :value="streetName"
        label="Street name"
        name="streetName"
        class="form__element"
        required
        @input="updateField('streetName', $event)"
      />
      <SfInput
        v-model="apartment"
        :value="apartment"
        label="House/Apartment number"
        name="apartment"
        class="form__element"
        required
        @input="updateField('apartment', $event)"
      />
      <SfInput
        v-model="city"
        :value="city"
        label="City"
        name="city"
        class="form__element form__element--half"
        required
        @input="updateField('city', $event)"
      />
      <SfInput
        v-model="state"
        :value="state"
        label="State/Province"
        name="state"
        class="form__element form__element--half form__element--half-even"
        required
        @input="updateField('state', $event)"
      />
      <SfInput
        v-model="zipCode"
        :value="zipCode"
        label="Zip-code"
        name="zipCode"
        class="form__element form__element--half"
        required
        @input="updateField('zipCode', $event)"
      />
      <SfSelect
        v-model="country"
        :value="country"
        label="Country"
        class="form__element form__element--half form__element--half-even form__select sf-select--underlined"
        :valid="true"
        required
        @change="updateField('country', $event)"
      >
        <SfSelectOption
          v-for="countryOption in countries"
          :key="countryOption"
          :value="countryOption"
        >
          {{ countryOption }}
        </SfSelectOption>
      </SfSelect>
      <SfInput
        v-model="phoneNumber"
        :value="phoneNumber"
        label="Phone number"
        name="phone"
        class="form__element"
        required
        @input="updateField('phoneNumber', $event)"
      />
    </div>
    <SfHeading
      title="Shipping method"
      :level="3"
      class="sf-heading--left sf-heading--no-underline title"
    />
    <div class="form">
      <div class="form__radio-group">
        <SfRadio
          v-for="item in shippingMethods"
          :key="item.value"
          v-model="shippingMethod"
          :label="item.label"
          :value="item.value"
          name="shippingMethod"
          :description="item.description"
          class="form__radio shipping"
          @input="updateField('shippingMethod', $event)"
        >
          <template #label="{label}">
            <div class="sf-radio__label shipping__label">
              <div>{{ label }}</div>
              <div class="shipping__label-price">{{ item.price }}</div>
            </div>
          </template>
          <template #description="{description}">
            <div class="sf-radio__description shipping__description">
              <div class="shipping__delivery">
                <p>{{ item.delivery }}</p>
                <SfButton
                  class="sf-button--text color-secondary shipping__action"
                  :class="{ 'shipping__action--is-active': item.isOpen }"
                  @click="item.isOpen = !item.isOpen"
                  >info
                </SfButton>
              </div>
              <transition name="fade">
                <div v-if="item.isOpen" class="shipping__info">
                  {{ description }}
                </div>
              </transition>
            </div>
          </template>
        </SfRadio>
      </div>
      <div class="form__action mobile-only">
        <SfButton
          class="sf-button--full-width form__action-button"
          @click="$emit('click:next')"
          >Continue to payment
        </SfButton>
        <SfButton
          class="sf-button--full-width sf-button--text color-secondary form__action-button form__action-button--secondary"
          @click="$emit('click:back')"
          >Go back
        </SfButton>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfHeading,
  SfInput,
  SfButton,
  SfSelect,
  SfRadio
} from "@storefront-ui/vue";

export default {
  name: "Shipping",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio
  },
  props: {
    shippingMethods: {
      type: Array,
      default: () => []
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      shippingMethod: "",
      countries: [
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia and Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "The Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City"
      ]
    };
  },
  watch: {
    shipping: {
      handler() {
        this.firstName = this.value.firstName;
        this.lastName = this.value.lastName;
        this.streetName = this.value.streetName;
        this.apartment = this.value.apartment;
        this.city = this.value.city;
        this.state = this.value.state;
        this.zipCode = this.value.zipCode;
        this.country = this.value.country;
        this.phoneNumber = this.value.phoneNumber;
        this.shippingMethod = this.value.shippingMethod;
      },
      immediate: true
    }
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-base) 0;
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: var(--spacer-2xl) 0 var(--spacer-base) 0;
    &:last-of-type {
      --heading-padding: var(--spacer-xs) 0 var(--spacer-base) 0;
    }
  }
}
.form {
  &__group {
    display: flex;
    align-items: center;
  }
  &__action-button {
    &:first-child {
      --button-height: 4.0625rem;
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-base) 0;
    }
  }
  &__button {
    --button-width: 100%;
  }
  &__radio-group {
    flex: 0 0 100%;
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 var(--spacer-2xl) 0 0;
    &:last-of-type {
      margin: 0 calc(var(--spacer-2xl) - var(--spacer-sm)) 0 0;
    }
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-xl);
        }
      }
    }
    &__action {
      flex: 0 0 100%;
      display: flex;
    }
    &__button {
      --button-width: auto;
    }
    &__radio-group {
      flex: 0 0 calc(100% + var(--spacer-sm));
      margin: 0 calc(var(--spacer-sm) * -1);
    }
  }
  @include for-mobile {
    &__radio-group {
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      width: 100vw;
    }
  }
}
.shipping {
  --radio-container-padding: var(--spacer-sm);

  &__label {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    &-price {
      font-size: var(--font-lg);
      @include for-mobile {
        order: -1;
        margin: 0 var(--spacer-xs) 0 0;
      }
    }
  }
  &__description {
    --radio-description-margin: 0;
  }
  &__delivery {
    color: var(--c-text-muted);
    display: flex;
  }
  &__action {
    @include for-mobile {
      margin: 0 0 0 var(--spacer-xs);
    }
    &::before {
      content: "+";
    }
    &--is-active {
      --button-color: var(--c-primary);
      --button-transition: color 150ms linear;
      &::before {
        content: "-";
      }
    }
  }
  @include for-desktop {
    &__label {
      justify-content: space-between;
    }
    &__delivery {
      justify-content: space-between;
      max-width: 240px;
    }
  }
}
</style>
