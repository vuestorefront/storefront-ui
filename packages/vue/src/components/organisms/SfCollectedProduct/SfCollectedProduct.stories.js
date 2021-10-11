import { SfCollectedProduct, SfButton } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/CollectedProduct",
  component: SfCollectedProduct,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-collected-product--detailed", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    image: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
    },
    imageWidth: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 140,
        },
      },
    },
    imageHeight: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 200,
        },
      },
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
    },
    regularPrice: {
      control: "string",
      table: {
        category: "Props",
      },
    },
    specialPrice: {
      control: "string",
      table: {
        category: "Props",
      },
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
        defaultValue: {
          summary: 1,
        },
      },
    },
    link: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
    },
    input: { action: "Quantity changed", table: { category: "Events" } },
    "click:remove": {
      action: "Remove product clicked",
      table: { category: "Events" },
    },
    "click:actions": {
      action: "More actions button clicked",
      table: { category: "Events" },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCollectedProduct },
  props: Object.keys(argTypes),
  template: `
  <SfCollectedProduct
    :qty="qty"
    :class="classes"
    @input="qty = $event"
    @click:remove="this['click:remove']"
    @click:actions="this['click:actions']"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
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
  template: `
  <SfCollectedProduct
    :qty="qty"
    @input="qty = $event"
    :image="image"
    :image-width="imageWidth"
    :image-height="imageHeight"
    :title="title"
    :link="link"
    :regular-price="regularPrice"
    :special-price="specialPrice"
  >
    <template #price>
      CUSTOM PRICE
    </template>
  </SfCollectedProduct>`,
});
UsePriceSlot.args = { ...Common.args };
