<template>
  <div id="product">
    <div style="display: flex">
      <div style="margin-left: 100px; flex: 1">
        <SfImage src="assets/storybook/productpage/productA.png" />
        <SfImage src="assets/storybook/productpage/productB.png" />
      </div>
      <div style="margin-left: 100px; flex: 1">
        <SfSticky>
          <SfHeading title="Cashmere Sweater" class="sf-heading--left" />
          <!-- -->
          <div style="display:flex; align-items: center">
            <SfPrice regular="$50.00" />
            <SfRating :score="4" :max="5" style="margin-left: auto" />
            <div
              style="margin-left: 10px; font-size: 12px; text-decoration: underline"
            >
              Read all 28 reviews
            </div>
          </div>
          <!-- -->
          <div style="margin-top: 40px">
            Find stunning women cocktail and party dresses. Stand out in lace
            and metallic cocktail dresses and party dresses from all your
            favorite brands.
          </div>
          <!-- -->
          <div style="margin-top: 60px">
            <div style="text-decoration: underline; display: flex; justify-content: flex-end">Size guide</div>
            <!-- -->
            <SfSelect
              v-model="size"
              label="Size"
              class="sf-select--bordered"
              style="margin-top: 10px"
            >
              <SfSelectOption
                v-for="(option, i) in sizes"
                :key="i"
                :value="option.value"
              >
                <span>{{ option.label }}</span>
              </SfSelectOption>
            </SfSelect>
            <!-- -->
            <SfSelect style="margin-top: 20px" v-model="color" label="Color" class="sf-select--bordered">
              <SfSelectOption
                v-for="(option, i) in colors"
                :key="i"
                :value="option.value"
              >
                <SfProductOption :color="option.color" :label="option.label" />
              </SfSelectOption>
            </SfSelect>
            <div style="text-decoration: underline; display: flex; justify-content: flex-end; margin-top: 20px">Save for later</div>
            <div style="text-decoration: underline; display: flex; justify-content: flex-end; margin-top: 20px">Add to compare</div>
          </div>
          <!-- -->
          <SfTabs style="margin-top: 100px" :openTab="1">
            <SfTab header="Description">
              <div style="margin: 40px 0;">
                The Karissa V-Neck Tee features a semi-fitted shape that's
                flattering for every figure. You can hit the gym with confidence
                while it hugs curves and hides common "problem" areas. Find
                stunning women's cocktail dresses and party dresses.
              </div>
              <SfProperty
                :name="property.name"
                :value="property.value"
                v-for="(property, i) in properties"
                :key="i"
              ></SfProperty>
            </SfTab>
            <SfTab header="28 Reviews">Reviews</SfTab>
            <SfTab header="Additional Information"
              >Additional Information</SfTab
            >
          </SfTabs>
        </SfSticky>
      </div>
    </div>
    <SfSection titleHeading="Match it with">
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
    <SfSection titleHeading="You might also like">
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
    <!-- SfImages Grid   -->
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
  SfHeading,
  SfPrice,
  SfProperty,
  SfRating,
  SfBanner,
  SfImage,
  SfProductCard,
  SfProductOption,
  SfSection,
  SfSelect,
  SfSticky,
  SfCarousel,
  SfTabs
} from "@storefront-ui/vue";

export default {
  name: "Product",
  data() {
    return {
      size: "l",
      color: "red",
      colors: [
        { label: "Red", value: "red", color: "#990611" },
        { label: "Black", value: "black", color: "#000000" },
        { label: "Yellow", value: "yellow", color: "#DCA742" },
        { label: "Blue", value: "blue", color: "#004F97" },
        { label: "Navy", value: "navy", color: "#656466" },
        { label: "White", value: "white", color: "#FFFFFF" }
      ],
      sizes: [
        {
          label: "XS",
          value: "xs"
        },
        {
          label: "S",
          value: "s"
        },
        {
          label: "M",
          value: "m"
        },
        {
          label: "L",
          value: "l"
        },
        {
          label: "XL",
          value: "xl"
        }
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
      ]
    };
  },
  components: {
    SfHeading,
    SfPrice,
    SfProperty,
    SfRating,

    SfBanner,
    SfImage,
    SfProductCard,
    SfProductOption,
    SfSection,
    SfSelect,
    SfSticky,

    SfCarousel,
    SfTabs
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

#product {
  max-width: 1240px;
  margin: auto;
  padding: 0 $spacer-big;
  box-sizing: border-box;
  @media screen and (min-width: $desktop-min) {
    padding: 0;
  }
}
/* copied from home page */
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
</style>
