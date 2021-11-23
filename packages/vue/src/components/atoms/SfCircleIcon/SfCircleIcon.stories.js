import { icons } from "@storefront-ui/shared/icons/icons";
import { SfCircleIcon } from "@storefront-ui/vue";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";

const iconsNames = Object.keys(icons);

export default {
  title: "Components/Atoms/CircleIcon",
  component: SfCircleIcon,
  parameters: {
    cssprops: {
      "circle-icon-position": { value: "relative", control: "text" },
      "icon-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-size": {
        value: "1.5rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-size": {
        value: "3.25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-background": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-border-radius": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow": {
        value: "0 0 0 0.3125rem var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow-opacity": {
        value: "0.3",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-position": {
        value: "static",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-transition": {
        value: "background 150ms ease",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The Round hover-animated component with an icon, e.g. usable for major navigation/action items. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-circle-icon--small",
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
        category: "CSS Modifiers",
      },
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props",
      },
      description:
        "Icon SVG path(s) It can be single SVG path (string) or array of SVG paths or icon name from our icons list (such as 'added_to_cart`)",
    },
    iconSize: {
      control: {
        type: "select",
        options: sizes,
      },
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Custom size of the icon. It can be one of our standard sizes: xxs, xs, sm, md, lg, xl, xxl, xl3, xl4, or e.g. '12px' or '1.2rem' or nothing.",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Disables button and sets proper styling.",
    },
    click: {
      action: "Click event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Click event. It is passed via v-on='listeners'",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCircleIcon },
  props: Object.keys(argTypes),
  template: `
  <SfCircleIcon
    :class="classes"
    :icon="icon" 
    :iconSize="iconSize"
    aria-label="Go to Home"
    :disabled="disabled"
    :style="{margin: '.5rem'}"
    @click="click"
  />`,
});

export const Primary = Template.bind({});
Primary.args = {
  icon: "home",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
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
  components: { SfCircleIcon },
  props: Object.keys(argTypes),
  template: `
  <SfCircleIcon
    :class="classes"
    :icon="icon" 
    :iconSize="iconSize"
    aria-label="Go to Home"
    :disabled="disabled"
    @click="click"
  >
    <span style="font-size: 1.5rem; width: 20px; height: 20px; line-height: 0; display: flex; justify-content: center; align-items: center">
      Home
    </span>
  </SfCircleIcon>`,
});

WithDefaultSlot.args = {
  ...Primary.args,
  iconSize: "20px",
};
