<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <SfGallery :images="product.images" class="product__gallery" />
      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="product.name"
            :level="1"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="42px"
            color="#E0E0E1"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice :regular="product.price" />
          <div>
            <div class="product__rating">
              <SfRating
                :score="product.rating.rate"
                :max="product.rating.max"
              />
              <a v-if="!!product.reviews" href="#" class="product__count">
                ({{ product.reviews.length }})
              </a>
            </div>
            <SfButton
              class="sf-button--text"
              data-testid="read-all-reviews"
              @click="changeTab(2)"
            >
              Read all reviews
            </SfButton>
          </div>
        </div>
        <div>
          <p class="product__description desktop-only">
            {{ product.description }}
          </p>
          <SfButton class="sf-button--text desktop-only product__guide">
            Size guide
          </SfButton>
          <SfSelect
            v-model="selectedSize"
            label="Size"
            class="sf-select--underlined product__select-size"
            :reqired="true"
          >
            <SfSelectOption
              v-for="(size, key) in product.sizes"
              :key="key"
              :value="size"
            >
              {{ size }}
            </SfSelectOption>
          </SfSelect>
          <div class="product__colors desktop-only">
            <p class="product__color-label">Color:</p>
            <SfColor
              v-for="(color, i) in product.colors"
              :key="i"
              :aria-label="color.name"
              :color="color.color"
              :selected="color.selected"
              class="product__color"
              @click="selectColor(i)"
            />
          </div>
          <SfAddToCart
            v-model="qty"
            class="product__add-to-cart"
            @click="addToCart"
          />
          <SfButton class="sf-button--text desktop-only product__save">
            Save for later
          </SfButton>
          <SfButton class="sf-button--text desktop-only product__compare">
            Add to compare
          </SfButton>
        </div>
        <SfTabs
          id="tabs"
          :open-tab="openTab"
          class="product__tabs"
          @click:tab="changeTab"
        >
          <SfTab v-for="tab in tabs" :key="tab.title" :title="tab.title">
            {{ tab.content }}
            <div v-if="tab.title === 'Description'">
              <SfProperty
                v-for="(detailed, i) in product.details"
                :key="i"
                :name="detailed.name"
                :value="detailed.value"
                class="product__property"
              >
                <template v-if="detailed.name === 'Category'" #value>
                  <SfButton class="sf-button--text product__property__button">
                    {{ detailed.value }}</SfButton
                  >
                </template>
              </SfProperty>
            </div>
            <div v-else-if="tab.title === 'Read reviews'">
              <SfReview
                v-for="(review, i) in product.reviews"
                :key="i"
                :author="review.author"
                :date="review.date"
                :message="review.message"
                :max-rating="review.rating.max"
                :rating="review.rating.rate"
                :char-limit="231"
                read-more-text="Read more"
                hide-full-text="Read less"
                class="product__review"
              />
            </div>
            <div
              v-else-if="tab.title === 'Additional Information'"
              class="product__additional-info"
            >
              <p class="product__additional-info__title">Brand</p>
              <p>{{ product.brand }}</p>
              <p class="product__additional-info__title">Take care of me</p>
              <p class="product__additional-info__paragraph">
                Just here for the care instructions?
              </p>
              <p class="product__additional-info__paragraph">
                Yeah, we thought so
              </p>
              <p>{{ product.careInstructions }}</p>
            </div>
          </SfTab>
        </SfTabs>
      </div>
    </div>
    <transition name="slide">
      <SfNotification
        class="notification smartphone-only"
        :visible="isOpenNotification"
        :message="`${qty} x ${product.name} (size: ${selectedSize}, color: ${selectedColor}) has been added to cart`"
        @click:close="isOpenNotification = false"
      >
        <template #icon>
          <span></span>
        </template>
      </SfNotification>
    </transition>
  </div>
