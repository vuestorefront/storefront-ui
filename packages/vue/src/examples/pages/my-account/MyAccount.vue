<template>
  <div id="my-account">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <SfContentPages
      title="My Account"
      :active="activePage"
      @click:change="changeActivePage"
    >
      <SfContentCategory title="Personal Details">
        <SfContentPage title="My profile">
          <SfTabs :open-tab="2">
            <SfTab title="Personal data">
              <p>Feel free to edit any of your details below so your account is always up to date</p>
              <div class="form">
                <SfInput
                  v-model="firstName"
                  name="firstName"
                  label="First Name"
                  required
                  class="form__input form__input--half"
                />
                <SfInput
                  v-model="lastName"
                  name="lastName"
                  label="Last Name"
                  required
                  class="form__input form__input--half"
                />
                <SfInput
                  v-model="email"
                  type="email"
                  name="email"
                  label="Your e-mail"
                  required
                  class="form__input"
                />
                <SfButton>Update personal data</SfButton>
              </div>
              <p>At Brand name, we attach great importance to privacy issues and are committed to protecting the personal data of our users. Learn more about how we care and use your personal data in the <a href="">Privacy Policy.</a>a</p>
            </SfTab>
            <SfTab title="Password change">
              <p>If you want to change the password to access your account, enter the following information:</p>
              <p>Your current email address is example@email.com</p>
              <div class="form">
                <SfInput
                  v-model="currentPassword"
                  type="password"
                  name="currentPassword"
                  label="Current Password"
                  required
                  class="form__input"
                />
                <SfInput
                  v-model="firstName"
                  type="password"
                  name="newPassword"
                  label="New Password"
                  required
                  class="form__input form__input--half"
                />
                <SfInput
                  v-model="repeatPassword"
                  type="password"
                  name="repeatPassword"
                  label="Repeat Password"
                  required
                  class="form__input form__input--half"
                />
                <SfButton>Update password</SfButton>
              </div>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Shipping details">
          <SfTabs
            v-if="true"
            :open-tab="1"
          >
            <SfTab title="Shipping details">
              <div class="form">
                <SfInput
                  v-model="firstName"
                  name="firstName"
                  label="First Name"
                  required
                  class="form__input form__input--half"
                />
                <SfInput
                  v-model="lastName"
                  name="lastName"
                  label="Last Name"
                  required
                  class="form__input form__input--half"
                />
                <SfInput
                    v-model="streetName"
                    type="password"
                    name="currentPassword"
                    label="Current Password"
                    required
                    class="form__input"
                />
                <SfInput
                    v-model="apartment"
                    name="apartment"
                    label="House/Apartment number"
                    required
                    class="form__input"
                />
                <SfInput
                    v-model="city"
                    name="city"
                    label="City"
                    required
                    class="form__input form__input--half"
                />
                <SfInput
                    v-model="state"
                    name="state"
                    label="State/Province"
                    required
                    class="form__input form__input--half"
                />
                <SfInput
                    v-model="zipCode"
                    name="zipCode"
                    label="Zip-code"
                    required
                    class="form__input form__input--half"
                />
                <SfSelect v-model="country" name="country" label="Country" required class="sf-select--underlined form__input form__input--half form__select">
                  <SfSelectOption value="poland">Poland</SfSelectOption>
                  <SfSelectOption value="england">England</SfSelectOption>
                </SfSelect>
                <SfInput
                    v-model="phone"
                    name="phone"
                    label="Phone number"
                    required
                    class="form__input"
                />
                <SfButton>Update the address</SfButton>
              </div>
            </SfTab>
          </SfTabs>
          <SfTabs
            v-else
            :open-tab="1"
          >
            <SfTab title="Change the address">
              Change the address
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Loyalty Card">
          <SfTabs :open-tab="1">
            <SfTab title="Loyalty Card">
              <p>This feature is not implemented yet! Please take a look at <a href="#">https://github.com/DivanteLtd/vue-storefront/issues for our Roadmap!</a></p>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My newsletter">
          <SfTabs :open-tab="1">
            <SfTab title="My newsletter">
              My newsletter
            </SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentCategory title="Order details">
        <SfContentPage title="Order history">
          <SfTabs :open-tab="1">
            <SfTab title="My orders">
              <!-- <SfTable></SfTable> -->>
            </SfTab>
            <SfTab title="Returns">
              <!-- <SfTable></SfTable> -->>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My reviews">
          <SfTabs :open-tab="1">
            <SfTab title="My reviews">
              My reviews
            </SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentPage title="Log out" />
    </SfContentPages>
  </div>
</template>
<script>
import { SfBreadcrumbs, SfContentPages, SfTabs, SfInput, SfButton, SfSelect } from "../../../../index.js";
export default {
  name: "MyAccount",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    SfTabs,
    SfInput,
    SfButton,
    SfSelect
  },
  data() {
    return {
      activePage: "Shipping details",
      firstName: "",
      lastName: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
      streetName: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "My Account",
          route: {
            link: "#"
          }
        }
      ]
    };
  },
  methods: {
    changeActivePage(title){
      if(title === "Log out"){
        alert("You are logged out!");
        return;
      }
      this.activePage = title;
    }
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

#my-account {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.breadcrumbs {
  padding: $spacer-big $spacer-extra-big $spacer-extra-big;
}
.form {
  display: flex;
  flex-wrap: wrap;
  &__input{
    margin-bottom: $spacer-extra-big;
    flex: 0 0 100%;
    &--half{
      flex: 0 0 50%;
      & + &:not(:nth-child(odd)) {
        padding-left: 3.75rem;
      }
    }
  }
  &__select{
    // todo: [bug] fix padding to adjust to rest form elements
    ::v-deep .sf-select__selected{
      padding: 5px 0;
    }
  }
}
</style>
