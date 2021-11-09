import { SfPrice, SfBadge } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Price",
  component: SfPrice,
  parameters: {
    cssprops: {
      "price-flex-wrap": { value: "wrap", control: "text" },
      "price-flex-direction": { value: "row", control: "text" },
      "price-align-items": { value: "flex-end", control: "text" },
      "price-justify-content": { value: "", control: "text" },
      "price-regular-margin": { value: "0", control: "text" },
      "price-regular-color": { value: "var(--c-text)", control: "text" },
      "price-regular-font": { value: "", control: "text" },
      "price-regular-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "price-regular-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "price-regular-font-line-height": { value: "1.6", control: "text" },
      "price-regular-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "price-regular-text-decoration": { value: "none", control: "text" },
      "price-special-margin": { value: "0", control: "text" },
      "price-special-color": { value: "var(--c-text)", control: "text" },
      "price-special-font": { value: "", control: "text" },
      "price-special-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "price-special-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "price-special-font-line-height": { value: "1.6", control: "text" },
      "price-special-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "price-special-text-decoration": { value: "none", control: "text" },
      "price-old-margin": { value: "0 var(--spacer-xs) 0 0", control: "text" },
      "price-old-color": { value: "var(--c-danger)", control: "text" },
      "price-old-font": { value: "", control: "text" },
      "price-old-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "price-old-font-size": { value: "var(--font-size--lg)", control: "text" },
      "price-old-font-line-height": { value: "1.6", control: "text" },
      "price-old-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "price-old-text-decoration": { value: "line-through", control: "text" },
    },

    docs: {
      description: {
        component:
          "The price information component with optional display of previous price. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    regular: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: "null",
        },
      },
      description:
        "Regular/old price value. Crossed out if `special` is provided",
    },
    special: {
      control: "text",
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
      description: "Special price value",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfPrice },
  props: Object.keys(argTypes),
  template: `<SfPrice :special="special" :regular="regular" />`,
});

export const Common = Template.bind({});
Common.args = {
  regular: "$200.00",
};

export const OnlyRegular = Template.bind({});
OnlyRegular.args = {
  regular: "$200.00",
};

export const HasSpecial = Template.bind({});
HasSpecial.args = {
  ...Common.args,
  special: "$100.00",
};

export const WithSpecialSlot = (args, { argTypes }) => ({
  components: { SfPrice, SfBadge },
  props: Object.keys(argTypes),
  template: `
  <SfPrice
    :regular="regular"
    :special="special">
    <template #special="{props}">
      <SfBadge class="color-warning">{{special}}</SfBadge>
    </template>  
  </SfPrice>`,
});
WithSpecialSlot.args = {
  ...HasSpecial.args,
};

export const WithOldSlot = (args, { argTypes }) => ({
  components: { SfPrice, SfBadge },
  props: Object.keys(argTypes),
  template: `
  <SfPrice
    :regular="regular"
    :special="special">
    <template #old="{props}">
      <SfBadge class="color-warning">{{regular}}</SfBadge>
    </template>
  </SfPrice>`,
});
WithOldSlot.args = {
  ...WithSpecialSlot.args,
};

export const WithRegularSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPrice, SfBadge },
  template: `
  <SfPrice
    :regular="regular"
    :special="special">
    <template #regular="{props}">
      <SfBadge>{{regular}}</SfBadge>
    </template>
  </SfPrice>`,
});
WithRegularSlot.args = {
  ...OnlyRegular.args,
};
