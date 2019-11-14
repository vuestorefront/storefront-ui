import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfCharacteristic from "./SfCharacteristic.vue";

const sizes = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];
const colors = [
  "primary",
  "secondary",
  "white",
  "black",
  "accent",
  "green-primary",
  "green-secondary",
  "gray-primary",
  "gray-secondary",
  "light-primary",
  "light-secondary",
  "pink-primary",
  "pink-secondary",
  "yellow-primary",
  "yellow-secondary",
  "blue-primary",
  "blue-secondary"
];

storiesOf("Molecules|Characteristic", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfCharacteristic },
    props: {
      title: {
        default: text("title (prop)", "Safety")
      },
      description: {
        default: text(
          "description (prop)",
          "It carefully packaged with a personal touch"
        )
      },
      icon: {
        default: text("icon (prop)", "info_shield")
      },
      sizeIcon: {
        default: select("size-icon (prop)", sizes, "xs")
      },
      colorIcon: {
        default: select("color-icon (prop)", colors, "primary")
      }
    },
    template: `<SfCharacteristic 
      :title="title"
      :description="description"
      :icon="icon"
      :size-icon="sizeIcon"
      :color-icon="colorIcon"/>`
  }))
  .add("[slot] icon", () => ({
    components: { SfCharacteristic },
    props: {
      title: {
        default: text("title (prop)", "Safety")
      },
      description: {
        default: text(
          "description (prop)",
          "It carefully packaged with a personal touch"
        )
      },
      icon: {
        default: text("icon (prop)", "info_shield")
      },
      sizeIcon: {
        default: select("size-icon (prop)", sizes, "xs")
      },
      colorIcon: {
        default: select("color-icon (prop)", colors, "primary")
      }
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
    </SfCharacteristic>`
  }))
  .add("[slot] text", () => ({
    components: { SfCharacteristic },
    props: {
      title: {
        default: text("title (prop)", "Safety")
      },
      description: {
        default: text(
          "description (prop)",
          "It carefully packaged with a personal touch"
        )
      },
      icon: {
        default: text("icon (prop)", "info_shield")
      },
      sizeIcon: {
        default: select("size-icon (prop)", sizes, "xs")
      },
      colorIcon: {
        default: select("color-icon (prop)", colors, "primary")
      }
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
    </SfCharacteristic>`
  }))
  .add("[slot] title", () => ({
    components: { SfCharacteristic },
    props: {
      title: {
        default: text("title (prop)", "Safety")
      },
      description: {
        default: text(
          "description (prop)",
          "It carefully packaged with a personal touch"
        )
      },
      icon: {
        default: text("icon (prop)", "info_shield")
      },
      sizeIcon: {
        default: select("size-icon (prop)", sizes, "xs")
      },
      colorIcon: {
        default: select("color-icon (prop)", colors, "primary")
      }
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
    </SfCharacteristic>`
  }))
  .add("[slot] description", () => ({
    components: { SfCharacteristic },
    props: {
      title: {
        default: text("title (prop)", "Safety")
      },
      description: {
        default: text(
          "description (prop)",
          "It carefully packaged with a personal touch"
        )
      },
      icon: {
        default: text("icon (prop)", "info_shield")
      },
      sizeIcon: {
        default: select("size-icon (prop)", sizes, "xs")
      },
      colorIcon: {
        default: select("color-icon (prop)", colors, "primary")
      }
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
    </SfCharacteristic>`
  }));
