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
    <SfBannerGrid :bannerGrid="1" class="banners">
      <template #bannerA>
        <a href="#">
          <SfBanner
            subtitle="Dresses"
            title="COCKTAIL PARTY"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="SHOP NOW"
            image="assets/storybook/homepage/bannerF.png"
            class="sf-banner--left sf-banner--container-full"
          />
        </a>
      </template>
      <template #bannerB>
        <a href="#">
          <SfBanner
            subtitle="Dresses"
            title="LINEN DRESSES"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="SHOP NOW"
            image="assets/storybook/homepage/bannerE.png"
            class="sf-banner--left"
          />
        </a>
      </template>
      <template #bannerC>
        <a href="#">
          <SfBanner
            subtitle="T-Shirts"
            title="THE OFFICE LIFE"
            image="assets/storybook/homepage/bannerC.png"
            class="sf-banner--left sf-banner--container-full"
          />
        </a>
      </template>
      <template #bannerD>
        <a href="#">
          <SfBanner
            subtitle="Summer shoes"
            title="ECO SANDALS"
            image="assets/storybook/homepage/bannerG.png"
            class="sf-banner--left sf-banner--container-full"
          />
        </a>
      </template>
    </SfBannerGrid>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="call-to-action-newsletter"
      image="assets/storybook/homepage/newsletter.png"
    />
    <SfSection title="Best Sellers">
      <SfCarousel :settings="{ gap: 0 }" class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :rating="product.rating.score"
            class="product-card"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <SfSection title="Share Your Look" subtitle="#YOURLOOK">
      <div class="grid grid-images">
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.png"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageB.png"
              >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.png"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageD.png"
              >katherina_trn</SfImage
            >
          </div>
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
  SfImage,
  SfBannerGrid
} from "../../../../index.js";

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
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.png",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 }
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.png",
          price: { regular: "50.00 $" },
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
    SfBannerGrid
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

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
.banners {
  margin: $spacer-big 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
  }
}
.grid {
  max-width: 960px;
  margin: auto;
  &__row {
    display: flex;
    & + & {
      margin-top: $spacer-big / 2;
      @media screen and (min-width: $desktop-min) {
        margin-top: $spacer-big;
      }
    }
  }
  &__col {
    margin: 0;
    & + & {
      margin-left: $spacer-big / 2;
      @media screen and (min-width: $desktop-min) {
        margin-left: $spacer-big;
      }
    }
  }
}
.sf-banner {
  flex: 1;
}
</style>
