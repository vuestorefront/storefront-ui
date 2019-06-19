<template>
  <div id="home">
    <SfBanner
      title="ECO SANDALS"
      subtitle="Summer shoes"
      description="The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
      button-text="SHOP NOW"
      :image="bannerA"
    />
    <SfBanner
      title="COCKTAIL & PARTY "
      subtitle="Scarves"
      description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
      button-text="SHOP NOW"
      :image="bannerB"
      class="sf-banner--left"
    />
    <SfBanner
      title="THE OFFICE LIFE"
      subtitle="T-Shirts"
      description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
      button-text="SHOP NOW"
      :image="bannerC"
    />
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="SUBSCRIBE"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
    />
    <SfSection
      :heading="{
        title: 'Best Sellers'
      }"
    >
      ...
    </SfSection>
    <SfSection
      :heading="{
        title: 'Share Your Look',
        subtitle: '#YOURLOOK'
      }"
    >
      ...
    </SfSection>
    <SfBanner
      subtitle="Fashion to Take Away"
      button-text="SHOP NOW"
      :image="bannerA"
    ></SfBanner>
  </div>
</template>

<script>
import SfBanner from "@/components/molecules/SfBanner/SfBanner.vue";
import SfCallToAction from "@/components/molecules/SfCallToAction/SfCallToAction.vue";
import SfSection from "@/components/molecules/SfSection/SfSection.vue";

import bannerA from "./assets/bannerA.png";
import bannerB from "./assets/bannerB.png";
import bannerC from "./assets/bannerC.png";
import bannerD from "./assets/bannerD.png";

export default {
  name: "Home",
  data() {
    return {
      bannerA: bannerA,
      bannerB: bannerB,
      bannerC: bannerC,
      bannerD: bannerD,
    };
  },
  components: {
    SfBanner,
    SfCallToAction,
    SfSection
  }
};
</script>

<style lang="scss" scoped>
.sf-section {
  padding: 0;
  &__content {
    margin-top: 0;
  }
}
</style>
