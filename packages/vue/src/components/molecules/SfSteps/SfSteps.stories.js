import { SfSteps } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/Steps",
  component: SfSteps,
  parameters: {
    docs: {
      description: {
        component:
          "Stepper component increasing dynamically on click. Used to guide user through defined path.",
      },
    },
  },
  argTypes: {
    canGoBack: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Disable clicking on a past step",
    },
    active: {
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
        defaultValue: {
          summary: 0,
        },
      },
      description: "Current active step",
    },
    name: {
      control: "text",
      table: {
        category: "Props",
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
        defaultValue: {
          summary: "[]",
        },
      },
      description:
        "Steps to display (only for testing puropses). Add steps using SfStep component.",
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
