<template>
  <div class="ck-home">
    <SfHero class="ck-hero">
      <SfHeroItem
        title="Find your convenience store"
        button-text="Pick your store"
        image="image"
      >
        <template #subtitle>
          <p class="ck-hero__subtitle desktop-only">click & collect</p>
        </template>
        <template #call-to-action>
          <p class="ck-hero__description">
            Choose the store, find products and go to collect.
          </p>
          <SfButton class="ck-hero__button">
            Pick your store
          </SfButton>
        </template>
      </SfHeroItem>
      <SfHeroItem
        title="Do you love Polar Pop?"
        button-text="Pick your store"
        :image="img('polarpop.png')"
      >
        <template #subtitle>
          <p class="ck-hero__subtitle desktop-only">click & collect</p>
        </template>
        <template #call-to-action>
          <p class="ck-hero__description">
            Check out the new Circle K Polar Pop For Life Sweepstakes. Plus, you
            can enter my giveaway for Circle K gift cards to pick up your own
            Polar Pops!
          </p>
          <SfImage class="mobile-only" :src="img('polarpop.png')" alt="alt" />
          <SfButton class="ck-hero__button">
            Check this out
          </SfButton>
        </template>
      </SfHeroItem>
    </SfHero>
    <div class="ck-store-locator">
      <div class="store-locator">
        <div class="store-locator__text">Store Locator</div>
        <SfImage class="store-locator__geo" :src="img('geo.svg')" alt="alt" />
      </div>
      <SfSearchBar
        class="ck-searchbar"
        placeholder="Find your store by City or Zip "
        aria-label="Search"
      />
    </div>
    <SfBanner
      class="ck-banner"
      title="Create account and get discounts!"
      description="Create account and get access to discounts, bundles and other features of our store to make your shopping faster and cheaper!"
      button-text="CREATE AN ACCOUNT"
      :image="img('banner-circle.png')"
      background="#F1F2F3"
    />
    <p class="ck-bestsellers">Bestsellers</p>
    <SfCarousel
      class="ck-carousel"
      :style="{ maxWidth: '1140px', margin: 'auto' }"
    >
      <SfCarouselItem v-for="(index, key) in 12" :key="key">
        <SfProductCard
          class="ck-product"
          :image="product.image"
          :image-width="product.imageWidth"
          :image-height="product.imageHeight"
          :price="product.title"
          :title="product.category"
        >
          <template #title>
            <p class="ck-product__category">{{ product.category }}</p>
          </template>
          <template #price>
            <p class="ck-product__title">{{ product.title }}</p>
          </template>
          <template #add-to-cart>
            <SfButton class="ck-product__add-to-cart">
              Click to buy
            </SfButton>
          </template>
          <template #reviews>
            <p class="ck-product__price">{{ product.price }}</p>
          </template>
        </SfProductCard>
      </SfCarouselItem>
    </SfCarousel>
    <SfBanner
      class="ck-banner__phone desktop-only"
      title="Download our application to your mobile"
      button-text="Download"
      background="#F1F2F3"
      :image="img('phone.png')"
    />
  </div>
</template>

