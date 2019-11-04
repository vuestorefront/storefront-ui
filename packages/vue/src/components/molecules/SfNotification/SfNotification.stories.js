import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import SfNotification from "./SfNotification.vue";

storiesOf("Molecules|Notification", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
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
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #icon>
        <!-- -->
      </template>
    </SfNotification>`
  }))
  .add("[slot] title", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #title>
        <!-- -->
      </template>
    </SfNotification>`
  }))
  .add("[slot] message", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #message>
        <!-- -->
      </template>
    </SfNotification>`
  }))
  .add("[slot] action", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #action>
        <!-- -->
      </template>
    </SfNotification>`
  }))
  .add("[slot] close", () => ({
    components: { SfNotification },
    props: {
      title: {
        default: text("title (prop)", "Added to Cart")
      },
      message: {
        default: text(
          "message (prop)",
          "This is informative message for the user."
        )
      },
      action: {
        default: text("action (prop)", "View cart")
      },
      type: {
        default: select(
          "type (prop)",
          ["info", "success", "warning", "danger"],
          "info"
        )
      },
      visible: {
        default: boolean("visible (data)", true)
      }
    },
    template: `<SfNotification
      :visible="visible"
      :title="title"
      :message="message"
      :action="action"
      :type="type">
      <template #close>
        <!-- -->
      </template>
    </SfNotification>`
  }));
