import { SfArrow, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Arrow",
  component: SfArrow,
  argTypes: {
    disabled: {
      control: "boolean",
      table: { category: "Attributes" },
      description: "Disable clickable",
      type: "boolean",
    },
    ariaLabel: {
      control: "text",
      table: {
        category: "Attributes",
      },
      defaultValue: "Arrow label",
    },
    onClick: { action: "clicked", table: { category: "Events" } },
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-arrow--right",
          "sf-arrow--long",
          "sf-arrow--transparent",
          "sf-arrow--rounded",
          "sf-arrow--no-shadow",
          "sf-arrow--top",
          "sf-arrow--down",
        ],
      },
      table: {
        category: "Modifier classes",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfArrow },
  props: Object.keys(argTypes),
  template: `<SfArrow :class="classes" :disabled="disabled" :aria-label="ariaLabel" @click="onClick" />`,
});

export const Common = Template.bind({});

Common.args = { disabled: false };

export const Disabled = Template.bind({});

Disabled.args = { disabled: true };

export const UseDefaultSlot = (args, { argTypes }) => ({
  components: { SfArrow, SfIcon },
  props: Object.keys(argTypes),
  template: `<SfArrow :class="classes" :disabled="disabled" aria-label="Arrow label">
  <SfIcon icon="arrow_right" class="sf-arrow__icon" size="14px" view-box="0 0 24 12"/>
</SfArrow>`,
});

UseDefaultSlot.args = { ...Common.args };
