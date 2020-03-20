<template>
  <div id="product">
    <div class="desktop-only">
      <SfTopBar class="topbar">
        <template #center>
          <p class="topbar__center">
            Download our application.
          </p>
          <SfButton class="sf-button--text">Find out more</SfButton>
        </template>
        <template #left>
          <SfButton class="sf-button--text">Help & FAQs</SfButton>
        </template>
        <template #right>
          <div class="topbar__right">Location:</div>
          <SfImage src="/assets/storybook/SfTopBar/flag.png" alt="flag" />
        </template>
      </SfTopBar>
      <SfHeader
        title="Storefront UI"
        logo="/assets/logo.svg"
        active-icon="account"
        :has-mobile-search="false"
        search-placeholder="Search for items"
        wishlist-icon="heart"
        :is-sticky="false"
        account-icon="profile"
        cart-items-qty="0"
        @click:cart="alert('@click:cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:account="alert('@click:account')"
      >
        <template #navigation>
          <SfHeaderNavigationItem v-for="item in navigation" :key="item">
            <a
              href="#"
              :style="{ display: 'flex', alignItems: 'center', height: '100%' }"
              >{{ item }}</a
            >
          </SfHeaderNavigationItem>
        </template>
      </SfHeader>
      <SfBreadcrumbs :breadcrumbs="breadcrumbs" />
    </div>
    <main class="product__details">
      <SfChevron
        class="sf-chevron--left product__details__chevron mobile-only"
      />
      <SfGallery
        :images="product.images"
        image-width="400"
        image-height="500"
        class="mobile-only"
      />
      <div class="product__details__images desktop-only">
        <SfImage :src="product.images[1].big.url" />
        <SfImage :src="product.images[2].big.url" />
      </div>
      <div class="product__details__info">
        <div class="header">
          <SfHeading
            :title="product.name"
            :level="3"
            class="sf-heading--no-underline sf-heading--left product-details__heading"
          />
          <SfIcon icon="drag" class="mobile-only" />
        </div>
        <div class="product__details__price-and-review">
          <SfPrice :regular="product.price" />
          <div>
            <SfRating :score="product.rating.rate" :max="product.rating.max" />
            <SfButton class="sf-button--text desktop-only"
              >Read all reviews</SfButton
            >
          </div>
        </div>
        <div>
          <p class="desktop-only">
            {{ product.description }}
          </p>
          <SfButton class="sf-button--text product__details btn__guide">
            Size guide
          </SfButton>
          <!-- TODO: ADD SfSelect -->
          <div class="product__details__colors desktop-only">
            <div>Color</div>
            <div v-for="(color, i) in product.colors" :key="i">
              <SfColor :color="color" class="product__color" />
            </div>
          </div>
          <SfAddToCart />
          <SfButton class="sf-button--text product__details btn__save">
            Save for later
          </SfButton>
          <SfButton class="sf-button--text product__details btn__compare">
            Add to compare
          </SfButton>
        </div>
        <SfTabs :open-tab="1" style="margin: 40px auto 80px">
          <SfTab v-for="tab in tabs" :key="tab.title" :title="tab.title">
            {{ tab.content }}
            <div v-if="tab.title === 'Description'">
              <SfProperty
                v-for="(detailed, i) in product.details"
                :key="i"
                :name="detailed.name"
                :value="detailed.value"
              />
            </div>
            <div v-if="tab.title === 'Read reviews'">
              <div v-for="(review, i) in product.reviews" :key="i">
                <SfReview
                  :author="review.author"
                  :date="review.date"
                  :message="review.message"
                  :max-rating="review.rating.max"
                  :rating="review.rating.rate"
                  :char-limit="250"
                  read-more-text="Read more"
                  hide-full-text="Read less"
                />
              </div>
            </div>
          </SfTab>
        </SfTabs>
      </div>
    </main>

    <SfBottomNavigation class="mobile-only">
      <SfBottomNavigationItem
        v-for="(item, key) in bottomNavigationItems"
        :key="key"
        :icon="item.icon"
        :icon-active="item.iconActive"
        :label="item.label"
        icon-size="17px"
        :is-active="currentIcon === item.iconActive"
        @click="currentIcon = item.iconActive"
      />
      <SfBottomNavigationItem
        label="Basket"
        icon="add_to_cart"
        :is-floating="true"
      >
        <template #icon>
          <SfCircleIcon aria-label="Add to cart">
            <SfIcon
              icon="add_to_cart"
              color="white"
              size="25px"
              :style="{ margin: '0 0 0 -2px' }"
            />
          </SfCircleIcon>
        </template>
      </SfBottomNavigationItem>
    </SfBottomNavigation>
  </div>
