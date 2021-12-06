import { SfSteps } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Steps",
  component: SfSteps,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "steps-border": {
        value:
          "var(--steps-border-style, solid) var(--steps-border-color, var(--c-light))",
        control: "text",
      },
      "steps-border-width": { value: "0", control: "text" },
      "steps-step-background": { value: "", control: "text" },
      "steps-step-padding": {
        value: "var(--spacer-sm) var(--spacer-2xs)",
        control: "text",
      },
      "steps-step-color": { value: "var(--c-link)", control: "text" },
      "steps-step-cursor": { value: "pointer", control: "text" },
      "steps-progress-bottom": { value: "-2px", control: "text" },
      "steps-progress-width": {
        value: "var(--_steps-progress-width)",
        control: "text",
      },
      "steps-progress-height": { value: "2px", control: "text" },
      "steps-progress-background": {
        value: "var(--c-primary)",
        control: "text",
      },
      "steps-progress-transform": {
        value: "scale3d(calc(-0.5 + var(--_steps-progress-active-step)), 1, 1)",
        control: "text",
      },
      "steps-progress-transition": {
        value: "transform 150ms ease-in-out",
        control: "text",
      },
      "steps-content-padding": {
        value: "var(--spacer-base) 0 0 0",
        control: "text",
      },
      "steps-step-after-background": { value: "transparent", control: "text" },
      "step-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
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
    change: {
      action: "change event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits change event with step value when step is clicked",
    },
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
