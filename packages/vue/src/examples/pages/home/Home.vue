<template>
  <div id="home">
    <!-- SfHero -->
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
      <SfCarousel>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productC"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productC"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <SfSection
      :heading="{
        title: 'Share Your Look',
        subtitle: '#YOURLOOK'
      }"
    >
      <!-- SfTiles -->
    </SfSection>
    <SfBanner
      subtitle="Fashion to Take Away"
      :image="bannerD"
      class="sf-banner--left download-app"
    >
      <template v-slot:title>
        <h1>Download our application to your mobile</h1>
      </template>
      <template v-slot:call-to-action>
        <div>
          <img :src="google" alt="" />
          <img :src="apple" alt="" />
        </div>
      </template>
    </SfBanner>
  </div>
</template>

<script>
import SfBanner from "@/components/molecules/SfBanner/SfBanner.vue";
import SfCallToAction from "@/components/molecules/SfCallToAction/SfCallToAction.vue";
import SfSection from "@/components/molecules/SfSection/SfSection.vue";
import SfCarousel from "@/components/organisms/SfCarousel/SfCarousel.vue";
import SfProductCard from "@/components/molecules/SfProductCard/SfProductCard.vue";

//ASSETS
import bannerA from "./assets/bannerA.png";
import bannerB from "./assets/bannerB.png";
import bannerC from "./assets/bannerC.png";
import bannerD from "./assets/bannerD.png";

import productA from "./assets/productA.png";
import productB from "./assets/productB.png";
import productC from "./assets/productC.png";

import google from "./assets/google.png";
import apple from "./assets/apple.png";

export default {
  name: "Home",
  data() {
    return {
      bannerA: bannerA,
      bannerB: bannerB,
      bannerC: bannerC,
      bannerD: bannerD,
      productA: productA,
      productB: productB,
      productC: productC,
      google: google,
      apple: apple
    };
  },
  components: {
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard
  }
};
</script>
<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}
</style>
<style lang="scss" scoped>
.sf-section {
  padding: 0;
  &__content {
    margin-top: 0;
  }
}
</style>
