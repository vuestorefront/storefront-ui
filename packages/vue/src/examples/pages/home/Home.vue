<template>
  <div class="home">
    <SfHero class="home__hero">
      <SfHeroItem
        v-for="(img, index) in heroes"
        :key="index"
        :image="img.image"
        :title="img.title"
        :button-text="img.buttonText"
        :background="img.background"
      />
    </SfHero>
    <SfHeading
      class="home__heading sf-heading--underline"
      :level="headingLevel"
    >
      <template #title>
        <span class="home__heading__title mobile-only">
          {{ headingTitle.mobile }}
        </span>
        <span class="home__heading__title desktop-only">
          {{ headingTitle.desktop }}
        </span>
      </template>
      <template #subtitle>
        <SfButton class="sf-button--text mobile-only">
          See all
        </SfButton>
      </template>
    </SfHeading>
    <SfCarousel class="home__carousel">
      <SfCarouselItem
        v-for="(product, index) in products"
        :key="index"
        class="home__carousel-item"
      >
        <SfProductCard
          :image="product.image"
          :title="product.title"
          :regular-price="product.price.regular"
          :special-price="product.price.special"
          :score-rating="product.rating.score"
          :max-rating="product.rating.max"
          :is-on-wishlist="product.isOnWishlist"
          :show-add-to-cart-button="true"
          :reviews-count="product.reviews"
          :badge-label="product.badgeLabel"
          :badge-color="product.badgeColor"
          @click:wishlist="toggleWishlist(index)"
        />
      </SfCarouselItem>
    </SfCarousel>
    <SfBannerGrid class="home__banner-grid">
      <template v-for="banner in banners" #[banner.slot]>
        <SfBanner
          :key="banner.slot"
          :title="banner.title"
          :subtitle="banner.subtitle"
          :description="banner.description"
          :button-text="banner.buttonText"
          :image="banner.image"
          :class="banner.class"
        />
      </template>
    </SfBannerGrid>
    <SfCallToAction
      class="home__call-to-action"
      title="Subscribe to Newsletters"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      button-text="subscribe"
      image="/assets/storybook/Home/newsletter.jpg"
    />
    <SfSection
      class="home__section-instagram-feed"
      title-heading="Share Your Look"
      subtitle-heading="#YOURLOOK"
      :level-heading="sectionLevel"
    >
      <div class="home__instagram-feed">
        <SfImage
          v-for="(img, index) in instagramFeed"
          :key="index"
          :src="img"
          :class="'home__instagram-feed__' + index"
          ><span class="home__instagram-feed--mobile">{{
            img.mobile.content
          }}</span
          ><span class="home__instagram-feed--desktop">{{
            img.desktop.content
          }}</span></SfImage
        >
      </div>
    </SfSection>
    <SfBanner
      class="home__bottom-banner"
      title="Download our application to your mobile"
      subtitle="fashion to take away"
      image="/assets/storybook/Home/bannerD.png"
    >
      <template #call-to-action>
        <div class="home__bottom-banner__call-to-action">
          <SfButton class="home__bottom-banner__button">
            <SfImage src="/assets/storybook/Home/apple.png" />
          </SfButton>
          <SfButton class="home__bottom-banner__button">
            <SfImage src="/assets/storybook/Home/google.png" />
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
  SfHeading,
  SfBannerGrid,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage
} from "@storefront-ui/vue";
export default {
  name: "Home",
  components: {
    SfButton,
    SfHero,
    SfHeading,
    SfBannerGrid,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage
  },
  data() {
    return {
      headingLevel: 3,
      headingTitle: {
        mobile: "Match it with",
        desktop: "Bestsellers"
      },
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#fcede8",
          image: "/assets/storybook/Home/hero.png"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#9ee2b0",
          image: "/assets/storybook/Home/hero.png",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#f6e389",
          image: "/assets/storybook/Home/hero.png"
        }
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
          class: "sf-banner--slim desktop-only"
        },
        {
          slot: "banner-B",
          subtitle: "Dresses",
          title: "Linen Dresses",
          description:
            "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.",
          buttonText: "Shop now",
          image: "/assets/storybook/Home/bannerE.jpg",
          class: "sf-banner--slim banner-central desktop-only"
        },
        {
          slot: "banner-C",
          subtitle: "T-Shirts",
          title: "The Office Life",
          image: "/assets/storybook/Home/bannerC.jpg",
          class: "sf-banner--slim"
        },
        {
          slot: "banner-D",
          subtitle: "Summer Sandals",
          title: "Eco Sandals",
          image: "/assets/storybook/Home/bannerG.jpg",
          class: "sf-banner--slim"
        }
      ],
      products: [
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 25.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: true,
          reviews: 8,
          badgeLabel: "-50%",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 ", special: "$ 45.00" },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "-10%",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productC.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productA.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        },
        {
          title: "Cream Beach Bag",
          image: "assets/storybook/Home/productB.jpg",
          price: { regular: "$ 50.00 " },
          rating: { max: 5, score: 4 },
          isOnWishlist: false,
          reviews: 8,
          badgeLabel: "",
          badgeColor: "color-primary"
        }
      ],
      sectionLevel: 3,
      instagramFeed: {
        imageA: {
          mobile: {
            url: "/assets/storybook/Home/imageA.png",
            content: "angelina_trn"
          },
          desktop: {
            url: "/assets/storybook/Home/imageA.png",
            content: "@instagram"
          }
        },
        imageB: {
          mobile: {
            url: "/assets/storybook/Home/imageB.png",
            content: "angelina_trn"
          },
          desktop: {
            url: "/assets/storybook/Home/imageB_top.png",
            content: "@instagram"
          }
        },
        imageC: {
          mobile: {
            url: "/assets/storybook/Home/imageC.jpg",
            content: "angelina_trn"
          },
          desktop: {
            url: "assets/storybook/Home/imageA_bottom.png",
            content: "@instagram"
          }
        },
        imageD: {
          mobile: {
            url: "/assets/storybook/Home/imageD.jpg",
            content: "angelina_trn"
          },
          desktop: {
            url: "/assets/storybook/Home/imageB.png",
            content: "@instagram"
          }
        }
      }
    };
  },
  methods: {
    toggleWishlist(index) {
      return (this.products[index].isOnWishlist = !this.products[index]
        .isOnWishlist);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
.home {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  &__hero {
    display: flex;
    order: 1;
    margin: var(--spacer-xl) 0 0 0;
  }
  &__heading {
    display: flex;
    order: 2;
    justify-content: space-between;
    margin: var(--spacer-base) 0;
    &__title {
      font-size: var(--h3-font-size);
      font-weight: var(--font-medium);
      font-family: var(--font-family-secondary);
    }
  }
  &__carousel {
    --image-height: 16.125rem;
    display: flex;
    justify-content: center;
    order: 3;
  }
  &__banner-grid {
    display: flex;
    flex-direction: column;
    order: 4;
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
  }
  &__call-to-action {
    display: flex;
    order: 5;
  }
  &__section-instagram-feed {
    display: flex;
    flex-direction: column;
    order: 6;
    margin: var(--spacer-2xl) 0 var(--spacer-xl) 0;
  }
  &__instagram-feed {
    --image-width: 100%;
    --image-height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: var(--spacer-xs);
    grid-row-gap: var(--spacer-xs);
    &__imageA,
    &__imageB {
      grid-row: 1/3;
    }
    &__imageC,
    &__imageD {
      grid-row: 3/5;
    }
    &--desktop {
      display: none;
    }
  }
  &__bottom-banner,
  &__newsletter-subscribe {
    display: none;
  }
  &__footer-social {
    display: flex;
    flex-direction: column;
  }
}
@include for-desktop {
  .home {
    padding: 0 var(--spacer-2xl);
    &__heading {
      justify-content: center;
      order: 4;
      margin: var(--spacer-3xl) 0 var(--spacer-2xl) 0;
    }
    &__banner-grid {
      order: 2;
      margin: var(--spacer-2xl) 0;
    }
    &__call-to-action {
      order: 3;
    }
    &__carousel {
      order: 5;
    }
    &__instagram-feed {
      grid-column-gap: var(--spacer-base);
      grid-row-gap: var(--spacer-base);
      &__imageA {
        grid-column: 1/2;
        grid-row: 1/4;
      }
      &__imageB {
        grid-column: 2/3;
        grid-row: 1/2;
      }
      &__imageC {
        grid-column: 1/2;
        grid-row: 4/5;
      }
      &__imageD {
        grid-column: 2/3;
        grid-row: 2/5;
      }
      &--mobile {
        display: none;
      }
      &--desktop {
        display: block;
      }
    }
    &__bottom-banner {
      --banner-padding: 0 var(--spacer-2xl);
      --banner-title-margin: var(--spacer-base) 0 var(--spacer-xl) 0;
      --banner-title-font-weight: 600;
      --banner-title-text-transform: capitalize;
      display: flex;
      order: 7;
      &__call-to-action {
        --button-background: var(--c-white);
        display: flex;
      }
      &__button {
        --button-padding: 0 var(--spacer-base) 0 0;
      }
    }
  }
}
</style>
