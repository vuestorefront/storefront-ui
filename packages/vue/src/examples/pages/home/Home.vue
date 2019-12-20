<template>
  <div id="home">
    <SfHero class="section">
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
    <SfBannerGrid :banner-grid="1" class="banners section">
      <template #bannerA>
        <a href="#">
          <SfBanner
            subtitle="Dresses"
            title="COCKTAIL PARTY"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="SHOP NOW"
            image="/assets/storybook/homepage/bannerF.jpg"
            class="sf-banner--slim banner-custom"
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
            image="/assets/storybook/homepage/bannerE.jpg"
            class="sf-banner--slim banner-central"
          />
        </a>
      </template>
      <template #bannerC>
        <a href="#">
          <SfBanner
            subtitle="T-Shirts"
            title="THE OFFICE LIFE"
            image="/assets/storybook/homepage/bannerC.jpg"
            class="sf-banner--slim"
          />
        </a>
      </template>
      <template #bannerD>
        <a href="#">
          <SfBanner
            subtitle="Summer shoes"
            title="ECO SANDALS"
            image="/assets/storybook/homepage/bannerG.jpg"
            class="sf-banner--slim"
          />
        </a>
      </template>
    </SfBannerGrid>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      class="call-to-action-newsletter"
      image="assets/storybook/homepage/newsletter.jpg"
    />
    <SfSection title-heading="Best Sellers" class="section">
      <SfCarousel class="product-carousel">
        <SfCarouselItem v-for="(product, i) in products" :key="i">
          <SfProductCard
            :title="product.title"
            :image="product.image"
            :regular-price="product.price.regular"
            :max-rating="product.rating.max"
            :score-rating="product.rating.score"
            :is-on-wishlist="product.isOnWishlist"
            @click:wishlist="toggleWishlist(i)"
            class="product-card"
          />
        </SfCarouselItem>
      </SfCarousel>
    </SfSection>
    <SfSection
      title-heading="Share Your Look"
      subtitle-heading="#YOURLOOK"
      class="section"
    >
      <div class="images-grid">
        <div class="images-grid__row">
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageA.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageB.jpg"
              >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="images-grid__row">
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageC.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="images-grid__col">
            <SfImage src="assets/storybook/homepage/imageD.jpg"
              >katherina_trn</SfImage
            >
          </div>
        </div>
      </div>
    </SfSection>
    <SfBanner
      image="/assets/storybook/homepage/bannerD.png"
      class="banner-application desktop-only"
    >
      <template #subtitle>
        <div class="banner-application__subtitle">Fashion to Take Away</div>
      </template>
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
          image: "assets/storybook/homepage/bannerH.jpg"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#efebe9",
          image: "assets/storybook/homepage/bannerHM.jpg",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2019",
          buttonText: "Learn more",
          background: "#fce4ec",
          image: "assets/storybook/homepage/bannerH.jpg"
        }
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: true
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productC.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productA.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/homepage/productB.jpg",
          price: { regular: "50.00 $" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false
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
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
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

#home {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.call-to-action-newsletter {
  margin: $spacer-big 0;
  box-sizing: border-box;
  @include for-desktop {
    margin: $spacer-extra-big * 2 0;
  }
}
.banner-central {
  @include for-desktop {
    padding-right: 30%;
  }
}
.banner-custom {
  @media (max-width: $desktop-min) {
    background-image: url("../../../../public/assets/storybook/homepage/bannerB.jpg") !important;
  }
}
.banner-application {
  min-height: 420px;
  max-width: 1040px;
  margin: auto;
  padding-right: calc(25% + 5rem);
  padding-left: 2.5rem;
  line-height: 1.6;
  &__title {
    margin: $spacer-big 0 0 0;
    font-size: $h1-font-size-desktop;
    font-weight: $h1-font-weight-desktop;
  }
  &__subtitle {
    color: #a3a5ad;
    font-family: $body-font-family-primary;
    font-size: $font-size-extra-big-desktop;
    font-weight: $body-font-weight-primary;
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
  @include for-desktop {
    margin: $spacer-extra-big 0;
  }
}
.images-grid {
  max-width: 960px;
  margin: auto;
  &__row {
    display: flex;
    & + & {
      margin-top: $spacer-big / 2;
      @include for-desktop {
        margin-top: $spacer-big;
      }
    }
  }
  &__col {
    margin: 0;
    & + & {
      margin-left: $spacer-big / 2;
      @include for-desktop {
        margin-left: $spacer-big;
      }
    }
  }
}
.product-card {
  max-width: unset;
  &:hover {
    @include for-desktop {
      box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
    }
  }
}
.product-carousel {
  margin: -20px -#{$spacer-big} -20px 0;
  @include for-desktop {
    margin: -20px 0;
  }
  ::v-deep .sf-carousel__wrapper {
    padding: 20px 0;
    @include for-desktop {
      padding: 20px;
      max-width: calc(100% - 216px);
    }
  }
}
.section {
  padding-left: $spacer-big;
  padding-right: $spacer-big;
  @include for-desktop {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
