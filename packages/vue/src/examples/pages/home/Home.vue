<template>
  <div id="home">
    <SfTopBar class="home__top-bar">
      <template #center>
        <span class="home__top-bar-text">Download our application.</span>
        <SfButton class="sf-button--text home__top-bar-text">
          Find out more.</SfButton
        >
      </template>
      <template #left>
        <SfImage class="mobile-only" :src="logoSrc" />
        <SfButton class="desktop-only sf-button--text home__top-bar-text">
          Help & FAQs</SfButton
        >
      </template>
      <template #right>
        <span>Location: </span>
        <SfImage class="home__top-bar-location-image" :src="locationSrc" />
      </template>
    </SfTopBar>
    <SfSearchBar
      class="home__search-bar"
      placeholder="Search for items and promotions"
    />
    <SfHeader
      class="home__header"
      :logo="logoSrc"
      search-placeholder="Search for items and promotions"
      @click:cart="alert('@click:cart')"
      @click:wishlist="alert('@click:wishlist')"
      @click:account="alert('@click:account')"
    >
      <template #navigation>
        <SfHeaderNavigationItem v-for="item in navigationItems" :key="item">
          <a
            href="#"
            :style="{ display: 'flex', alignItems: 'center', height: '100%' }"
            >{{ item }}</a
          >
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>
    <SfHero class="home__hero">
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2020"
        button-text="Learn more"
        image="/assets/storybook/Home/hero.png"
        background="#fcede8"
      />
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2020"
        button-text="Learn more"
        image="/assets/storybook/Home/hero.png"
        background="#9ee2b0"
      />
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2020"
        button-text="Learn more"
        image="/assets/storybook/Home/hero.png"
        background="#f6e389"
      />
    </SfHero>
    <SfHeading class="home__heading" level="3">
      <template #title>
        <span class="home__heading-text mobile-only">
          {{ headingTitle.mobile }}
        </span>
        <span class="home__heading-text desktop-only">
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
      <SfCarouselItem v-for="(product, index) in products" :key="index">
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
        />
      </SfCarouselItem>
    </SfCarousel>
    <SfBannerGrid>
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
      title="Subscribe to Newsletters"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
      button-text="subscribe"
      image="/assets/storybook/Home/newsletter.jpg"
    />
    <SfSection>
      <div>
        <SfImage />
        <SfImage />
        <SfImage />
        <SfImage />
      </div>
    </SfSection>
    <SfBanner
      class="home__bottom-banner"
      title="Download our application to your mobile"
      subtitle="fashion to take away"
      image="/assets/storybook/Home/bannerD.png"
    >
      <template #call-to-action>
        <SfButton />
        <SfButton />
      </template>
    </SfBanner>
    <SfFooter>
      <SfFooterColumn
        v-for="(column, indexFooter) in footerColumns"
        :key="indexFooter"
        :title="column.title"
      >
        <SfList v-if="column.items">
          <SfListItem
            v-for="(item, indexItem) in column.items"
            :key="indexItem"
          >
            <SfMenuItem :label="item" />
          </SfListItem>
        </SfList>
        <SfList v-else class="home__footer-social">
          <SfListItem
            v-for="(social, indexSocial) in column.pictures"
            :key="indexSocial"
          >
            <SfMenuItem :label="social">
              <template #icon>
                <SfIcon
                  class="desktop-only"
                  :icon="'/assets/storybook/SfFooter/' + social + '.svg'"
                />
              </template>
            </SfMenuItem>
          </SfListItem>
          <SfInput
            class="home__newsletter-subscribe-input"
            type="email"
            label="Type your email address"
          />
          <SfButton class="home__newsletter-subscribe-button color-secondary">
            Subscribe
          </SfButton>
        </SfList>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>
<script>
import {
  SfTopBar,
  SfButton,
  SfSearchBar,
  SfHeader,
  SfHero,
  SfHeading,
  SfBannerGrid,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfProductCard,
  SfImage,
  SfFooter,
  SfList,
  SfMenuItem,
  SfIcon,
  SfInput
} from "@storefront-ui/vue";
export default {
  name: "Home",
  components: {
    SfTopBar,
    SfButton,
    SfSearchBar,
    SfHeader,
    SfHero,
    SfHeading,
    SfBannerGrid,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfProductCard,
    SfImage,
    SfFooter,
    SfList,
    SfMenuItem,
    SfIcon,
    SfInput
  },
  data() {
    return {
      locationSrc: {
        mobile: { url: "/assets/storybook/Home/flag.png" },
        desktop: { url: "/assets/storybook/Home/flag.png" }
      },
      logoSrc: {
        mobile: { url: "/assets/storybook/Home/StorefrontUILogo.png" },
        desktop: { url: "/assets/storybook/Home/StorefrontUILogo.png" }
      },
      navigationItems: ["women", "man", "kids"],
      tabs: ["Woman", "Man"],
      headingTitle: {
        mobile: "Match it with",
        desktop: "Bestsellers"
      },
      heroes: [
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#eceff1",
          image: "assets/storybook/Home/bannerH.jpg"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#efebe9",
          image: "assets/storybook/Home/bannerHM.jpg",
          className:
            "sf-hero-item--position-bg-top-left sf-hero-item--align-right"
        },
        {
          title: "Colorful summer dresses are already in store",
          subtitle: "SUMMER COLLECTION 2020",
          buttonText: "Learn more",
          background: "#fce4ec",
          image: "assets/storybook/Home/bannerH.jpg"
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
      footerColumns: [
        {
          title: "About us",
          items: ["Who we are", "Quality in the details", "Customer Reviews"]
        },
        {
          title: "Departments",
          items: ["Women fashion", "Men fashion", "Kidswear", "Home"]
        },
        {
          title: "Help",
          items: ["Customer service", "Size guide", "Contact us"]
        },
        {
          title: "Payment & delivery",
          items: ["Purchase terms", "Guarantee"]
        },
        {
          title: "Social",
          pictures: ["facebook", "pinterest", "twitter", "youtube"]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#home {
  box-sizing: border-box;
}
.home__top-bar {
  padding: var(--spacer-xs) var(--spacer-base);
}
.home__top-bar-location-image {
  margin: 0 0 0 var(--spacer-xs);
}
.home__top-bar-text {
  display: none;
}
.home__search-bar {
  margin: var(--spacer-sm) var(--spacer-lg) var(--spacer-xs) var(--spacer-lg);
  height: 1.375rem;
}
.home__header {
  display: none;
}
.home__hero {
  margin: var(--spacer-xl) 0 0 0;
}
.home__heading {
  display: flex;
  justify-content: space-between;
  margin: var(--spacer-base) 0;
  &-text {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    font-family: var(--font-family-secondary);
  }
}
.home__bottom-banner {
  display: none;
}
.home__footer-social {
  display: flex;
  flex-direction: column;
}
.home__newsletter-subscribe-input,
.home__newsletter-subscribe-button {
  display: none;
}
@include for-desktop {
  .home__top-bar-text {
    display: inline-block;
    margin: 0 0 0 var(--spacer-2xs);
  }
  .home__search-bar {
    display: none;
  }
  .home__header {
    display: block;
  }
  .home__heading {
    justify-content: center;
  }
  .home__bottom-banner {
    display: block;
  }
  .home__footer-social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .home__newsletter-subscribe-input,
  .home__newsletter-subscribe-button {
    display: inline-block;
  }
  .home__newsletter-subscribe-input {
    width: 15.125rem;
  }
}
</style>
