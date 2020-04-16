import { withKnobs, text, select } from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import SfCharacteristic from "./SfCharacteristic.vue";
const iconsNames = Object.keys(icons);

export default {
  title: "Molecules|Characteristic",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfCharacteristic },
  props: {
    title: {
      default: text("title", "Safety", "Props"),
    },
    description: {
      default: text(
        "description",
        "It carefully packaged with a personal touch",
        "Props"
      ),
    },
    icon: {
      default: select("icon", iconsNames, "info_shield", "Props"),
    },
    sizeIcon: {
      default: select("sizeIcon", ["", ...sizes], "", "Props"),
    },
    colorIcon: {
      default: select("colorIcon", ["", ...colors], "", "Props"),
    },
  },
  template: `<SfCharacteristic 
      :title="title"
      :description="description"
      :icon="icon"
      :size-icon="sizeIcon"
      :color-icon="colorIcon"/>`,
});

export const SlotIcon = () => ({
  components: { SfCharacteristic },
  props: {
    title: {
      default: text("title", "Safety", "Props"),
    },
    description: {
      default: text(
        "description",
        "It carefully packaged with a personal touch",
        "Props"
      ),
    },
    icon: {
      default: select("icon", iconsNames, "info_shield", "Props"),
    },
    sizeIcon: {
      default: select("sizeIcon", ["", ...sizes], "", "Props"),
    },
    colorIcon: {
      default: select("colorIcon", ["", ...colors], "", "Props"),
    },
  },
  template: `<SfCharacteristic 
      :title="title"
      :description="description"
      :icon="icon"
      :size-icon="sizeIcon"
      :color-icon="colorIcon">
      <template #icon="{colorIcon, sizeIcon, icon}">
        ❤️
      </template>
    </SfCharacteristic>`,
});

SlotIcon.story = {
  name: "[slot] icon",
};

export const SlotText = () => ({
  components: { SfCharacteristic },
  props: {
    title: {
      default: text("title", "Safety", "Props"),
    },
    description: {
      default: text(
        "description",
        "It carefully packaged with a personal touch",
        "Props"
      ),
    },
    icon: {
      default: select("icon", iconsNames, "info_shield", "Props"),
    },
    sizeIcon: {
      default: select("sizeIcon", ["", ...sizes], "", "Props"),
    },
    colorIcon: {
      default: select("colorIcon", ["", ...colors], "", "Props"),
    },
  },
  template: `<SfCharacteristic 
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

SlotText.story = {
  name: "[slot] text",
};

export const SlotTitle = () => ({
  components: { SfCharacteristic },
  props: {
    title: {
      default: text("title", "Safety", "Props"),
    },
    description: {
      default: text(
        "description",
        "It carefully packaged with a personal touch",
        "Props"
      ),
    },
    icon: {
      default: select("icon", iconsNames, "info_shield", "Props"),
    },
    sizeIcon: {
      default: select("sizeIcon", ["", ...sizes], "", "Props"),
    },
    colorIcon: {
      default: select("colorIcon", ["", ...colors], "", "Props"),
    },
  },
  template: `<SfCharacteristic 
      :title="title"
      :description="description"
      :icon="icon"
      :size-icon="sizeIcon"
      :color-icon="colorIcon">
      <template #title="{title}">
        CUSTOM TITLE
      </template>
    </SfCharacteristic>`,
});

SlotTitle.story = {
  name: "[slot] title",
};

export const SlotDescription = () => ({
  components: { SfCharacteristic },
  props: {
    title: {
      default: text("title", "Safety", "Props"),
    },
    description: {
      default: text(
        "description",
        "It carefully packaged with a personal touch",
        "Props"
      ),
    },
    icon: {
      default: select("icon", iconsNames, "info_shield", "Props"),
    },
    sizeIcon: {
      default: select("sizeIcon", ["", ...sizes], "", "Props"),
    },
    colorIcon: {
      default: select("colorIcon", ["", ...colors], "", "Props"),
    },
  },
  template: `<SfCharacteristic 
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

SlotDescription.story = {
  name: "[slot] description",
};
