/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

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
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", true, "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
      </SfModal>`
  }))
  .add("[slot] close", () => ({
    components: { SfModal },
    props: {
      overlay: {
        default: boolean("overlay", true, "Props")
      },
      cross: {
        default: boolean("cross", true, "Props")
      },
      persistent: {
        default: boolean("persistent", true, "Props")
      }
    },
    mixins: [visibilityToggleMixin],
    template: `
      <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false"
      >
        HELLO STOREFRONT UI!
        <template #close>
          close
        </template>
      </SfModal>`
  }));
