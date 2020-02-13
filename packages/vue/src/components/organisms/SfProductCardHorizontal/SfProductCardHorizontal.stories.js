/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from "@storybook/addon-knobs";
import SfProductCardHorizontal from "./SfProductCardHorizontal.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
storiesOf("Organisms|ProductCardHorizontal", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 216, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 326, {}, "Props")
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props")
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        )
      },
      link: {
        default: text("link", "", "Props")
      },
      linkTag: {
        default: text("linkTag", "", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "", "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props")
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props")
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props")
      }
    },
    components: { SfProductCardHorizontal, SfButton, SfProperty },
    template: `<SfProductCardHorizontal
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
          :is-on-wishlist-icon="isOnWishlistIcon"
          :is-on-wishlist="isOnWishlist">
          <template #configuration>
            <div>
              <SfProperty name="Size" value="XS"/>
              <SfProperty name="Color" value="white"/>
            </div>
          </template>
          <template #actions>
            <div style="display:flex; flex-direction: column; align-items: flex-end">
              <SfButton
                class="sf-button--text"
                @click="$emit('click:add-to-wishlist')"
                style="padding-bottom: 1.25rem" 
              >
                Save for later
              </SfButton>
              <SfButton
                class="sf-button--text"
                @click="$emit('click:add-to-compare')"
                style="padding-bottom: 1.25rem" 
              >
                Add to compare
              </SfButton>
            </div>
          </template>
      </SfProductCardHorizontal>`
  }))
  .add("With 2 pictures", () => ({
    props: {
      imageWidth: {
        default: number("imageWidth", 216, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 326, {}, "Props")
      },
      title: {
        default: text("title", "Product name", "Props")
      },
      description: {
        default: text("description", "Short description", "Props")
      },
      link: {
        default: text("link", "javascript:window.alert();", "Props")
      },
      linkTag: {
        default: text("linkTag", "", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$1000,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "$500,99", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [null, false, true], null, "Props")
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props")
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props")
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props")
      }
    },
    data() {
      return {
        pictures: [
          {
            desktop: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            },
            mobile: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple"
            }
          },
          {
            desktop: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            },
            mobile: {
              url:
                "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
              alt: "Macbook PRO Apple (keyboard)"
            }
          }
        ]
      };
    },
    components: { SfProductCardHorizontal, SfButton, SfProperty },
    template: `<SfProductCardHorizontal
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
        :is-added-to-cart="isAddedToCart"
        :add-to-cart-disabled="addToCartDisabled"
        :is-on-wishlist-icon="isOnWishlistIcon"
        :is-on-wishlist="isOnWishlist"
        >
        <template #configuration>
          <div>
            <SfProperty name="Size" value="XS"/>
            <SfProperty name="Color" value="white"/>
          </div>
          </template>
          <template #actions>
            <div style="display:flex; flex-direction: column; align-items: flex-end">
              <SfButton
                class="sf-button--text"
                style="padding-bottom: 1.25rem" 
                @click="$emit('click:add-to-wishlist')"
              >
                Save for later
              </SfButton>
              <SfButton
                class="sf-button--text"
                style="padding-bottom: 1.25rem" 
                @click="$emit('click:add-to-compare')"
              >
                Add to compare
              </SfButton>
            </div>
          </template>
    </SfProductCardHorizontal>`
  }))
  .add("[slot] configuration", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 216, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 326, {}, "Props")
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props")
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        )
      },
      link: {
        default: text("link", "", "Props")
      },
      linkTag: {
        default: text("linkTag", "", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "", "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props")
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props")
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props")
      }
    },
    components: { SfProductCardHorizontal },
    template: `<SfProductCardHorizontal
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
          :is-on-wishlist-icon="isOnWishlistIcon"
          :is-on-wishlist="isOnWishlist">
          <template #configuration>
            CUSTOM CONFIGURATION
          </template>
      </SfProductCardHorizontal>`
  }))
  .add("[slot] actions", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCardHorizontal/productA.jpg",
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 216, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 326, {}, "Props")
      },
      title: {
        default: text("title", "Cream Beach Bag", "Props")
      },
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        )
      },
      link: {
        default: text("link", "", "Props")
      },
      linkTag: {
        default: text("linkTag", "", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "", "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      isOnWishlist: {
        default: boolean("isOnWishlist", false, "Props")
      },
      isOnWishlistIcon: {
        default: text("isOnWishlistIcon", "heart_fill", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      reviewsCount: {
        default: number("reviewsCount", 7, {}, "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props")
      },
      addToCartDisabled: {
        default: select("addToCartDisabled", [false, true], false, "Props")
      }
    },
    components: { SfProductCardHorizontal },
    template: `<SfProductCardHorizontal
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
          :is-on-wishlist-icon="isOnWishlistIcon"
          :is-on-wishlist="isOnWishlist">
          <template #actions>
            CUSTOM ACTIONS
          </template>
      </SfProductCardHorizontal>`
  }));
