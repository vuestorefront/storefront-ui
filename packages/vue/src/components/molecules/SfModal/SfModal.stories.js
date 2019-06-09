// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfModal from "./SfModal.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$modal-background-color",
      "$c-white",
      "background of the modal container"
    ],
    ["$modal-width", "430px", "width of the modal container"],
    ["$modal-height ", "auto", "height of the modal container"],
    ["$modal-padding", "2.5em 5em", "padding of the modal container"],
    [
      "$modal__overlay-background-color",
      "$c-black",
      "background color of the overlay"
    ],
    ["$modal__overlay-opacity", "0.8", "opacity of the overlay"]
  ]
};

storiesOf("Molecules|Modal", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          isModalOpen: true
        };
      },
      components: { SfModal, SfButton },
      props: {
        cross: {
          default: boolean("cross (prop)", true)
        }
      },
      template: `
      <div>
      <SfButton @click="isModalOpen = true">Open modal</SfButton>
      <transition name="fade">
      <SfModal
        :visible="isModalOpen"
        @close="isModalOpen = false"
        :cross="cross"
        :class="customClass"
      >Hello World!</SfModal>
      </transition>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component for modal.</p>
       <h2>Usage</h2>
       <pre><code>import SfModal from "@storefrontui/vue/dist/SfModal.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
