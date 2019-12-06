/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import SfModal from "./SfModal.vue";

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
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
    data() {
      return {
        visible: true
      };
    },
    template: `<div>
        <label>visible (data)<input type="checkbox" v-model="visible"></label>
        <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false">
        HELLO STOREFRONT UI!
        </SfModal>
      </div>`
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
    data() {
      return {
        visible: true
      };
    },
    template: `<div>
        <label>visible (data)<input type="checkbox" v-model="visible"></label>
        <SfModal
        :visible="visible"
        :overlay="overlay"
        :cross="cross"
        :persistent="persistent"
        @close="visible = false">
        HELLO STOREFRONT UI!
          <template #close>
            close
          </template>
        </SfModal>
      </div>`
  }));
