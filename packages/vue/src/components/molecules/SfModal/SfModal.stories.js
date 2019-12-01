// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import SfModal from "./SfModal.vue";

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfModal },
    props: {
      visible: {
        default: boolean("visible", true, "Props")
      },
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
    template: `<SfModal
      :visible="visible"
      :overlay="overlay"
      :cross="cross"
      :persistent="persistent">
      HELLO STOREFRONT UI!
    </SfModal>`
  }))
  .add("[slot] close", () => ({
    components: { SfModal },
    props: {
      visible: {
        default: boolean("visible", true, "Props")
      },
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
    template: `<SfModal
      :visible="visible"
      :overlay="overlay"
      :cross="cross"
      :persistent="persistent">
      HELLO STOREFRONT UI!
      <template #close>
          close
      </template>
    </SfModal>`
  }));
