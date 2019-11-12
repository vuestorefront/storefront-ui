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
  )

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
    }),
    {
      info: {
        summary: `
        <h2> Usage </h2>
        <pre><code>import { SfProductCard } from "@storefront-ui/vue"</code></pre>
        <p>You can pass <code>image</code> prop as array of picture objects with following model:</p>
        <pre><code>[ { small: { url, alt }, normal: { url, alt } } ]</code></pre>
        <p>
          Then product card will use <code>SfImage</code> to render
          <code>&lt;picture&gt;</code> tag with media query todo load image
          on different sizes on mobile/desktop.
          <br>
          If the array has more than one picture, the image will be
          switched (the first and second array elements) on card hover.
        </p>
        ${generateStorybookTable(scssTableConfig, "SCSS Variables")}`
      }
    }
  );