</template>
<script>
import {
  SfGallery,
  SfHeading,
  SfPrice,
  SfRating,
  SfIcon,
  SfTabs,
  SfProperty,
  SfButton,
  SfReview,
  SfAddToCart,
  SfColor,
  SfSelect,
  SfBreadcrumbs,
  SfNotification,
} from "@storefront-ui/vue";
export default {
  name: "Product",
  components: {
    SfGallery,
    SfHeading,
    SfPrice,
    SfRating,
    SfIcon,
    SfTabs,
    SfProperty,
    SfButton,
    SfReview,
    SfAddToCart,
    SfColor,
    SfSelect,
    SfBreadcrumbs,
    SfNotification,
  },
  data() {
    return {
      current: 1,
      selectedColor: "beige",
      selectedSize: undefined,
      qty: 1,
      product: {
        name: "Cashmere Sweater",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        images: [
          {
            mobile: { url: "assets/storybook/Product/productA.png" },
            desktop: { url: "assets/storybook/Product/productA.png" },
            big: { url: "assets/storybook/Product/productA.png" },
            alt: "Product A",
          },
          {
            mobile: { url: "assets/storybook/Product/productB.jpg" },
            desktop: { url: "assets/storybook/Product/productB.jpg" },
            big: { url: "assets/storybook/Product/productB.jpg" },
            alt: "Product B",
          },
          {
            mobile: { url: "assets/storybook/Product/productA.png" },
            desktop: { url: "assets/storybook/Product/productA.png" },
            big: { url: "assets/storybook/Product/productA.png" },
            alt: "Product A",
          },
          {
            mobile: { url: "assets/storybook/Product/productB.jpg" },
            desktop: { url: "assets/storybook/Product/productB.jpg" },
            big: { url: "assets/storybook/Product/productB.jpg" },
            alt: "Product B",
          },
        ],
        price: "$50.00",
        colors: [
          { color: "#EDCBB9", name: "beige", selected: true },
          { color: "#ABD9D8", name: "mint1", selected: false },
          { color: "#DB5593", name: "pink1", selected: false },
          { color: "#ABD9D8", name: "mint2", selected: false },
          { color: "#DB5593", name: "pink2", selected: false },
        ],
        rating: {
          rate: 4,
          max: 5,
        },
        details: [
          {
            name: "Product Code",
            value: 435435,
          },
          {
            name: "Material",
            value: "Cotton",
          },
          {
            name: "Category",
            value: "Pants",
          },
          {
            name: "Country",
            value: "Poland",
          },
        ],
        sizes: ["32", "34", "36", "38", "40", "42"],
        careInstructions: "Do not wash!",
        brand:
          "Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.",
        reviews: [
          {
            author: "Jane D.Smith",
            date: "April 2019",
            message:
              "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
            rating: {
              max: 5,
              rate: 4,
            },
          },
          {
            author: "Jane D.Smith",
            date: "April 2019",
            message:
              "I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can comment on interlation as I had an electrition instal it. Would recommend.",
            rating: {
              max: 5,
              rate: 4,
            },
          },
        ],
      },
      tabs: [
        {
          title: "Description",
          content:
            "The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common 'problem' areas. Find stunning women's cocktail dresses and party dresses.",
        },
        {
          title: "Read reviews",
          content: "",
        },
        {
          title: "Additional Information",
          content: "",
        },
      ],
      selected: false,
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#",
          },
        },
        {
          text: "Category",
          route: {
            link: "#",
          },
        },
        {
          text: "Pants",
          route: {
            link: "#",
          },
        },
      ],
      isOpenNotification: false,
      openTab: 1,
    };
  },
  methods: {
    addToCart() {
      this.isOpenNotification = true;
      setTimeout(() => {
        this.isOpenNotification = false;
      }, 3000);
    },
    selectColor(colorIndex) {
      this.product.colors.map((el, i) => {
        if (colorIndex === i) {
          el.selected = true;
          this.selectedColor = el.name;
        } else {
          el.selected = false;
        }
      });
    },
    changeTab(tabNumber) {
      document
        .getElementById("tabs")
        .scrollIntoView({ behavior: "smooth", block: "end" });
      this.openTab = tabNumber;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    padding: 0 var(--spacer-sm);
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-xs) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-title-font-size: var(--h3-font-size);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    color: var(--c-link);
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
.notification {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  --notification-border-radius: 0;
  --notification-max-width: 100%;
  --notification-background: var(--c-link);
  --notification-font-size: var(--font-size--sm);
  --notification-font-family: var(--font-family--primary);
  --notification-font-weight: var(--font-weight--normal);
  --notification-padding: var(--spacer-base) var(--spacer-lg);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter {
  transform: translateY(40px);
}

.slide-leave-to {
  transform: translateY(-80px);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>

<include-source />
