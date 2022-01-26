<template>
  <div id="home">
    <SfHero class="hero">
      <SfHeroItem
        v-for="(img, index) in heroes"
        :key="index"
        :image="img.image"
        :title="img.title"
        :subtitle="img.subtitle"
        :button-text="img.buttonText"
        :background="img.background"
        :class="img.className"
      />
    </SfHero>
    <SfBannerGrid class="banner-grid">
      <template v-for="banner in banners" #[banner.slot]>
        <SfBanner
          :key="banner.slot"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :description="banner.description"
          :button-text="banner.buttonText"
          :image="banner.image"
          :class="banner.class"
        >
          <template #title>
            <SfHeading
              :title="banner.title"
              :level="2"
              class="sf-heading--no-underline sf-heading--left sf-banner__title"
            />
          </template>
          <template #subtitle>
            <span class="banner-grid__subtitle">{{ banner.subtitle }}</span>
          </template>
        </SfBanner>
      </template>
    </SfBannerGrid>
    <SfCallToAction
      class="call-to-action"
      title="Subscribe to Newsletters"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      button-text="subscribe"
      image="/assets/storybook/Home/newsletter.jpg"
    />
    <div class="match-with-it">
      <p class="match-with-it__paragraph">Match with it</p>
      <SfButton class="sf-button--text smartphone-only">See all</SfButton>
    </div>
    <SfCarousel
      :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }"
      class="carousel"
    >
      <SfCarouselItem
        v-for="(product, index) in products"
        :key="index"
        class="carousel__item"
      >
        <SfProductCard
          :image="product.image"
          :title="product.title"
          :regular-price="product.price.regular"
          :special-price="product.price.special"
          :score-rating="product.rating.score"
          :max-rating="product.rating.max"
          :is-in-wishlist="product.isInWishlist"
          :show-add-to-cart-button="true"
          :reviews-count="product.reviews"
          :badge-label="product.badgeLabel"
          :badge-color="product.badgeColor"
          :image-width="216"
          :image-height="326"
          image-tag="nuxt-img"
          :nuxt-img-config="{
            format: 'webp',
            fit: 'cover',
          }"
          @click:wishlist="toggleWishlist(index)"
        />
      </SfCarouselItem>
    </SfCarousel>
    <SfSection
      title-heading="Share Your Look"
      subtitle-heading="#YOURLOOK"
      class="share-your-look"
    >
      <div class="instagram-grid">
        <div class="grid__row">
          <div class="grid__col">
            <SfImage
              v-if="isMobile"
              src="/assets/storybook/Home/imageAm.webp"
              alt="katherina_trn"
              :width="140"
              :height="140"
              >katherina_trn</SfImage
            >
            <SfImage
              v-else
              src="/assets/storybook/Home/imageAd.webp"
              alt="katherina_trn"
              :width="470"
              :height="470"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col small">
            <SfImage
              v-if="isMobile"
              src="/assets/storybook/Home/imageBm.webp"
              alt="katherina_trn"
              :width="140"
              :height="140"
              >katherina_trn</SfImage
            >
            <SfImage
              v-else
              src="/assets/storybook/Home/imageCd.webp"
              alt="katherina_trn"
              :width="470"
              :height="160"
              >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="grid__row gap">
          <div class="grid__col small">
            <SfImage
              v-if="isMobile"
              src="/assets/storybook/Home/imageCm.webp"
              alt="katherina_trn"
              :width="140"
              :height="140"
              >katherina_trn</SfImage
            >
            <SfImage
              v-else
              src="/assets/storybook/Home/imageBd.webp"
              alt="katherina_trn"
              :width="470"
              :height="160"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage
              v-if="isMobile"
              src="/assets/storybook/Home/imageDm.webp"
              alt="katherina_trn"
              :width="140"
              :height="140"
              >katherina_trn</SfImage
            >
            <SfImage
              v-else
              src="/assets/storybook/Home/imageDd.webp"
              alt="katherina_trn"
              :width="470"
              :height="470"
              >katherina_trn</SfImage
            >
          </div>
        </div>
      </div>
    </SfSection>
    <SfBanner
      class="app-banner desktop-only"
      subtitle="fashion to take away"
      image="/assets/storybook/Home/bannerD.png"
      data-testid="application-banner"
    >
      <template #title>
        <span class="app-banner__title"
          >Download our application to your mobile</span
        >
      </template>
      <template #call-to-action>
        <div class="app-banner__call-to-action">
          <SfButton
            class="app-banner__button sf-banner__call-to-action"
            aria-label="Go to Apple Product"
            data-testid="banner-cta-button"
          >
            <SfImage
              src="/assets/storybook/Home/apple.png"
              alt="Apple"
              :width="134"
              :height="44"
            />
          </SfButton>
          <SfButton
            class="app-banner__button sf-banner__call-to-action"
            aria-label="Go to Google Product"
            data-testid="banner-cta-button"
          >
            <SfImage
              src="/assets/storybook/Home/google.png"
              alt="Google"
              :width="134"
              :height="44"
            />
          </SfButton>
        </div>
      </template>
    </SfBanner>
  </div>
