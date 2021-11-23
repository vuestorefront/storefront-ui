<template>
  <div id="default">
    <SfHeader :logo="shopLogo" :title="shopName" active-icon="account">
      <template #navigation>
        <SfHeaderNavigationItem
          v-for="(category, key) in shopRootCategories"
          :key="key"
          :link="`/${category}`"
          :label="category"
        />
      </template>
    </SfHeader>
    <Home />
    <SfFooter>
      <SfFooterColumn
        v-for="(column, key) in footerColumns"
        :key="key"
        :title="column.title"
      >
        <SfList>
          <SfListItem v-for="(menuItem, index) in column.items" :key="index">
            <SfMenuItem :label="menuItem" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>
<script>
import { SfHeader, SfFooter, SfList, SfMenuItem } from "@storefront-ui/vue";
import Home from "../../components/pages/home/Home.vue";
export default {
  name: "Default",
  components: {
    SfHeader,
    SfFooter,
    SfList,
    SfMenuItem,
    Home,
  },
  data() {
    return {
      shopLogo: "/assets/logo.svg",
      shopName: "Storefront UI",
      shopRootCategories: ["women", "man", "kids"],
      footerColumns: [
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
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#default {
}
</style>

<include-source />
