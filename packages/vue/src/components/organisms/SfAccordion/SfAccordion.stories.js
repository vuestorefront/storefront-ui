/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAccordion from "./SfAccordion.vue";
import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$accordion-font-family",
      "$body-font-family-secondary",
      "font family for accordion"
    ],
    [
      "$accordion-font-size",
      "$font-size-regular-mobile",
      "font size for accordion"
    ],
    [
      "$accordion-font-size-desktop",
      "$font-size-regular-desktop",
      "font size for accordion on desktop"
    ],
    [
      "$accordion-font-weight",
      "$body-font-weight-secondary",
      "font weight for accordion"
    ],
    ["$accordion-line-height: 1.6", "line height for accordion"],
    ["$accordion__title-padding-y: 0.625rem", "padding y for accordion title"],
    [
      "$accordion__title-font-size",
      "$font-size-big-mobile",
      "font size for accordion title"
    ],
    [
      "$accordion__title-font-size-desktop",
      "$font-size-big-desktop",
      "font size for accordion title on desktop"
    ],
    [
      "$accordion__content-padding-y: 1.875rem",
      "padding y for accordion content"
    ]
  ]
};

storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data: () => {
        return {
          accordions: [
            {
              header: "About Us",
              items: [
                { label: "About us (Magento CMS)", count: "280" },
                { label: "Store locator", count: "34" }
              ]
            },
            {
              header: "Departaments",
              items: [
                { label: "Women fashion", count: "2" },
                { label: "Men fashion", count: "56" },
                { label: "Kidswear", count: "16" },
                { label: "Home", count: "166" },
                { label: "Dogswear", count: "24" }
              ]
            },
            {
              header: "Help",
              items: [
                { label: "Customer service", count: "54" },
                { label: "Size guide", count: "4" },
                { label: "Contact us", count: "76" }
              ]
            }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", true)
        },
        firstOpen: {
          default: boolean("firstOpen", true)
        },
        showChevron: {
          default: boolean("showChevron", true)
        },
        transition: {
          default: text("transition", "fade")
        }
      },
      components: { SfAccordion, SfList, SfMenuItem },
      template: `<div :style="{width: '300px', padding: '1rem'}">
        <SfAccordion :multiple="multiple" :firstOpen="firstOpen" :showChevron="showChevron" :transition="transition">
          <SfAccordionItem v-for="(accordion, i) of accordions" :header="accordion.header" :key="i">
            <SfList>
              <SfListItem v-for="(item, j) of accordion.items" :key="j">
                <SfMenuItem :label="item.label" :count="item.count"/>
              </SfListItem>
            </SfList>
          </SfAccordionItem>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
