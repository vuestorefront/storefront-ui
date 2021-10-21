import { SfSteps } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Steps",
  component: SfSteps,
  parameters: {
    cssprops: {
      "steps-step-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "steps-step-cursor": {
        value: "default",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "step-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "steps-border-width": {
        value: "0 0 2px 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "steps-step-padding": {
        value: "0 0 var(--spacer-xs) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "steps-step-after-background": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "Stepper component increasing dynamically on click. Used to guide user through defined path.Built from main component - SfSteps and internal component - SfStep.",
      },
    },
  },
  argTypes: {
    canGoBack: {
      control: "boolean",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Disable clicking on a past step",
    },
    active: {
      control: "number",
      table: {
        category: "Props for main component",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "0",
        },
      },
      defaultValue: 0,
      description: "Current active step",
    },
    name: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Step's name",
    },
    steps: {
      control: "array",
      table: {
        category: "Props for main component",
        type: {
          summary: "array",
        },
        defaultValue: {
          summary: "[]",
        },
      },
      description:
        "Steps to display (only for testing puropses). Add steps using SfStep component.",
    },
    name: {
      control: "text",
      table: {
        category: "Props for SfStep component",
        defaultValue: {
          summary: "",
        },
      },
      description: "Name of the step.",
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
    change: { action: "Step changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSteps },
  props: Object.keys(argTypes),
  template: `
  <SfSteps
    :active="active"
    :steps="steps" 
    :can-go-back="canGoBack"
    @change="change"
  >
    <SfStep v-for="(step, key) in steps" :key="key" :name="step">
      <div style="display: flex; align-items:center; justify-content:center; height: 18.75rem; background-color: #f2f2f2;">
        [#default slot content] {{step}}
      </div>
    </SfStep>
  </SfSteps>`,
});

export const Common = Template.bind({});
Common.args = {
  steps: ["Details", "Shipping", "Payment", "Review"],
};

export const NoGoBack = Template.bind({});
NoGoBack.args = {
  ...Common.args,
  active: 1,
  canGoBack: false,
};
