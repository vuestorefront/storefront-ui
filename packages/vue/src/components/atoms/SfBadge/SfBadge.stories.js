import { SfBadge, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Badge",
  component: SfBadge,
  parameters: {
    docs: {
      description: {
        component:
          "Badge component. Place desired content into its default slot. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-badge--full-width",
          "sf-badge--number",
          "color-primary",
          "color-secondary",
          "color-warning",
          "color-danger",
          "color-info",
          "color-success",
        ],
      },
      table: {
        category: "CSS modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    label: {
      control: "text",
      description:
        "Type here to fille the badge (only for testing in Storybook)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBadge },
  props: Object.keys(argTypes),
  template: `<SfBadge :class="classes">{{label}}</SfBadge>`,
});

export const Primary = Template.bind({});

Primary.args = { label: "Limited", classes: "color-primary" };

export const AsNumber = Template.bind({});

AsNumber.args = { label: "90", classes: "sf-badge--number" };

export const Secondary = Template.bind({});
Secondary.args = { label: "90", classes: "color-secondary" };

export const Warning = Template.bind({});
Warning.args = { label: "90", classes: "color-warning" };

export const Danger = Template.bind({});
Danger.args = { label: "90", classes: "color-danger" };

export const Info = Template.bind({});
Info.args = { label: "90", classes: "color-info" };

export const Success = Template.bind({});
Success.args = { label: "90", classes: "color-success" };

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfBadge, SfIcon },
  props: Object.keys(argTypes),
  template: `<SfBadge :class="classes" style="display: inline-flex; align-content: center;">
    <SfIcon icon="home" class="sf-arrow__icon" color="white" size="16px" view-box="0 0 24 12"/>
    <span>Hello</span>
  </SfBadge>`,
});
