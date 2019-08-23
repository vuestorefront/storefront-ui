/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { generateStorybookTable } from "@/helpers";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import SfProductCard from "./SfProductCard.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$product-card-max-width",
      "200px",
      "Maximum width of Product Card in small screens"
    ],
    [
      "$product-card-hover-box-shadow",
      "0px 4px 35px rgba(168, 172, 176, 0.19)",
      "Shadow effect when hovering on Product Card"
    ],
    [
      "$product-card-desktop-max-width",
      "240px",
      "Maximum width of Product Card for desktop"
    ],
    [
      "$product__image-background-color",
      "$c-bg-primary",
      "Background color of the product's image"
    ],
    ["$product__image-blend-mode", "darken", "Blend mode of product's image"]
  ]
};

storiesOf("Molecules|ProductCard", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        image: {
          default: text("image (prop)", "assets/storybook/product_thumb.png")
        },
        title: {
          default: text("title (prop)", "Product name")
        },
        regularPrice: {
          default: text("regularPrice (prop)", "$10,99")
        },
        specialPrice: {
          default: text("specialPrice (prop)", "$5,99")
        },
        maxRating: {
          default: number("minRating (prop)", 5)
        },
        rating: {
          default: number("maxRating (prop)", 4)
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
        :regular-price="regularPrice"
        :special-price="specialPrice"
        :rating="rating"
        :max-rating="maxRating"
        :wishlistIcon="wishlistIcon"
        :isOnWishlistIcon="isOnWishlistIcon"
        :isOnWishlist="isOnWishlist"
      />`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering Product Card.</p>
        <h2> Usage </h2>
        <pre><code>import { SfProductCard } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS Variables")}`
      }
    }
  );
