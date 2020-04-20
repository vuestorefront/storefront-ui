import {
  withKnobs,
  text,
  number,
  boolean,
  select,
  object,
} from "@storybook/addon-knobs";
import { SfProductCard } from "@storefront-ui/vue";
import { colorsValues as colors } from "@storefront-ui/shared/variables/colors";
export default {
  title: "Organisms|ProductCard",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", true, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    />`,
});
export const With2Pictures = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  data() {
    return {
      pictures: [
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        {
          mobile: { url: "/assets/storybook/Home/productA.jpg" },
          desktop: { url: "/assets/storybook/Home/productA.jpg" },
        },
      ],
    };
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
        :image="pictures"
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
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    />`,
});
With2Pictures.story = {
  name: "With 2 pictures",
};
export const SlotImage = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #image="{ image, title }">
        <div :style="{ height: '111px', display: 'flex', alignItems: 'center', justifyContent: 'center'}">CUSTOM IMAGE</div>
      </template>
    </SfProductCard>`,
});
SlotImage.story = {
  name: "[slot] image",
};
export const SlotAddToCart = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        :show-add-to-cart-button="showAddToCartButton"
        :add-to-cart-disabled="addToCartDisabled"
        :is-added-to-cart="isAddedToCart"
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #add-to-cart="{ isAddedToCart, showAddedToCartBadge, isAddingToCart }">
        CUSTOM ADD TO CART
      </template>
    </SfProductCard>`,
});
SlotAddToCart.story = {
  name: "[slot] add-to-cart",
};
export const SlotTitle = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        :show-add-to-cart-button="showAddToCartButton"
        :add-to-cart-disabled="addToCartDisabled"
        :is-added-to-cart="isAddedToCart"
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #title="{ title }">
        CUSTOM TITLE
      </template>
    </SfProductCard>`,
});
SlotTitle.story = {
  name: "[slot] title",
};
export const SlotWishlistIcon = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        :show-add-to-cart-button="showAddToCartButton"
        :add-to-cart-disabled="addToCartDisabled"
        :is-added-to-cart="isAddedToCart"
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #wishlist-icon="{ currentWishlistIcon }">
        CUSTOM WISH LIST ICON
      </template>
    </SfProductCard>`,
});
SlotWishlistIcon.story = {
  name: "[slot] wishlist-icon",
};
export const SlotPrice = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        :show-add-to-cart-button="showAddToCartButton"
        :add-to-cart-disabled="addToCartDisabled"
        :is-added-to-cart="isAddedToCart"
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #price="{ specialPrice, regularPrice }">
        CUSTOM PRICE
      </template>
    </SfProductCard>`,
});
SlotPrice.story = {
  name: "[slot] price",
};
export const SlotReviews = () => ({
  components: { SfProductCard },
  props: {
    image: {
      default: object(
        "image",
        {
          mobile: { url: "/assets/storybook/Home/productB.jpg" },
          desktop: { url: "/assets/storybook/Home/productB.jpg" },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 216, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 326, {}, "Props"),
    },
    badgeLabel: {
      default: text("badgeLabel", "-50%", "Props"),
    },
    badgeColor: {
      default: select("badgeColor", colors, "color-primary", "Props"),
    },
    title: {
      default: text("title", "Cotton Sweater", "Props"),
    },
    link: {
      default: text("link", "", "Props"),
    },
    linkTag: {
      default: text("linkTag", "", "Props"),
    },
    scoreRating: {
      default: number("scoreRating", 4, {}, "Props"),
    },
    maxRating: {
      default: number("maxRating", 5, {}, "Props"),
    },
    reviewsCount: {
      default: number("reviewsCount", 7, {}, "Props"),
    },
    regularPrice: {
      default: text("regularPrice", "$10.99", "Props"),
    },
    specialPrice: {
      default: text("specialPrice", "$5.09", "Props"),
    },
    wishlistIcon: {
      default: text("wishlistIcon", "heart", "Props"),
    },
    isOnWishlistIcon: {
      default: text("isOnWishlistIcon", "heart_fill", "Props"),
    },
    isOnWishlist: {
      default: boolean("isOnWishlist", false, "Props"),
    },
    showAddToCartButton: {
      default: boolean("showAddToCartButton", false, "Props"),
    },
    isAddedToCart: {
      default: boolean("isAddedToCart", false, "Props"),
    },
    addToCartDisabled: {
      default: boolean("addToCartDisabled", false, "Props"),
    },
  },
  methods: {
    alert(label) {
      alert(label);
    },
  },
  template: `<SfProductCard
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
        :show-add-to-cart-button="showAddToCartButton"
        :add-to-cart-disabled="addToCartDisabled"
        :is-added-to-cart="isAddedToCart"
        @click:is-added-to-cart="alert('@click:is-added-to-cart')"
        @click:wishlist="alert('@click:wishlist')"
        @click:reviews="alert('@click:reviews')"
    >
      <template #reviews="{ maxRating, scoreRating }">
        CUSTOM REVIEWS
      </template>
    </SfProductCard>`,
});
SlotReviews.story = {
  name: "[slot] reviews",
};
