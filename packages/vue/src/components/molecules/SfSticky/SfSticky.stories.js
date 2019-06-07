// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSticky from "./SfSticky.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

storiesOf("Molecules|[WIP]SfSticky", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-sf-sticky--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfSticky },
      template: `
      <div style="display:flex; position: relative; width: 900px; margin: auto">
          <div>
            <SfSticky>
                <img src="https://source.unsplash.com/random" width="300px" alt="">
            </SfSticky>
          </div>
          <div style="margin:0 1rem">
              <p style="margin-top: 0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
          </div>
          <div>
            <SfSticky>
                <p style="margin-top: 0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facere magni nemo officia ullam. Esse labore nesciunt quidem voluptas! Ea, perferendis, reiciendis? Ex officia officiis placeat quaerat, quasi veritatis voluptatem.</p>
                <img src="https://source.unsplash.com/random" width="300px" alt="">
            </SfSticky>
          </div>
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
       <pre><code>import SfSticky from "@storefrontui/vue/dist/SfSticky.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );
