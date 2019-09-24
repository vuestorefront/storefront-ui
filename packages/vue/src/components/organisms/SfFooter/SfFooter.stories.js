// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfFooter from "./SfFooter.vue";
import SfList from "../SfList/SfList.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$footer__title-font-size",
      "$font-size-regular-desktop",
      "font-size of footer title"
    ],
    ["$footer__margin-top", "$spacer-extra-big", "margin-top for footer"],
    [
      "$footer__grid-column-gap",
      "$spacer",
      "grid-column-gap of footer columns"
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
    ],
    [
      "$characteristic__description-font-size",
      "$font-size-extra-small-desktop",
      "font-size of characteristic description"
    ]
  ]
};

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        multiple: {
          default: boolean("multiple", false)
        }
      },
      components: { SfFooter, SfList },
      template: `
      <div>
        <SfFooter :multiple="multiple">
          <div class="sf-footer-row">
              <SfFooterColumn title="DEPARTMENT">
                <template v-slot:content>
                  <SfList>
                    <SfListItem class="sf-list__item-padding">Women fashion</SfListItem>
                    <SfListItem class="sf-list__item-padding">men fashion</SfListItem>
                    <SfListItem class="sf-list__item-padding">Kidswear</SfListItem>
                    <SfListItem class="sf-list__item-padding">Home</SfListItem>
                  </SfList>
                </template>
              </SfFooterColumn>
              <SfFooterColumn title="ABOUT US">
                <template v-slot:content>
                  <SfList>                        
                    <SfListItem class="sf-list__item-padding">Who we are</SfListItem>
                    <SfListItem class="sf-list__item-padding">Quality in the details</SfListItem>
                    <SfListItem class="sf-list__item-padding">Customer Reviews</SfListItem>
                  </SfList>
                </template>
              </SfFooterColumn>
              <SfFooterColumn title="HELP">
                <template v-slot:content>
                  <SfList>    
                    <SfListItem class="sf-list__item-padding">Customer service</SfListItem>
                    <SfListItem class="sf-list__item-padding">Size guide</SfListItem>
                    <SfListItem class="sf-list__item-padding">Contact us</SfListItem>
                  </SfList>
                </template>
              </SfFooterColumn>
              <SfFooterColumn title="PAYMENT & DELEVERY"> 
                <template v-slot:content> 
                  <SfList>        
                    <SfListItem class="sf-list__item-padding">Purchase terms</SfListItem>
                    <SfListItem class="sf-list__item-padding">Guarantee</SfListItem>
                  </SfList>
                </template>
              </SfFooterColumn>
              </div>
              <div class="sf-footer-row">
              <SfFooterColumn class="sf-footer-column__placeholder">
              </SfFooterColumn>
              <SfFooterColumn class="sf-footer-column__placeholder">
              </SfFooterColumn>
              <SfFooterColumn class="sf-footer-column__placeholder">
              </SfFooterColumn>
              <SfFooterColumn class="sf-footer-social" title="SOCIAL"> 
                <template v-slot:content> 
                  <SfList>        
                    <SfListItem class="sf-list__item-padding sf-list__inline"><a href="#"><img src="/assets/social_facebook.png" alt="facebook social link" /></a></SfListItem>
                    <SfListItem class="sf-list__item-padding sf-list__inline"><a href="#"><img src="/assets/social_google.png" alt="google social link" /></a></SfListItem>
                    <SfListItem class="sf-list__item-padding sf-list__inline"><a href="#"><img src="/assets/social_pinterest.png" alt="pinterest social link" /></a></SfListItem>
                    <SfListItem class="sf-list__item-padding sf-list__inline"><a href="#"><img src="/assets/social_twitter.png" alt="twitter social link" /></a></SfListItem>
                    <SfListItem class="sf-list__item-padding sf-list__inline"><a href="#"><img src="/assets/social_youtube.png" alt="youtube social link" /></a></SfListItem>
                  </SfList>
                </template>
              </SfFooterColumn>
              </div>
        </SfFooter>
      </div>`
    }),
    {
      info: {
        summary: `<p><code>SfFooter</code> can be used for footer.</p>
       <h2>Usage</h2>
       <pre><code>import { SfFooter } from "@storefrontui/vue"</code></pre>
       <p>
       You may use 
       <pre><code>sf-footer-row</code></pre> class to create new rows.
       </p>
       <p>
       You may use <pre><code>SfFooterColumn</code></pre> internal component to create new columns and class
       <pre><code>sf-footer-column__placeholder</code></pre>
       for placeholder columns
       </p>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
