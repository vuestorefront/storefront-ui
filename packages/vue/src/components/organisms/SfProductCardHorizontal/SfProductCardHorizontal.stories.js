import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  select,
} from "@storybook/addon-knobs";
import {
  SfProductCardHorizontal,
  SfSelect,
  SfProductOption,
  SfButton,
} from "@storefront-ui/vue";
storiesOf("Organisms|ProductCardHorizontal", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    data() {
      return {
        quantity: 1,
        selects: {
          size: {
            label: "Size:",
            placeholder: "Size: XS",
            errorMessage: "Please pick a size",
            options: ["XXS", "XS", "S", "M", "L", "XL", "XXL"].map(
              (size) => `Size: ${size}`
            ),
          },
          colour: {
            label: "Colour:",
            placeholder: "Colour: Brown",
            errorMessage: "Please pick a colour",
            options: [
              "Maroon",
              "Blue",
              "Brown",
              "Mustard",
              "White",
              "Black",
            ].map((colour) => `Colour: ${colour}`),
          },
        },
      };
    },
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props"),
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        ),
      },
      link: {
        default: text("link", "", "Props"),
      },
      linkTag: {
        default: text("linkTag", "", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "", "Props"),
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props"),
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", true, "Props"),
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props"),
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props"),
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props"),
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props"),
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props"),
      },
      qty: {
        default: number("qty", 1, {}, "Props"),
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props"),
      },
    },
    components: {
      SfProductCardHorizontal,
      SfButton,
      SfSelect,
      SfProductOption,
    },
    template: `<div :style="{maxWidth: '1240px'}">
      <SfProductCardHorizontal
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :link="link"
        :link-tag="linkTag"
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :score-rating="scoreRating"
        :max-rating="maxRating"
        :wishlist-icon="wishlistIcon"
        :reviews-count="reviewsCount"
        :is-added-to-cart="isAddedToCart"
        :add-to-cart-disabled="addToCartDisabled"
        :description="description"
        :qty="quantity"
        @input="quantity = $event"
        :is-on-wishlist-icon="isOnWishlistIcon"
        :is-on-wishlist="isOnWishlist"
      >
        <template #configuration>
          <div style="display: flex; flex-direction: column; justify-content: flex-end">
            <SfSelect
              v-for="(valSelects, keySelects) in selects"
              :key="keySelects"
              :error-message="valSelects.errorMessage"
              :placeholder="valSelects.placeholder"
              style="display: flex; width: fit-content; height: fit-content; padding: inherit;"
            >
              <SfSelectOption v-for="(val, key) in valSelects.options" :key="key" :value="key">
                <SfProductOption color="black" :label="val"></SfProductOption>
              </SfSelectOption>
            </SfSelect>
          </div>
        </template>
        <template #actions>
            <SfButton
              class="sf-button--text desktop-only"
              @click="$emit('click:add-to-wishlist')"
              style="margin: 0 0 1rem auto; display: block" 
            >
              Save for later
            </SfButton>
            <SfButton
              class="sf-button--text desktop-only"
              @click="$emit('click:add-to-compare')"
              style="margin: 0 0 0 auto; display: block"
            >
              Add to compare
            </SfButton>
        </template>
      </SfProductCardHorizontal>
    </div>`,
  }))
  .add("With 2 pictures", () => ({
    props: {
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Product name", "Props"),
      },
      description: {
        default: text("description", "Short description", "Props"),
      },
      link: {
        default: text("link", "javascript:window.alert();", "Props"),
      },
      linkTag: {
        default: text("linkTag", "", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$1000,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$500,99", "Props"),
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props"),
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props"),
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props"),
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props"),
      },
      isAddedToCart: {
        default: select("isAddedToCart", [null, false, true], null, "Props"),
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props"),
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props"),
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props"),
      },
    },
    data() {
      return {
        pictures: [
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          {
            mobile: { url: "/assets/storybook/Home/productA.jpg" },
            desktop: { url: "/assets/storybook/Home/productA.jpg" },
          },
        ],
        quantity: 1,
        selects: {
          size: {
            label: "Size:",
            placeholder: "Size: XS",
            errorMessage: "Please pick a size",
            options: ["XXS", "XS", "S", "M", "L", "XL", "XXL"].map(
              (size) => `Size: ${size}`
            ),
          },
          colour: {
            label: "Colour:",
            placeholder: "Colour: Brown",
            errorMessage: "Please pick a colour",
            options: [
              "Maroon",
              "Blue",
              "Brown",
              "Mustard",
              "White",
              "Black",
            ].map((colour) => `Colour: ${colour}`),
          },
        },
      };
    },
    components: {
      SfProductCardHorizontal,
      SfButton,
      SfSelect,
      SfProductOption,
    },
    template: `<div :style="{maxWidth: '1240px'}">
      <SfProductCardHorizontal
        :image="pictures"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :description="description"
        :link="link"
        :link-tag="linkTag"
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :score-rating="scoreRating"
        :max-rating="maxRating"
        :reviews-count="reviewsCount"
        :wishlist-icon="wishlistIcon"
        :qty="quantity"
        @input="quantity = $event"
        :is-added-to-cart="isAddedToCart"
        :add-to-cart-disabled="addToCartDisabled"
        :is-on-wishlist-icon="isOnWishlistIcon"
        :is-on-wishlist="isOnWishlist"
        >
        <template #configuration>
          <div style="display: flex; flex-direction: column; justify-content: flex-end">
            <SfSelect
              v-for="(valSelects, keySelects) in selects"
              :key="keySelects"
              :error-message="valSelects.errorMessage"
              :placeholder="valSelects.placeholder"
              style="display: flex; width: fit-content; height: fit-content; padding: inherit;"
            >
              <SfSelectOption v-for="(val, key) in valSelects.options" :key="key" :value="key">
                <SfProductOption color="black" :label="val"></SfProductOption>
              </SfSelectOption>
            </SfSelect>
          </div>
        </template>
        <template #actions>
          <div>
              <SfButton
                class="sf-button--text color-primary desktop-only"
                style="padding-bottom: 1rem" 
                @click="$emit('click:add-to-wishlist')"
              >
                Save for later
              </SfButton>
              <SfButton
                class="sf-button--text color-primary desktop-only"
                @click="$emit('click:add-to-compare')"
              >
                Add to compare
              </SfButton>
          </div>
          </template>
    </SfProductCardHorizontal>
    </div>`,
  }))
  .add("[slot] configuration", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props"),
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        ),
      },
      link: {
        default: text("link", "", "Props"),
      },
      linkTag: {
        default: text("linkTag", "", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "", "Props"),
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props"),
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props"),
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props"),
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props"),
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props"),
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props"),
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props"),
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props"),
      },
    },
    data() {
      return {
        quantity: 1,
      };
    },
    components: { SfProductCardHorizontal },
    template: `<div :style="{maxWidth: '1240px'}">
      <SfProductCardHorizontal
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :title="title"
          :link="link"
          :link-tag="linkTag"
          :regular-price="regularPrice"
          :special-price="specialPrice"
          :score-rating="scoreRating"
          :max-rating="maxRating"
          :wishlist-icon="wishlistIcon"
          :reviews-count="reviewsCount"
          :is-added-to-cart="isAddedToCart"
          :qty="quantity"
          @input="quantity = $event"
          :add-to-cart-disabled="addToCartDisabled"
          :description="description"
          :is-on-wishlist-icon="isOnWishlistIcon"
          :is-on-wishlist="isOnWishlist">
          <template #configuration>
            CUSTOM CONFIGURATION
          </template>
      </SfProductCardHorizontal>
    </div>`,
  }))
  .add("[slot] actions", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props"),
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        ),
      },
      link: {
        default: text("link", "", "Props"),
      },
      linkTag: {
        default: text("linkTag", "", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "", "Props"),
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props"),
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props"),
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props"),
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props"),
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props"),
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props"),
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props"),
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props"),
      },
    },
    data() {
      return {
        quantity: 1,
      };
    },
    components: { SfProductCardHorizontal },
    template: `<div :style="{maxWidth: '1240px'}">
      <SfProductCardHorizontal
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :title="title"
          :link="link"
          :link-tag="linkTag"
          :regular-price="regularPrice"
          :special-price="specialPrice"
          :score-rating="scoreRating"
          :max-rating="maxRating"
          :wishlist-icon="wishlistIcon"
          :reviews-count="reviewsCount"
          :is-added-to-cart="isAddedToCart"
          :add-to-cart-disabled="addToCartDisabled"
          :description="description"
          :qty="quantity"
          @input="quantity = $event"
          :is-on-wishlist-icon="isOnWishlistIcon"
          :is-on-wishlist="isOnWishlist">
          <template #actions>
            CUSTOM ACTIONS
          </template>
      </SfProductCardHorizontal>
    </div>`,
  }));
