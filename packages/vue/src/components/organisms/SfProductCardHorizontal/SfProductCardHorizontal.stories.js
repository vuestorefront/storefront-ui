/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  select,
  array
} from "@storybook/addon-knobs";
import SfProductCardHorizontal from "./SfProductCardHorizontal.vue";
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
      },
      options: {
        default: array(
          "options",
          [
            { name: "Color", value: "White" },
            { name: "Size", value: "XS" }
          ],
          "Props"
        )
      }
    },
    components: { SfProductCardHorizontal },
    template: `<SfProductCardHorizontal
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :title="title"
          :link="link"
          :linkTag="linkTag"
          :regular-price="regularPrice"
          :special-price="specialPrice"
          :score-rating="scoreRating"
          :max-rating="maxRating"
          :wishlistIcon="wishlistIcon"
          :reviews-count="reviewsCount"
          :isAddedToCart="isAddedToCart"
          :addToCartDisabled="addToCartDisabled"
          :options="options"
          :description="description"
          :isOnWishlistIcon="isOnWishlistIcon"
          :isOnWishlist="isOnWishlist"
      />`
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
      },
      options: {
        default: array(
          "options",
          [
            { name: "Color", value: "Space Grey" },
            { name: "Size", value: "13" }
          ],
          "Props"
        )
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
    components: { SfProductCardHorizontal },
    template: `<SfProductCardHorizontal
        :image="pictures"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :description="description"
        :link="link"
        :linkTag="linkTag"
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :score-rating="scoreRating"
        :max-rating="maxRating"
        :reviews-count="reviewsCount"
        :wishlistIcon="wishlistIcon"
        :isAddedToCart="isAddedToCart"
        :addToCartDisabled="addToCartDisabled"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
        :options="options"
    />`
  }));
