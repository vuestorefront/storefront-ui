import SfButton from "../../components/SfButton/SfButton.vue";

export default {
  title: "SFUI Components/Button",
  component: SfButton,
  parameters: {
    docs: {
      description: {
        component:
          "The base button component. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
    sm: {
      control: "text",
      defaultValue: "[type tailwind classes specific for the size here]",
      table: {
        category: "Sizes",
        defaultValue: {
          summary: "[type tailwind classes specific for the size here]",
        },
      },
      description: "",
    },
    base: {
      control: "text",
      defaultValue: "[type tailwind classes specific for the size here]",
      table: {
        category: "Sizes",
        defaultValue: {
          summary: "[type tailwind classes specific for the size here]",
        },
      },
      description: "",
    },
    lg: {
      control: "text",
      defaultValue: "[type tailwind classes specific for the size here]",
      table: {
        category: "Sizes",
        defaultValue: {
          summary: "[type tailwind classes specific for the size here]",
        },
      },
      description: "",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to place content inside the button",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButton :class="sm" />
    <SfButton :class="base" />
    <SfButton :class="lg" />
  </div>`
});

export const Primary = Template.bind({});

const SecondaryButton = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButton :class="sm" />
    <SfButton :class="base" />
    <SfButton :class="lg" />
  </div>`
});
export const Secondary = SecondaryButton.bind({});

const TertiaryButton = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButton :class="sm" />
    <SfButton :class="base" />
    <SfButton :class="lg" />
  </div>`
});
export const Tertiary = TertiaryButton.bind({});

const DisabledButton = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButton :class="sm" />
    <SfButton :class="base" />
    <SfButton :class="lg" />
  </div>`
});
export const Disabled = DisabledButton.bind({});
