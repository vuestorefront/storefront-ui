<template>
  <div id="product">
    <section style="margin-bottom: 200px" class="row">
      <!-- row gallery -->
      <div class="column">
        <!-- we need two different sizes for images? one for mobile second for other?-->
        <SfGallery :images="images"></SfGallery>
      </div>
      <!-- column description -->
      <div class="column">
        <!-- column -->
        <SfSticky>
          <!-- product__name -->
          <SfHeading
            title="Cashmere Sweater"
            class="sf-heading--left"
            :level="1"
          />
          <!-- product__sub -->
          <div style="display:flex; align-items: center">
            <SfPrice regular="$50.00" />
            <SfRating :score="4" :max="5" style="margin-left: auto" />
            <div
              style="margin-left: 10px; font-size: 12px; text-decoration: underline"
            >
              Read all 28 reviews
            </div>
          </div>
          <!-- product__descriptions -->
          <div style="margin-top: 40px">
            Find stunning women cocktail and party dresses. Stand out in lace
            and metallic cocktail dresses and party dresses from all your
            favorite brands.
          </div>
          <!-- product__attributes -->
          <div style="margin-top: 60px">
            <div
              style="text-decoration: underline; display: flex; justify-content: flex-end"
            >
              Size guide
            </div>
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
            <SfSelect
              style="margin-top: 20px"
              v-model="color"
              label="Color"
              class="sf-select--bordered"
            >
              <SfSelectOption
                v-for="(option, i) in colors"
                :key="i"
                :value="option.value"
              >
                <SfProductOption :color="option.color" :label="option.label" />
              </SfSelectOption>
            </SfSelect>
            <div
              style="text-decoration: underline; display: flex; justify-content: flex-end; margin-top: 20px"
            >
              Save for later
            </div>
            <div
              style="text-decoration: underline; display: flex; justify-content: flex-end; margin-top: 20px"
            >
              Add to compare
            </div>
          </div>
          <!-- product__details -->
          <SfTabs style="margin-top: 100px" :openTab="3">
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
            <SfTab header="28 Reviews"></SfTab>
            <SfTab header="Additional Information">
              <div style="margin: 40px 0;">
                <b>Brand</b>
                <p>
                  <u>Brand name</u> is the perfect pairing of quality and
                  design. This label creates major everyday vibes with its
                  collection of modern brooches, silver and gold jewellery, or
                  clips it back with hair accessories in geo styles.
                </p>
              </div>
              <div style="margin: 40px 0;">
                <b>Take care of me</b>
                <p>
                  Just here for the care instructions?<br />Yeah, we thought so
                </p>
                <p>
                  Do not wash!
                </p>
              </div>
            </SfTab>
          </SfTabs>
        </SfSticky>
      </div>
    </section>
    <!-- bottom section   -->
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
    <SfSection titleHeading="Share Your Look" subtitleHeading="#YOURLOOK">
      <!-- TODO: need find better way -->
      <!-- TODO: change images to wider -->
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
    <!-- TODO: add SfBottomNaviagtion height to page to prevent hiding last element -->
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
      <SfBottomNavigationItem>
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
  SfHeading,
  SfPrice,
  SfProperty,
  SfIcon,
  SfCircleIcon,
  SfRating,
  SfBanner,
  SfGallery,
  SfImage,
  SfProductCard,
  SfProductOption,
  SfSection,
  SfSelect,
  SfSticky,
  SfBottomNavigation,
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
      images: [
        {
          small: { url: "assets/storybook/productpage/productA.png" },
          big: { url: "assets/storybook/productpage/productA.png" }
        },
        {
          small: { url: "assets/storybook/productpage/productB.png" },
          big: { url: "assets/storybook/productpage/productB.png" }
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
    SfIcon,
    SfCircleIcon,
    SfRating,
    SfBanner,
    SfGallery,
    SfImage,
    SfProductCard,
    SfProductOption,
    SfSection,
    SfSelect,
    SfSticky,
    SfBottomNavigation,
    SfCarousel,
    SfTabs
  },
  mounted() {
    document.body.style.setProperty("margin", "0");
  }
};
</script>
<style lang="scss" scoped>
@import "../../../css/variables";
@import "~@storefront-ui/shared/styles/helpers/visibility";

#product {
  max-width: 1240px;
  margin: auto;
}
/* WIP */
.row {
  @media screen and (min-width: $desktop-min) {
    display: flex;
  }
}
.column {
  @media screen and (min-width: $desktop-min) {
    flex: 1;
  }
  & + & {
    @media screen and (min-width: $desktop-min) {
      margin-left: 100px;
    }
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
/* for images, need new idea */
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
/*  deep */
.sf-gallery{
  /deep/ &__stage{
    flex: 1;
  }
}
</style>
<style lang="scss">
  .glide__slides{
    margin: 0;
  }
</style>
