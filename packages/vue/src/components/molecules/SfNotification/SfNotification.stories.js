import { withKnobs, text, select } from "@storybook/addon-knobs";
import { SfNotification, SfIcon } from "@storefront-ui/vue";
import {
  visibilityToggleMixin,
  withVisibilityToggle,
} from "../../../../config/storybook/decorators";
export default {
  title: "Molecules|Notification",
  decorators: [withKnobs, withVisibilityToggle],
};
export const Common = () => ({
  components: { SfNotification },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
        @click:close="visible = false"
      />`,
});
export const SlotIcon = () => ({
  components: { SfNotification, SfIcon },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
        @click:close="visible = false"
      >
        <template #icon="{icon}">
          <SfIcon icon="heart" color="white"/>
        </template>
      </SfNotification>`,
});
SlotIcon.story = {
  name: "[slot] icon",
};
export const SlotTitle = () => ({
  components: { SfNotification },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
      >
        <template #title="{title}">
          CUSTOM TITLE
        </template>
      </SfNotification>`,
});
SlotTitle.story = {
  name: "[slot] title",
};
export const SlotMessage = () => ({
  components: { SfNotification },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
        @click:close="visible = false"
      >
        <template #message="{message}">
          CUSTOM MESSAGE
        </template>
      </SfNotification>`,
});
SlotMessage.story = {
  name: "[slot] message",
};
export const SlotAction = () => ({
  components: { SfNotification },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
        @click:close="visible = false"
      >
        <template #action="{action, actionHandler}">
          CUSTOM ACTION
        </template>
      </SfNotification>`,
});
SlotAction.story = {
  name: "[slot] action",
};
export const SlotClose = () => ({
  components: { SfNotification },
  props: {
    title: {
      default: text("title", "Added to Cart", "Props"),
    },
    message: {
      default: text(
        "message",
        "This is informative message for the user.",
        "Props"
      ),
    },
    action: {
      default: text("action", "View cart", "Props"),
    },
    type: {
      default: select(
        "type",
        ["info", "success", "warning", "danger"],
        "info",
        "Props"
      ),
    },
  },
  mixins: [visibilityToggleMixin],
  template: `
      <SfNotification
        :visible="visible"
        :title="title"
        :message="message"
        :action="action"
        :type="type"
        @click:close="visible = false"
      >
        <template #close="closeHandler">
          <div style="position: absolute; top: 1rem; right: 1rem">close</div>
        </template>
      </SfNotification>`,
});
SlotClose.story = {
  name: "[slot] close",
};
