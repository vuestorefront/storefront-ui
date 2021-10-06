import { SfArrow, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Arrow",
  component: SfArrow,
  parameters: {
    docs: {
      description: {
        component:
          "Arrow component for sliders and navigation. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        category: "Attributes",
        type: {
          summary: "boolean",
        },
      },
      description:
        "Disable clickable. It is passed like any other attribute in Vue functional component.",
    },
    ariaLabel: {
      control: "text",
      table: {
        category: "Attributes",
        type: {
          summary: "string",
        },
      },
      description:
        "Aria-label name. It is passed like any other attribute in Vue functional component.",
      defaultValue: "Arrow label",
    },
    click: {
      action: "click",
      table: {
        category: "Events",
      },
      description:
        "Click event. It is passed like any other prop in Vue functional component.",
    },
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
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfArrow },
  props: Object.keys(argTypes),
  template: `<SfArrow :class="classes" :disabled="disabled" :aria-label="ariaLabel" @click="click" />`,
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
