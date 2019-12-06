/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import SfModal from "./SfModal.vue";

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfModal },
    props: {
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
    data(){
      return {
        visible: true
      }
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
        default: boolean("overlay (prop)", true)
      },
      cross: {
        default: boolean("cross (prop)", true)
      },
      persistent: {
        default: boolean("persistent (prop)", true)
      }
    },
    data(){
      return {
        visible: true
      }
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
