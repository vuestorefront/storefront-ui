import { icons } from "@storefront-ui/shared/icons/icons";
import { SfCircleIcon } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Atoms/CircleIcon",
  component: SfCircleIcon,
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
      description: "Modifier classes",
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
      description: "Icon to use",
    },
    iconSize: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
    },
    onClick: { action: "Circle icon clicked", table: { category: "Events" } },
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
    @click="onClick"
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
    @click="onClick"
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
