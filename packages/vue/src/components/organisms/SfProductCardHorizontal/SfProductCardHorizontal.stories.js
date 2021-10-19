import {
  SfProductCardHorizontal,
  SfSelect,
  SfProductOption,
  SfButton,
} from "@storefront-ui/vue";

const selectOptions = {
  size: {
    label: "Size:",
    placeholder: "Size: XS",
    errorMessage: "Please pick a size",
    options: ["XXS", "XS", "S", "M", "L", "XL", "XXL"].map(
      (size) => `Size: ${size}`
    ),
  },
  colour: {
    label: "Colour:",
    placeholder: "Colour: Brown",
    errorMessage: "Please pick a colour",
    options: ["Maroon", "Blue", "Brown", "Mustard", "White", "Black"].map(
      (colour) => `Colour: ${colour}`
    ),
  },
};

export default {
  title: "Components/Organisms/ProductCardHorizontal",
  component: SfProductCardHorizontal,
  decorators: [
    () => ({
      template: `<div style="max-width: 1024px;"><story/></div>`,
    }),
  ],
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    description: {
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
    },
    imageHeight: {
      control: "number",
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
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart",
    },
    isInWishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    isInWishlist: {
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
    qty: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 1,
    },
    "click:addToCart": {
      action: "Add-to-cart clicked",
      table: { category: "Events" },
    },
    "click:wishlist": {
      action: "Wishlist clicked",
      table: { category: "Events" },
    },
    input: {
      action: "Quantity changed",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfProductCardHorizontal, SfSelect, SfProductOption, SfButton },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: 1,
      selectOptions,
    };
  },
  template: `
  <SfProductCardHorizontal
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :link-tag="linkTag"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :score-rating="scoreRating"
    :max-rating="maxRating"
    :wishlist-icon="wishlistIcon"
    :reviews-count="reviewsCount"
    :description="description"
    :qty="quantity"
    @input="input"
    :is-in-wishlist-icon="isInWishlistIcon"
    :is-in-wishlist="isInWishlist"
    @click:add-to-cart="this['click:addToCart']"
    @click:wishlist="this['click:wishlist']"
  >
    <template #configuration>
      <div style="display: flex; flex-direction: column; justify-content: flex-end">
        <SfSelect
          v-for="(valSelects, keySelects) in selectOptions"
          :key="keySelects"
          :error-message="valSelects.errorMessage"
          :placeholder="valSelects.placeholder"
          style="display: flex; width: fit-content; height: fit-content; padding: inherit;"
        >
          <SfSelectOption v-for="(val, key) in valSelects.options" :key="key" :value="key">
            {{ val }}
          </SfSelectOption>
        </SfSelect>
      </div>
    </template>
    <template #actions>
        <SfButton
          class="sf-button--text desktop-only"
          @click="$emit('click:add-to-wishlist')"
          style="margin: 0 0 1rem auto; display: block"
        >
          Save for later
        </SfButton>
        <SfButton
          class="sf-button--text desktop-only"
          @click="$emit('click:add-to-compare')"
          style="margin: 0 0 0 auto; display: block"
        >
          Add to compare
        </SfButton>
    </template>
  </SfProductCardHorizontal>`,
});

export const Common = Template.bind({});

Common.args = {
  title: "Cream Beach Bag",
  description:
    "Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
  regularPrice: "$10,99",
  scoreRating: 4,
  maxRating: 5,
  reviewsCount: 7,
  showAddToCartButton: true,
  image: "assets/storybook/SfProductCardHorizontal/productA.jpg",
};

export const WithMultipleImages = Template.bind({
  argTypes: {
    image: {
      control: "array",
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

export const AddedToWishlist = Template.bind({});
AddedToWishlist.args = {
  ...Common.args,
  isInWishlist: true,
};
