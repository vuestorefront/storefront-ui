// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfFooter from "./SfFooter.vue";

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        heading: {
          default: object("Heading", {
            title: "Share your look",
            subtitle: "#YOURLOOK",
            level: 2
          })
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-footer--underline"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      data() {
        return {};
      },
      components: { SfFooter },
      template: `
      <div>
        <SfFooter :class="customClass" :heading="heading">
            <SfFooterColumn :style="colFirst" title="DEPARTMENT">
                        <SfFooterColumnElement>Women fashion</SfFooterColumnElement>
                        <SfFooterColumnElement>men fashion</SfFooterColumnElement>
                        <SfFooterColumnElement>Kidswear</SfFooterColumnElement>
                        <SfFooterColumnElement>Home</SfFooterColumnElement>
                    </SfFooterColumn>
            <SfFooterColumn :style="col" title="ABOUT US">                    
                        <SfFooterColumnElement>Who we are</SfFooterColumnElement>
                        <SfFooterColumnElement>Quality in the details</SfFooterColumnElement>
                        <SfFooterColumnElement>Customer Reviews</SfFooterColumnElement>
                    </SfFooterColumn>
            <SfFooterColumn :style="col" title="HELP">    
                        <SfFooterColumnElement>Customer service</SfFooterColumnElement>
                        <SfFooterColumnElement>Size guide</SfFooterColumnElement>
                        <SfFooterColumnElement>Contact us</SfFooterColumnElement>
                    </SfFooterColumn>
            <SfFooterColumn :style="col" title="PAYMENT & DELEVERY">          
                        <SfFooterColumnElement>Purchase terms</SfFooterColumnElement>
                        <SfFooterColumnElement>Guarantee</SfFooterColumnElement>
                    </SfFooterColumn>
        </SfFooter>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfFooter } from "@storefrontui/vue"</code></pre>
       `
      }
    }
  );
