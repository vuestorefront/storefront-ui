import { SfCallToAction } from "@storefront-ui/vue";
import image from "../../../../public/assets/storybook/Home/newsletter.jpg";

export default {
  title: "Components/Molecules/CallToAction",
  component: SfCallToAction,
  decorators: [
    () => ({ template: '<div style="max-width:1024px;"><story /></div>' }),
  ],
  argTypes: {
    title: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    link: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    description: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    background: {
      control: "color",
      table: {
        category: "Props",
      },
    },
    image: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    click: { action: "Button clicked", table: { category: "Events" } },
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
Common.args = {
  total: 3,
  current: 1,
};

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
