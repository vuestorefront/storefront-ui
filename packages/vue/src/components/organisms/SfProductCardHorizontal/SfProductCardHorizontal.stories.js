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
  parameters: {
    docs: {
      description: {
        component:
          "Product card horizontal component with image, description, rating and add to cart button.",
      },
    },
  },
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
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Product title",
    },
    description: {
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
      description: "Product description",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: ["string", "array", "object"],
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
      },
      defaultValue: 140,
      description: "Product image width, without unit",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 200,
      description: "Product image height, without unit",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Link to product page",
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
    wishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart",
      description:
        "Wish list icon. This is the default icon for product not yet added to wish list. It can be a icon name from our icons list, or array or string as SVG path(s).",
    },
    isInWishlistIcon: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "heart_fill",
      description:
        "Wish list icon for product which has been added to wish list. This is the icon for product added to wish list.Default visible on mobile.Visible only on hover on desktop. It can be a icon name from our icons list, or array or string as SVG path(s).",
    },
    isInWishlist: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Status of whether product is on wish list or not",
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 1,
      description: "Selected quantity",
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
      description: "*Deprecated. Link element tag. Use slot to replace content",
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
            <SfProductOption color="black" :label="val"></SfProductOption>
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
