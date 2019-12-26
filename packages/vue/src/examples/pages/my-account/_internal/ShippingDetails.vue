<template>
  <SfTabs v-if="editAddress" :open-tab="1">
    <SfTab title="Change the address">
      <p class="message">
        Keep your addresses and contact details updated.
      </p>
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
        <SfSelect
          v-model="country"
          name="country"
          label="Country"
          required
          class="sf-select--underlined form__select form__element form__element--half form__element--half-even"
        >
          <SfSelectOption value="poland">
            Poland
          </SfSelectOption>
          <SfSelectOption value="england">
            England
          </SfSelectOption>
        </SfSelect>
        <SfInput
          v-model="phone"
          name="phone"
          label="Phone number"
          required
          class="form__element"
        />
        <SfButton class="form__button" @click="editAddress = false"
          >Update the address</SfButton
        >
      </div>
    </SfTab>
  </SfTabs>
  <SfTabs v-else :open-tab="1">
    <SfTab title="Shipping details">
      <p class="message">
        Manage all the shipping addresses you want (work place, home address
        ...) This way you won't have to enter the shipping address manually with
        each order.
      </p>
      <div class="shipping-list">
        <div class="shipping">
          <div class="shipping__content">
            <p class="shipping__address">
              <span class="shipping__address-label">Sviatlana Havaka</span
              ><br />
              Zielinskiego 30 – 41,<br />53-345 Wroclaw,<br />Poland
            </p>
            <p class="shipping__address">
              sviatlana.example@gmail.com<br />(00) 468 900 300
            </p>
          </div>
          <div class="shipping__actions">
            <SfIcon
              icon="cross"
              color="gray"
              size="14px"
              role="button"
              class="mobile-only"
            />
            <SfButton @click="editAddress = true">Change</SfButton>
            <SfButton class="shipping__button-delete desktop-only"
              >Delete</SfButton
            >
          </div>
        </div>
      </div>
      <SfButton class="action-button" @click="editAddress = true"
        >Add new address</SfButton
      >
    </SfTab>
  </SfTabs>
</template>
<script>
import {
  SfTabs,
  SfInput,
  SfButton,
  SfSelect,
  SfIcon
} from "../../../../../index.js";
export default {
  name: "ShippingDetails",
  components: {
    SfTabs,
    SfInput,
    SfButton,
    SfSelect,
    SfIcon
  },
  data() {
    return {
      editAddress: false,
      firstName: "",
      lastName: "",
      email: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: ""
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__element {
    margin-bottom: $spacer-extra-big;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 1 1 50%;
      }
      &-even {
        @include for-desktop {
          padding-left: $spacer-extra-big;
        }
      }
    }
  }
  &__select {
    ::v-deep .sf-select__selected {
      padding: 5px 0;
    }
  }
  &__button {
    width: 100%;
    @include for-desktop {
      width: auto;
    }
  }
}
.message,
.notice {
  font-family: $body-font-family-primary;
  font-weight: $body-font-weight-primary;
  line-height: 1.6;
}
.message {
  margin: 0 0 $spacer-extra-big 0;
  font-size: $font-size-regular-desktop;
}
.notice {
  max-width: 70%;
  margin: $spacer 0 0 0;
  font-size: $font-size-extra-small-desktop;
}
.shipping-list {
  margin-bottom: $spacer-extra-big;
}
.shipping {
  display: flex;
  padding: $spacer-big 0;
  border-top: 1px solid $c-light;
  &:last-child {
    border-bottom: 1px solid $c-light;
  }
  &__content {
    flex: 1;
    color: $c-text;
    font-size: $font-size-small-desktop;
    font-weight: 300;
    line-height: 1.6;
  }
  &__actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    @include for-desktop {
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
  }
  &__button-delete {
    background-color: $c-light;
    color: $c-text-muted;
    @include for-desktop {
      margin-left: $spacer-big;
    }
  }
  &__address {
    margin: 0 0 $spacer-big 0;
    &:last-child {
      margin: 0;
    }
    &-label {
      font-size: $font-size-regular-desktop;
      font-weight: 400;
    }
  }
}
.action-button {
  width: 100%;
  @include for-desktop {
    width: auto;
  }
}
</style>
