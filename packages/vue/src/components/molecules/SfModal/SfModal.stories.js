/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import SfModal from "./SfModal.vue";

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfModal },
    props: {
      visible: {
        default: boolean("visible (data)", true)
      },
      overlay: {
        default: boolean("overlay (prop)", true)
      },
      cross: {
        default: boolean("cross (prop)", true)
      },
      persistent: {
        default: boolean("persistent (prop)", true)
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
        default: boolean("visible (data)", true)
      },
      overlay: {
        default: boolean("overlay (prop)", true)
      },
      cross: {
        default: boolean("cross (prop)", true)
      },
      persistent: {
        default: boolean("persistent (prop)", true)
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
