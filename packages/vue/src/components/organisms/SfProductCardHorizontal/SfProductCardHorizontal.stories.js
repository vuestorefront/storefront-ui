/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, select, array } from "@storybook/addon-knobs";
import SfProductCardHorizontal from "./SfProductCardHorizontal.vue";
storiesOf("Organisms|ProductCardHorizontal", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      description: {
        default: text(
          "description",
          "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
          "Props"
        )
      },
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
            { name: "Size", value: "One size" },
            { name: "Color", value: "White" }
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
          :reviews-count="reviewsCount"
          :isAddedToCart="isAddedToCart"
          :addToCartDisabled="addToCartDisabled"
          :options="options"
          :description="description"
      />`
  }));
