<template>
  <SfTabs v-if="true" :open-tab="1">
    <SfTab title="Shipping details">
      <p class="message">
        Manage all the shipping addresses you want (work place, home address
        ...) This way you won't have to enter the shipping address manually with
        each order.
      </p>
      <div class="shipping-list">
        <div class="shipping">
          <div>
            <p>
              Sviatlana Havaka<br />
              Zielinskiego 30 – 41,<br />53-345 Wroclaw,<br />Poland
            </p>
            <p>sviatlana.example@gmail.com<br />(00) 468 900 300</p>
          </div>
          <div>
            <SfButton>Change</SfButton>
            <SfButton>Delete</SfButton>
          </div>
        </div>
      </div>
      <SfButton>Add new address</SfButton>
    </SfTab>
  </SfTabs>
  <SfTabs v-else :open-tab="1">
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
        <SfButton>Update the address</SfButton>
      </div>
    </SfTab>
  </SfTabs>
</template>
<script>
import { SfTabs, SfInput, SfButton, SfSelect } from "../../../../../index.js";
export default {
  name: "ShippingDetails",
  components: {
    SfTabs,
    SfInput,
    SfButton,
    SfSelect
  },
  data() {
    return {
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
}
</style>
