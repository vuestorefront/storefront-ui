import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfAlert from "./SfAlert.vue";

export default {
  title: "Molecules|Alert",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfAlert },
  props: {
    message: {
      default: text("message", "Low in stock", "Props"),
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
  template: `<SfAlert
      :message="message"
      :type="type"
      />`,
});

export const SlotIcon = () => ({
  components: { SfAlert },
  props: {
    message: {
      default: text("message", "Low in stock", "Props"),
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
  template: `<SfAlert
      :message="message"
      :type="type">
      <template #icon="{icon}">
        ❤️
      </template>  
    </SfAlert>`,
});

SlotIcon.story = {
  name: "[slot] icon",
};

export const SlotMessage = () => ({
  components: { SfAlert },
  props: {
    message: {
      default: text("message", "Low in stock", "Props"),
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
  template: `<SfAlert
      :message="message"
      :type="type">
      <template #message="{message}">
        CUSTOM MESSAGE
      </template>  
    </SfAlert>`,
});

SlotMessage.story = {
  name: "[slot] message",
};
