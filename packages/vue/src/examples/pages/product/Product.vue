<template>
  <div id="product">
    <SfSlidingSection class="product">
      <template #static>
        <SfImage
          src="assets/storybook/productpage/productA.jpg"
          class="desktop-only"
        />
        <SfImage
          src="assets/storybook/productpage/productB.jpg"
          class="desktop-only"
        />
        <SfGallery
          class="gallery-mobile mobile-only"
          :images="[
            {
              small: { url: 'assets/storybook/productpage/productM.jpg' },
              big: { url: 'assets/storybook/productpage/productM.jpg' }
            },
            {
              small: { url: 'assets/storybook/productpage/productM.jpg' },
              big: { url: 'assets/storybook/productpage/productM.jpg' }
            }
          ]"
        />
      </template>
      <template #sliding="{isActive}">
        <SfSticky class="product-details">
          <div class="product-details__mobile-top">
            <div>
              <SfHeading
                title="Cashmere Sweater"
                :level="1"
                class="sf-heading--no-underline sf-heading--left product-details__heading"
              />
              <div class="product-details__sub">
                <SfPrice
                  regular="$50.00"
                  class="sf-price--big product-details__sub-price"
                />
                <div class="product-details__sub-rating">
                  <SfRating :score="4" :max="5" />
                  <div class="product-details__sub-reviews desktop-only">
                    Read all 1 review
                  </div>
                  <div class="product-details__sub-reviews mobile-only">
                    (1)
                  </div>
                </div>
              </div>
            </div>
            <transition name="fade">
              <SfIcon
                v-if="!isActive"
                color="gray-secondary"
                size="40px"
                class="icon-hand"
              >
                <svg viewBox="0 0 40 40">
                  <path
                    d="M23.4875 15.4458C23.0438 15.7693 22.7282 16.2021 22.5516 16.6818C21.6469 16.0552 20.4094 16.0349 19.4673 16.7177C19.0751 17.0036 18.7829 17.3771 18.5985 17.7911L15.2547 13.1879C14.3891 11.9957 12.7204 11.7317 11.5297 12.5973C10.3375 13.4629 10.0735 15.1301 10.9391 16.3223L18.5875 26.8487L16.1281 25.7534C14.7828 25.1549 13.2063 25.7596 12.6078 27.1049C12.0078 28.4503 12.6141 30.0268 13.9594 30.6253C14.2688 30.7643 15.4609 31.294 15.7094 31.4049C17.6109 32.2565 19.7016 34.5221 21.6078 35.3737C24.2687 36.5612 28.1938 37.819 28.4158 37.8925C28.7658 38.0081 29.1423 37.8175 29.2564 37.4675C29.372 37.119 29.1814 36.7409 28.833 36.6268C28.6142 36.5549 24.3438 35.1425 22.147 34.1534C20.6532 33.4831 18.3235 31.1003 16.2518 30.1877C16.0033 30.0784 14.8111 29.5455 14.5018 29.4081C13.8283 29.1081 13.5268 28.3205 13.8252 27.6471C14.1252 26.9753 14.9127 26.6721 15.5861 26.9721L20.1441 29.0018C20.6207 29.2596 21.5004 28.5893 21.0317 27.9425L12.0193 15.5377C11.5865 14.9423 11.7177 14.108 12.313 13.6752C12.9099 13.2424 13.7427 13.3752 14.1755 13.9705L20.8379 23.1393C21.0535 23.4377 21.4707 23.5034 21.7691 23.2877C22.066 23.0705 22.1332 22.6534 21.916 22.3565L19.9566 19.6596C19.5238 19.0627 19.6566 18.2299 20.252 17.7971C20.8473 17.3643 21.6816 17.4956 22.1144 18.0924L24.0738 20.7893C24.2894 21.0862 24.7066 21.1518 25.005 20.9362C25.3019 20.719 25.3691 20.3034 25.1519 20.005L23.9769 18.3862C23.5441 17.7909 23.6754 16.9565 24.2722 16.5237C24.8675 16.0909 25.7019 16.2237 26.1347 16.819L28.0925 19.5159C28.3097 19.8143 28.7269 19.88 29.0237 19.6643C29.3222 19.4472 29.3878 19.03 29.1722 18.7331L27.9956 17.1143C27.5628 16.519 27.6956 15.6847 28.2909 15.2519C28.8878 14.8191 29.7206 14.9519 30.1534 15.5472L32.8972 19.3222C35.4628 22.855 35.7519 27.7878 37.7924 30.5986C38.0096 30.8955 38.4267 30.9611 38.7236 30.7455C39.0221 30.5283 39.0877 30.1127 38.8721 29.8142C37.1127 27.3923 36.5517 22.0846 33.9753 18.539L31.2331 14.7625C30.3674 13.5718 28.6987 13.3078 27.5081 14.1734C27.0627 14.4953 26.7487 14.9296 26.5721 15.4093C25.6675 14.7827 24.4284 14.7624 23.4878 15.4452L23.4875 15.4458Z"
                  />
                  <path
                    d="M6.86194 12.1957C7.12132 11.9348 7.54318 11.9348 7.80414 12.1957C8.06508 12.4566 8.06508 12.8785 7.80414 13.1379L5.13694 15.8051C4.87756 16.066 4.4557 16.066 4.19474 15.8051L1.52754 13.1379C1.26816 12.8785 1.26816 12.4566 1.52754 12.1957C1.78848 11.9348 2.21034 11.9348 2.4713 12.1957L3.99942 13.7238V2.00021C3.99942 1.63146 4.29786 1.33301 4.66662 1.33301C5.03381 1.33301 5.33226 1.63144 5.33226 2.00021V13.7282L6.86194 12.1957Z"
                  />
                </svg>
              </SfIcon>
            </transition>
          </div>
          <p class="product-details__description desktop-only">
            Find stunning women cocktail and party dresses. Stand out in lace
            and metallic cocktail dresses and party dresses from all your
            favorite brands.
          </p>
          <div class="product-details__action">
            <button class="sf-action">Size guide</button>
          </div>
          <div class="product-details__section">
            <SfSelect
              v-model="size"
              label="Size"
              class="sf-select--bordered product-details__attribute"
            >
              <SfSelectOption
                v-for="size in sizes"
                :key="size.value"
                :value="size.value"
              >
                <SfProductOption :label="size.label" />
              </SfSelectOption>
            </SfSelect>
            <SfSelect
              v-model="color"
              label="Color"
              class="sf-select--bordered product-details__attribute"
            >
              <SfSelectOption
                v-for="color in colors"
                :key="color.value"
                :value="color.value"
              >
                <SfProductOption :label="color.label" :color="color.color" />
              </SfSelectOption>
            </SfSelect>
          </div>
          <div class="product-details__section">
            <SfAlert
              message="Low in stock"
              type="warning"
              class="product-details__alert mobile-only"
            />
            <SfAddToCart
              :stock="stock"
              v-model="qty"
              :canAddToCart="stock > 0"
              class="product-details__add-to-cart"
            />
            <div class="product-details__action">
              <button class="sf-action">Save for later</button>
            </div>
            <div class="product-details__action">
              <button class="sf-action">Add to compare</button>
            </div>
          </div>
          <SfTabs class="product-details__tabs" :openTab="2">
            <SfTab title="Description">
              <div>
                <p>
                  The Karissa V-Neck Tee features a semi-fitted shape that's
                  flattering for every figure. You can hit the gym with
                  confidence while it hugs curves and hides common "problem"
                  areas. Find stunning women's cocktail dresses and party
                  dresses.
                </p>
              </div>
              <div class="product-details__properties">
                <SfProperty
                  v-for="(property, i) in properties"
                  :key="i"
                  :name="property.name"
                  :value="property.value"
                  class="product-property"
                />
              </div>
            </SfTab>
            <SfTab title="Read reviews">
              <SfReview
                class="product-details__review"
                v-for="(review, i) in reviews"
                :key="i"
                :author="review.author"
                :date="review.date"
                :message="review.message"
                :rating="review.rating"
                :max-rating="5"
              />
            </SfTab>
            <SfTab title="Additional Information">
              <SfHeading
                title="Brand"
                :level="3"
                class="sf-heading--no-underline sf-heading--left"
              />
              <p>
                <u>Brand name</u> is the perfect pairing of quality and design.
                This label creates major everyday vibes with its collection of
                modern brooches, silver and gold jewellery, or clips it back
                with hair accessories in geo styles.
              </p>
            </SfTab>
          </SfTabs>
        </SfSticky>
      </template>
    </SfSlidingSection>
    <SfSection title-heading="Match it with" class="section">
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
    <SfSection title-heading="You might also like" class="section">
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
      <div class="grid">
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageB.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.jpg"
              >katherina_trn</SfImage
            >
          </div>
        </div>
        <div class="grid__row">
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageD.jpg"
              >katherina_trn</SfImage
            >
          </div>
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.jpg"
              >katherina_trn</SfImage
            >
          </div>
        </div>
      </div>
    </SfSection>
    <SfBanner
      title="Download our application to your mobile"
      image="assets/storybook/homepage/bannerD.png"
      class="banner-application sf-banner--left sf-banner--center desktop-only"
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
    <SfBottomNavigation class="mobile-only">
      <SfBottomNavigationItem>
        <SfIcon icon="home" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="menu" size="20px" style="width: 25px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="heart" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem>
        <SfIcon icon="profile" size="20px" />
      </SfBottomNavigationItem>
      <SfBottomNavigationItem class="bottom-navigation-circle">
        <SfCircleIcon
          class="sf-bottom-navigation__floating-icon sf-circle-icon--big"
        >
          <SfIcon
            icon="add_to_cart"
            size="20px"
            color="white"
            style="margin-right: 4px;"
          />
        </SfCircleIcon>
      </SfBottomNavigationItem>
    </SfBottomNavigation>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfProductOption,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfProductCard,
  SfCarousel,
  SfSection,
  SfImage,
  SfBanner,
  SfBottomNavigation,
  SfCircleIcon,
  SfIcon,
  SfAlert,
  SfSticky,
  SfSlidingSection,
  SfReview
} from "@storefront-ui/vue";

