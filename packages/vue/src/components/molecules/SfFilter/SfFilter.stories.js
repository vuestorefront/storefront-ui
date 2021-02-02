import { SfFilter } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Filter",
  component: SfFilter,
  decorators: [
    () => ({ template: '<div style="max-width: 22.875rem"><story/></div>' }),
  ],
  argTypes: {
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    count: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    selected: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    color: {
      control: "color",
      table: {
        category: "Props",
      },
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
