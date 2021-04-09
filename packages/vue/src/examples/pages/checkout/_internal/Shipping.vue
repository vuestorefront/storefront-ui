<template>
  <div>
    <SfHeading
      title="Shipping"
      :level="3"
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
        placeholder="Country"
        class="form__element form__element--half form__element--half-even form__select sf-select--underlined"
        :valid="true"
        @input="updateField('country', $event)"
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
          <template #label="{ label }">
            <div class="sf-radio__label shipping__label">
              <div>
                {{ label }}
                <SfButton
                  class="sf-button--text shipping__action desktop-only"
                  :class="{ 'shipping__action--is-active': item.isOpen }"
                  @click="item.isOpen = !item.isOpen"
                  >{{ item.isOpen ? "- info" : "+ info" }}
                </SfButton>
              </div>
              <div class="shipping__label-price">{{ item.price }}</div>
            </div>
          </template>
          <template #description="{ description }">
            <div class="sf-radio__description shipping__description">
              <div class="shipping__delivery">
                <span>{{ item.delivery }}</span>
              </div>
              <transition name="sf-fade">
                <div v-if="item.isOpen" class="shipping__info">
                  {{ description }}
                </div>
              </transition>
            </div>
          </template>
        </SfRadio>
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
  SfRadio,
} from "@storefront-ui/vue";
export default {
  name: "Shipping",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
  },
  props: {
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      streetName: "",
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
        "Vatican City",
      ],
    };
  },
  watch: {
    shipping: {
      handler() {
        this.firstName = this.value.firstName;
        this.lastName = this.value.lastName;
        this.streetName = this.value.streetName;
        this.city = this.value.city;
        this.state = this.value.state;
        this.zipCode = this.value.zipCode;
        this.country = this.value.country;
        this.phoneNumber = this.value.phoneNumber;
        this.shippingMethod = this.value.shippingMethod;
      },
      immediate: true,
    },
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.title {
  --heading-padding: var(--spacer-xl) 0 var(--spacer-lg);
  --heading-title-font-weight: var(--font-weight--bold);
  &:not(:first-of-type) {
    --heading-padding: var(--spacer-base) 0;
  }
  @include for-desktop {
    --heading-title-font-size: var(--h3-font-size);
    --heading-title-font-weight: var(--font-weight--semibold);
    --heading-padding: var(--spacer-xl) 0;
  }
}
.form {
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    &:last-of-type {
      margin: 0;
    }
  }
  &__group {
    display: flex;
    align-items: center;
  }
  &__select {
    display: flex;
    align-items: center;
    --select-option-font-size: var(--font-size--base);
    --select-dropdown-color: blue;
    ::v-deep .sf-select__dropdown {
      margin: 0 0 2px 0;
      font-size: var(--font-size--base);
      font-family: var(--font-family--secondary);
      color: var(--c-link);
    }
  }
  &__radio {
    margin: var(--spacer-xs) 0;
    &:last-of-type {
      margin: var(--spacer-xs) 0 var(--spacer-xl);
    }
    ::v-deep .sf-radio__container {
      --radio-container-padding: var(--spacer-xs);
      @include for-desktop {
        --radio-container-padding: var(--spacer-xs) var(--spacer-xs)
          var(--spacer-xs) var(--spacer-sm);
      }
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    &:last-of-type {
      margin: 0 calc(var(--spacer-2xl) - var(--spacer-sm)) 0 0;
    }
    &__element {
      margin: 0 0 var(--spacer-sm) 0;
      flex: 0 0 100%;
      &--half {
        flex: 1 1 50%;
        &-even {
          padding: 0 0 0 var(--spacer-base);
        }
      }
    }
    &__radio-group {
      flex: 0 0 calc(100% + var(--spacer-sm));
      margin: 0 calc(var(--spacer-sm) * -1);
    }
  }
}
.shipping {
  --radio-container-padding: var(--spacer-sm);
  &__label {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &-price {
      font-size: var(--font-size--lg);
      text-transform: uppercase;
    }
  }
  &__description {
    --radio-description-margin: 0;
  }
  &__delivery {
    color: var(--c-text-muted);
    font-weight: var(--font-weight--normal);
    display: flex;
    width: 10.625rem;
    @include for-desktop {
      font-weight: var(--font-weight--light);
    }
  }
  &__action {
    margin: 0 0 0 var(--spacer-xs);
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
      width: 100%;
    }
  }
}
</style>
