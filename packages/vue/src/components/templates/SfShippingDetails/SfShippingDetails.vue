<template>
  <div class="sf-shipping-details">
    <transition :name="transition">
      <SfTabs
        v-if="editAddress"
        key="edit-address"
        :open-tab="1"
        class="tab-orphan"
        :data-testid="dataTestDisplay('shipping-details-tabs')"
      >
        <SfTab :title="changeAddressTabTitle">
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
                class="form__element form__element--half form__element--half-even"
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
                class="form__element form__element--half form__element--half-even"
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
                class="sf-component-select--underlined form__select form__element form__element--half form__element--half-even"
                :data-testid="dataTestDisplay('country')"
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
                :label="inputsLabels[7]"
                required
                class="form__element"
              />
              <SfButton
                v-if="updateAddressButtonText"
                class="action-button"
                :data-testid="dataTestDisplay('update-address-button')"
                @click="updateAddress"
              >
                {{ updateAddressButtonText }}</SfButton
              >
              <SfButton
                v-if="cancelButtonText"
                class="action-button color-secondary cancel-button"
                :data-testid="dataTestDisplay('update-address-button')"
                @click="cancelEditing"
              >
                {{ cancelButtonText }}</SfButton
              >
            </slot>
          </div>
        </SfTab>
      </SfTabs>
      <SfTabs v-else key="address-list" :open-tab="1" class="tab-orphan">
        <SfTab :title="shippingTabTitle">
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
                :data-testid="dataTestDisplay('shipping-address-list-item')"
              >
                <div class="shipping__content">
                  <slot name="shipping-details">
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
                  </slot>
                </div>
                <div class="shipping__actions">
                  <SfButton class="sf-button--pure" @click="deleteAddress(key)">
                    <SfIcon
                      icon="cross"
                      color="gray"
                      size="14px"
                      class="smartphone-only"
                    />
                  </SfButton>
                  <SfButton
                    v-if="changeButtonText"
                    :data-testid="dataTestDisplay('change-address')"
                    @click="changeAddress(key)"
                  >
                    {{ changeButtonText }}
                  </SfButton>
                  <SfButton
                    v-if="deleteButtonText"
                    class="shipping__button-delete desktop-only"
                    :data-testid="dataTestDisplay('delete-address')"
                    @click="deleteAddress(key)"
                  >
                    {{ deleteButtonText }}
                  </SfButton>
                </div>
              </div>
            </slot>
          </transition-group>
          <SfButton
            v-if="addNewAddressButtonText"
            class="action-button"
            :data-testid="dataTestDisplay('add-new-address')"
            @click="changeAddress(-1)"
          >
            {{ addNewAddressButtonText }}</SfButton
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
import { dataTestDisplay } from "../../../utilities/helpers";

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
    shippingTabTitle: {
      type: String,
      default: "Shipping details",
    },
    changeAddressTabTitle: {
      type: String,
      default: "Change the address",
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
    changeButtonText: {
      type: String,
      default: "Change",
    },
    deleteButtonText: {
      type: String,
      default: "Delete",
    },
    addNewAddressButtonText: {
      type: String,
      default: "Add new address",
    },
    updateAddressButtonText: {
      type: String,
      default: "Update the address",
    },
    cancelButtonText: {
      type: String,
      default: "Cancel",
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
      this.$emit("change-address", index);
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
    cancelEditing() {
      const account = this.account;
      this.editAddress = false;
      this.$emit("cancel-editing", account);
    },
    deleteAddress(index) {
      const account = { ...this.account };
      account.shipping.splice(index, 1);
      this.$emit("delete-address", index);
    },
    dataTestDisplay,
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/components/templates/SfShippingDetails.scss";
</style>
