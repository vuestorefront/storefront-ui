import SfButtonPrimary from "../../components/SfButton/SfButtonPrimary.vue";
import SfButtonSecondary from "../../components/SfButton/SfButtonSecondary.vue";
import SfButtonTertiary from "../../components/SfButton/SfButtonTertiary.vue";
import SfButtonDestroy from "../../components/SfButton/SfButtonDestroy.vue";
import SfButtonDestroySecondary from "../../components/SfButton/SfButtonDestroySecondary.vue";
import SfButtonDestroyTertiary from "../../components/SfButton/SfButtonDestroyTertiary.vue";
import SfButtonRounded from "../../components/SfButton/SfButtonRounded.vue";

export default {
  title: "SFUI Components/Button",
  component: SfButtonPrimary,
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
      defaultValue: "leading-5 px-3 py-[6px] text-sm",
      table: {
        category: "Sizes",
        defaultValue: {
          summary: "leading-5 px-3 py-[6px] text-sm",
        },
      },
      description: "",
    },
    lg: {
      control: "text",
      defaultValue: "px-6 py-3",
      table: {
        category: "Sizes",
        defaultValue: {
          summary: "px-6 py-3",
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
  components: { SfButtonPrimary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonPrimary class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonPrimary>
    <SfButtonPrimary>Hello</SfButtonPrimary>
    <SfButtonPrimary class="px-6 py-3">Hello</SfButtonPrimary>
  </div>`
});

export const Primary = Template.bind({});

const SecondaryButton = (args, { argTypes }) => ({
  components: { SfButtonSecondary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonSecondary class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonSecondary>
    <SfButtonSecondary>Hello</SfButtonSecondary>
    <SfButtonSecondary class="px-6 py-3">Hello</SfButtonSecondary>
  </div>`
});
export const Secondary = SecondaryButton.bind({});

const TertiaryButton = (args, { argTypes }) => ({
  components: { SfButtonTertiary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonTertiary class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonTertiary>
    <SfButtonTertiary>Hello</SfButtonTertiary>
    <SfButtonTertiary class="px-6 py-3">Hello</SfButtonTertiary>
  </div>`
});
export const Tertiary = TertiaryButton.bind({});

const DisabledButton = (args, { argTypes }) => ({
  components: { SfButtonPrimary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonPrimary :disabled="true" class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonPrimary>
    <SfButtonPrimary :disabled="true">Hello</SfButtonPrimary>
    <SfButtonPrimary :disabled="true" class="px-6 py-3">Hello</SfButtonPrimary>
  </div>`
});
export const Disabled = DisabledButton.bind({});

const DestroyButton = (args, { argTypes }) => ({
  components: { SfButtonDestroy },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonDestroy class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonDestroy>
    <SfButtonDestroy>Hello</SfButtonDestroy>
    <SfButtonDestroy class="px-6 py-3">Hello</SfButtonDestroy>
  </div>`
});
export const Destroy = DestroyButton.bind({});

const DestroySecondaryButton = (args, { argTypes }) => ({
  components: { SfButtonDestroySecondary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonDestroySecondary class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonDestroySecondary>
    <SfButtonDestroySecondary>Hello</SfButtonDestroySecondary>
    <SfButtonDestroySecondary class="px-6 py-3">Hello</SfButtonDestroySecondary>
  </div>`
});
export const DestroySecondary = DestroySecondaryButton.bind({});

const DestroyTertiaryButton = (args, { argTypes }) => ({
  components: { SfButtonDestroyTertiary },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonDestroyTertiary class="leading-5 px-3 py-[6px] text-sm">Hello</SfButtonDestroyTertiary>
    <SfButtonDestroyTertiary>Hello</SfButtonDestroyTertiary>
    <SfButtonDestroyTertiary class="px-6 py-3">Hello</SfButtonDestroyTertiary>
  </div>`
});
export const DestroyTertiary = DestroyTertiaryButton.bind({});

const RoundedButton = (args, { argTypes }) => ({
  components: { SfButtonRounded },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfButtonRounded class="p-[7px]"> 
      <svg class="w-[16px] fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg> 
    </SfButtonRounded>
    <SfButtonRounded> 
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    </SfButtonRounded>
    <SfButtonRounded class="p-[14px]">  
      <svg class="w-4 fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    </SfButtonRounded>
  </div>`
});
export const Rounded = RoundedButton.bind({});
