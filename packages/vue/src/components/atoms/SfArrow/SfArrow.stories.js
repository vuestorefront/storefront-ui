import { SfArrow, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Arrow",
  component: SfArrow,
  parameters: {
    cssprops: {"arrow-justify-content":{"value":"center","control":"text"},"arrow-icon-transform":{"value":"","control":"text"},"button-width":{"value":"2.75rem","description":"Overridden other component's CSS variable","control":"text"},"button-height":{"value":"2.75rem","description":"Overridden other component's CSS variable","control":"text"},"button-padding":{"value":"0 0.625rem","description":"Overridden other component's CSS variable","control":"text"},"button-background":{"value":"var(--c-light)","description":"Overridden other component's CSS variable","control":"text"},"button-transition":{"value":"background 150ms linear","description":"Overridden other component's CSS variable","control":"text"},"icon-color":{"value":"var(--c-dark)","description":"Overridden other component's CSS variable","control":"text"},"button-box-shadow":{"value":"0px 4px 4px var(--c-black)","description":"Overridden other component's CSS variable","control":"text"},"box-shadow-transition-opacity-duration":{"value":"150ms","description":"Overridden other component's CSS variable","control":"text"},"button-box-shadow-opacity":{"value":"0.25","description":"Overridden other component's CSS variable","control":"text"},"button-border-radius":{"value":"100%","description":"Overridden other component's CSS variable","control":"text"}},
    docs: {
      description: {
        component:
          `Arrow component for sliders and navigation. It's Vue 2 functional component. To see css vars used in component please switch to canvas and CSS Custom Properties tab.`,
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
        "Disable click event. It is passed like any other attribute in Vue functional component.",
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
