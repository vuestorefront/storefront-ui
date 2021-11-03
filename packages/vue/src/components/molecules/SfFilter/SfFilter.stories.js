import { SfFilter } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Filter",
  component: SfFilter,
  parameters: {
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
    change: { action: "Change color", table: { category: "Events" } },
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
