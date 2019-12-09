<template>
  <div>
    <SfHeader></SfHeader>
    <Home />
    <SfFooter>
      <SfFooterColumn title="About us">
        <SfList>
          <SfListItem v-for="item in aboutUs" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Departments">
        <SfList>
          <SfListItem v-for="item in departments" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Help">
        <SfList>
          <SfListItem v-for="item in help" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Payment & delivery">
        <SfList>
          <SfListItem v-for="item in paymentsDelivery" :key="item">
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>

<script>
import { SfHeader, SfFooter, SfList, SfMenuItem } from "../../../../index.js";
import Home from "../home/Home.vue";
export default {
  name: "Layout",
  components: { SfHeader, SfFooter, SfList, SfMenuItem, Home },
  data() {
    return {
      aboutUs: ["Who we are", "Quality in the details", "Customer Reviews"],
      departments: ["Women fashion", "Men fashion", "Kidswear", "Home"],
      help: ["Customer service", "Size guide", "Contact us"],
      paymentsDelivery: ["Purchase terms", "Guarantee"]
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
</style>
