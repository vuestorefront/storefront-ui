// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSlidingSection from "./SfSlidingSection.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$card-margin-left-desktop",
      "$spacer-big * 5",
      "size of desktop column spacer"
    ]
  ]
};

storiesOf("Molecules|SlidingSection", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          static: {
            height: "490px",
            backgroundColor: "rgb(94, 206, 123)"
          }
        };
      },
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-card--modifier": "sf-card--modifier"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: { SfSlidingSection },
      template: `<div style="max-width: 1240px; margin: auto;">
        <SfSlidingSection>
          <template #static>
            <div :style="static"></div>
          </template>
          <template #sliding="{isActive}">
            <h1>Cashmere Sweater</h1>
            <small></small>
            <p>Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
            <p>The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common "problem" areas. Find stunning women's cocktail dresses and party dresses.</p>
            <h2>Brand</h2>
            <p>Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.</p>
          </template>
        </SfSlidingSection>
      </div>`,
      mounted() {
        document.body.style.setProperty("margin", "0");
      }
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfSlidingSection } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
