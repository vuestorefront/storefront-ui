<template>
  <div id="form-template">
    <form class="form">
      <SfInput
        v-model="firstName"
        label="First name"
        name="firstName"
        class="form__element form__element--half"
        required
        :valid="firstNameBlur || validFirstName(firstName)"
        error-message="Please type your name"
        @blur="firstNameBlur = false"
      />
      <SfInput
        v-model="lastName"
        label="Last name"
        name="lastName"
        class="form__element form__element--half form__element--half-even"
        required
        :valid="lastNameBlur || validLastName(lastName)"
        error-message="Please type your last name. Your name should have at least one character."
        @blur="lastNameBlur = false"
      />
      <SfInput
        v-model="streetName"
        label="Street name"
        name="streetName"
        class="form__element form__element--half"
        required
        :valid="streetNameBlur || validStreetName(streetName)"
        error-message="Please type your street name"
        @blur="streetNameBlur = false"
      />
      <SfInput
        v-model="apartment"
        label="House/Apartment number"
        type="number"
        name="apartment"
        class="form__element form__element--half form__element--half-even"
        required
        :valid="apartmentBlur || validApartment(apartment)"
        error-message="Please type your apartment/house number."
        @blur="apartmentBlur = false"
      />
      <SfInput
        v-model="city"
        label="City"
        name="city"
        class="form__element"
        required
        :valid="cityBlur || validCity(city)"
        error-message="Please type your city."
        @blur="cityBlur = false"
      />
      <SfInput
        v-model="zipCode"
        label="Zip-code"
        name="zipCode"
        type="number"
        class="form__element form__element--half"
        required
        :valid="zipCodeBlur || validZipCode(zipCode)"
        error-message="Please type your zip code. Zipcode should have only numbers."
        @blur="zipCodeBlur = false"
      />
      <SfComponentSelect
        v-model="country"
        label="Country"
        class="
          form__element
          form__element--half
          form__element--half-even
          form__select
          sf-component-select--underlined
        "
        required
        :valid="countryBlur || validCountry(country)"
        error-message="Please choose your country."
        @blur="countryBlur = false"
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
        label="Phone number"
        name="phone"
        type="number"
        class="form__element form__element--half"
        required
        :valid="phoneNumberBlur || validPhoneNumber(phoneNumber)"
        error-message="Please type your phone number."
        @blur="phoneNumberBlur = false"
      />
      <SfInput
        v-model="email"
        label="Email"
        name="email"
        class="form__element form__element--half form__element--half-even"
        required
        :valid="emailBlur || validEmail(email)"
        error-message="Please enter a valid email address."
        @blur="emailBlur = false"
      />
      <SfHeading title="Prices" :level="5" />
      <SfRange
        v-model="range"
        class="form__element--range"
        :config="rangeConfig"
      />
      <SfTextarea
        v-model="message"
        class="form__element"
        label="Message"
        name="message"
        cols="80"
        rows="25"
        maxlength="400"
        minlength="10"
        wrap="soft"
        :readonly="true"
        placeholder="type a message"
        required
        :valid="messageBlur || validMessage(message)"
        error-message="Please type minimum 10 characters and maximum 400."
        @blur="messageBlur = false"
      >
      </SfTextarea>
      <div class="form__action">
        <SfButton type="submit" @click.prevent="submit">Submit</SfButton>
        <SfButton
          class="
            sf-button--text
            form__action-button form__action-button--secondary
          "
          @click="reset"
          >Reset</SfButton
        >
      </div>
    </form>
  </div>
