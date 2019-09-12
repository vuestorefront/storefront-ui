<template>
  <div id="product">
    <section :class="{ 'product--is-active': detailsIsActive }" class="product">
      <div class="product-gallery">
        <!-- SfImages for desktop -->
        <div class="desktop-only">
          <SfImage src="assets/storybook/productpage/productA.png" />
          <SfImage src="assets/storybook/productpage/productB.png" />
        </div>
        <div class="mobile-only">
          <SfGallery
            :images="[
              {
                small: { url: 'assets/storybook/productpage/productM.png' },
                big: { url: 'assets/storybook/productpage/productM.png' }
              },
              {
                small: { url: 'assets/storybook/productpage/productM.png' },
                big: { url: 'assets/storybook/productpage/productM.png' }
              }
            ]"
          />
        </div>
      </div>
      <div class="product-details" @click="toggleMobileCard">
        <!-- TODO: fix SfSticky-->
        <div style="position: sticky; top: 0;">
          <div class="product-details__mobile-bar">
            <SfIcon
              icon="cross"
              size="xxs"
              @click="toggleMobileCard"
              ref="mobileCross"
            />
          </div>
          <SfHeading
            title="Cashmere Sweater"
            :level="1"
            class="sf-heading--no-underline sf-heading--left product-details__heading"
          />
          <div class="product-details__sub">
            <SfPrice
              regular="$95.00"
              special="$50.00"
              class="sf-price--big product-details__sub-price"
            />
            <div class="product-details__sub-rating">
              <SfRating :score="4" :max="5" />
              <div class="product-details__sub-reviews desktop-only">
                Read all 1 review
              </div>
              <div class="product-details__sub-reviews mobile-only">(1)</div>
            </div>
          </div>
          <!-- short description -->
          <p class="product-details__description desktop-only">
            Find stunning women cocktail and party dresses. Stand out in lace
            and metallic cocktail dresses and party dresses from all your
            favorite brands.
          </p>
          <!-- Action: Size guide -->
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
                >{{ size.label }}</SfSelectOption
              >
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
            <SfAlert message="Low in stock" type="warning" class="product-details__alert"/>
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
          <SfTabs class="product-details__tabs" :openTab="1">
            <SfTab header="Description">
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
            <SfTab header="1 Review">
              <div>
                <SfHeading
                  title="Mari"
                  :level="3"
                  class="sf-heading--no-underline sf-heading--left"
                />
                <div style="display: flex">
                  <SfRating :score="4" :max="5" />
                  <small>Jan 2018</small>
                </div>
                <p>
                  Excellent light output from this led fitting. Relatively easy
                  to fix to the ceiling,but having two people makes it easier,
                  to complete the installation. Unable to comment on reliability
                  at this time, but I am hopeful of years of use with good light
                  levels... <span style="color: #5ECE7B">Read more</span>
                </p>
              </div>
            </SfTab>
            <SfTab header="Additional Information">
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
              <SfHeading
                title="Take care of me"
                :level="3"
                class="sf-heading--no-underline sf-heading--left"
              />
              <p>
                Just here for the care instructions? Yeah, we thought so
              </p>
              <p>
                Do not wash!
              </p>
            </SfTab>
          </SfTabs>
        </div>
      </div>
    </section>
    <!-- OTHER -->
    <SfSection titleHeading="Match it with">
      <SfCarousel
        :settings="{ gap: 0, peek: { before: 100, after: 0 } }"
        class="product-carousel"
      >
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
    <SfSection titleHeading="You might also like">
      <SfCarousel
        :settings="{ gap: 0, peek: { before: 100, after: 0 } }"
        class="product-carousel"
      >
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
    <SfSection titleHeading="Share Your Look" subtitleHeading="#YOURLOOK">
      <div class="grid">
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
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageC.png"
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
          <div class="grid__col">
            <SfImage src="assets/storybook/homepage/imageA.png"
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
  SfSticky
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
      ],
      detailsIsActive: false,
      images: [{}, {}, {}]
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
    SfIcon
    // SfSticky
  },
  methods: {
    toggleMobileCard(event) {
      const {target} = event;
      const mobileCross =  this.$refs.mobileCross.$el;
      if (mobileCross.contains(target) || (!mobileCross.contains(target) && !this.detailsIsActive)) {
        this.detailsIsActive = !this.detailsIsActive;
      }
    }
  },
  mounted() {
    document.body.style.setProperty("margin", "0");
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/shared/styles/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

@mixin for-desktop {
  @media screen and (min-width: $desktop-min) {
    @content;
  }
}

#product {
  box-sizing: border-box;
  margin: 0 0 60px 0;
  padding: 0 $spacer-big;
  @include for-desktop {
    max-width: 1240px;
    margin: auto;
    padding: 0;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
}
.product-gallery,
.product-details {
  @include for-desktop {
    flex: 1;
  }
}
.product-gallery {
  overflow: hidden;
  height: calc(100vh - 177px);
  margin: 0 -#{$spacer-big};
  transition: height 150ms ease-in-out;
  background-color: #f1f2f4;
  @include for-desktop {
    height: auto;
  }
  .product--is-active & {
    height: 0 !important;
    @include for-desktop {
      height: auto !important;
    }
  }
}
.product-details {
  @include for-desktop {
    margin-left: 5 * $spacer-big;
  }
  &__action {
    display: flex;
    margin: $spacer-big 0 ($spacer-big / 2);
    @include for-desktop {
      justify-content: flex-end;
    }
  }
  &__add-to-cart {
    margin-top: 1.5rem;;
    @include for-desktop {
      margin-top: $spacer-extra-big;
    }
  }
  &__attribute {
    margin-bottom: $spacer-big;
  }
  &__description {
    margin: (3 * $spacer-big) 0;
    font-family: $body-font-family-secondary;
    font-size: $font-size-big-desktop;
    line-height: 1.6;
  }
  &__divider {
    margin-top: 30px;
  }
  &__heading {
    margin-top: $spacer-big;
    /deep/ .sf-heading__title {
      font-size: $font-size-big-mobile;
      font-weight: $body-font-weight-primary;
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
  &__tabs {
    margin-top: $spacer-big;
    @include for-desktop {
      margin-top: 5 * $spacer-big;
    }
    p {
      margin: 0;
    }
  }
  &__section {
    border-bottom: 1px solid #f1f2f3;
    padding-bottom: 10px;
  }
  &__properties {
    margin-top: $spacer-big;
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
  &__alert{
    margin-top: 1.5rem;
  }
}
.product-property {
  padding: $spacer-small 0;
}
.bottom-navigation-circle {
  opacity: 1;
}
/* TODO: Add SfAction component */
.sf-action {
  border: 0;
  outline: none;
  background-color: transparent;
  font-family: $body-font-family-secondary;
  font-size: $font-size-small-mobile;
  font-width: $body-font-weight-primary;
  line-height: 1.6;
  text-decoration: underline;
  cursor: pointer;
  @include for-desktop {
    font-size: $font-size-big-desktop;
  }
}

/* Just copied from Home Page */
.banner-application {
  min-height: 420px;
  max-width: 1040px;
  margin: auto;
  padding-right: calc(25% + 5rem);
  padding-left: 2.5rem;
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
.product-card {
  max-width: unset; // TODO: test this property and fix if it required
  &:hover {
    box-shadow: 0px 4px 20px rgba(168, 172, 176, 0.19);
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

/*  TODO: CSS class grid should be refactored */
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
/* Shame */
.sf-gallery {
  /deep/ ul {
    margin: 0;
  }
}
</style>
