<template>
  <div>
    <SfHeader
      :isSticky="true"
      @click:cart="isCartSidebarOpen = true"
      logo="/assets/logo.svg"
    >
      <template #navigation class="sf-header__navigation">
        <SfHeaderNavigationItem>
          <nuxt-link
            :to="'/'"
            :style="{ display: 'flex', alignItems: 'center', height: '100%' }"
          >
            Home
          </nuxt-link>
        </SfHeaderNavigationItem>
        <SfHeaderNavigationItem v-for="example in examples" :key="example">
          <nuxt-link
            :to="'/' + example"
            :style="{ display: 'flex', alignItems: 'center', height: '100%' }"
          >
            {{ example }}
          </nuxt-link>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <nuxt />
    <SfFooter :column="column" :multiple="multiple">
      <SfFooterColumn
        v-for="column in columns"
        :key="column.title"
        :title="column.title"
        :style="{ marginLeft: column.title && 'auto' }"
      >
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
        <div v-else :style="{ display: 'flex', ...itemSpacer }">
          <SfImage
            v-for="picture in column.pictures"
            :key="picture"
            width="12"
            height="12"
            :src="'/assets/storybook/SfFooter/' + picture + '.svg'"
            :style="{ margin: '0 1.25rem 0 0' }"
          />
        </div>
      </SfFooterColumn>
    </SfFooter>
    <Cart v-if="isCartSidebarOpen" @close="isCartSidebarOpen = false" />
  </div>
</template>
<script>
import {
  SfHeader,
  SfFooter,
  SfList,
  SfMenuItem,
  SfImage,
} from "@storefront-ui/vue";
import Cart from "../../vue/src/examples/pages/cart/Cart";

export default {
  name: "default",
  components: {
    SfHeader,
    SfFooter,
    Cart,
    SfList,
    SfMenuItem,
    SfImage,
  },
  computed: {
    itemSpacer() {
      return this.isMobile ? { padding: "1.25rem" } : { padding: "6px 0" };
    },
  },
  data() {
    return {
      isCartSidebarOpen: false,
      column: 4,
      multiple: true,
      columns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"],
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"],
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"],
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"],
        },
        {
          title: "Social",
          pictures: ["facebook", "pinterest", "twitter", "youtube"],
        },
      ],
      examples: [
        "Category",
        "Checkout",
        "Error",
        "Login",
        "MyAccount",
        "Product",
        "Static",
        "ThankYou",
        "Storybook",
      ],
    };
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/vue/styles.scss";
html,
body {
  margin: 0;
}
.sf-header__container {
  --header-container-max-width: 1500px;
}
.sf-header__navigation {
  margin: 0 2rem;
  --header-navigation-item-font-size: var(--font-size-extra-small);
}
</style>
