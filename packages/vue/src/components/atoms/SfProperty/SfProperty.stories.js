import { SfProperty, SfBadge } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Property",
  component: SfProperty,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-property--full-width",
          "sf-property--value-in-middle",
          "sf-property--large",
          "sf-property--without-suffix",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    name: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    value: {
      control: "text",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfProperty },
  props: Object.keys(argTypes),
  template: `<SfProperty :class="classes" :name="name" :value="value" />`,
});

export const Common = Template.bind({});
Common.args = {
  name: "Material",
  value: "Cotton",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Common.args,
  classes: "sf-property--full-width",
};

export const ValueInMiddle = Template.bind({});
ValueInMiddle.args = {
  ...Common.args,
  classes: "sf-property--value-in-middle",
};

export const Large = Template.bind({});
Large.args = {
  ...Common.args,
  classes: "sf-property--large",
};

export const WithouSuffix = Template.bind({});
WithouSuffix.args = {
  ...Common.args,
  classes: "sf-property--without-suffix",
};

export const WithNameSlot = (args, { argTypes }) => ({
  components: { SfProperty, SfBadge },
  props: Object.keys(argTypes),
  template: `
  <SfProperty
    :class="classes"
    :name="name"
    :value="value">
    <template #name="{props}">
      {{name}}:<br>
    </template>
  </SfProperty>`,
});
WithNameSlot.args = {
  ...Common.args,
};

export const WithValueSlot = (args, { argTypes }) => ({
  components: { SfProperty, SfBadge },
  props: Object.keys(argTypes),
  template: `
  <SfProperty
    :class="classes"
    :name="name"
    :value="value">
    <template #value="{props}">
      <SfBadge>{{value}}</SfBadge>
    </template>
  </SfProperty>`,
});
WithValueSlot.args = {
  ...Common.args,
};
