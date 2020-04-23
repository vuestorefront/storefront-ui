import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { SfModal } from "@storefront-ui/vue";
import {
  visibilityToggleMixin,
  withVisibilityToggle,
} from "@storefront-ui/vue/config/storybook/decorators";
storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .addDecorator(withVisibilityToggle)
  .add("Common", () => ({
    components: { SfModal },
    props: {
      title: {
        default: text("title", "My title", "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      cross: {
        default: boolean("cross", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
      ariaLabelClose: {
        default: text("ariaLabelClose", "Close", "Props"),
      },
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :title="title"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        :ariaLabelClose="ariaLabelClose"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
      </SfModal>`,
  }))
  .add("[slot] close", () => ({
    components: { SfModal },
    props: {
      title: {
        default: text("title", "My title", "Props"),
      },
      overlay: {
        default: boolean("overlay", true, "Props"),
      },
      cross: {
        default: boolean("cross", true, "Props"),
      },
      persistent: {
        default: boolean("persistent", false, "Props"),
      },
      ariaLabelClose: {
        default: text("ariaLabelClose", "Close", "Props"),
      },
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :title="title"
        :cross="cross"
        :persistent="persistent"
        :ariaLabelClose="ariaLabelClose"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
        <template #close>
          close
        </template>
      </SfModal>`,
  }));
