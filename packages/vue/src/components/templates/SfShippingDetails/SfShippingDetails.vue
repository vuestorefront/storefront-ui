<template>
  <transition name="sf-fade">
    <SfTabs
      v-if="editAddress"
      key="edit-address"
      :open-tab="1"
      class="tab-orphan"
      data-testid="shipping-details-tabs"
    >
      <SfTab title="Change the address">
        <p class="message">Keep your addresses and contact details updated.</p>
        <div class="form">
          <SfInput
            v-model="firstName"
            name="firstName"
            label="First Name"
            required
            class="form__element form__element--half"
          />
          <SfInput
            v-model="lastName"
            name="lastName"
            label="Last Name"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <SfInput
            v-model="streetName"
            name="streetName"
            label="Street Name"
            required
            class="form__element"
          />
          <SfInput
            v-model="apartment"
            name="apartment"
            label="House/Apartment number"
            required
            class="form__element"
          />
          <SfInput
            v-model="city"
            name="city"
            label="City"
            required
            class="form__element form__element--half"
          />
          <SfInput
            v-model="state"
            name="state"
            label="State/Province"
            required
            class="form__element form__element--half form__element--half-even"
          />
          <SfInput
            v-model="zipCode"
            name="zipCode"
            label="Zip-code"
            required
            class="form__element form__element--half"
          />
          <SfComponentSelect
            v-model="country"
            name="country"
            label="Country"
            required
            class="
              sf-component-select--underlined
              form__select
              form__element
              form__element--half
              form__element--half-even
            "
            data-testid="country"
          >
            <SfComponentSelectOption
              v-for="countryOption in countries"
              :key="countryOption"
              :value="countryOption"
            >
              {{ countryOption }}
            </SfComponentSelectOption>
          </SfComponentSelect>
          <SfInput
            v-model="phoneNumber"
            name="phone"
            label="Phone number"
            required
            class="form__element"
          />
          <SfButton
            class="action-button"
            data-testid="update-address-button"
            @click="updateAddress"
          >
            Update the address</SfButton
          >
        </div>
      </SfTab>
    </SfTabs>
    <SfTabs v-else key="address-list" :open-tab="1" class="tab-orphan">
      <SfTab title="Shipping details">
        <p class="message">
          Manage all the shipping addresses you want (work place, home address
          ...) This way you won't have to enter the shipping address manually
          with each order.
        </p>
        <transition-group tag="div" name="sf-fade" class="shipping-list">
          <div
            v-for="(shipping, key) in account.shipping"
            :key="shipping.streetName + shipping.apartment"
            class="shipping"
            data-testid="shipping-address-list-item"
          >
            <div class="shipping__content">
              <p class="shipping__address">
                <span class="shipping__client-name"
                  >{{ shipping.firstName }} {{ shipping.lastName }}</span
                ><br />
                {{ shipping.streetName }} {{ shipping.apartment }}<br />{{
                  shipping.zipCode
                }}
                {{ shipping.city }},<br />{{ shipping.country }}
              </p>
              <p class="shipping__address">
                {{ shipping.phoneNumber }}
              </p>
            </div>
            <div class="shipping__actions">
              <SfIcon
                icon="cross"
                color="gray"
                size="14px"
                role="button"
                class="smartphone-only"
                @click="deleteAddress(key)"
              />
              <SfButton
                data-testid="change-address"
                @click="changeAddress(key)"
              >
                Change
              </SfButton>
              <SfButton
                class="shipping__button-delete desktop-only"
                data-testid="delete-address"
                @click="deleteAddress(key)"
              >
                Delete
              </SfButton>
            </div>
          </div>
        </transition-group>
        <SfButton
          class="action-button"
          data-testid="add-new-address"
          @click="changeAddress(-1)"
        >
          Add new address</SfButton
        >
      </SfTab>
    </SfTabs>
  </transition>
</template>
<script>
import {
  SfTabs,
  SfInput,
  SfButton,
  SfComponentSelect,
  SfIcon,
} from "@storefront-ui/vue"
export default {
  name: "SfShippingDetails",
  components: {
    SfTabs,
    SfInput,
    SfButton,
    SfComponentSelect,
    SfIcon,
  },
  props: {
    account: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editAddress: false,
      editedAddress: -1,
      firstName: "",
      lastName: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
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
    }
  },
  methods: {
    changeAddress(index) {
      const account = this.account
      const shipping = account.shipping[index]
      if (index > -1) {
        this.firstName = account.firstName
        this.lastName = account.lastName
        this.streetName = shipping.streetName
        this.apartment = shipping.apartment
        this.city = shipping.city
        this.state = shipping.state
        this.zipCode = shipping.zipCode
        this.country = shipping.country
        this.phoneNumber = shipping.phoneNumber
        this.editedAddress = index
      }
      this.editAddress = true
    },
    updateAddress() {
      const account = { ...this.account }
      const shipping = {
        firstName: this.firstName,
        lastName: this.lastName,
        apartment: this.apartment,
        streetName: this.streetName,
        city: this.city,
        state: this.state,
        zipCode: this.zipCode,
        country: this.country,
        phoneNumber: this.phoneNumber,
      }
      const index = this.editedAddress
      if (index > -1) {
        account.shipping[index] = shipping
        this.editedAddress = -1
      } else {
        account.shipping.push(shipping)
      }
      this.editAddress = false
      this.$emit("update:shipping", account)
    },
    deleteAddress(index) {
      const account = { ...this.account }
      account.shipping.splice(index, 1)
      this.$emit("update:shipping", account)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.shipping-list {
  margin: 0 0 var(--spacer-base) 0;
}
.shipping {
  display: flex;
  padding: var(--spacer-base) 0;
  border: 1px solid var(--c-light);
  border-width: 1px 0 0 0;
  &:last-child {
    border-width: 1px 0 1px 0;
  }
  &__content {
    flex: 1;
    color: var(--c-text);
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @include for-desktop {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  }
  &__button-delete {
    --button-background: var(--c-light);
    --button-color: var(--c-dark-variant);
    &:hover {
      --button-background: var(--_c-light-primary);
    }
    @include for-desktop {
      margin: 0 0 0 var(--spacer-base);
    }
  }
  &__address {
    margin: 0 0 var(--spacer-base) 0;
    &:last-child {
      margin: 0;
    }
  }
}
.tab-orphan {
  @include for-mobile {
    --tabs-content-border-width: 0;
    --tabs-title-display: none;
    --tabs-content-padding: 0;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin: 0 0 var(--spacer-base) 0;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding: 0 0 0 var(--spacer-lg);
        }
      }
    }
  }
  &__select {
    padding-bottom: calc(var(--font-xs) * 1.2);
  }
}
.message {
  margin: 0 0 var(--spacer-base) 0;
}
.action-button {
  --button-width: 100%;
  @include for-desktop {
    --button-width: auto;
  }
}
</style>
