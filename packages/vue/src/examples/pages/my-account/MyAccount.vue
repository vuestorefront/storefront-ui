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
            <SfTab title="Personal data">Personal data</SfTab>
            <SfTab title="Password change">Password change</SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Shipping details">
          <SfTabs v-if="true" :open-tab="1">
            <SfTab title="Shipping details">Shipping details</SfTab>
          </SfTabs>
          <SfTabs v-else :open-tab="1">
            <SfTab title="Change the address">Change the address</SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="Loyalty Card">
          <SfTabs :open-tab="1">
            <SfTab title="Loyalty Card">Loyalty Card</SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My newsletter">
          <SfTabs :open-tab="1">
            <SfTab title="My newsletter">My newsletter</SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentCategory title="Order details">
        <SfContentPage title="Order history">
          <SfTabs :open-tab="1">
            <SfTab title="My orders">My orders</SfTab>
            <SfTab title="Returns">Returns </SfTab>
          </SfTabs>
        </SfContentPage>
        <SfContentPage title="My reviews">
          <SfTabs :open-tab="1">
            <SfTab title="My reviews">My reviews</SfTab>
          </SfTabs>
        </SfContentPage>
      </SfContentCategory>
      <SfContentPage title="Log out" />
    </SfContentPages>
  </div>
</template>
<script>
import { SfBreadcrumbs, SfContentPages, SfTabs } from "../../../../index.js";
export default {
  name: "MyAccount",
  components: {
    SfBreadcrumbs,
    SfContentPages,
    SfTabs,
  },
  data() {
    return {
      activePage: "My profile",
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
</style>
