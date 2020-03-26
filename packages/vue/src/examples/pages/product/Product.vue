<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <SfChevron class="sf-chevron--left product__chevron mobile-only" />
      <SfGallery
        :images="product.images"
        image-width="400"
        image-height="450"
        class="mobile-only"
      />
      <div class="product__images desktop-only">
        <SfImage :src="product.images[0].big.url" />
        <SfImage :src="product.images[1].big.url" />
      </div>
      <div class="product__info">
        <div class="product__info__header">
          <SfHeading
            :title="product.name"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="xl"
            color="gray-secondary"
            class="product__info__drag-icon mobile-only"
          />
        </div>
        <div class="product__price-and-review">
          <SfPrice :regular="product.price" />
          <div>
            <div class="product__price-and-review__rating">
              <SfRating
                :score="product.rating.rate"
                :max="product.rating.max"
              />
              <a
                v-if="!!product.reviews"
                href="#"
                class="product__price-and-review__count"
              >
                ({{ product.reviews.length }})
              </a>
            </div>
            <SfButton class="sf-button--text desktop-only"
              >Read all reviews</SfButton
            >
          </div>
        </div>
        <div>
          <p class="product__description desktop-only">
            {{ product.description }}
          </p>
          <SfButton class="sf-button--text desktop-only btn__guide">
            Size guide
          </SfButton>
          <SfSelect
            v-model="selectedSize"
            label="Size"
            class="sf-select--underlined product__select"
            :reqired="true"
          >
            <SfSelectOption
              v-for="(size, key) in product.sizes"
              :key="key"
              :value="size"
            >
              <SfProductOption :label="size"></SfProductOption>
            </SfSelectOption>
          </SfSelect>
          <div class="product__colors desktop-only">
            <p class="product__colors__label">Color:</p>
            <SfColor
              v-for="(color, i) in product.colors"
              :key="i"
              :color="color.color"
              :selected="color.selected"
              class="product__colors__color"
              @click="selectColor(i)"
            />
          </div>
          <SfAddToCart
            v-model="qty"
            class="product__add-to-cart"
            @click="addToCart"
          />
          <SfButton class="sf-button--text desktop-only btn__save">
            Save for later
          </SfButton>
          <SfButton class="sf-button--text desktop-only btn__compare">
            Add to compare
          </SfButton>
        </div>
        <SfTabs :open-tab="1" class="product__tabs">
          <SfTab
            v-for="tab in tabs"
            :key="tab.title"
            :title="tab.title"
            class="product__tabs__tab"
          >
            {{ tab.content }}
            <div v-if="tab.title === 'Description'">
              <SfProperty
                v-for="(detailed, i) in product.details"
                :key="i"
                :name="detailed.name"
                :value="detailed.value"
                class="product__tabs__property"
              >
                <template v-if="detailed.name === 'Category'" #value>
                  <SfButton class="sf-button--text">
                    {{ detailed.value }}</SfButton
                  >
                </template>
              </SfProperty>
            </div>
            <div v-else-if="tab.title === 'Read reviews'">
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
                <SfDivider class="product__tabs__divider" />
              </div>
              <SfPagination
                :current="1"
                :visible="4"
                :total="4"
                :has-arrows="trtrutrueeye"
                class="product__tabs__pagination desktop-only"
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
  SfChevron,
  SfButton,
  SfReview,
  SfAddToCart,
  SfColor,
  SfSelect,
  SfProductOption,
  SfDivider,
  SfBreadcrumbs,
  SfPagination
} from "@storefront-ui/vue";

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
    SfProperty,
    SfChevron,
    SfButton,
    SfReview,
    SfAddToCart,
    SfColor,
    SfSelect,
    SfProductOption,
    SfDivider,
    SfBreadcrumbs,
    SfPagination
  },
  data() {
    return {
      selectedColor: undefined,
      selectedSize: undefined,
      qty: 1,
      product: {
        name: "Cashmere Sweater",
        description:
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
        images: [
          {
            mobile: { url: "assets/storybook/Product/productA.jpg" },
            desktop: { url: "assets/storybook/Product/productA.jpg" },
            big: { url: "assets/storybook/Product/productA.jpg" }
          },
          {
            mobile: { url: "assets/storybook/Product/productB.jpg" },
            desktop: { url: "assets/storybook/Product/productB.jpg" },
            big: { url: "assets/storybook/Product/productB.jpg" }
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
        colors: [
          { color: "#EDCBB9", name: "beige", selected: false },
          { color: "#ABD9D8", name: "mint1", selected: false },
          { color: "#DB5593", name: "pink1", selected: false },
          { color: "#ABD9D8", name: "mint2", selected: false },
          { color: "#DB5593", name: "pink2", selected: false }
        ],
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
          content: ""
        }
      ],
      selected: false,
      breadcrumbs: [
        {
          text: "Home",
          route: {
            link: "#"
          }
        },
        {
          text: "Category",
          route: {
            link: "#"
          }
        },
        {
          text: "Pants",
          route: {
            link: "#"
          }
        }
      ]
    };
  },
  methods: {
    addToCart() {
      console.log(
        `${this.qty} x ${this.product.name} (size: ${this.selectedSize}, color: ${this.selectedColor}) has been added to cart`
      );
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@storefront-ui/vue/styles";

#product {
  max-width: 77.5rem;
  margin: 0 auto;
}

.product {
  &__chevron {
    --chevron-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin: var(--spacer-base) 0 0 var(--spacer-base);
  }
  &__images {
    display: flex;
    flex-direction: column;
  }
  &__info {
    margin: var(--spacer-sm) auto var(--spacer-xs);
    &__header {
      margin: 0 var(--spacer-sm);
      display: flex;
      justify-content: space-between;
      @include for-desktop {
        margin: 0 auto;
      }
    }
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
    &__drag-icon {
      animation: moveicon 1s ease-in-out infinite;
    }
  }
  &__price-and-review {
    margin: var(--spacer-xs) var(--spacer-sm) var(--spacer-base);
    align-items: center;
    &__rating {
      display: flex;
      align-items: center;
      margin: var(--spacer-xs) 0 0 0;
    }
    &__count {
      @include font(
        --count-font,
        var(--font-normal),
        var(--font-sm),
        1.4,
        var(--font-family-secondary)
      );
      color: var(--c-text);
      text-decoration: none;
      margin: 0 0 0 var(--spacer-xs);
    }
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__description {
    color: var(--c-link);
    @include font(
      --product-description-font,
      var(--font-light),
      var(--font-base),
      1.6,
      var(--font-family-primary)
    );
  }
  &__select {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-normal),
      var(--font-lg),
      1.6,
      var(--font-family-secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
    &__label {
      margin: 0 var(--spacer-lg) 0 0;
    }
    &__color {
      margin: 0 var(--spacer-2xs);
    }
  }
  &__add-to-cart {
    margin-top: var(--spacer-base);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__tabs {
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    &__property {
      margin-top: var(--spacer-lg);
    }
    &__divider {
      margin: var(--spacer-base) auto;
      @include for-desktop {
        margin-bottom: var(--spacer-base);
      }
    }
    &__pagination {
      margin-top: 65px;
    }

    @include for-desktop {
      margin-top: var(--spacer-2xl);
      --tabs-content-tab-padding: 3.5rem 0 0 0;
    }
  }
  &__additional-info {
    @include font(
      --additional-info-font,
      var(--font-light),
      var(--font-base),
      1.6,
      var(--font-family-primary)
    );
    &__title {
      font-weight: var(--font-bold);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 58px;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  @include for-desktop {
    display: flex;
  }
}

.btn {
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
}

.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}

@keyframes moveicon {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
