import { SfFilter } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Filter",
  component: SfFilter,
  parameters: {
    cssprops: {
      "filter-color-margin": {
        value: "0 var(--spacer-sm) 0 0",
        control: "text",
      },
      "filter-label-display": { value: "flex", control: "text" },
      "filter-label-align-items": { value: "center", control: "text" },
      "filter-label-margin": { value: "0", control: "text" },
      "filter-label-color": { value: "var(--c-link)", control: "text" },
      "filter-label-font": { value: "", control: "text" },
      "filter-label-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "filter-label-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "filter-label-font-line-height": { value: "1.4", control: "text" },
      "filter-label-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "filter-label-text-decoration": { value: "", control: "text" },
      "filter-label-transform": { value: "", control: "text" },
      "filter-count-display": { value: "", control: "text" },
      "filter-count-margin": {
        value: "0 var(--spacer-sm) 0 auto",
        control: "text",
      },
      "filter-count-color": { value: "var(--c-text-muted)", control: "text" },
      "filter-count-font": { value: "", control: "text" },
      "filter-count-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "filter-count-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "filter-count-font-line-height": { value: "1.4", control: "text" },
      "filter-count-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "checkbox-order": {
        value: "1",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "checkbox-border-radius": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-size": {
        value: "1.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "checkbox-border-color": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "checkbox-display": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component: "Filter component with color, name and counter of items.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 22.875rem"><story/></div>' }),
  ],
  argTypes: {
    label: {
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
      description: "Label text.",
    },
    count: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "The quantity.",
    },
    selected: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Sets selected state",
    },
    color: {
      control: "color",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Sets fliter color.",
    },
    change: {
      action: "change event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits change event when component is clicked",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfFilter },
  props: Object.keys(argTypes),
  template: `
  <SfFilter
    :label="label"
    :count="count"
    :selected="selected"
    :color="color"
    @change="change"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Red",
  count: 30,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: true,
};

export const AsColorFilter = Template.bind({});
AsColorFilter.args = {
  ...Common.args,
  color: "#E69494",
};

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfFilter },
  props: Object.keys(argTypes),
  template: `
  <SfFilter
    :label="label"
    :count="count"
    :color="color"
    :selected="selected"
    @change="selected = !selected"
    style="max-width: 22.875rem"
  >
  <template #label="{label}">CUSTOM LABEL</template>
  </SfFilter>`,
});
UseLabelSlot.args = { ...Common.args };

export const UseCountSlot = (args, { argTypes }) => ({
  components: { SfFilter },
  props: Object.keys(argTypes),
  template: `
  <SfFilter
    :label="label"
    :count="count"
    :color="color"
    :selected="selected"
    @change="selected = !selected"
    style="max-width: 22.875rem"
  >
  <template #count="{count}">CUSTOM COUNT</template>
  </SfFilter>`,
});
UseCountSlot.args = { ...Common.args };
