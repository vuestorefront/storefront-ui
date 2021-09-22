<template>
  <div class="sf-shipping-details">
    <transition :name="transition">
      <SfTabs
        v-if="editAddress"
        key="edit-address"
        :open-tab="1"
        class="tab-orphan"
        data-testid="shipping-details-tabs"
      >
        <SfTab :title="tabsTitles[0]">
          <slot name="change-address-description">
            <p class="message">
              {{ changeAddressDescription }}
            </p>
          </slot>
          <div class="form">
            <slot name="form">
              <SfInput
                v-model="firstName"
                name="firstName"
                :label="inputsLabels[0]"
                required
                class="form__element form__element--half"
              />
              <SfInput
                v-model="lastName"
                name="lastName"
                :label="inputsLabels[1]"
                required
                class="
                  form__element form__element--half form__element--half-even
                "
              />
              <SfInput
                v-model="streetName"
                name="streetName"
                :label="inputsLabels[2]"
                required
                class="form__element"
              />
              <SfInput
                v-model="apartment"
                name="apartment"
                :label="inputsLabels[3]"
                required
                class="form__element"
              />
              <SfInput
                v-model="city"
                name="city"
                :label="inputsLabels[4]"
                required
                class="form__element form__element--half"
              />
              <SfInput
                v-model="state"
                name="state"
                :label="inputsLabels[5]"
                required
                class="
                  form__element form__element--half form__element--half-even
                "
              />
              <SfInput
                v-model="zipCode"
                name="zipCode"
                :label="inputsLabels[6]"
                required
                class="form__element form__element--half"
              />
              <SfComponentSelect
                v-model="country"
                name="country"
                :label="selectLabel"
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
                :label="inputsLabels[6]"
                required
                class="form__element"
              />
              <SfButton
                class="action-button"
                data-testid="update-address-button"
                @click="updateAddress"
              >
                {{ changeAddressButtonText }}</SfButton
              >
            </slot>
          </div>
        </SfTab>
      </SfTabs>
      <SfTabs v-else key="address-list" :open-tab="1" class="tab-orphan">
        <SfTab :title="tabsTitles[1]">
          <slot name="shipping-tab-description">
            <p class="message">
              {{ shipingTabDescription }}
            </p>
          </slot>
          <transition-group tag="div" :name="transition" class="shipping-list">
            <slot name="shipping-list">
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
                    {{ shippingButtonsTexts[0] }}
                  </SfButton>
                  <SfButton
                    class="shipping__button-delete desktop-only"
                    data-testid="delete-address"
                    @click="deleteAddress(key)"
                  >
                    {{ shippingButtonsTexts[1] }}
                  </SfButton>
                </div>
              </div>
            </slot>
          </transition-group>
          <SfButton
            class="action-button"
            data-testid="add-new-address"
            @click="changeAddress(-1)"
          >
            {{ shippingButtonsTexts[2] }}</SfButton
          >
        </SfTab>
      </SfTabs>
    </transition>
  </div>
</template>
<script>
import {
  SfTabs,
  SfInput,
  SfButton,
  SfComponentSelect,
  SfIcon,
} from "@storefront-ui/vue";
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
    tabsTitles: {
      type: Array,
      default: () => ["Change the address", "Shipping details"],
    },
    account: {
      type: Object,
      default: () => ({}),
    },
    transition: {
      type: String,
      default: "sf-fade",
    },
    changeAddressDescription: {
      type: String,
      default: "",
    },
    changeAddressButtonText: {
      type: String,
      default: "Update the address",
    },
    inputsLabels: {
      type: Array,
      default: () => [
        "First Name",
        "Last Name",
        "Street Name",
        "House/Apartment number",
        "City",
        "State/Province",
        "Zip-Code",
        "Phone number",
      ],
    },
    selectLabel: {
      type: String,
      default: "Country",
    },
    shipingTabDescription: {
      type: String,
      default: "",
    },
    shippingButtonsTexts: {
      type: Array,
      default: () => ["Change", "Delete", "Add new address"],
    },
    countries: {
      type: Array,
      default: () => [],
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
    };
  },
  methods: {
    changeAddress(index) {
      const account = this.account;
      const shipping = account.shipping[index];
      if (index > -1) {
        this.firstName = account.firstName;
        this.lastName = account.lastName;
        this.streetName = shipping.streetName;
        this.apartment = shipping.apartment;
        this.city = shipping.city;
        this.state = shipping.state;
        this.zipCode = shipping.zipCode;
        this.country = shipping.country;
        this.phoneNumber = shipping.phoneNumber;
        this.editedAddress = index;
      }
      this.editAddress = true;
    },
    updateAddress() {
      const account = { ...this.account };
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
      };
      const index = this.editedAddress;
      if (index > -1) {
        account.shipping[index] = shipping;
        this.editedAddress = -1;
      } else {
        account.shipping.push(shipping);
      }
      this.editAddress = false;
      this.$emit("update:shipping", account);
    },
    deleteAddress(index) {
      const account = { ...this.account };
      account.shipping.splice(index, 1);
      this.$emit("update:shipping", account);
    },
  },
};
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
