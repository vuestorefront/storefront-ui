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
          <SfTabs :open-tab="1">
            <SfTab title="Personal data">
              <p class="message">
                Feel free to edit any of your details below so your account is
                always up to date
              </p>
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
                <SfButton class="form__button">Update personal data</SfButton>
              </div>
              <p class="notice">
                At Brand name, we attach great importance to privacy issues and
                are committed to protecting the personal data of our users.
                Learn more about how we care and use your personal data in the
                <a href="">Privacy Policy.</a>
              </p>
            </SfTab>
            <SfTab title="Password change">
              <p class="message">
                If you want to change the password to access your account, enter
                the following information:<br />Your current email address is
                example@email.com
              </p>
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
                <SfButton class="form__button">Update password</SfButton>
              </div>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Shipping details">
          <SfTabs v-if="false" :open-tab="1">
            <SfTab title="Shipping details">
              <p class="message">
                Manage all the shipping addresses you want (work place, home
                address ...) This way you won't have to enter the shipping
                address manually with each order.
              </p>
              <div class="shipping-list">
                <div class="shipping">
                  <div class="shipping__address">
                    <div class="shipping__address-name">Sviatlana Havaka</div>
                    <p class="shipping__address-street">
                      Zielinskiego 30 – 41,<br />53-345 Wroclaw,<br />Poland
                    </p>
                    <p class="shipping__address-contact">
                      sviatlana.example@gmail.com<br />(00) 468 900 300
                    </p>
                  </div>
                  <div class="shipping__actions">
                    <SfButton class="shipping__action">Change</SfButton>
                    <SfButton class="shipping__action color-muted"
                      >Delete</SfButton
                    >
                  </div>
                </div>
              </div>
              <SfButton class="address-button">Add new address</SfButton>
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
                <SfSelect
                  v-model="country"
                  name="country"
                  label="Country"
                  required
                  class="sf-select--underlined form__input form__input--half form__select"
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
                  class="form__input"
                />
                <SfButton class="form__button">Update the address</SfButton>
              </div>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Loyalty Card">
          <SfTabs :open-tab="1">
            <SfTab title="Loyalty Card">
              <p class="message">
                This feature is not implemented yet! Please take a look at<br />
                <a href="#"
                  >https://github.com/DivanteLtd/vue-storefront/issues for
                  ourRoadmap!</a
                >
              </p>
            </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My newsletter">
          <SfTabs :open-tab="1">
            <SfTab title="My newsletter">
              <p class="message">
                Set up your newsletter and we will send you information about
                new products and trends from the sections you selected every
                week.
              </p>
              <div class="form">
                <p class="form__title">Sections that interest you</p>
                <SfCheckbox
                  v-model="newsletter"
                  label="Woman"
                  value="woman"
                  class="form__input form__checkbox"
                />
                <SfCheckbox
                  v-model="newsletter"
                  label="Man"
                  value="man"
                  class="form__input form__checkbox"
                />
                <SfCheckbox
                  v-model="newsletter"
                  label="Children"
                  value="children"
                  class="form__input form__checkbox"
                />
                <SfButton class="form__button">Join Newsletter</SfButton>
              </div>
              <p class="notice">
                I have read and understand the Privacy and Cookies Policy and
                agree to receive personalized commercial information from Brand
                name by email.
              </p>
            </SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentCategory title="Order details">
        <SfContentPage title="Order history">
          <SfTabs :open-tab="1">
            <SfTab title="My orders">
              <p class="message">
                Check the details and status of your orders in the online store.
                You can also cancel your order or request a return.
              </p>
              <div v-if="false" class="orders">
                <p class="orders__title">You currently have no orders</p>
                <p class="orders__message">Best get shopping pronto...</p>
                <SfButton class="orders__button">Start shopping</SfButton>
              </div>
              <SfTable v-else class="orders">
                <SfTableRow>
                  <SfTableHeader
                    v-for="tableHeader in tableHeaders"
                    :key="tableHeader"
                    >{{ tableHeader }}</SfTableHeader
                  >
                  <SfTableHeader>
                    <SfButton class="button-download-all">Download all</SfButton>
                  </SfTableHeader>
                </SfTableRow>
                <SfTableRow v-for="order in orders" :key="order['Order ID']">
                  <SfTableData
                    v-for="data in Object.keys(order)"
                    :key="order[data]"
                  >
                    <template v-if="data === 'Status'">
                      <span
                        :class="{
                          'text-success': order[data] === 'Finalised',
                          'text-warning': order[data] === 'In process'
                        }"
                        >{{ order[data] }}</span
                      >
                    </template>
                    <template v-else>{{ order[data] }}</template>
                  </SfTableData>
                  <SfTableData>VIEW</SfTableData>
                </SfTableRow>
              </SfTable>
              <!-- <SfTable></SfTable> -->
            </SfTab>
            <SfTab title="Returns" />
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My reviews">
          <SfTabs :open-tab="1">
            <SfTab title="My reviews">
              <p class="message">
                This feature is not implemented yet! Please take a look at<br />
                <a href="#"
                  >https://github.com/DivanteLtd/vue-storefront/issues</a
                >
                for our Roadmap!
              </p>
            </SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentPage title="Log out" />
    </SfContentPages>
  </div>
