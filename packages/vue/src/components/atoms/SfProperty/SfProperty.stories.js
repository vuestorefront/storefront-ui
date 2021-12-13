import { SfProperty, SfBadge } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Property",
  component: SfProperty,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "property-color": { value: "var(--c-text)", control: "text" },
      "property-name-margin": {
        value: "0 var(--spacer-xs) 0 0",
        control: "text",
      },
      "property-name-color": {
        value: "var(--c-secondary-variant)",
        control: "text",
      },
      "property-name-text-transform": { value: "", control: "text" },
      "property-name-font": { value: "", control: "text" },
      "property-name-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "property-name-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "property-name-font-line-height": { value: "1.2", control: "text" },
      "property-name-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "property-name-content": { value: "", control: "text" },
      "property-value-color": { value: "", control: "text" },
      "property-value-font": { value: "", control: "text" },
      "property-value-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "property-value-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "property-value-font-line-height": { value: "1.2", control: "text" },
      "property-value-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The component for listing properties of a product. It's Vue 2 functional component.",
      },
    },
  },
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
      description: "CSS classes to modify component styling",
    },
    name: {
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
      description: "Sets property name",
    },
    value: {
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
      description: "Sets property value",
    },
    "name ": {
      table: {
        category: "Slots",
      },
      description: "Named slot `name`. Use this slot to replace property name",
    },
    "value ": {
      table: {
        category: "Slots",
      },
      description:
        "Named slot `value`. Use this slot to replace property value",
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

export const WithoutSuffix = Template.bind({});
WithoutSuffix.args = {
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
