import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import SfNotification from "./SfNotification.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type"/>`
  }))
  .add("[slot] icon", () => ({
    components: { SfNotification, SfIcon },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #icon="{icon}">
        <SfIcon icon="heart" color="white" size="sm" style="margin-right: 1.25rem"/>
      </template>
    </SfNotification>`
  }))
  .add("[slot] title", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #title="{title}">
        CUSTOM TITLE
      </template>
    </SfNotification>`
  }))
  .add("[slot] message", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #message="{message}">
        CUSTOM MESSAGE
      </template>
    </SfNotification>`
  }))
  .add("[slot] action", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #action="{action, actionHandler}">
        CUSTOM ACTION
      </template>
    </SfNotification>`
  }))
  .add("[slot] close", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title", "Added to Cart", "Props")
      },
      message: {
        default: text(
          "message",
          "This is informative message for the user.",
          "Props"
        )
      },
      action: {
        default: text("action", "View cart", "Props")
      },
      type: {
        default: select(
          "type",
          ["info", "success", "warning", "danger"],
          "info",
          "Props"
        )
      },
      visible: {
        default: boolean("visible", true, "Props")
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #close="closeHandler">
        <div style="position: absolute; top: 1rem; right: 1rem">close</div>
      </template>
    </SfNotification>`
  }));
