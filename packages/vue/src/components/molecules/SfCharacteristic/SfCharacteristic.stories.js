import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { icons } from "@storefront-ui/shared/icons/icons";
import { sizesValues as sizes } from "@storefront-ui/shared/variables/sizes";
import { iconColorsValues as colors } from "@storefront-ui/shared/variables/colors";
import { SfCharacteristic } from "@storefront-ui/vue";
const iconsNames = Object.keys(icons);
storiesOf("Molecules|Characteristic", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
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
        default: select("icon", iconsNames, "safety", "Props"),
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
  }))
  .add("[slot] icon", () => ({
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
  }))
  .add("[slot] text", () => ({
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
  }))
  .add("[slot] title", () => ({
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
  }))
  .add("[slot] description", () => ({
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
  }));
