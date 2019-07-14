/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { generateStorybookTable } from "@/helpers";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
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
    "Template",
    () => ({
      props: {
        image: {
          default: text("image (prop)", "assets/storybook/product_thumb.png")
        },
        title: {
          default: text("title (prop)", "Product name")
        },
        price: {
          default: object("price (prop)", { regularPrice: "$10,99" })
        },
        rating: {
          default: object("rating (prop)", { max: 5, score: 4 })
        },
        wishlistIcon: {
          default: text("wishlistIcon (prop)", "heart")
        },
        onWishlist: {
          default: boolean("onWishlist (prop)", false)
        },
        onWishlistIcon: {
          default: text("onWishlistIcon (prop)", "heart_fill")
        },
        onWishlistColor: {
          default: text("onWishlistColor (prop)", "pink-primary")
        }
      },
      components: { SfProductCard },
      template: `<SfProductCard
        :image="image"
        :title="title"
        :price="price"
        :rating="rating"
        :wishlistIcon="wishlistIcon"
        :onWishlistIcon="onWishlistIcon"
        :onWishlistColor="onWishlistColor"
        :onWishlist="onWishlist"
      />`
    }),
    {
      info: {
        summary: `
        <p>Component for rendering Product Card.</p>
        <h2> Usage </h2>
        <pre><code>import { SfProductCard } from "@storefrontui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS Variables")}`
      }
    }
  );
