import { SfPrice, SfBadge } from "@storefront-ui/vue";

export default {
  title: "Atoms/Price",
  component: SfPrice,
  argTypes: {
    regular: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    special: {
      control: "text",
      table: {
        category: "Props",
      },
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
    <template #special="{special}">
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
    <template #special="{special}">
      <SfBadge class="color-warning">{{special}}</SfBadge>
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
    <template #regular="{regular, special}">
      <SfBadge>{{regular}}</SfBadge>
    </template>
  </SfPrice>`,
});
WithRegularSlot.args = {
  ...OnlyRegular.args,
};