</template>
<script>
import {
  SfInput,
  SfComponentSelect,
  SfButton,
  SfTextarea,
  SfHeading,
  SfRange,
} from "@storefront-ui/vue";
export default {
  name: "Default",
  components: {
    SfButton,
    SfInput,
    SfComponentSelect,
    SfTextarea,
    SfHeading,
    SfRange,
  },
  data() {
    return {
      valid: false,
      submitted: false,
      firstName: "",
      firstNameBlur: true,
      lastName: "",
      lastNameBlur: true,
      streetName: "",
      streetNameBlur: true,
      apartment: "",
      apartmentBlur: true,
      city: "",
      cityBlur: true,
      state: "",
      stateBlur: true,
      zipCode: "",
      zipCodeBlur: true,
      country: "",
      countryBlur: true,
      phoneNumber: "",
      phoneNumberBlur: true,
      email: "",
      emailBlur: true,
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
      message: "",
      messageBlur: true,
      range: [0, 1],
      rangeConfig: {
        start: [0, 1],
        range: {
          min: 0,
          max: 10,
        },
        step: 1,
        connect: true,
        direction: "ltr",
        orientation: "horizontal",
        behaviour: "tap-drag",
        tooltips: true,
        keyboardSupport: true,
        format: {
          to: function (range) {
            return new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(range);
          },
          from: function (range) {
            const parsedValue = new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).formatToParts(range);
            return parsedValue[0].value;
          },
        },
      },
    };
  },
  methods: {
    validate() {
      this.firstNameBlur = false;
      this.lastNameBlur = false;
      this.streetNameBlur = false;
      this.apartmentBlur = false;
      this.cityBlur = false;
      this.zipCodeBlur = false;
      this.countryBlur = false;
      this.phoneNumberBlur = false;
      this.emailBlur = false;
      this.messageBlur = false;
      if (
        this.validEmail(this.email) &&
        this.validPhoneNumber(this.phoneNumber) &&
        this.validFirstName(this.firstName) &&
        this.validLastName(this.lastName) &&
        this.validStreetName(this.streetName) &&
        this.validApartment(this.apartment) &&
        this.validCity(this.city) &&
        this.validZipCode(this.zipCode) &&
        this.validCountry(this.country) &&
        this.validMessage(this.message)
      ) {
        this.valid = true;
      }
    },
    validFirstName(firstName) {
      return firstName.length > 2;
    },
    validLastName(lastName) {
      return lastName.length > 2;
    },
    validStreetName(streetName) {
      return streetName.length > 2;
    },
    validApartment(apartment) {
      const regex = /^[0-9]/;
      return regex.test(apartment);
    },
    validCity(city) {
      return !!city && city.length > 2;
    },
    validZipCode(zipCode) {
      const regex = /^[0-9]/;
      return regex.test(zipCode);
    },
    validCountry(country) {
      return !!country;
    },
    validPhoneNumber(phone) {
      const regex = /^[0-9]{9}$/;
      return regex.test(phone);
    },
    validEmail(email) {
      const regex = /(.+)@(.+){2,}\.(.+){2,}/;
      return regex.test(email.toLowerCase());
    },
    validMessage(message) {
      return !!message && message.length > 10 && message.length <= 400;
    },
    submit() {
      this.validate();
      if (this.valid) {
        this.submitted = true;
      }
    },
    reset() {
      this.email = "";
      this.phoneNumber = "";
      this.zipCode = "";
      this.country = "";
      this.streetName = "";
      this.city = "";
      this.lastName = "";
      this.firstName = "";
      this.apartment = "";
      this.message = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#form-template {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 870px;
    margin: 0 auto;
  }
}
.form {
  padding: var(--spacer-sm) 0;
  &__group {
    display: flex;
    align-items: flex-start;
  }
  &__action-button {
    &:first-child {
      margin: var(--spacer-sm) 0 0 0;
    }
    &--secondary {
      margin: var(--spacer-sm) 0 var(--spacer-sm) var(--spacer-base);
    }
  }
  &__button {
    --button-width: 100%;
  }
  @include for-mobile {
    #message {
      padding: var(--spacer-sm);
      box-sizing: border-box;
      margin: 1rem 0 1rem 0;
      width: 100%;
    }
    &__element--range {
      margin: var(--spacer-sm) 0 var(--spacer-2xl);
    }
    .sf-button {
      --button-width: auto;
      margin-top: var(--spacer-xs);
    }
  }
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
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
      &--range {
        margin: var(--spacer-xl) var(--spacer-base) var(--spacer-2xl);
      }
    }
    &__action {
      flex: 0 0 100%;
      display: flex;
    }
    &__button {
      --button-width: auto;
    }
  }
}
</style>

<include-source />
