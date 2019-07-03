// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAccordion from "./SfAccordion.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-accordion-item__header-padding", "1rem 2rem", ""],
    ["$sf-accordion-item__header-padding--active", "1rem 2rem 0", ""],
    ["$sf-accordion-item__header-bg-color", "$c-light-primary", ""],
    ["$sf-accordion-item__header-bg-color--active", "#ffffff", ""],
    ["$sf-accordion-item__header-font-weight", "900", ""],
    ["$sf-accordion-item__header-text-transform", "uppercase", ""],
    ["$sf-accordion-item__header-display", "flex", ""],
    ["$sf-accordion-item__header-justify-content", "space-between", ""],
    ["$sf-accordion-item__content-color", "$c-dark-primary", ""],
    ["$sf-accordion-item__content-font-size", "1rem", ""],
    ["$sf-accordion-item__content-padding", "1rem 2rem", ""],
    ["$sf-accordion-item__content-padding--first", "2rem 2rem 1rem", ""],
    ["$sf-accordion-item__content-padding--last", "1rem 2rem 2rem", ""]
  ]
};

storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        multiple: {
          default: select("multiple", { true: true, false: false }, false)
        },
        firstOpen: {
          default: select("firstOpen", { true: true, false: false }, false)
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem>
          <template #header>
            <div>ABOUT US</div>
          </template>
          <template #content>
            <div>About us (Magento CMS)</div>
            <div>Store locator</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>DEPARTMENTS</div>
          </template>
          <template #content>
            <div>Women fashion</div>
            <div>Men fashion</div>
            <div>Kidswear</div>
            <div>Home</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>HELP</div>
          </template>
          <template #content>
            <div>Customer service</div>
            <div>Size guide</div>
            <div>Contact us</div>
          </template>
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] icons",
    () => ({
      props: {
        multiple: {
          default: select("multiple", { true: true, false: false }, false)
        },
        firstOpen: {
          default: select("firstOpen", { true: true, false: false }, false)
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem>
          <template #header>
            <div>ABOUT US</div>
          </template>
          <template #content>
            <div>About us (Magento CMS)</div>
            <div>Store locator</div>
          </template>
          <template #iconOpen>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm5 9.4H5V9h10v2z" fill="#626262"/></svg>
          </template>
          <template #iconClose>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6a8.208 8.208 0 0 1-11.6 0 8.208 8.208 0 0 1 0-11.6C7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z" fill="#626262"/></svg>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>DEPARTMENTS</div>
          </template>
          <template #content>
            <div>Women fashion</div>
            <div>Men fashion</div>
            <div>Kidswear</div>
            <div>Home</div>
          </template>
          <template #iconOpen>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm5 9.4H5V9h10v2z" fill="#626262"/></svg>
          </template>
          <template #iconClose>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6a8.208 8.208 0 0 1-11.6 0 8.208 8.208 0 0 1 0-11.6C7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z" fill="#626262"/></svg>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>HELP</div>
          </template>
          <template #content>
            <div>Customer service</div>
            <div>Size guide</div>
            <div>Contact us</div>
          </template>
          <template #iconOpen>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M10 1.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8zm5 9.4H5V9h10v2z" fill="#626262"/></svg>
          </template>
          <template #iconClose>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="16px" height="16px" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 19 19"><path d="M15.8 4.2c3.2 3.21 3.2 8.39 0 11.6a8.208 8.208 0 0 1-11.6 0 8.208 8.208 0 0 1 0-11.6C7.41 1 12.59 1 15.8 4.2zm-4.3 11.3v-4h4v-3h-4v-4h-3v4h-4v3h4v4h3z" fill="#626262"/></svg>
          </template>
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] header",
    () => ({
      data() {
        return {
          headerStyle: "background-color: #eceff1"
        };
      },
      props: {
        multiple: {
          default: select("multiple", { true: true, false: false }, false)
        },
        firstOpen: {
          default: select("firstOpen", { true: true, false: false }, false)
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem>
          <template #header>
            <div style="background-color: red">ABOUT US</div>
          </template>
          <template #content>
            <div>About us (Magento CMS)</div>
            <div>Store locator</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>DEPARTMENTS</div>
          </template>
          <template #content>
            <div>Women fashion</div>
            <div>Men fashion</div>
            <div>Kidswear</div>
            <div>Home</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem>
          <template #header>
            <div>HELP</div>
          </template>
          <template #content>
            <div>Customer service</div>
            <div>Size guide</div>
            <div>Contact us</div>
          </template>
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
