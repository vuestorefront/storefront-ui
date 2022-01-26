import { SfProductCard } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/ProductCard",
  component: SfProductCard,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "product-card-z-index": { value: "", control: "text" },
      "product-card-max-width": { value: "10.625rem", control: "text" },
      "product-card-height": { value: "", control: "text" },
      "product-card-padding": { value: "var(--spacer-xs)", control: "text" },
      "product-card-background": { value: "var(--c-white)", control: "text" },
      "product-card-transition": { value: "", control: "text" },
      "product-card-box-shadow": { value: "", control: "text" },
      "product-card-link-margin": { value: "0", control: "text" },
      "product-card-title-font": { value: "", control: "text" },
      "product-card-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "product-card-title-font-size": {
        value: "var(--h5-font-size)",
        control: "text",
      },
      "product-card-title-font-line-height": { value: "1.6", control: "text" },
      "product-card-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "product-card-title-color": { value: "var(--c-link)", control: "text" },
      "product-card-title-margin": {
        value: "var(--spacer-xs) 0 0 0",
        control: "text",
      },
      "product-card-image-transition": {
        value: "opacity 150ms ease-in-out",
        control: "text",
      },
      "product-card-image-opacity": { value: "", control: "text" },
      "product-card-image-even-opacity": { value: "0", control: "text" },
      "product-card-badge-top": { value: "var(--spacer-xs)", control: "text" },
      "product-card-badge-left": { value: "0", control: "text" },
      "product-card-add-button-right": { value: "1rem", control: "text" },
      "product-card-add-button-bottom": { value: "0", control: "text" },
      "product-card-add-button-display": { value: "none", control: "text" },
      "product-card-add-button-transform": { value: "", control: "text" },
      "product-card-add-button-opacity": { value: "0", control: "text" },
      "product-card-margin": { value: "0", control: "text" },
      "product-card-reviews-count-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "product-card-reviews-count-color": {
        value: "var(--c-text)",
        control: "text",
      },
      "product-card-wishlist-icon-top": {
        value: "var(--spacer-xs)",
        control: "text",
      },
      "product-card-wishlist-icon-right": {
        value: "var(--spacer-xs)",
        control: "text",
      },
      "product-card-wishlist-icon-padding": { value: "0", control: "text" },
      "product-card-wishlist-icon-opacity": { value: "1", control: "text" },
      "product-card-wishlist-icon-transition": {
        value: "opacity 150ms ease-in-out",
        control: "text",
      },
      "color-picker-label-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-picker-position": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-picker-justify-content": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-picker-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "circle-icon-position": {
        value: "absolute",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow": {
        value: "0px 4px 11px rgba(29, 31, 34, 0.1)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-dark-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Product card component with image, description and rating.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Product title",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: undefined,
      description: "Link to product page",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Product image. It should be an url of the product",
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: null,
      description: "Product image width, without unit",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: null,
        },
      },
      defaultValue: null,
      description: "Product image height, without unit",
    },
    badgeLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Badge label",
    },
    badgeColor: {
      control: "color",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "Badge color It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing. Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.",
    },
    scoreRating: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Product rating",
    },
    reviewsCount: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Product reviews count",
    },
    maxRating: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 5,
      description: "Maximum product rating",
    },
    regularPrice: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Product regular price",
    },
    specialPrice: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Product special price",
    },
    colors: {
      control: "object",
      table: {
        category: "Props",
        type: {
          summary: "array",
        },
        defaultValue: {
          summary: "[]",
        },
      },
      defaultValue: [],
      description: "Product colors It should be an array of objects",
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart",
      description:
        "Wish list icon This is the default icon for product not yet added to wish list. It can be a icon name from our icons list, or array or string as SVG path(s).",
    },
    isInWishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart_fill",
      description:
        "Wish list icon for product which has been added to wish list This is the icon for product added to wish list.Default visible on mobile.Visible only on hover on desktop. It can be a icon name from our icons list, or array or string as SVG path(s).",
    },
    isInWishlist: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Status of whether product is on wish list or not.",
    },
    showAddToCartButton: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Status of showing add to cart button.",
    },
    isAddedToCart: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description:
        "isAddedToCart status of whether button is showed, product is added or not.",
    },
    addToCartDisabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description:
        "addToCartDisabled status of whether button is disabled when out of stock.",
    },
    linkTag: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "*deprecated. Link element tag. Use slot to replace content",
    },
    "click:addToCart": {
      action: "click:add-to-cart event emitted",
      table: {
        category: "Events",
        type: { summary: null },
      },
      description:
        "Emits click:add-to-cart event when add to cart button is clicked",
    },
    "click:wishlist": {
      action: "click:wishlist event emitted",
      table: {
        category: "Events",
        type: { summary: null },
      },
      description:
        "Emits click:wishlist event when add to wishlist button is clicked",
    },
    "click:reviews": {
      action: "click:reviews event emitted",
      table: {
        category: "Events",
        type: { summary: null },
      },
      description:
        "Emits click:reviews event when reviews count button is clicked",
    },
    "click:colors": {
      action: "click:colors event emitted",
      table: {
        category: "Events",
        type: { summary: null },
      },
      description: "Emits click:colors event when color is chosen",
    },
    "image ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace image element",
    },
    "colors ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace color picker element",
    },
    badge: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace badge element",
    },
    "add-to-cart": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace add to cart button",
    },
    "add-to-cart-icon": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Use this slot to replace add to cart icon (it's visible before an item will be added to cart)",
    },
    "adding-to-cart-icon": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Use this slot to replace add to cart icon (it's visible during adding an item to cart)",
    },
    "wishlist-icon": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace wishlist icon",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace title element",
    },
    price: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace price element",
    },
    reviews: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace reviews element",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  image: "/assets/storybook/Home/productB.jpg",
  title: "Cotton Sweater",
  scoreRating: 4,
  maxRating: 5,
  reviewsCount: 7,
  showAddToCartButton: true,
  imageWidth: 216,
  imageHeight: 326,
};

