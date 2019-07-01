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
      <div class="banners-grid__row">
        <div class="banners-grid__col">
          <SfBanner
            title="Coktail & party"
            subtitle="Scarves"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="Shop now"
            image="assets/storybook/homepage/bannerF.png"
            class="sf-banner--left sf-banner--top"
          />
        </div>
        <div class="banners-grid__col">
          <SfBanner
            title="Linen dresses"
            subtitle="Dresses"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            button-text="Shop now"
            image="assets/storybook/homepage/bannerE.png"
            class="sf-banner--left sf-banner--top"
          />
        </div>
        <div class="banners-grid__col">
          <div class="banners-grid__row banners-grid__row--vertical">
            <div class="banners-grid__col">
              <SfBanner
                title="The office life"
                subtitle="T-Shirts"
                image="assets/storybook/homepage/bannerC.png"
                class="sf-banner--left"
              />
            </div>
            <div class="banners-grid__col">
              <SfBanner
                title="Eco sandals"
                subtitle="Summer shoes"
                image="assets/storybook/homepage/bannerG.png"
                class="sf-banner--left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SfCallToAction
      title="Subscribe to Newsletters"
      button-text="Subscribe"
      description="Be aware of upcoming sales and events. Receive gifts and special offers!"
    />
    <SfSection
      :heading="{
        title: 'Best Sellers'
      }"
    >
      <SfCarousel :settings="{ gap: 0 }">
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
    >
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
      subtitle="Fashion to Take Away"
      image="assets/storybook/homepage/bannerD.png"
      class="sf-banner--left desktop-only"
    >
      <template v-slot:title>
        <h1>Download our application to your mobile</h1>
      </template>
      <template v-slot:call-to-action>
        <div>
          <img src="assets/storybook/homepage/google.png" alt="" />
          <img src="assets/storybook/homepage/apple.png" alt="" />
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
<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  box-sizing: border-box;
}
</style>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefrontui/shared/styles/helpers/visibility";

#home {
  box-sizing: border-box;
  max-width: 1240px;
  margin: auto;
}

.banners-grid {
  margin: $spacer-medium 0;
  @media screen and (min-width: $desktop-min) {
    margin: $spacer-extra-big 0;
    display: flex;
  }
  &__row {
    display: flex;
    &--vertical {
      flex-direction: column;
      .banners-grid {
        &__col {
          &:not(:first-child) {
            margin-left: 0;
            margin-top: $spacer-medium;
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
    &:not(:first-child) {
      @media screen and (min-width: $desktop-min) {
        margin-left: 40px;
      }
    }
  }
}
.images-grid {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__row {
    flex: 1;
    display: flex;
    &:not(:first-child) {
      margin-top: $spacer;
      @media screen and (min-width: $desktop-min) {
        margin-top: $spacer-big;
      }
    }
  }
  &__col {
    max-width: 470px;
    &:not(:first-child) {
      margin-left: $spacer;
      @media screen and (min-width: $desktop-min) {
        margin-left: $spacer-big;
      }
    }
  }
}

.product-card {
  /*TODO: unset in main styles? */
  max-width: unset;
}

/* shame reset */
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
