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
      "$modal-border",
      "solid 1px rgba($c-black, 0.5)",
      "border of the modal container"
    ]
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
        },
        overlay: {
          default: boolean("overlay (prop)", true)
        },
        persistent: {
          default: boolean("persistent (prop)", false)
        },
        transitionOverlay: {
          default: select(
            "transitionOverlay (prop)",
            {
              fade: "fade",
              "collapse-top": "collapse-top",
              "collapse-bottom": "collapse-bottom",
              "fade-slide": "fade-slide",
              "fade-collapse": "fade-collapse"
            },
            "fade"
          )
        },
        transitionModal: {
          default: select(
            "transitionModal (prop)",
            {
              fade: "fade",
              "collapse-top": "collapse-top",
              "collapse-bottom": "collapse-bottom",
              "fade-slide": "fade-slide",
              "fade-collapse": "fade-collapse"
            },
            "fade"
          )
        }
      },
      template: `
      <div>
      <SfButton @click="isModalOpen = true">Open modal</SfButton>
      <SfModal
        :visible="isModalOpen"
        @close="isModalOpen = false"
        :cross="cross"
        :overlay="overlay"
        :persistent="persistent"
        :transitionOverlay="transitionOverlay"
        :transitionModal="transitionModal"
      >Hello World!</SfModal>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component for modal.</p>
       <h2>Usage</h2>
       <pre><code>import SfModal from "@storefront-ui/vue/dist/SfModal.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
