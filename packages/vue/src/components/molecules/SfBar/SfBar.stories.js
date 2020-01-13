/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfBar from "./SfBar.vue";
storiesOf("Molecules|Bar", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfBar },
    props: {
      title: {
        default: text("title", "Dresses", "Props")
      },
      back: {
        default: boolean("back", true, "Props")
      },
      close: {
        default: boolean("close", true, "Props")
      }
    },
    template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      />`
  }))
  .add("[slot] back", () => ({
    components: { SfBar },
    props: {
      title: {
        default: text("title", "Dresses", "Props")
      },
      back: {
        default: boolean("back", true, "Props")
      },
      close: {
        default: boolean("close", true, "Props")
      }
    },
    template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #back>CUSTOM BACK</template>
      </SfBar>`
  }))
  .add("[slot] title", () => ({
    components: { SfBar },
    props: {
      title: {
        default: text("title", "Dresses", "Props")
      },
      back: {
        default: boolean("back", true, "Props")
      },
      close: {
        default: boolean("close", true, "Props")
      }
    },
    template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #title="{title}">CUSTOM TITLE</template>
      </SfBar>`
  }))
  .add("[slot] close", () => ({
    components: { SfBar },
    props: {
      title: {
        default: text("title", "Dresses", "Props")
      },
      back: {
        default: boolean("back", true, "Props")
      },
      close: {
        default: boolean("close", true, "Props")
      }
    },
    template: `<SfBar
        :title="title"
        :back="back"
        :close="close"
      >
        <template #close>CUSTOM CLOSE</template>
      </SfBar>`
  }));
