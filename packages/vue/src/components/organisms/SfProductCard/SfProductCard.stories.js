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

const pictures = [
  {
    normal: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple"
    },
    small: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858949523-frontal-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple"
    }
  },
  {
    normal: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/400px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple (keyboard)"
    },
    small: {
      url:
        "https://ecom-ptqgjveg.nyc3.digitaloceanspaces.com/imgs/100px/@1550858951531-teclado-macbook-pro-apple-13-intel-core-i5-128gb-mpxq2bz-a.jpg",
      alt: "Macbook PRO Apple (keyboard)"
    }
  }
];

storiesOf("Organisms|ProductCard", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        image: {
          default: text("image (prop)", "assets/storybook/product_thumb.jpg")
        },
        title: {
          default: text("title (prop)", "Product name")
        },
        link: {
          default: text("link (prop)", "")
        },
        linkTag: {
          default: text("linkTag (prop)", "")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$10,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$5,99")
        },
        maxRating: {
          default: number("maxRating (prop)", 5)
        },
        scoreRating: {
          default: number("scoreRating (prop)", 4)
        },
        wishlistIcon: {
          default: select("wishlistIcon (prop)", [false, "heart"], "heart")
        },
        isOnWishlist: {
          default: boolean("isOnWishlist (prop)", false)
        },
        isOnWishlistIcon: {
          default: text("isOnWishlistIcon (prop)", "heart_fill")
        }
      },
      components: { SfProductCard },
      template: `<SfProductCard
        :image="image"
        :title="title"
        :link="link"
        :linkTag="linkTag"
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :score-rating="scoreRating"
        :max-rating="maxRating"
        :wishlistIcon="wishlistIcon"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
      />`
    }))

  .add(
    "With 2 pictures",
    () => ({
      props: {
        title: {
          default: text("title (prop)", "Product name")
        },
        link: {
          default: text("link (prop)", "javascript:window.alert();")
        },
        linkTag: {
          default: text("linkTag (prop)", "")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$10,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$5,99")
        },
        maxRating: {
          default: number("maxRating (prop)", 5)
        },
        scoreRating: {
          default: number("scoreRating (prop)", 4)
        },
        wishlistIcon: {
          default: select("wishlistIcon (prop)", [false, "heart"], "heart")
        },
        isOnWishlist: {
          default: boolean("isOnWishlist (prop)", false)
        },
        isOnWishlistIcon: {
          default: text("isOnWishlistIcon (prop)", "heart_fill")
        }
      },
      data() {
        return { pictures };
      },
      components: { SfProductCard },
      template: `<SfProductCard
        :image="pictures"
        :title="title"
        :link="link"
        :linkTag="linkTag"
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :score-rating="scoreRating"
        :max-rating="maxRating"
        :wishlistIcon="wishlistIcon"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
      />`
    }));
