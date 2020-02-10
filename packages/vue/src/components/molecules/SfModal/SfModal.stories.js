/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import SfModal from "./SfModal.vue";
import {
  visibilityToggleMixin,
  withVisibilityToggle
} from "../../../../config/storybook/decorators";

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .addDecorator(withVisibilityToggle)
  .add("Common", () => ({
    components: { SfModal },
    props: {
      headingTitle: {
        default: text("headingTitle", "My title", "Props")
      },
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", false, "Props")
      },
      ariaLabelClose: {
        default: text("ariaLabelClose", "Close", "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :heading-title="headingTitle"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        :ariaLabelClose="ariaLabelClose"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
      </SfModal>`
  }))
  .add("[slot] close", () => ({
    components: { SfModal },
    props: {
      headingTitle: {
        default: text("headingTitle", "My title", "Props")
      },
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", false, "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :heading-title="headingTitle"
        :cross="cross"
        :persistent="persistent"
        :ariaLabelClose="ariaLabelClose"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
        <template #close>
          close
        </template>
      </SfModal>`
  }));
