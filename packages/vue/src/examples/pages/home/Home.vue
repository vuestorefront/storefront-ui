<template>
  <div id="home">
    <SfHero>
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :buttonText="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
      ></SfHeroItem>
    </SfHero>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="newsletter"
      image="assets/storybook/homepage/newsletter.png"
    />
    <SfSection
      :heading="{
        title: 'Best Sellers'
      }"
    >
      <SfCarousel :settings="{ gap: 0 }" class="carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.title"
            :image="product.image"
            :price="product.price"
            :rating="product.rating"
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
    >
      <SfRow style="justify-content: center;">
        <SfRowColumn style="flex: 0 1 470px;">
          <SfImage src="assets/storybook/homepage/imageA.png"
            >maria_trn</SfImage
          >
        </SfRowColumn>
        <SfRowColumn style="flex: 0 1 470px;">
          <SfImage src="assets/storybook/homepage/imageB.png"
            >katherina_trn</SfImage
          >
        </SfRowColumn>
      </SfRow>
      <SfRow style="justify-content: center;">
        <SfRowColumn style="flex: 0 1 470px;">
          <SfImage src="assets/storybook/homepage/imageC.png"
            >angelina_trn</SfImage
          >
        </SfRowColumn>
        <SfRowColumn style="flex: 0 1 470px;">
          <SfImage src="assets/storybook/homepage/imageD.png"
            >julia_trn</SfImage
          >
        </SfRowColumn>
      </SfRow>
    </SfSection>
    <SfBanner
      image="assets/storybook/homepage/bannerD.png"
      class="sf-banner--left desktop-only app-banner"
    >
      <template #subtitle>
        <h2 class="app-banner__subtitle">
          Fashion to Take Away
        </h2>
      </template>
      <template #title>
        <h1 class="app-banner__title">
          Download our application to your&nbsp;mobile
        </h1>
      </template>
      <template #call-to-action>
        <div class="app-banner__cta">
          <img
            class="app-banner__platform"
            src="assets/storybook/homepage/google.png"
            alt=""
          />
          <img
            class="app-banner__platform"
            src="assets/storybook/homepage/apple.png"
            alt=""
          />
        </div>
      </template>
    </SfBanner>
  </div>
</template>
<script>
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfRow
} from "@storefrontui/vue";

export default {
  name: "Home",
  props: {
    bannerGrid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      debugMode: false,
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#eceff1",
          image: "assets/storybook/homepage/bannerH.png"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#efebe9",
          image: "assets/storybook/homepage/bannerA.png",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#fce4ec",
          image: "assets/storybook/homepage/bannerB.png"
        }
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regularPrice: "50.00 $" },
          rating: { max: 5, score: 4 }
        }
      ]
    };
  },
  components: {
    SfHero,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfRow
  },
  mounted: function() {
    if (this.debugMode) {
      document.body.classList.add("debug");
    }
  }
};
</script>
<style>
.debug *:not(g):not(path) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.5) !important;
  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

  box-shadow: none !important;
  filter: none !important;
}
</style>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefrontui/shared/styles/helpers/visibility";
/**
 * OK
 */
#home {
  max-width: 1240px;
  margin: auto;
  padding: 0 $spacer-big;
  box-sizing: border-box;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
.banner-grid {
  margin: $spacer-extra-big 0;
}
.column-big {
  flex: 0 1 500px;
}

.newsletter {
  margin: $spacer-big 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big * 2 0;
  }
}
.product-card {
  max-width: unset;
  &:hover {
    box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
  }
}

/**
 * BAD
 */
// /deep/ is not look sexi
.carousel {
  margin: -20px 0;

  /deep/ .sf-carousel__wrapper {
    padding: 20px 0;
    @media screen and (min-width: $desktop-min) {
      max-width: calc(100% - 176px);
      padding: 20px;
    }
  }
}

// full custom banner component, need more attention
.app-banner {
  min-height: 420px;
  background-position: 100%;

  &__platform {
    max-height: 47px;

    &:not(:first-child) {
      margin-left: $spacer-medium;
    }
  }
  &__subtitle {
    padding: 0;
    margin-bottom: $spacer-big;
    color: #a3a5ad;
    font-weight: 300;
  }
  &__title {
    padding: 0;
    margin-bottom: $spacer-extra-big;
    color: $c-dark-primary;
    line-height: 1.38;
  }
  /deep/ .sf-banner__container {
    @media screen and (min-width: $desktop-min) {
      margin-left: 64px;
    }
  }
}
</style>
