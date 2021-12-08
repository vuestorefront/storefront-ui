import { SfCallToAction } from "@storefront-ui/vue";
import image from "../../../../public/assets/storybook/Home/newsletter.jpg";

export default {
  title: "Components/Molecules/CallToAction",
  component: SfCallToAction,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "call-to-action-flex-direction": { value: "column", control: "text" },
      "call-to-action-align-items": { value: "", control: "text" },
      "call-to-action-justify-content": { value: "left", control: "text" },
      "call-to-action-height": { value: "auto", control: "text" },
      "call-to-action-padding": { value: "var(--spacer-lg)", control: "text" },
      "call-to-action-background": {
        value:
          "var(--call-to-action-background-image, var(--_call-to-action-background-image)) var(--call-to-action-background-color, var(--_call-to-action-background-color, transparent)) no-repeat var(--call-to-action-background-position, 0% 0%)",
        control: "text",
      },
      "call-to-action-background-size": { value: "cover", control: "text" },
      "call-to-action-text-container-justify-content": {
        value: "flex-start",
        control: "text",
      },
      "call-to-action-text-container-flex-direction": {
        value: "column",
        control: "text",
      },
      "call-to-action-text-container-width": { value: "", control: "text" },
      "call-to-action-text-container-margin": { value: "", control: "text" },
      "call-to-action-title-margin": {
        value: "0 0 var(--spacer-base) 0",
        control: "text",
      },
      "call-to-action-color": {
        value: "var(--call-to-action-title-color, var(--c-white))",
        control: "text",
      },
      "call-to-action-title-font": { value: "", control: "text" },
      "call-to-action-title-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "call-to-action-title-font-size": {
        value: "var(--h2-font-size)",
        control: "text",
      },
      "call-to-action-title-font-line-height": {
        value: "1.4",
        control: "text",
      },
      "call-to-action-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "call-to-action-title-text-transform": { value: "none", control: "text" },
      "call-to-action-description-margin": {
        value: "0 0 var(--spacer-base) 0",
        control: "text",
      },
      "call-to-action-description-font": { value: "", control: "text" },
      "call-to-action-description-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "call-to-action-description-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "call-to-action-description-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "call-to-action-description-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "call-to-action-background-position": {
        value: "60%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "The call to action component with button and text",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width:1024px;"><story /></div>' }),
  ],
  argTypes: {
    title: {
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
      description: "CallToAction title.",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Text that will be displayed inside the button.",
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "CallToAction link. If it's filled in, changes button tag on a tag.",
    },
    description: {
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
      description: "CallToAction description.",
    },
    background: {
      control: "color",
      table: {
        category: "Props",
      },
      description: "Background color.",
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Background image.",
    },
    click: {
      action: "Click event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits change event with name of picked address component",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace title button",
    },
    "description ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace description button",
    },
    button: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Use this slot to replace bottom button",
    },
  },
  args: {
    title: "Subscribe to Newsletters",
    description:
      "Be aware of upcoming sales and events. Receive gifts and special offers!",
    buttonText: "Subscribe",
    image: "",
    background: "#e1e3e2",
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCallToAction },
  props: Object.keys(argTypes),
  template: `
  <SfCallToAction      
    :title="title"
    :description="description"
    :button-text="buttonText"
    :link="link"
    :image="image"
    :background="background"
    @click="click"
  />`,
});

export const Common = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  image,
};

export const WithLink = Template.bind({});
WithLink.args = {
  link: "https://storefrontui.io",
};

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfCallToAction },
  props: Object.keys(argTypes),
  template: `
  <SfCallToAction      
  :title="title"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background"
  @click="click"
  >
    <template #title="{title}">
      CUSTOM TITLE
      </template>
  </SfCallToAction>`,
});

export const UseDescriptionSlot = (args, { argTypes }) => ({
  components: { SfCallToAction },
  props: Object.keys(argTypes),
  template: `
  <SfCallToAction      
  :title="title"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background"
  @click="click"
  >
    <template #description="{description}">
      CUSTOM DESCRIPTION
      </template>
  </SfCallToAction>`,
});

export const UseButtonSlot = (args, { argTypes }) => ({
  components: { SfCallToAction },
  props: Object.keys(argTypes),
  template: `
  <SfCallToAction      
  :title="title"
  :description="description"
  :button-text="buttonText"
  :link="link"
  :image="image"
  :background="background"
  >
    <template #button="{buttonText}">
      <button @click="click">CUSTOM BUTTON</button>
      </template>
  </SfCallToAction>`,
});
