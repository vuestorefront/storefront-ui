<template>
  <div id="home">
    <!-- SfHero -->
    <div class="banners-grid">
      <div class="banners-grid__column banners-grid__column--small">
        <SfBanner
          title="COCKTAIL & PARTY "
          subtitle="Scarves"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
          button-text="SHOP NOW"
          :image="bannerF"
          class="sf-banner--left sf-banner--top"
        />
      </div>
      <div class="banners-grid__column banners-grid__column--medium">
        <SfBanner
          title="LINEN DRESSES"
          subtitle="Dresses"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
          button-text="SHOP NOW"
          :image="bannerE"
          class="sf-banner--left sf-banner--top sf-banner--small"
        />
      </div>
      <div class="banners-grid__column banners-grid__column--vertical-tiles banners-grid__column--small">
        <div>
          <SfBanner
            title="THE OFFICE LIFE"
            subtitle="T-Shirts"
            :image="bannerC"
            class="sf-banner--left sf-banner--full"
          />
        </div>
        <div>
          <SfBanner
            title="ECO SANDALS"
            subtitle="Summer shoes"
            :image="bannerG"
            class="sf-banner--left sf-banner--full"
          />
        </div>
      </div>
    </div>
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
      <SfCarousel :settings="{ gap: 0 }" class="carousel">
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productC"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productC"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productA"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            :image="productB"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
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
      <div class="images-grid">
        <div class="images-grid__tiles">
          <a href="">
            <SfImage :src="imageA">maria_trn</SfImage>
          </a>
        </div>
        <div class="images-grid__tiles">
          <a href="#">
            <SfImage :src="imageB">katherina_trn</SfImage>
          </a>
        </div>
      </div>
      <div class="images-grid">
        <div class="images-grid__tiles">
          <a href="#">
            <SfImage :src="imageC">angelina_trn</SfImage>
          </a>
        </div>
        <div class="images-grid__tiles">
          <a href="#">
            <SfImage :src="imageD">julia_trn</SfImage>
          </a>
        </div>
      </div>
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
          <img class="download__button" :src="google" alt="google play" />
          <img class="download__button" :src="apple" alt="app store" />
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
import SfImage from "@/components/molecules/SfImage/SfImage.vue";

//ASSETS
import bannerA from "./assets/bannerA.png";
import bannerB from "./assets/bannerB.png";
import bannerC from "./assets/bannerC.png";
import bannerD from "./assets/bannerD.png";
import bannerE from "./assets/bannerE.png";
import bannerF from "./assets/bannerF.png";
import bannerG from "./assets/bannerG.png";

import productA from "./assets/productA.png";
import productB from "./assets/productB.png";
import productC from "./assets/productC.png";

import placeholderA from "./assets/placeholderA.png";

import imageA from "./assets/imageA.png";
import imageB from "./assets/imageB.png";
import imageC from "./assets/imageC.png";
import imageD from "./assets/imageD.png";

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
      bannerE,
      bannerF,
      bannerG,
      productA,
      productB,
      productC,
      placeholderA,
      imageA,
      imageB,
      imageC,
      imageD,
      google,
      apple
    };
  },
  components: {
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage
  }
};
</script>

<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefrontui/shared/styles/helpers/visibility";

#home {
  box-sizing: border-box;
  max-width: 1240px;
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
.download {
  &__button {
    &:not(:first-child) {
      margin-left: $spacer-big;
    }
  }
}
.product-card {
  &:hover {
    box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
  }
}

.banners-grid {
  display: flex;
  margin: $spacer-medium 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
  }
  &__column {
    flex: 1;
    display: flex;
    &:not(:first-child) {
      margin-left: 10px;
      @media screen and (min-width: $desktop-min) {
        margin-left: 40px;
      }
    }
    &--small{
      flex: 0 0 330px;
    }
    &--medium{
      flex: 0 0 500px;
    }
    &--vertical-tiles {
      flex-direction: column;
      & > div:not(:first-child) {
        margin-top: 10px;
        @media screen and (min-width: $desktop-min) {
          margin-top: 40px;
        }
      }
    }
  }
}
.images-grid {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  @media screen and (min-width: $desktop-min) {
    margin-top: 20px;
  }
  &__tiles {
    max-width: 470px;
    &:not(:first-child) {
      margin-left: 10px;
      @media screen and (min-width: $desktop-min) {
        margin-left: 20px;
      }
    }
  }
}

.sf-carousel {
  margin: -20px 0;
  /deep/ &__wrapper {
    padding: 20px;
  }
}
.sf-section {
  margin: $spacer-extra-big 0;
  padding: 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big * 4 0;
  }
  /deep/ &__content {
    margin: $spacer-extra-big 0;
    @media screen and (min-width: $desktop-min) {
      margin: $spacer-extra-big * 2 0;
    }
  }
}
.sf-banner {
  padding: 2.5rem;
  /deep/ &__subtitle{
    line-height: 1.167;
    margin: 0;
    padding: 0;
  }
  /deep/ &__title{
    margin: 0;
    padding: 0;
    font-size: 2.25rem;
    line-height: 1.6;
  }
  /deep/ &__container {
    line-height: 1.875;
    @media screen and (min-width: $desktop-min) {
      width: 77%;
    }
  }
  /deep/ &--full{
    /deep/ .sf-banner__container {
        width: 100%;
    }
  }
  /deep/ &--small{
    /deep/ .sf-banner__container {
      width: 66%;
    }
  }
}
</style>