</template>
<script>
import {
  SfGallery,
  SfImage,
  SfHeading,
  SfPrice,
  SfRating,
  SfIcon,
  SfTabs,
  SfProperty,
  SfBottomNavigation,
  SfCircleIcon,
  SfChevron,
  SfTopBar,
  SfButton,
  SfHeader,
  SfBreadcrumbs,
  SfReview,
  SfAddToCart,
  SfColor
} from "@storefront-ui/vue";
import SfTab from "@storefront-ui/vue/src/components/organisms/SfTabs/_internal/SfTab";
import SfBottomNavigationItem from "@storefront-ui/vue/src/components/organisms/SfBottomNavigation/_internal/SfBottomNavigationItem";
import SfHeaderNavigationItem from "@storefront-ui/vue/src/components/organisms/SfHeader/_internal/SfHeaderNavigationItem";

export default {
  name: "Product",
  components: {
    SfGallery,
    SfImage,
    SfHeading,
    SfPrice,
    SfRating,
    SfIcon,
    SfTabs,
    SfTab,
    SfProperty,
    SfBottomNavigation,
    SfBottomNavigationItem,
    SfCircleIcon,
    SfChevron,
    SfTopBar,
    SfButton,
    SfHeader,
    SfBreadcrumbs,
    SfReview,
    SfAddToCart,
    SfColor,
    SfHeaderNavigationItem
  },
  data() {
    return {
      product: {
        name: "Cashmere Sweater",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        images: [
          {
            mobile: { url: "assets/storybook/Product/productM.png" },
            desktop: { url: "assets/storybook/Product/productM.png" },
            big: { url: "assets/storybook/Product/productM.png" }
          },
          {
            mobile: { url: "assets/storybook/Product/productA.jpg" },
            desktop: { url: "assets/storybook/Product/productA.jpg" },
            big: { url: "assets/storybook/Product/productA.jpg" }
          },
          {
            mobile: { url: "assets/storybook/Product/productB.jpg" },
            desktop: { url: "assets/storybook/Product/productB.jpg" },
            big: { url: "assets/storybook/Product/productB.jpg" }
          }
        ],
        price: "$50.00",
        colors: ["#EDCBB9", "#ABD9D8", "#DB5593", "#ABD9D8", "#DB5593"],
        rating: {
          rate: 4,
          max: 5
        },
        details: [
          {
            name: "Code",
            value: 435435
          },
          {
            name: "Material",
            value: "Cotton"
          },
          {
            name: "Category",
            value: "Pants"
          },
          {
            name: "Country",
            value: "Poland"
          }
        ],
        reviews: [
          {
            author: "Jane D.Smith",
            date: "April 2019",
            message:
              "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
            rating: {
              max: 5,
              rate: 4
            }
          },
          {
            author: "Jane D.Smith",
            date: "April 2019",
            message:
              "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
            rating: {
              max: 5,
              rate: 4
            }
          }
        ]
      },
      breadcrumbs: [
        { text: "Home", route: { link: "#" } },
        { text: "Category", route: { link: "#" } },
        { text: "Pants", route: { link: "#" } }
      ],
      tabs: [
        {
          title: "Description",
          content:
            "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."
        },
        {
          title: "Read reviews",
          content: ""
        },
        {
          title: "Additional Information",
          content:
            "The Marissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses."
        }
      ],
      bottomNavigationItems: [
        {
          icon: "menu",
          iconActive: "",
          label: "Menu"
        },
        {
          icon: "heart",
          iconActive: "heart_fill",
          label: "Heart"
        },
        {
          icon: "profile",
          iconActive: "profile_fill",
          label: "Profile"
        }
      ],
      currentIcon: "heart_fill",
      isMobile: false,
      navigation: ["women", "man", "kids"]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

.topbar {
  &__center {
    margin: 0 5px 0 0;
  }
  &__right {
    margin: 0 27px 0 0;
  }
}

.product__details {
  &__chevron {
    --chevron-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: 24px 0 0 24px;
  }
  &__images {
    display: flex;
    flex-direction: column;
  }
  &__info {
    margin: 32px auto 8px;
  }
  &__colors {
    display: flex;
  }
  @include for-desktop {
    display: flex;
    max-width: 1240px;
    margin: 0 auto;
    &__info {
      max-width: 544px;
      margin: 0 0 0 123px;
    }
    &__price-and-review {
      display: flex;
      justify-content: space-between;
      margin: 26px 0 0 0;
    }
  }
}

.btn {
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: 40px 0 24px auto;
  }
}

.sf-breadcrumbs {
  max-width: 1240px;
  margin: 32px auto 24px;
}

.product__color {
  margin: 4px 4px 40px;
}

.product {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
