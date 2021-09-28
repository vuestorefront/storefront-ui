<template>
  <div class="sf-shipping" data-testid="shipping">
    <slot name="shipping-heading" v-bind="{ headingTitle, headingTitleLevel }">
      <SfHeading
        :title="headingTitle"
        :level="headingTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="form">
      <slot name="form" v-bind="{ inputsLabels, selectLabel, countries }">
        <SfInput
          v-model="firstName"
          :value="firstName"
          :label="inputsLabels[0]"
          name="firstName"
          class="form__element form__element--half"
          required
          @input="updateField('firstName', $event)"
        />
        <SfInput
          v-model="lastName"
          :value="lastName"
          :label="inputsLabels[1]"
          name="lastName"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('lastName', $event)"
        />
        <SfInput
          v-model="streetName"
          :value="streetName"
          :label="inputsLabels[2]"
          name="streetName"
          class="form__element"
          required
          @input="updateField('streetName', $event)"
        />
        <SfInput
          v-model="city"
          :value="city"
          :label="inputsLabels[3]"
          name="city"
          class="form__element form__element--half"
          required
          @input="updateField('city', $event)"
        />
        <SfInput
          v-model="state"
          :value="state"
          :label="inputsLabels[4]"
          name="state"
          class="form__element form__element--half form__element--half-even"
          required
          @input="updateField('state', $event)"
        />
        <SfInput
          v-model="zipCode"
          :value="zipCode"
          :label="inputsLabels[5]"
          name="zipCode"
          class="form__element form__element--half"
          required
          @input="updateField('zipCode', $event)"
        />
        <SfSelect
          v-model="country"
          :placeholder="selectLabel"
          class="
            form__element
            form__element--half
            form__element--half-even
            form__select
            sf-select--underlined
          "
          :valid="true"
          data-testid="country"
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
          :label="inputsLabels[6]"
          name="phone"
          class="form__element"
          required
          @input="updateField('phoneNumber', $event)"
        />
      </slot>
    </div>
    <slot
      name="shipping-methods-heading"
      v-bind="{ methodsHeadingTitle, methodsHeadingTitleLevel }"
    >
      <SfHeading
        :title="methodsHeadingTitle"
        :level="methodsHeadingTitleLevel"
        class="sf-heading--left sf-heading--no-underline title"
      />
    </slot>
    <div class="form">
      <slot name="shipping-methods-form" v-bind="{ shippingMethods }">
        <div class="form__radio-group" data-testid="shipping-method">
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
      </slot>
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
} from "@storefront-ui/vue"
export default {
  name: "SfShipping",
  components: {
    SfHeading,
    SfInput,
    SfButton,
    SfSelect,
    SfRadio,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    shippingMethods: {
      type: Array,
      default: () => [],
    },
    headingTitle: {
      type: String,
      default: "Shipping",
    },
    headingTitleLevel: {
      type: Number,
      default: 3,
    },
    inputsLabels: {
      type: Array,
      default: () => [
        "First name",
        "Last name",
        "Street name",
        "City",
        "State/Province",
        "Zip-code",
        "Phone number",
      ],
    },
    selectLabel: {
      type: String,
      default: "Country",
    },
    countries: {
      type: Array,
      default: () => [],
    },
    methodsHeadingTitle: {
      type: String,
      default: "Shipping method",
    },
    methodsHeadingTitleLevel: {
      type: Number,
      default: 3,
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
    }
  },
  watch: {
    shipping: {
      handler() {
        this.firstName = this.value.firstName
        this.lastName = this.value.lastName
        this.streetName = this.value.streetName
        this.city = this.value.city
        this.state = this.value.state
        this.zipCode = this.value.zipCode
        this.country = this.value.country
        this.phoneNumber = this.value.phoneNumber
        this.shippingMethod = this.value.shippingMethod
      },
      immediate: true,
    },
  },
  methods: {
    updateField(fieldName, fieldValue) {
      this.$emit("input", {
        ...this.value,
        [fieldName]: fieldValue,
      })
    },
  },
}
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
