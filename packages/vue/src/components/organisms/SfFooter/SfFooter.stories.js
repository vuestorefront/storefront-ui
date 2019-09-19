// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfFooter from "./SfFooter.vue";
import SfList from "../SfList/SfList.vue";
import SfReview from "../../molecules/SfReview/SfReview.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$footer__title-font-size",
      "$font-size-regular-desktop",
      "font-size of footer title"
    ],
    [
      "$characteristic__description-font-size",
      "$font-size-extra-small-desktop",
      "font-size of characteristic description"
    ],
    [
      "$mobile_background-color",
      "#F2F2F2",
      "background-color for mobile devices"
    ]
  ]
};

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
      components: { SfFooter, SfList },
      template: `
      <div>
        <SfFooter :class="customClass" :heading="heading">
            <SfFooterColumn class="sf-footer__item-padding" :style="colFirst" title="DEPARTMENT">
              <SfList>
                  <SfListItem class="sf-list__item-padding">Women fashion</SfListItem>
                  <SfListItem class="sf-list__item-padding">men fashion</SfListItem>
                  <SfListItem class="sf-list__item-padding">Kidswear</SfListItem>
                  <SfListItem class="sf-list__item-padding">Home</SfListItem>
              </SfList>
            </SfFooterColumn>
            <SfFooterColumn :style="col" title="ABOUT US">
              <SfList>                        
                <SfListItem class="sf-list__item-padding">Who we are</SfListItem>
                <SfListItem class="sf-list__item-padding">Quality in the details</SfListItem>
                <SfListItem class="sf-list__item-padding">Customer Reviews</SfListItem>
              </SfList>
            </SfFooterColumn>
            <SfFooterColumn :style="col" title="HELP">
              <SfList>    
                <SfListItem class="sf-list__item-padding">Customer service</SfListItem>
                <SfListItem class="sf-list__item-padding">Size guide</SfListItem>
                <SfListItem class="sf-list__item-padding">Contact us</SfListItem>
              </SfList>
            </SfFooterColumn>
            <SfFooterColumn :style="col" title="PAYMENT & DELEVERY">  
              <SfList>        
                <SfListItem class="sf-list__item-padding">Purchase terms</SfListItem>
                <SfListItem class="sf-list__item-padding">Guarantee</SfListItem>
              </SfList>
            </SfFooterColumn>
        </SfFooter>
      </div>`
    }),
    {
      info: {
        summary: `<p><code>SfFooter</code> can be used for footer.</p>
       <h2>Usage</h2>
       <pre><code>import { SfFooter } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