export default {
  name: "Product",
  data() {
    return {
      qty: "1",
      stock: 5,
      size: "",
      sizes: [
        { label: "XXS", value: "xxs" },
        { label: "XS", value: "xs" },
        { label: "S", value: "s" },
        { label: "M", value: "m" },
        { label: "L", value: "l" },
        { label: "XL", value: "xl" },
        { label: "XXL", value: "xxl" }
      ],
      color: "",
      colors: [
        { label: "Red", value: "red", color: "#990611" },
        { label: "Black", value: "black", color: "#000000" },
        { label: "Yellow", value: "yellow", color: "#DCA742" },
        { label: "Blue", value: "blue", color: "#004F97" },
        { label: "Navy", value: "navy", color: "#656466" },
        { label: "White", value: "white", color: "#FFFFFF" }
      ],
      properties: [
        {
          name: "Product Code",
          value: "578902-00"
        },
        {
          name: "Category",
          value: "Pants"
        },
        {
          name: "Material",
          value: "Cotton"
        },
        {
          name: "Country",
          value: "Germany"
        }
      ],
      products: [
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
      ],
      reviews: [
        {
          author: "Jane D.Smith",
          date: "April 2019",
          message:
            "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend",
          rating: 4
        },
        {
          author: "Mari",
          date: "Jan 2018",
          message:
            "Excellent light output from this led fitting. Relatively easy to fix to the ceiling,but having two people makes it easier, to complete the installation. Unable to comment on reliability at this time, but I am hopeful of years of use with good light levels. Excellent light output from this led fitting. Relatively easy to fix to the ceiling,",
          rating: 5
        }
      ],
      detailsIsActive: false
    };
  },
  components: {
    SfAlert,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfProductOption,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfProductCard,
    SfCarousel,
    SfSection,
    SfImage,
    SfBanner,
    SfBottomNavigation,
    SfCircleIcon,
    SfIcon,
    SfSticky,
    SfSlidingSection,
    SfReview
  },
  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
  },
  mounted() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";