</template>
<script>
import {
  SfBreadcrumbs,
  SfContentPages,
  SfTabs,
  SfInput,
  SfButton,
  SfSelect,
  SfCheckbox,
  SfTable
} from "../../../../index.js";
export default {
  name: "MyAccount",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    SfTabs,
    SfInput,
    SfButton,
    SfSelect,
    SfCheckbox,
    SfTable
  },
  data() {
    return {
      activePage: "Order history",
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
      newsletter: [],
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
      ],
      orders: [
        {
          "Order ID": "#35765",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Visa card",
          Amount: "$12.00",
          Status: "In process"
        },
        {
          "Order ID": "#35766",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Paypal",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35767",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Visa card",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35768",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Mastercard",
          Amount: "$12.00",
          Status: "Finalised"
        },
        {
          "Order ID": "#35769",
          "Payment date": "4th Nov, 2019",
          "Payment method": "Paypal",
          Amount: "$12.00",
          Status: "Finalised"
        }
      ]
    };
  },
  computed: {
    tableHeaders() {
      return Object.keys(this.orders[0]);
    }
  },
  methods: {
    changeActivePage(title) {
      if (title === "Log out") {
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
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
.breadcrumbs {
  padding: $spacer-big $spacer-extra-big $spacer-extra-big;
}
.content {
  flex: 1;
}
.sf-tabs {
  ::v-deep &__content {
    padding: $spacer-big 0;
  }
}
.form {
  @include for-desktop {
    display: flex;
    flex-wrap: wrap;
  }
  &__input {
    margin-bottom: $spacer-extra-big;
    @include for-desktop {
      flex: 0 0 100%;
    }
    &--half {
      @include for-desktop {
        flex: 0 0 50%;
        & + &:not(:nth-child(odd)) {
          padding-left: 3.75rem;
        }
      }
    }
  }
  &__select {
    // todo: [bug] fix padding to adjust to rest form elements
    ::v-deep .sf-select__selected {
      padding: 5px 0;
    }
  }
  &__checkbox {
    margin-bottom: $spacer-big;
  }
  &__button {
    margin-top: $spacer-big;
  }
  &__title {
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-desktop;
    font-weight: 500;
    line-height: 1.6;
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
}
.shipping {
  display: flex;
  align-items: center;
  border-top: 1px solid $c-light;
  padding: $spacer-big 0;
  &:last-child {
    border-bottom: 1px solid $c-light;
  }
  &__address,
  &__actions {
    flex: 1;
  }
  &__address {
    font-size: $font-size-extra-small-desktop;
    line-height: 1.6;
  }
  &__address-name {
    font-size: $font-size-regular-desktop;
  }
  &__address-street,
  &__address-contact {
    margin: 0;
  }
  &__address-contact {
    margin-top: $spacer-big;
  }
  &__actions {
    display: flex;
    justify-content: flex-end;
  }
  &__action:not(first-child) {
    margin-left: $spacer;
  }
}
.address-button {
  margin-top: 3.75rem;
}
.color-muted {
  color: #a3a5ad;
  background-color: #f1f2f3;
}
.orders {
  &__title {
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-desktop;
    font-weight: 500;
    line-height: 1.6;
  }
  &__message {
    font-family: $body-font-family-primary;
    font-size: $font-size-regular-desktop;
    font-weight: $body-font-weight-primary;
    line-height: 1.6;
  }
  &__button {
    margin-top: $spacer-big;
  }
}
.button-download-all{
  &.sf-button{
    padding: 10px 1.25rem;
    font-size: 0.75rem;
  }
}
</style>