export const WithColorPicker = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :colors="colors"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:colors="this['click:colors']"
    @click:reviews="this['click:reviews']"
  />`,
});
WithColorPicker.args = {
  ...Common.args,
  colors: [
    { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
    { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
    {
      label: "Vivid rose",
      value: "vivid rose",
      color: "#DB5593",
      selected: false,
    },
    { label: "Peach", value: "peach", color: "#F59F93", selected: false },
    {
      label: "Citrus",
      value: "citrus",
      color: "#FFEE97",
      selected: false,
    },
  ],
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...Common.args,
  link: "https://storefrontui.io",
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  ...Common.args,
  badgeColor: "color-primary",
  badgeLabel: "-50%",
};

export const AddedToCart = Template.bind({});
AddedToCart.args = {
  ...Common.args,
  isAddedToCart: true,
};

export const AddedToWishlist = Template.bind({});
AddedToWishlist.args = {
  ...Common.args,
  isInWishlist: true,
};

export const WithMultipleImages = Template.bind({
  argTypes: {
    image: {
      control: "object",
    },
  },
});
WithMultipleImages.args = {
  ...Common.args,
  image: [
    "/assets/storybook/Home/productB.jpg",
    "/assets/storybook/Home/productA.jpg",
  ],
};

export const WithPriceRange = Template.bind({});
WithPriceRange.args = {
  ...Common.args,
  regularPrice: "$3.99 - $19.09",
};

export const UseImageSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #image="{ image, title }">
      <div :style="{ height: '111px', display: 'flex', alignItems: 'center', justifyContent: 'center'}">CUSTOM IMAGE</div>
    </template>
  </SfProductCard>`,
});
UseImageSlot.args = { ...Common.args };

export const UseAddToCart = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #add-to-cart="{ isAddedToCart, showAddedToCartBadge, isAddingToCart }">
      CUSTOM ADD TO CART
    </template>
  </SfProductCard>`,
});
UseAddToCart.args = { ...Common.args };

export const UseColorsSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #colors="{ colors }">
      <div style="margin-top: var(--spacer-sm);">CUSTOM COLORS</div>
    </template>
  </SfProductCard>`,
});
UseColorsSlot.args = { ...Common.args };

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #title">
      CUSTOM TITLE
    </template>
  </SfProductCard>`,
});
UseTitleSlot.args = { ...Common.args };

export const UseWishlistIconSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #wishlist-icon">
      CUSTOM WISHLIST ICON
    </template>
  </SfProductCard>`,
});
UseWishlistIconSlot.args = { ...Common.args };

export const UsePriceSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #price">
      CUSTOM PRICE
    </template>
  </SfProductCard>`,
});
UsePriceSlot.args = { ...Common.args };

export const UseReviewsSlot = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  template: `
  <SfProductCard
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :badge-label="badgeLabel"
    :badge-color="badgeColor"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :reviews-count="reviewsCount"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :wishlist-icon="wishlistIcon"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click:reviews="this['click:reviews']"
  >
    <template #reviews">
      CUSTOM REVIEWS
    </template>
  </SfProductCard>`,
});
UseReviewsSlot.args = { ...Common.args };
