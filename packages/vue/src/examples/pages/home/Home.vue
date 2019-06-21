<template>
  <div id="home">
    <!-- SfHero -->
    <SfBanner
      title="ECO SANDALS"
      subtitle="Summer shoes"
      description="The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
      button-text="SHOP NOW"
      :image="bannerA"
      class="banner"
    />
    <SfBanner
      title="COCKTAIL & PARTY "
      subtitle="Scarves"
      description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
      button-text="SHOP NOW"
      :image="bannerB"
      class="sf-banner--left banner"
    />
    <SfBanner
      title="THE OFFICE LIFE"
      subtitle="T-Shirts"
      description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
      button-text="SHOP NOW"
      :image="bannerC"
      class="banner"
    />
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="SUBSCRIBE"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="callToAction"
    />
    <SfSection
      :heading="{
        title: 'Best Sellers'
      }"
      class="section"
    >
      <SfCarousel :options="{ gap: 0 }">
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
      class="section"
    >
      <!-- SfTiles -->
      <img
        :src="placeholderA"
        alt="placeholderA"
        style="display: block; margin: auto; max-width: 100%; height: auto"
      />
    </SfSection>
    <SfBanner
      subtitle="Fashion to Take Away"
      :image="bannerD"
      class="sf-banner--left banner banner--download desktop-only"
    >
      <template v-slot:title>
        <h1>Download our application to your mobile</h1>
      </template>
      <template v-slot:call-to-action>
        <div class="download">
          <img class="download__button" :src="google" alt="" />
          <img class="download__button" :src="apple" alt="" />
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

import placeholderA from "./assets/placeholderA.png";

import google from "./assets/google.png";
import apple from "./assets/apple.png";

export default {
  name: "Home",
  data() {
    return {
      bannerA,
      bannerB,
      bannerC,
      bannerD,
      productA,
      productB,
      productC,
      placeholderA,
      google,
      apple
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
@import "../../../css/variables";
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}

/*reset default styles*/
.sf-section {
  padding: 0;
  &__content {
    margin: $spacer-extra-big 0;
    @media screen and (min-width: $desktop-min) {
      margin: $spacer-extra-big * 2 0;
    }
  }
}
.sf-carousel {
  margin: 20px 0;
  &__wrapper {
    padding: 20px;
  }
}
</style>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefrontui/shared/styles/helpers/visibility";

#home {
  box-sizing: border-box;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}
.banner {
  margin: $spacer-big 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
  }
  &--download {
    margin-bottom: 0;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 128%;
  }
}
.callToAction {
  margin: $spacer-extra-big 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big * 2 0;
  }
}
.section {
  margin: $spacer-extra-big 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big * 4 0;
  }
}
.download {
  &__button {
    &:not(:first-child) {
      margin-left: $spacer-big;
    }
  }
}

.sf-product-card {
  &:hover {
    box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
  }
}
</style>