@import "~@storefront-ui/vue/src/utilities/transitions/transitions.scss";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#product {
  box-sizing: border-box;
  margin: 0 0 60px 0;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
  }
}
.product-details {
  &__action {
    display: flex;
    margin: $spacer-big 0 ($spacer-big / 2);
    @include for-desktop {
      justify-content: flex-end;
    }
  }
  &__add-to-cart {
    margin-top: 1.5rem;
    @include for-desktop {
      margin-top: $spacer-extra-big;
    }
  }
  &__alert {
    margin-top: 1.5rem;
  }
  &__attribute {
    margin-bottom: $spacer-big;
  }
  &__description {
    margin: $spacer-extra-big 0 ($spacer-big * 3) 0;
    font-family: $body-font-family-secondary;
    font-size: $font-size-regular-mobile;
    line-height: 1.6;
    @include for-desktop {
      font-size: $font-size-regular-desktop;
    }
  }
  &__divider {
    margin-top: 30px;
  }
  &__heading {
    margin-top: $spacer-big;
    /deep/ .sf-heading__title {
      font-size: $font-size-big-mobile;
      font-weight: $body-font-weight-primary;
      @include for-desktop {
        font-size: $h1-font-size-desktop;
        font-weight: $body-font-weight-secondary;
      }
    }
    @include for-desktop {
      margin-top: 0;
    }
  }
  &__mobile-bar {
    display: none;
    padding: $spacer-medium 0;
    box-sizing: border-box;
    .product--is-active & {
      display: block;
      @include for-desktop {
        display: none;
      }
    }
    @include for-desktop {
      display: none;
    }
  }
  &__mobile-top {
    display: flex;
    align-items: center;
    @include for-desktop {
      display: block;
    }
  }
  &__properties {
    margin-top: $spacer-big;
  }
  &__sub {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &__sub-price {
    flex-basis: 100%;
    margin-top: $spacer-big / 4;
    @include for-desktop {
      flex-basis: auto;
      margin-top: $spacer-big / 2;
    }
  }
  &__sub-rating {
    display: flex;
    margin-top: $spacer-big / 2;
    @include for-desktop {
      margin-left: auto;
    }
  }
  &__sub-reviews {
    margin-left: 10px;
    font-size: 0.75rem;
  }
  &__section {
    border-bottom: 1px solid #f1f2f3;
    padding-bottom: 10px;
    @include for-desktop {
      border: 0;
      padding-bottom: 0;
    }
  }
  &__tabs {
    margin-top: $spacer-big;
    @include for-desktop {
      margin-top: 5 * $spacer-big;
    }
    p {
      margin: 0;
    }
  }
  &__review {
    padding-bottom: $spacer-big;
    @include for-desktop {
      padding-bottom: $spacer-extra-big;
      border-bottom: 1px solid $c-light-primary;
    }
    & + & {
      padding-top: $spacer-extra-big;
      border-top: 1px solid $c-light-primary;
      @include for-desktop {
        border-top: 0;
        padding-top: $spacer-extra-big;
      }
    }
  }
}
.product-property {
  padding: $spacer-small 0;
}
.gallery-mobile {
  /*height: calc(100vh - 177px);*/
  height: calc((var(--vh, 1vh) * 100) - 177px);
  /deep/ .glide {
    &,
    * {
      height: 100%;
    }
    &__slide {
      position: relative;
      overflow: hidden;
      & > img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        min-width: calc(
          (375 / 490) * (100vh - 177px)
        ); // (oldWidth / oldHeight) * newHeight = newWidth
        min-width: calc(((var(--vh, 1vh) * 100) - 177px) * (375 / 490));
      }
    }
  }
}
.icon-hand {
  margin-left: auto;
  @include for-desktop {
    display: none;
  }
}
.section {
  @media (max-width: $desktop-min) {
    padding-left: $spacer-big;
    padding-right: $spacer-big;
  }
}
/* we have PR to fix bullets position */
.sf-gallery {
  $this: &;
  /deep/ {
    ul {
      margin: 0;
    }
    #{$this}__thumbs {
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      bottom: 10px;
      display: flex;
    }
    #{$this}__item {
      &:not(:first-child) {
        margin: 0 0 0 $spacer;
      }
    }
  }
}
/* same on the home, category */
.bottom-navigation-circle {
  opacity: 1;
}
/* same on the home */
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
.product-card {
  max-width: unset; // ?
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
  /deep/ .sf-carousel__wrapper {
    padding: 20px 0;
    @include for-desktop {
      padding: 20px;
      max-width: calc(100% - 216px);
    }
  }
}
.grid {
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
/* TODO: Add SfAction component or add SfButton modifier */
.sf-action {
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  color: $c-text-primary;
  font-family: $body-font-family-secondary;
  font-size: $font-size-regular-mobile;
  font-weight: $body-font-weight-secondary;
  line-height: 1.6;
  text-decoration: underline;
  cursor: pointer;
  @include for-desktop {
    font-size: $font-size-regular-desktop;
  }
}
</style>
