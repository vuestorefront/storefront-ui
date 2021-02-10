import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfCharacteristic } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Molecules/Characteristic",
  component: SfCharacteristic,
  argTypes: {
    icon: {
      control: {
        type: "object",
      },
      table: {
        category: "Props",
      },
      defaultValue: {
        icon: "info",
        size: "lg",
        color: "green-primary",
      },
    },
    title: {
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
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCharacteristic },
  props: Object.keys(argTypes),
  template: `
  <SfCharacteristic 
  :title="title"
  :description="description"
  :icon="icon"
  />`,
});
export const Common = Template.bind({});
Common.args = {
  description: "It carefully packaged with a personal touch",
  title: "Safety",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Common.args,
  icon: {
    icon: "safety",
  },
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfCharacteristic },
  props: Object.keys(argTypes),
  template: `
  <SfCharacteristic 
    :title="title"
    :description="description"
    :icon="icon"
  >
    <template #icon>
      ❤️
    </template>
  </SfCharacteristic>`,
});
UseIconSlot.args = { ...Common.args };

export const UseTextSlot = (args, { argTypes }) => ({
  components: { SfCharacteristic },
  props: Object.keys(argTypes),
  template: `
  <SfCharacteristic 
    :title="title"
    :description="description"
    :icon="icon"
    :size-icon="sizeIcon"
    :color-icon="colorIcon">
    <template #text="{title, description}">
      CUSTOM TEXT
    </template>
  </SfCharacteristic>`,
});
UseTextSlot.args = { ...WithIcon.args };

export const UseDescriptionSlot = (args, { argTypes }) => ({
  components: { SfCharacteristic },
  props: Object.keys(argTypes),
  template: `
  <SfCharacteristic 
    :title="title"
    :description="description"
    :icon="icon"
    <template #description="{description}">
      CUSTOM DESCRIPTION
    </template>
  </SfCharacteristic>`,
});
UseDescriptionSlot.args = { ...WithIcon.args };
