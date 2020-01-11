import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfAlert from "./SfAlert.vue";
storiesOf("Molecules|Alert", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfAlert },
    props: {
      message: {
        default: text("message", "Low in stock", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
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
        default: text("message", "Low in stock", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
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
        default: text("message", "Low in stock", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
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
