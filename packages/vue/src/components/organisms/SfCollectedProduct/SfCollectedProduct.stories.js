import { SfCollectedProduct } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/CollectedProduct",
  component: SfCollectedProduct,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "collected-product-width": { value: "", control: "text" },
      "collected-product-padding": {
        value: "var(--spacer-xs)",
        control: "text",
      },
      "collected-product-background": { value: "", control: "text" },
      "collected-product-z-index": { value: "", control: "text" },
      "collected-product-remove-opacity": { value: "", control: "text" },
      "collected-product-remove-right": { value: "", control: "text" },
      "collected-product-remove-transition": { value: "", control: "text" },
      "collected-product-remove-top": { value: "", control: "text" },
      "collected-product-remove-circle-icon-display": {
        value: "",
        control: "text",
      },
      "collected-product-remove-circle-icon-transform": {
        value: "",
        control: "text",
      },
      "collected-product-remove-bottom": { value: "", control: "text" },
      "collected-product-remove-text-display": { value: "", control: "text" },
      "collected-product-image-background": {
        value: "var(--c-light)",
        control: "text",
      },
      "collected-product-image-width": {
        value: "",
        control: "text",
      },
      "collected-product-image-height": {
        value: "",
        control: "text",
      },
      "collected-product-main-margin": {
        value: "0 0 0 var(--spacer-sm)",
        control: "text",
      },
      "collected-product-main-flex-direction": { value: "", control: "text" },
      "collected-product-title-margin": {
        value: "0 var(--spacer-base) var(--spacer-sm) 0",
        control: "text",
      },
      "collected-product-title-color": {
        value: "var(--c-link)",
        control: "text",
      },
      "collected-product-title-font": { value: "", control: "text" },
      "collected-product-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "collected-product-title-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "collected-product-title-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "collected-product-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "collected-product-configuration-display": {
        value: "flex",
        control: "text",
      },
      "collected-product-configuration-justify-content": {
        value: "flex-end",
        control: "text",
      },
      "collected-product-configuration-align-items": {
        value: "flex-start",
        control: "text",
      },
      "collected-product-configuration-margin": {
        value: "1rem 0 0 0",
        control: "text",
      },
      "collected-product-actions-display": { value: "none", control: "text" },
      "collected-product-actions-justify-content": {
        value: "",
        control: "text",
      },
      "collected-product-actions-align-items": { value: "", control: "text" },
      "collected-product-box-shadow": { value: "", control: "text" },
      "icon-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "quantity-selector-background": {
        value: "var(--c-light)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-text-decoration": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "collected-product-transition": {
        value: "box-shadow 150ms ease-in-out",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Tile component with image, descriptions and actions for collected product.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-collected-product--detailed", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
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
      description: "The url of the product image.",
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 140,
        },
      },
      defaultValue: 140,
      description:
        "Product image width, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 200,
        },
      },
      defaultValue: 200,
      description:
        "Product image height, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
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
    regularPrice: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
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
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: "",
      description: "Product special price",
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: 1,
        },
      },
      defaultValue: 1,
      description: "Selected quantity",
    },
    minQty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: null,
      description: "Minimum quantity value",
    },
    maxQty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "null",
        },
      },
      defaultValue: null,
      description: "Maximum quantity value",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Link to product",
    },
    "v-model": {
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        category: "v-model",
        defaultValue: {
          summary: 1,
        },
      },
      defaultValue: 1,
      description: "v-model accepts `qty` prop and emits native events",
    },
    hasMoreActions: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      description: "More actions button visibility",
    },
    hasRemove: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      description: "Remove button visibility",
    },
    hasMoreActions: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      description: "More actions button visibility",
    },
    hasRemove: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      description: "Remove button visibility",
    },
    input: {
      action: "input event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits input event when quantity selector value is changed",
    },
    "click:remove": {
      action: "click:remove event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click:remove event when close button is clickecd",
    },
    "click:actions": {
      action: "click:actions event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits input event when actions button in mobile mode is clicked",
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
    "image ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace image element",
    },
    actions: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass custom actions",
    },
    configuration: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass custom configuration",
    },
    price: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass custom price element",
    },
    input: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass custom input element",
    },
    remove: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass custom remove button",
    },
    "more-actions": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to pass other custom actions",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    :class="classes"
    @input="inputHandler"
    @click:remove="this['click:remove']"
    @click:actions="this['click:actions']"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
    :hasRemove="hasRemove"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  image: "/assets/storybook/Home/productB.jpg",
  title: "Cotton Sweater Modern Style",
  regularPrice: "$10,99",
};

export const WithSpecialPrice = Template.bind({});
WithSpecialPrice.args = {
  ...Common.args,
  specialPrice: "$0,99",
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...Common.args,
  link: "https://storefrontui.io",
};

export const UseActionsSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #actions>
      CUSTOM ACTIONS
    </template>
  </SfCollectedProduct>`,
});
UseActionsSlot.args = { ...Common.args };

export const UseConfigurationSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #configuration>
      CUSTOM CONFIGURATION
    </template>
  </SfCollectedProduct>`,
});
UseConfigurationSlot.args = { ...Common.args };

export const UseImageSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #image>
      CUSTOM IMAGE
    </template>
  </SfCollectedProduct>`,
});
UseImageSlot.args = { ...Common.args };

export const UseInputSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #input>
      CUSTOM INPUT
    </template>
  </SfCollectedProduct>`,
});
UseInputSlot.args = { ...Common.args };

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #title>
      CUSTOM TITLE
    </template>
  </SfCollectedProduct>`,
});
UseTitleSlot.args = { ...Common.args };

export const UsePriceSlot = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    };
  },
  methods: {
    inputHandler(quantityValue) {
      this.quantity = quantityValue;
      this.input(this.quantity);
    },
  },
  template: `
  <SfCollectedProduct
    :qty="quantity"
    @input="inputHandler"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :minQty="minQty"
    :maxQty="maxQty"
    :regular-price="regularPrice"
    :special-price="specialPrice"
    :hasMoreActions="hasMoreActions"
  >
    <template #price>
      CUSTOM PRICE
    </template>
  </SfCollectedProduct>`,
});
UsePriceSlot.args = { ...Common.args };
