import { SfProductCard } from "@storefront-ui/vue";

export default {
  title: "Components/Organisms/ProductCard",
  component: SfProductCard,
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: "100%",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: "auto",
    },
    badgeLabel: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    badgeColor: {
      control: "color",
      table: {
        category: "Props",
      },
    },
    scoreRating: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    reviewsCount: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    maxRating: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    regularPrice: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    specialPrice: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    colors: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart",
    },
    isOnWishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    isOnWishlist: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    showAddToCartButton: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    isAddedToCart: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    addToCartDisabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    "click:addToCart": {
      action: "Add-to-cart clicked",
      table: { category: "Events" },
    },
    "click:wishlist": {
      action: "Wishlist clicked",
      table: { category: "Events" },
    },
    handleClick: {
      action: "Card clicked",
      table: { category: "Events" },
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
};

export const WithColorPicker = (args, { argTypes }) => ({
  components: { SfProductCard },
  props: Object.keys(argTypes),
  methods: {
    handleSelectedColor(color) {
      this.colors.map((el) => {
        if (el.label === color.label) {
          el.selected = !el.selected;
        } else {
          el.selected = false;
        }
      });
    },
  },
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
    @click:colors="handleSelectedColor"
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
  isOnWishlist: true,
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
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
    :is-on-wishlist-icon="isOnWishlistIcon"
    :is-on-wishlist="isOnWishlist"
    :show-add-to-cart-button="showAddToCartButton"
    :add-to-cart-disabled="addToCartDisabled"
    :is-added-to-cart="isAddedToCart"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
    @click="handleClick"
  >
    <template #reviews">
      CUSTOM REVIEWS
    </template>
  </SfProductCard>`,
});
UseReviewsSlot.args = { ...Common.args };
