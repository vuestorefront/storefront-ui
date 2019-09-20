// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object, select } from "@storybook/addon-knobs";
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
            title: "Title here",
            subtitle: "#SUBTITLE",
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
        <SfFooter :class="customClass">
            <template v-slot:columns>
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
            </template>
            <template v-slot:columns-2>
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
            </template>
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
