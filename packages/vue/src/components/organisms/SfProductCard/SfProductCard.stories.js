/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import SfProductCard from "./SfProductCard.vue";
storiesOf("Organisms|ProductCard", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCard/product_thumb.jpg",
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
        default: text("title", "Product name", "Props")
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
        default: text("specialPrice", "$5,99", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      showAddToCartButton: {
        default: select("showAddToCartButton", [false, true], false, "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [false, true], false, "Props")
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
    components: { SfProductCard },
    template: `<SfProductCard
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
        :isAddedToCart="isAddedToCart"
        :addToCartDisabled="addToCartDisabled"
        :showAddToCartButton="showAddToCartButton"
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
      link: {
        default: text("link", "javascript:window.alert();", "Props")
      },
      linkTag: {
        default: text("linkTag", "", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "$5,99", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      showAddToCartButton: {
        default: select("showAddToCartButton", [false, true], false, "Props")
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
    components: { SfProductCard },
    template: `<SfProductCard
        :image="pictures"
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
        :showAddToCartButton="showAddToCartButton"
        :isAddedToCart="isAddedToCart"
        :addToCartDisabled="addToCartDisabled"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
    />`
  }))
  .add("With CircleIconButton", () => ({
    props: {
      image: {
        default: text(
          "image",
          "assets/storybook/SfProductCard/product_thumb.jpg",
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
        default: text("title", "Product name", "Props")
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
        default: text("specialPrice", "$5,99", "Props")
      },
      maxRating: {
        default: number("maxRating", 5, {}, "Props")
      },
      scoreRating: {
        default: number("scoreRating", 4, {}, "Props")
      },
      wishlistIcon: {
        default: select("wishlistIcon", [false, "heart"], "heart", "Props")
      },
      showAddToCartButton: {
        default: select("showAddToCartButton", [false, true], true, "Props")
      },
      isAddedToCart: {
        default: select("isAddedToCart", [null, false, true], false, "Props")
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
    components: { SfProductCard },
    template: `<SfProductCard
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
        :showAddToCartButton="showAddToCartButton"
        :isAddedToCart="isAddedToCart"
        :addToCartDisabled="addToCartDisabled"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
    />`
  }));
