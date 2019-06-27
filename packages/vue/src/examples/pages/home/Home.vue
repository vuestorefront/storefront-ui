<template>
  <div id="home">
    <!-- SfHero -->
    <SfHero>
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="SUMMER COLLECTION 2019"
        buttonText="Learn more"
        background="#eceff1"
        image="assets/storybook/homepage/bannerH.png"
      ></SfHeroItem>
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="SUMMER COLLECTION 2019"
        buttonText="Learn more"
        background="#efebe9"
        image="assets/storybook/homepage/bannerA.png"
        backgroundPosition="bottom left"
        containerPosition="right"
      ></SfHeroItem>
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="SUMMER COLLECTION 2019"
        buttonText="Learn more"
        background="#fce4ec"
        image="assets/storybook/homepage/bannerB.png"
      ></SfHeroItem>
    </SfHero>
    <div class="banners-grid">
      <div class="banners-grid__column banners-grid__column--small">
        <SfBanner
          title="COCKTAIL & PARTY "
          subtitle="Scarves"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
          button-text="SHOP NOW"
          image="assets/storybook/homepage/bannerF.png"
          class="sf-banner--left sf-banner--top"
        />
      </div>
      <div class="banners-grid__column banners-grid__column--medium">
        <SfBanner
          title="LINEN DRESSES"
          subtitle="Dresses"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
          button-text="SHOP NOW"
          image="assets/storybook/homepage/bannerE.png"
          class="sf-banner--left sf-banner--top sf-banner--small"
        />
      </div>
      <div
        class="banners-grid__column banners-grid__column--vertical-tiles banners-grid__column--small"
      >
        <div>
          <SfBanner
            title="THE OFFICE LIFE"
            subtitle="T-Shirts"
            image="assets/storybook/homepage/bannerC.png"
            class="sf-banner--left sf-banner--full"
          />
        </div>
        <div>
          <SfBanner
            title="ECO SANDALS"
            subtitle="Summer shoes"
            image="assets/storybook/homepage/bannerG.png"
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
            image="assets/storybook/homepage/productA.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productB.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productC.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productA.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productB.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productC.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productA.png"
            :price="{ regularPrice: '50.00 $' }"
            :rating="{ max: 5, score: 4 }"
            class="product-card"
          />
        </SfCarouselItem>
        <SfCarouselItem>
          <SfProductCard
            title="Cream Beach Bag"
            image="assets/storybook/homepage/productB.png"
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
        <!-- TODO: test SfImage and fix it -->
        <div class="images-grid__tiles">
          <SfImage src="assets/storybook/homepage/imageA.png"
            >maria_trn</SfImage
          >
        </div>
        <div class="images-grid__tiles">
          <SfImage src="assets/storybook/homepage/imageB.png"
            >katherina_trn</SfImage
          >
        </div>
      </div>
      <div class="images-grid">
        <div class="images-grid__tiles">
          <SfImage src="assets/storybook/homepage/imageC.png"
            >angelina_trn</SfImage
          >
        </div>
        <div class="images-grid__tiles">
          <SfImage src="assets/storybook/homepage/imageD.png"
            >julia_trn</SfImage
          >
        </div>
      </div>
    </SfSection>
    <SfBanner
      subtitle="Fashion to Take Away"
      image="assets/storybook/homepage/bannerD.png"
      class="sf-banner--left banner banner--download desktop-only"
    >
      <template v-slot:title>
        <h1>Download our application to your mobile</h1>
      </template>
      <template v-slot:call-to-action>
        <div class="download">
          <img
            class="download__button"
            src="assets/storybook/homepage/google.png"
            alt="google play"
          />
          <img
            class="download__button"
            src="assets/storybook/homepage/apple.png"
            alt="app store"
          />
        </div>
      </template>
    </SfBanner>
  </div>
</template>

<script>
import SfHero from "@/components/organisms/SfHero/SfHero.vue";
import SfBanner from "@/components/molecules/SfBanner/SfBanner.vue";
import SfCallToAction from "@/components/molecules/SfCallToAction/SfCallToAction.vue";
import SfSection from "@/components/molecules/SfSection/SfSection.vue";
import SfCarousel from "@/components/organisms/SfCarousel/SfCarousel.vue";
import SfProductCard from "@/components/molecules/SfProductCard/SfProductCard.vue";
import SfImage from "@/components/molecules/SfImage/SfImage.vue";

export default {
  name: "Home",
  components: {
    SfHero,
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
  margin: $spacer-medium 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
    display: flex;
  }
  &__column {
    flex: 1;
    margin-top: 10px;
    @media screen and (min-width: $desktop-min) {
      display: flex;
      margin-top: 0;
    }
    &:not(:first-child) {
      @media screen and (min-width: $desktop-min) {
        margin-left: 40px;
      }
    }
    &--small {
      @media screen and (min-width: $desktop-min) {
        flex: 1 1 330px;
      }
    }
    &--medium {
      @media screen and (min-width: $desktop-min) {
        flex: 1 1 500px;
      }
    }
    &--vertical-tiles {
      flex-direction: column;
      margin-top: 10px;
      @media screen and (min-width: $desktop-min) {
        margin-top: 0px;
      }
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
  @media screen and (min-width: $desktop-min) {
    padding: 2.5rem;
  }
  /deep/ &__subtitle {
    line-height: 1.167;
    margin: 0;
    padding: 0;
  }
  /deep/ &__title {
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
  /deep/ &--full {
    /deep/ .sf-banner__container {
      width: 100%;
    }
  }
  /deep/ &--small {
    /deep/ .sf-banner__container {
      width: 66%;
    }
  }
}
.sf-product-card {
  max-width: unset;
}
</style>
