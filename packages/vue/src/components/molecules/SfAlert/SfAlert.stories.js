import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import SfAlert from "./SfAlert.vue";

storiesOf("Molecules|Alert", module)
  .addDecorator(withKnobs)
  .add("Basic", () => ({
    components: { SfAlert },
    props: {
      message: {
        default: text("message (prop)", "Low in stock")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      }
    },
    template: `<SfAlert
      :message="message"
      :type="type"
      />`
  }))
  .add("[slot] icon", () => ({
    components: { SfAlert },
    props: {
      message: {
        default: text("message (prop)", "Low in stock")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      }
    },
    template: `<SfAlert
      :message="message"
      :type="type">
      <template #icon="{icon}">
        ❤️
      </template>  
    </SfAlert>`
  }))
  .add("[slot] message", () => ({
    components: { SfAlert },
    props: {
      message: {
        default: text("message (prop)", "Low in stock")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      }
    },
    template: `<SfAlert
      :message="message"
      :type="type">
      <template #message="{message}">
        CUSTOM MESSAGE
      </template>  
    </SfAlert>`
  }));
