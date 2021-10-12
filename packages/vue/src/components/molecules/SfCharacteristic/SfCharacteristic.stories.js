import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfCharacteristic } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Components/Molecules/Characteristic",
  component: SfCharacteristic,
  parameters: {
    docs: {
      description: {
        component:
          "The component with icon and text used for describing product characteristics.",
      },
    },
  },
  argTypes: {
    sizeIcon: {
      control: {
        type: "select",
        options: sizes,
      },
      table: {
        category: "Props",
      },
      description: "One of predefined SfIcon sizes.",
    },
    colorIcon: {
      control: {
        type: "select",
        options: colors,
      },
      table: {
        category: "Props",
      },
      description: "One of predefined SfIcon colors, default is black.",
    },
    icon: {
      control: {
        type: "select",
        options: iconsNames,
      },
      table: {
        category: "Props",
        type: {
          summary: ["string", "array"],
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Svg file iconPath",
    },
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
      description: "Characteristic title",
    },
    description: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Characteristic description ",
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
  :size-icon="sizeIcon"
  :color-icon="colorIcon"
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
  icon: "safety",
};

export const UseIconSlot = (args, { argTypes }) => ({
  components: { SfCharacteristic },
  props: Object.keys(argTypes),
  template: `
  <SfCharacteristic 
    :title="title"
    :description="description"
    :icon="icon"
    :size-icon="sizeIcon"
    :color-icon="colorIcon"
  >
    <template #icon="{colorIcon, sizeIcon, icon}">
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
    :size-icon="sizeIcon"
    :color-icon="colorIcon">
    <template #description="{description}">
      CUSTOM DESCRIPTION
    </template>
  </SfCharacteristic>`,
});
UseDescriptionSlot.args = { ...WithIcon.args };
