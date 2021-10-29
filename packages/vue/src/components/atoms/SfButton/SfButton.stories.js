import { SfButton } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Button",
  component: SfButton,
  parameters: {
    docs: {
      description: {
        component:
          "The base button component. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-button--outline",
          "sf-button--underlined",
          "sf-button--text",
          "sf-button--full-width",
          "sf-button--pure",
          "color-primary",
          "color-secondary",
          "color-light",
          "color-warning",
          "color-danger",
          "color-info",
          "color-success",
        ],
      },
      description: "CSS classes to modify component styling",
      table: {
        category: "CSS modifiers",
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description:
        "Equivalent of native button disabled attribute, allows focus for better accessibility",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Link for 'a' tag.",
    },
    content: {
      control: "text",
      description:
        "Type here to fill the button (only for testing in Storybook). For development use default slot, described below, to change the content.",
    },
    onClick: { action: "Button clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfButton
    :class="classes"
    :disabled="disabled" 
    @click="onClick"
    :link="link">
      {{content}}
  </SfButton>`,
});

export const Primary = Template.bind({});
Primary.args = {
  classes: "color-primary",
  content: "Shop now",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  ...Primary.args,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Primary.args,
  classes: "sf-button--underlined",
  link: "https://storefrontui.io",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  classes: "color-secondary",
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  classes: "color-light",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  classes: "color-warning",
};

export const InDanger = Template.bind({});
InDanger.args = {
  ...Primary.args,
  classes: "color-danger",
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  classes: "color-info",
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  classes: "color-success",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfButton
    :class="classes"
    :disabled="disabled"
    @click="onClick"
    :link="link">
    <template>
      <div v-html="content"/>
    </template>
  </SfButton>`,
});

WithDefaultSlot.args = {
  content: "<div>Custom slot</div>",
};