<script>
import {
  SfHero,
  SfSearchBar,
  SfImage,
  SfBanner,
  SfButton,
  SfCarousel,
  SfProductCard,
} from "@storefront-ui/vue";
export default {
  name: "CkHome",
  components: {
    SfHero,
    SfSearchBar,
    SfImage,
    SfBanner,
    SfButton,
    SfCarousel,
    SfProductCard,
  },
  data() {
    return {
      product: {
        title: "5 Hour Energy Peach Mango",
        image: this.img("product.svg"),
        category: "HEALTH AND BEAUTY",
        price: "$50",
      },
    };
  },
  methods: {
    img(src) {
      return require(`../assets/${src}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@storefront-ui/vue/styles.scss";

.ck-home {
  margin: 24px 16px 100px;
}

.ck-hero {
  --hero-bullets-bottom: 0;
  --hero-item-padding: 0;
  --hero-item-container-width: 100%;
  --hero-item-title-font-weight: var(--font-extra-bold);
  --hero-item-title-font-size: 30px;
  --button-background: var(--_c-red-primary);
  --button-border-radius: 24px;
  --button-padding: 16px 46px;
  --hero-item-background-size: 0;
  text-align: left;
  &__subtitle {
    color: var(--_c-red-primary);
    font-weight: 700;
    font-size: 18px;
  }
  &__description {
    font-weight: 300;
    font-size: 18px;
    margin-top: 16px;
    @include for-desktop {
      margin-top: 0;
      line-height: 33px;
    }
  }
  &__button {
    margin-top: 23px;
  }
  @include for-desktop {
    --hero-item-background-position: right;
    --hero-item-background-size: contain;
    --hero-item-title-font-size: 42px;
    --hero-item-container-width: 527px;
  }
}

::v-deep .sf-hero__controls {
  --hero-controls-display: none;
}

::v-deep .sf-bullet--active {
  --bullet-background: var(--_c-red-primary);
}

.store-locator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 46px;
  color: var(--_c-dark-primary);
  &__text {
    font-size: 30px;
    font-weight: var(--font-extra-bold);
    @include for-desktop {
      font-size: 40px;
      margin: 19px 103px;
    }
  }
  &__geo {
    width: 64px;
    @include for-desktop {
      position: absolute;
      right: 0;
      transform: translate(0, 40%);
      width: 186px;
      margin-right: 134.5px;
    }
  }
  @include for-desktop {
    margin-top: 73px;
  }
}

.ck-searchbar {
  --search-bar-height: 48px;
  --search-bar-border-width: 0;
  --search-bar-input-text-align: left;
  --search-bar-font-weight: bold;
  --search-bar-font-size: 14px;
  --search-bar-placeholder-color: var(--_c-dark-primary);
  border: 2px solid var(--_c-red-primary);
  border-radius: 34px;
  padding: 13px 20px;
  @include for-desktop {
    margin: 50px 103px;
    padding: 0;
    --search-bar-font-size: 24px;
    --search-bar-width: 600px;
    --search-bar-font-weight: normal;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--_c-dark-primary);
  }
}

.ck-store-locator {
  @include for-desktop {
    &::before {
      content: "";
      width: 100%;
      height: 120px;
      left: 0;
      background: #f1f2f3;
      position: absolute;
      transform: translate(0, 90%);
      border-radius: 60px;
      z-index: -1;
      box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08);
    }
  }
}

.ck-banner {
  margin-top: 54px;
  text-align: left;
  --banner-display-description: block;
  --banner-display-call-to-action: block;
  --banner-background-size: 130%;
  background-position: right bottom;
  @include for-desktop {
    margin-top: 100px;
    --banner-background-size: contain;
  }
}

.ck-bestsellers {
  text-align: left;
  color: var(--_c-red-primary);
  font-weight: 800;
  font-size: 24px;
  margin-top: 40px;
  @include for-desktop {
    font-size: 48px;
    text-align: center;
    margin-bottom: 100px;
  }
}

.ck-carousel {
  --button-border-radius: 60px;
  --button-width: 40px;
}

.ck-product {
  padding: 10px;
  text-align: left;
  &__category {
    font-size: 10px;
    color: #72757e;
    margin-bottom: 10px;
  }
  &__title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  &__price {
    font-size: 18px;
    font-weight: bold;
    color: red;
  }
}

.ck-banner__phone {
  --banner-background-size: contain;
  --banner-width: 1237px;
  --banner-height: 502px;
  --banner-title-font-weight: 800;
  --banner-title-font-size: 42px;
  --button-border-radius: 24px;
  --button-width: 261px;
  --banner-title-text-transform: none;
  --banner-container-width: 644px;
  --banner-title-margin: 39px auto;
  --button-box-shadow: 4px 12px 24px rgba(119, 121, 122, 0.25);
  background-position: right;
  margin: 80px auto;
  text-align: left;
}
</style>
