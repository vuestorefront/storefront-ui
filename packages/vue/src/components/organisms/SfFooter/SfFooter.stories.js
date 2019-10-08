// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfFooter from "./SfFooter.vue";
import SfList from "../SfList/SfList.vue";
import SfAccordion from "../SfAccordion/SfAccordion.vue";
import SfChevron from "../../atoms/SfChevron/SfChevron.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$footer__column-title-font-size",
      "$font-size-regular-desktop",
      "font-size of footer title"
    ],
    [
      "$footer__column-title-font-size",
      "$font-size-big-desktop",
      "font-size of footer title"
    ],
    [
      "$footer__column-title-color",
      "$c-dark-primary",
      "color of footer column title"
    ],
    [
      "$footer__column-title-font-family",
      "$body-font-family-primary",
      "font-family of footer column title"
    ],
    [
      "$footer__column-content-font-family",
      "$body-font-family-secondary",
      "font-family of footer column"
    ],
    [
      "$footer__column-content-font-size",
      "$font-size-extra-small-desktop",
      "font-size of content"
    ],
    ["$footer__column-max-width", "300px", "max-width of footer column"],
    [
      "$acoordion--close-background-color",
      "$c-light-primary",
      "background-color of closed accordion for mobile"
    ],
    [
      "$acoordion--open-background-color",
      "$$c-light-secondary",
      "background-color of open accordion for mobile"
    ]
  ]
};

const data = () => {
  return {
    accordionColumnContentStyle: {
      padding: "0.5rem 0.5rem 0.5rem 1rem",
      backgroundColor: "#ffffff"
    },
    accordionColumnInlineContentStyle: {
      display: "inline-block",
      padding: "0.5rem 1.25rem 0.5rem 1rem",
      backgroundColor: "#ffffff"
    },
    columnItems: [
      {
        header: "About Us",
        content: [
          {
            id: "about_1",
            text: "<a href='#'>Who we are</a>"
          },
          {
            id: "about_2",
            text: "<a href='#'>Store locator</a>"
          }
        ]
      },
      {
        header: "Departaments",
        content: [
          { id: "dep_1", text: "<a href='#'>Women fashion</a>" },
          { id: "dep_2", text: "<a href='#'>Men fashion</a>" },
          { id: "dep_3", text: "<a href='#'>Kidswear</a>" },
          { id: "dep_4", text: "<a href='#'>Home</a>" },
          { id: "dep_5", text: "<a href='#'>Dogswear</a>" }
        ]
      },
      {
        header: "Help",
        content: [
          { id: "help_1", text: "<a href='#'>Customer service</a>" },
          { id: "help_2", text: "<a href='#'>Size guide</a>" },
          { id: "help_3", text: "<a href='#'>Contact us</a>" }
        ]
      },
      {
        header: "Payment & Delivery",
        content: [
          { id: "payment_1", text: "<a href='#'>Purchase terms</a>" },
          { id: "payment_2", text: "<a href='#'>Guarantee</a>" }
        ]
      }
    ],
    socialItems: {
      header: "Social",
      content: [
        {
          id: "social_1",
          text:
            "<a href='#'><img src='/assets/social_facebook.png' alt='facebook social link' /></a>"
        },
        {
          id: "social_2",
          text:
            "<a href='#'><img src='/assets/social_google.png' alt='google social link' /></a>"
        },
        {
          id: "social_3",
          text:
            "<a href='#'><img src='/assets/social_pinterest.png' alt='pinterest social link' /></a>"
        },
        {
          id: "social_4",
          text:
            "<a href='#'><img src='/assets/social_twitter.png' alt='twitter social link' /></a>"
        },
        {
          id: "social_5",
          text:
            "<a href='#'><img src='/assets/social_youtube.png' alt='youtube social link' /></a>"
        }
      ],
      style: {
        display: "inline",
        paddingRight: "1.25rem"
      }
    },
    accordionStyle: {
      width: "100%"
    },
    isOpen: false
  };
};

storiesOf("Organisms|Footer", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data,
      components: { SfFooter, SfList, SfAccordion, SfChevron },
      template: `
      <div>
        <SfFooter>
          <div class="sf-footer-row">
            <SfFooterColumn
            v-for="(item, i) of columnItems"
            :key="i"
            :title="item.header"
            >
              <SfList>
                <SfListItem
                v-for="itemContent in item.content"
                :key="itemContent.id">
                <span v-html="itemContent.text"></span>
                </SfListItem>
              </SfList>
            </SfFooterColumn>
          </div>
          <div class="sf-footer-row">
          <SfFooterColumn class="sf-footer-column__placeholder">
          </SfFooterColumn>
          <SfFooterColumn class="sf-footer-column__placeholder">
          </SfFooterColumn>
          <SfFooterColumn class="sf-footer-column__placeholder">
          </SfFooterColumn>
          <SfFooterColumn :title="socialItems.header">
              <SfList>
                <SfListItem :style="socialItems.style" v-for="socialContent in socialItems.content" :key="socialContent.id"><span v-html="socialContent.text"></span></SfListItem>
              </SfList>
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
       for placeholder columns.
       </p>
       <p>
        You may use <pre><code>sf-footer-column-width</code></pre> class for column alignment
       </p>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