</template>
<script>
import {
  SfButton,
  SfHero,
  SfBannerGrid,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfHeading,
} from "@storefront-ui/vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";

export default {
  name: "Home",
  components: {
    SfButton,
    SfHero,
    SfBannerGrid,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfHeading,
  },
  data() {
    return {
      headingTitle: {
        mobile: "Match it with",
        desktop: "Bestsellers",
      },
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/Home/hero.png",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(239, 235, 233)",
          image: "/assets/storybook/Home/bannerHM.jpg",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right",
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "rgb(236, 239, 241)",
          image: "/assets/storybook/Home/hero.png",
        },
      ],
      banners: [
        {
          slot: "banner-A",
          subtitle: "Dresses",
          title: "Cocktail & Party",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerF.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-B",
          subtitle: "Dresses",
          title: "Linen Dresses",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerE.jpg",
          class: "desktop-only",
        },
        {
          slot: "banner-C",
          subtitle: "T-Shirts",
          title: "The Office Life",
          image: "/assets/storybook/Home/bannerC.jpg",
        },
        {
          slot: "banner-D",
          subtitle: "Summer Sandals",
          title: "Eco Sandals",
          image: "/assets/storybook/Home/bannerG.jpg",
        },
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: true,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 25.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: true,
          reviews: 8,
          badgeLabel: "-50%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 45.00" },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "-10%",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isInWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary",
        },
      ],
    };
  },
  computed: {
    ...mapMobileObserver(),
  },
  beforeDestroy() {
    unMapMobileObserver();
  },
  methods: {
    toggleWishlist(index) {
      return (this.products[index].isInWishlist =
        !this.products[index].isInWishlist);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#home {
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    padding: 0 var(--spacer-sm);
    max-width: 1272px;
    margin: 0 auto;
  }
}
.hero {
  --hero-item-background-position: center;
}
.match-with-it {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: var(--spacer-xl);
  font-size: var(--h3-font-size);
  font-family: var(--font-family--secondary);
  font-weight: var(--font-weight--bold);
  border-bottom: solid 1px var(--c-light);
  &__paragraph {
    margin-bottom: var(--spacer-xs);
  }
  @include for-desktop {
    border: none;
    justify-content: center;
    font-weight: var(--font-weight--semibold);
  }
}
.carousel {
  margin: 0 calc(-1 * var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.9375rem 0 2.4375rem 0;
  }
}
.banner-grid {
  margin: var(--spacer-base) 0;
  --banner-container-width: 50%;
  &__subtitle {
    font-weight: var(--font-weight--normal);
    font-size: var(--font-size--base);
    font-family: var(--font-family--secondary);
    color: var(--c-gray);
    text-transform: uppercase;
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
  }
}
.share-your-look {
  --heading-title-font-weight: var(--font-weight--semibold);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
  }
}
.call-to-action {
  display: flex;
}
.instagram-grid {
  display: flex;
  max-height: 20.625rem;
  width: 100%;
  justify-content: center;
  margin: 0;
  @include for-desktop {
    max-height: 40.625rem;
    max-width: 60rem;
    margin: 0 auto;
  }
  &__row {
    display: flex;
    flex-direction: column;
  }
  .gap {
    margin-left: var(--spacer-xs);
    @include for-desktop {
      margin-left: var(--spacer-sm);
    }
  }
  &__col {
    width: 10rem;
    height: 10rem;
    @include for-desktop {
      &.small {
        height: 10rem;
      }
      width: 29.375rem;
      height: 29.375rem;
    }
    & + & {
      margin-top: var(--spacer-xs);
      @include for-desktop {
        margin-top: var(--spacer-sm);
      }
    }
  }
}
.app-banner {
  --banner-container-width: 100%;
  --banner-padding: 0 var(--spacer-2xl);
  --banner-subtitle-font-size: var(--font-size--xl);
  --banner-subtitle-font-weight: var(--font-weight--medium);
  --banner-subtitle-text-transform: capitalize;
  &__title {
    margin: var(--spacer-base) 0 var(--spacer-xl) 0;
    font-size: var(--h1-font-size);
    font-family: var(--font-family--secondary);
    font-weight: var(--font-weight--semibold);
    text-transform: capitalize;
  }
  display: block;
  min-height: 26.25rem;
  max-width: 65rem;
  margin: 0 auto;
  padding: 0 calc(25% + var(--spacer-2xl)) 0 var(--spacer-xl);
  &__call-to-action {
    --button-background: transparent;
    display: flex;
  }
  &__button {
    --image-width: 8.375rem;
    --image-height: 2.75rem;
    --button-padding: 0;
    & + & {
      margin: 0 0 0 calc(var(--spacer-xl) / 2);
    }
  }
}
</style>

<include-source />
