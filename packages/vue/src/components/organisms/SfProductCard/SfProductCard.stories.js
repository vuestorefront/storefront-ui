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
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
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
    badgeLabel: {
      control: "text",
      table: {
        category: "Props",
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
    scoreRating: {
      control: "number",
      table: {
        category: "Props",
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
    maxRating: {
      control: "number",
      table: {
        category: "Props",
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
    specialPrice: {
      control: "number",
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
