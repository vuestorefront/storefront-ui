import { SfPrice, SfBadge } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Price",
  component: SfPrice,
  parameters: {
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
