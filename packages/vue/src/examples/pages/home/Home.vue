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
    <div class="grid grid-banner">
      <div class="grid__row">
        <SfBanner
          subtitle="Dresses"
          title="COCKTAIL PARTY"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
          button-text="SHOP NOW"
          image="assets/storybook/homepage/bannerF.png"
          class="sf-banner--left grid__col"
        />
        <SfBanner
          subtitle="Dresses"
          title="LINEN DRESSES"
          description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
          button-text="SHOP NOW"
          image="assets/storybook/homepage/bannerE.png"
          class="sf-banner--left grid__col"
        />
        <div class="grid__col">
          <div class="grid__row grid__row--column">
            <SfBanner
              subtitle="T-Shirts"
              title="THE OFFICE LIFE"
              image="assets/storybook/homepage/bannerC.png"
              class="sf-banner--left sf-banner--container-full grid__col"
            />
            <SfBanner
              subtitle="Summer shoes"
              title="ECO SANDALS"
              image="assets/storybook/homepage/bannerG.png"
              class="sf-banner--left sf-banner--container-full grid__col"
            />
          </div>
        </div>
      </div>
    </div>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="call-to-action-newsletter"
      image="assets/storybook/homepage/newsletter.png"
    />
    <SfSection
      :heading="{
        title: 'Best Sellers'
      }"
    >
      <SfCarousel :settings="{ gap: 0 }" class="product-carousel">
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
      <div class="grid grid-image">
        <div class="grid__row">
          <SfImage class="grid__col" src="assets/storybook/homepage/imageA.png"
            >katherina_trn</SfImage
          >
          <SfImage class="grid__col" src="assets/storybook/homepage/imageB.png"
            >katherina_trn</SfImage
          >
        </div>
        <div class="grid__row">
          <SfImage class="grid__col" src="assets/storybook/homepage/imageC.png"
            >katherina_trn</SfImage
          >
          <SfImage class="grid__col" src="assets/storybook/homepage/imageD.png"
            >katherina_trn</SfImage
          >
        </div>
      </div>
    </SfSection>
    <SfBanner
      title="Download our application to your mobile"
      subtitle="Fashion to Take Away"
      image="assets/storybook/homepage/bannerD.png"
      class="banner-application sf-banner--left sf-banner--center desktop-only"
    >
      <template #title>
        <h1 class="banner-application__title">
          Download our application to your&nbsp;mobile
        </h1>
      </template>
      <template #call-to-action>
        <div>
          <img
            class="banner-application__download"
            src="assets/storybook/homepage/google.png"
            alt=""
          />
          <img
            class="banner-application__download"
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
  SfImage
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
    SfImage
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

#home {
  max-width: 1240px;
  margin: auto;
  padding: 0 $spacer-big;
  box-sizing: border-box;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
.call-to-action-newsletter {
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
.product-carousel {
  margin: -20px 0;
  /deep/ .sf-carousel__wrapper {
    padding: 20px 0;
    @media screen and (min-width: $desktop-min) {
      padding: 20px;
      max-width: calc(100% - 216px);
    }
  }
}
.banner-application {
  min-height: 420px;
  max-width: 1040px;
  margin: auto;
  &__title {
    padding: 0;
    margin: 0;
    margin-top: $spacer-big;
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 1.388;
  }
  &__download {
    max-height: 47px;
    margin-top: $spacer-extra-big;
    & + & {
      margin-left: $spacer-big;
    }
  }
}
.grid {
  $this: &;
  $gutter: $spacer-extra-big; // how changes gutter for images grid
  &__row {
    @media screen and (min-width: $desktop-min) {
      display: flex;
      justify-content: center;
    }
    & + & {
      margin-top: $gutter / 2;
      @media screen and (min-width: $desktop-min) {
        margin-top: $gutter;
      }
    }
    &--column {
      flex-direction: column;
      #{$this}__col {
        & + #{$this}__col {
          margin-left: 0;
          margin-top: $gutter / 2;
          @media screen and (min-width: $desktop-min) {
            margin-top: $gutter;
          }
        }
      }
    }
  }
  &__col {
    margin: 0 auto;
    @media screen and (min-width: $desktop-min) {
      flex: 1;
      display: flex;
    }
    & + & {
      margin-top: $gutter / 2;
      @media screen and (min-width: $desktop-min) {
        margin-left: $gutter;
        margin-top: 0;
      }
    }
  }
}
.grid-image {
  max-width: 960px;
  margin: auto;
}
.grid-banner {
  margin: $spacer-extra-big 0;
}
</style>
