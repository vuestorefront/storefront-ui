import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfMenuItem from "./SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
storiesOf("Molecules|MenuItem", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      icon: {
        default: text("icon", "chevron_right", "Props")
      }
    },
    template: `<div style="max-width: 300px">
      <SfMenuItem
      :label="label"
      :count="count"
      :icon="icon"/>
    </div>`
  }))
  .add("[slot] icon", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      icon: {
        default: text("icon", "chevron_right", "Props")
      }
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
    </div>`
  }))
  .add("[slot] label", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      icon: {
        default: text("icon", "chevron_right", "Props")
      }
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
    </div>`
  }))
  .add("[slot] count", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      icon: {
        default: text("icon", "chevron_right", "Props")
      }
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
    </div>`
  }))
  .add("[slot] mobile-nav-icon", () => ({
    components: {
      SfMenuItem,
      SfIcon
    },
    props: {
      label: {
        default: text("label", "Red", "Props")
      },
      count: {
        default: text("count", "30", "Props")
      },
      icon: {
        default: text("icon", "chevron_right", "Props")
      }
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
    </div>`
  }));
