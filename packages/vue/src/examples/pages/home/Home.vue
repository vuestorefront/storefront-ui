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
    <!-- TODO: create SfGrid, SfBannersGrid? -->
    <div class="banners-grid">
      <div class="banners-grid__row">
        <div class="banners-grid__col">
          <SfBanner
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="Shop now"
            image="assets/storybook/homepage/bannerF.png"
            class="sf-banner--left sf-banner--top banner banner--coctail"
          >
            <template #subtitle>
              <h2 class="banner__subtitle">Scarves</h2>
            </template>
            <template #title>
              <h1 class="banner__title">Coktail & party</h1>
            </template>
            <template #description>
              <p class="banner__description">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses from all your favorite
                brands.
              </p>
            </template>
          </SfBanner>
        </div>
        <div class="banners-grid__col banners-grid__col--big">
          <SfBanner
            button-text="Shop now"
            image="assets/storybook/homepage/bannerE.png"
            class="sf-banner--left sf-banner--top banner"
          >
            <template #subtitle>
              <h2 class="banner__subtitle">Dresses</h2>
            </template>
            <template #title>
              <h1 class="banner__title">Linen dresses</h1>
            </template>
            <template #description>
              <p class="banner__description">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses from all your favorite
                brands.
              </p>
            </template>
          </SfBanner>
        </div>
        <div class="banners-grid__col">
          <div class="banners-grid__row banners-grid__row--vertical">
            <div class="banners-grid__col">
              <SfBanner
                image="assets/storybook/homepage/bannerC.png"
                class="sf-banner--left banner--full banner"
              >
                <template #subtitle>
                  <h2 class="banner__subtitle">T-Shirts</h2>
                </template>
                <template #title>
                  <h1 class="banner__title">The office life</h1>
                </template>
              </SfBanner>
            </div>
            <div class="banners-grid__col">
              <SfBanner
                image="assets/storybook/homepage/bannerG.png"
                class="sf-banner--left banner--full banner"
              >
                <template #subtitle>
                  <h2 class="banner__subtitle">Summer shoes</h2>
                </template>
                <template #title>
                  <h1 class="banner__title">Eco sandals</h1>
                </template>
              </SfBanner>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <!-- TODO: create SfGrid, SfImagesGrid? -->
      <div class="images-grid">
        <div class="images-grid__row">
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageA.png"
              >maria_trn</SfImage
            >
          </div>
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageB.png"
              >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="images-grid__row">
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageC.png"
              >angelina_trn</SfImage
            >
          </div>
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageD.png"
              >julia_trn</SfImage
            >
          </div>
        </div>
      </div>
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
  SfImage
} from "@storefrontui/vue";

export default {
  name: "Home",
  data() {
    return {
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
  padding: 0 $spacer-big;

  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}

.banners-grid {
  margin: $spacer-big 0;

  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
    display: flex;
  }

  &__row {
    @media screen and (min-width: $desktop-min) {
      display: flex;
    }

    &--vertical {
      width: 100%;
      flex-direction: column;

      .banners-grid {
        &__col {
          &:not(:first-child) {
            margin-left: 0;
            margin-top: $spacer;

            @media screen and (min-width: $desktop-min) {
              margin-top: $spacer-extra-big;
            }
          }
        }
      }
    }
  }
  &__col {
    display: flex;
    flex: 1 1 330px;

    &:not(:first-child) {
      margin-top: $spacer;

      @media screen and (min-width: $desktop-min) {
        margin-top: 0;
        margin-left: $spacer-extra-big;
      }
    }
    &--big {
      flex: 1 1 500px;
    }
  }
}
.banner {
  width: 100%;
  min-height: 144px;
  font-family: $body-font-family-secondary;
  padding: $spacer-big;
  justify-content: flex-start;
  @media screen and (min-width: $desktop-min) {
    padding: $spacer-extra-big;
  }

  &__subtitle,
  &__title,
  &__description {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  &__subtitle {
    color: $c-dark-secondary;
    font-family: $body-font-family-primary;
    font-size: 0.875rem;
    line-height: 1.167;

    @media screen and (min-width: $desktop-min) {
      margin-top: $spacer-extra-big;
      font-size: 1.5rem;
    }
  }

  &__title {
    font-size: 1.125rem;
    line-height: 1.6;
    text-transform: uppercase;
    @media screen and (min-width: $desktop-min) {
      font-size: 2.25rem;
    }
  }

  &__description {
    display: none;
    margin: $spacer-extra-big 0;
    font-size: 1.125rem;
    line-height: 1.6;

    @media screen and (min-width: $desktop-min) {
      display: block;
    }
  }

  &/deep/.sf-banner__container {
    @media screen and (min-width: $desktop-min) {
      width: 72%;
    }
  }

  &--full /deep/.sf-banner {
    &__container {
      @media screen and (min-width: $desktop-min) {
        flex: 0 0 100%;
        width: 100%;
      }
    }
  }
}

.newsletter {
  margin: $spacer-big 0;

  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big * 2 0;
  }
}

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

.product-card {
  max-width: unset;

  &:hover {
    box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
  }
}

.images-grid {
  &__row {
    flex: 1;
    display: flex;
    justify-content: center;
    &:not(:first-child) {
      margin-top: $spacer;
      @media screen and (min-width: $desktop-min) {
        margin-top: $spacer-big;
      }
    }
  }

  &__col {
    flex: 0 1 470px;

    &:not(:first-child) {
      margin-left: $spacer;
      @media screen and (min-width: $desktop-min) {
        margin-left: $spacer-big;
      }
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
</style>
