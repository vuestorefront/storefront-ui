import { withKnobs, text } from "@storybook/addon-knobs";
import SfMenuItem from "./SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  title: "Molecules|MenuItem",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: {
    SfMenuItem,
  },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: text("count", "30", "Props"),
    },
    icon: {
      default: text("icon", "chevron_right", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfMenuItem
      :label="label"
      :count="count"
      :icon="icon"/>
    </div>`,
});

export const SlotIcon = () => ({
  components: {
    SfMenuItem,
  },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: text("count", "30", "Props"),
    },
    icon: {
      default: text("icon", "chevron_right", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #icon>
          ❤️
        </template>
      </SfMenuItem>
    </div>`,
});

SlotIcon.story = {
  name: "[slot] icon",
};

export const SlotLabel = () => ({
  components: {
    SfMenuItem,
  },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: text("count", "30", "Props"),
    },
    icon: {
      default: text("icon", "chevron_right", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #label="{label}">
          CUSTOM LABEL
        </template>
      </SfMenuItem>
    </div>`,
});

SlotLabel.story = {
  name: "[slot] label",
};

export const SlotCount = () => ({
  components: {
    SfMenuItem,
  },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: text("count", "30", "Props"),
    },
    icon: {
      default: text("icon", "chevron_right", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #count="{count}">
          CUSTOM COUNT
        </template>
      </SfMenuItem>
    </div>`,
});

SlotCount.story = {
  name: "[slot] count",
};

export const SlotMobileNavIcon = () => ({
  components: {
    SfMenuItem,
    SfIcon,
  },
  props: {
    label: {
      default: text("label", "Red", "Props"),
    },
    count: {
      default: text("count", "30", "Props"),
    },
    icon: {
      default: text("icon", "chevron_right", "Props"),
    },
  },
  template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #mobile-nav-icon="{icon}">
          <SfIcon icon="arrow_right" size="xxs" style="margin-left: 0.625rem"/>
        </template>
      </SfMenuItem>
    </div>`,
});

SlotMobileNavIcon.story = {
  name: "[slot] mobile-nav-icon",
};
