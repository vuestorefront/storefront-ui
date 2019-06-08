// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import Sfmodal from "./Sfmodal.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emmited when option is selected"]]
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
      components: { Sfmodal, SfButton },
      props: {
        cross: {
          default: boolean("cross (prop)", true)
        },
        title: {
          default: text("title (prop)", "Title prop")
        },
        subtitle: {
          default: text("subtitle (prop)", "Subtitle prop")
        },
        description: {
          default: text("description (prop)", "Descriptiom prop")
        },
        buttonText: {
          default: text("buttonText (prop)", "OK")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-sfmodal--modifier"],
            "null"
          )
        }
      },
      template: `
      <div>
      <SfButton @click="isModalOpen = true">Open modal</SfButton>
      <Sfmodal
        :visible="isModalOpen"
        @close="isModalOpen = false"
        :cross="cross"
        :title="title"
        :button-text="buttonText"
        :class="customClass"
      />
      </div>`
    }),
    {
      info: {
        summary: `<p>Component for modal.</p>
       <h2>Usage</h2>
       <pre><code>import Sfmodal from "@storefrontui/vue/dist/Sfmodal.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );
