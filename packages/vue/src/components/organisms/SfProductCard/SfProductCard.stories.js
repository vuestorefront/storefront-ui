import { storiesOf } from "@storybook/vue";
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
storiesOf("Organisms|ProductCard", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
        default: text("badgeLabel", "", "Props"),
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
        default: text("specialPrice", "", "Props"),
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
    data() {
      return {
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
    },
    template: `<SfProductCard
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :badge-label="badgeLabel"
        :badge-color="badgeColor"
        :colors="colors"
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
        @click:colors="handleSelectedColor"
    />`,
  }))
  .add("With badge", () => ({
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
      handleSelectedColor(color) {
        this.colors.map((el) => {
          if (el.label === color.label) {
            color.selected = !color.selected;
          }
        });
      },
    },
    data() {
      return {
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
    },
    template: `<SfProductCard
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :badge-label="badgeLabel"
        :badge-color="badgeColor"
        :colors="colors"
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
        @click:colors="handleSelectedColor"
    />`,
  }))
  .add("With price range", () => ({
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
        default: text("badgeLabel", "", "Props"),
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
        default: text("regularPrice", "$3.99 - $19.09", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "", "Props"),
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
      handleSelectedColor(color) {
        this.colors.map((el) => {
          if (el.label === color.label) {
            color.selected = !color.selected;
          }
        });
      },
    },
    data() {
      return {
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
    },
    template: `<SfProductCard
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :badge-label="badgeLabel"
        :badge-color="badgeColor"
        :colors="colors"
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
        @click:colors="handleSelectedColor"
    />`,
  }))
  .add("With 2 pictures", () => ({
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
    },
    methods: {
      alert(label) {
        alert(label);
      },
      handleSelectedColor(color) {
        this.colors.map((el) => {
          if (el.label === color.label) {
            color.selected = !color.selected;
          }
        });
      },
    },
    template: `<SfProductCard
        :image="pictures"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :badge-label="badgeLabel"
        :badge-color="badgeColor"
        :colors="colors"
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
        @click:colors="handleSelectedColor"
    />`,
  }))
  .add("[slot] image", () => ({
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
  }))
  .add("[slot] colors", () => ({
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
      <template #colors>
        <div>CUSTOM COLORS</div>
      </template>
    </SfProductCard>`,
  }))
  .add("[slot] add-to-cart", () => ({
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
  }))
  .add("[slot] title", () => ({
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
  }))
  .add("[slot] wishlist-icon", () => ({
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
  }))
  .add("[slot] price", () => ({
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
  }))
  .add("[slot] reviews", () => ({
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
  }));
