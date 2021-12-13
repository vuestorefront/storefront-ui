import { SfHeading, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Heading",
  component: SfHeading,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "heading-padding": { value: "0 0 var(--spacer-xs) 0", control: "text" },
      "heading-text-align": { value: "", control: "text" },
      "heading-title-margin": { value: "0", control: "text" },
      "heading-title-color": { value: "var(--c-text)", control: "text" },
      "heading-title-font": { value: "", control: "text" },
      "heading-title-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "heading-title-font-size": {
        value: "var(--h1-font-size)",
        control: "text",
      },
      "heading-title-font-line-height": { value: "1.6", control: "text" },
      "heading-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "heading-description-margin": {
        value: "var(--spacer-sm) 0 0",
        control: "text",
      },
      "heading-description-color": { value: "var(--c-text)", control: "text" },
      "heading-description-font": { value: "", control: "text" },
      "heading-description-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "heading-description-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "heading-description-font-line-height": { value: "1.6", control: "text" },
      "heading-description-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "heading-border": { value: "", control: "text" },
      "heading-border-width": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The heading component for titles with optional description. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-heading--underline",
          "sf-heading--left",
          "sf-heading--right",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    level: {
      control: {
        type: "number",
        range: {
          min: 1,
          max: 6,
        },
      },
      table: {
        category: "Props",
      },
      defaultValue: 2,
      description:
        "Heading level from 1 to 6 (like in native heading element).",
    },
    title: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
      },
      description: "Heading title",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
      },
      description: "Heading description",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfHeading },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  title: "Share your look",
  description: "#YOURLOOK",
};

export const WithLabelSlot = (args, { argTypes }) => ({
  components: { SfHeading, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description">
    <template #title="{title}">
      <h2 style="display: flex; align-items: center">
        <SfIcon icon="heart" size="xxs" style="margin-right: 1rem"/> {{title}}
      </h2>
    </template>  
  </SfHeading>`,
});
WithLabelSlot.args = { ...Common.args };

export const WithDescriptionSlot = (args, { argTypes }) => ({
  components: { SfHeading, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfHeading
    :class="classes"
    :level="level"
    :title="title"
    :description="description">
    <template #description="{description}">
      <div style="display: flex; align-items: center">
        {{description}} <SfIcon icon="gift" size="xxs" style="margin-left: 1rem"/>
      </div>
    </template>        
  </SfHeading>`,
});
WithDescriptionSlot.args = { ...Common.args };
