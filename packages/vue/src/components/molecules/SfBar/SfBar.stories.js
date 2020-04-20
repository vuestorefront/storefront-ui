import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfBar from "./SfBar.vue";
export default {
  title: "Molecules|Bar",
  decorators: [withKnobs],
};
export const Common = () => ({
  components: { SfBar },
  props: {
    title: {
      default: text("title", "Dresses", "Props"),
    },
    back: {
      default: boolean("back", true, "Props"),
    },
    close: {
      default: boolean("close", true, "Props"),
    },
  },
  template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      />`,
});
export const SlotBack = () => ({
  components: { SfBar },
  props: {
    title: {
      default: text("title", "Dresses", "Props"),
    },
    back: {
      default: boolean("back", true, "Props"),
    },
    close: {
      default: boolean("close", true, "Props"),
    },
  },
  template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #back>CUSTOM BACK</template>
      </SfBar>`,
});
SlotBack.story = {
  name: "[slot] back",
};
export const SlotTitle = () => ({
  components: { SfBar },
  props: {
    title: {
      default: text("title", "Dresses", "Props"),
    },
    back: {
      default: boolean("back", true, "Props"),
    },
    close: {
      default: boolean("close", true, "Props"),
    },
  },
  template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #title="{title}">CUSTOM TITLE</template>
      </SfBar>`,
});
SlotTitle.story = {
  name: "[slot] title",
};
export const SlotClose = () => ({
  components: { SfBar },
  props: {
    title: {
      default: text("title", "Dresses", "Props"),
    },
    back: {
      default: boolean("back", true, "Props"),
    },
    close: {
      default: boolean("close", true, "Props"),
    },
  },
  template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #close>CUSTOM CLOSE</template>
      </SfBar>`,
});
SlotClose.story = {
  name: "[slot] close",
};
