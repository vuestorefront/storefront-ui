import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

import SfMenuItem from "./SfMenuItem.vue";

export default storiesOf("Molecules|MenuItem", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      icon: {
        default: text("icon (prop)", "chevron_right")
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
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      icon: {
        default: text("icon (prop)", "chevron_right")
      }
    },
    template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #icon>
          <!-- -->
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
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      icon: {
        default: text("icon (prop)", "chevron_right")
      }
    },
    template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #label>
          <!-- -->
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
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      icon: {
        default: text("icon (prop)", "chevron_right")
      }
    },
    template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #count>
          <!-- -->
        </template>
      </SfMenuItem>
    </div>`
  }))
  .add("[slot] mobile-nav-icon", () => ({
    components: {
      SfMenuItem
    },
    props: {
      label: {
        default: text("label (prop)", "Red")
      },
      count: {
        default: text("count (prop)", "30")
      },
      icon: {
        default: text("icon (prop)", "chevron_right")
      }
    },
    template: `<div style="max-width: 300px">
      <SfMenuItem
        :label="label"
        :count="count"
        :icon="icon">
        <template #mobile-nav-icon>
          <!-- -->
        </template>
      </SfMenuItem>
    </div>`
  }));
