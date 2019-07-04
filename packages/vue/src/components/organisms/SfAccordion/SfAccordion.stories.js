// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select, array } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAccordion from "./SfAccordion.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-accordion-item__header-padding", "1rem 2rem", ""],
    ["$sf-accordion-item__header-bg-color", "$c-light-primary", ""],
    ["$sf-accordion-item__header-bg-color--active", "#ffffff", ""],
    ["$sf-accordion-item__header-font-weight", "900", ""],
    ["$sf-accordion-item__header-text-transform", "uppercase", ""],
    ["$sf-accordion-item__header-display", "flex", ""],
    ["$sf-accordion-item__header-justify-content", "space-between", ""],
    ["$sf-accordion-item__content-color", "$c-dark-primary", ""],
    ["$sf-accordion-item__content-font-size", "1rem", ""],
    ["$sf-accordion-item__content-padding", "0.5rem 2rem", ""],
    ["$sf-accordion-item__content-padding--first", "1rem 2rem 0.5rem", ""],
    ["$sf-accordion-item__content-padding--last", "0.5rem 2rem 1rem", ""]
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
        },
        headerOne: { default: text("header one", "About Us") },
        headerTwo: { default: text("header two", "Departaments") },
        headerThree: { default: text("header three", "Help") },
        contentItemsOne: {
          default: array("items one", [
            "About us (Magento CMS)",
            "Store locator"
          ])
        },
        contentItemsTwo: {
          default: array("items two", [
            "Women fashion",
            "Men fashion",
            "Kidswear",
            "Home"
          ])
        },
        contentItemsThree: {
          default: array("items three", [
            "Customer service",
            "Size guide",
            "Contact us"
          ])
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem :headerText="headerOne" :contentItems="contentItemsOne">
        </SfAccordionItem>
        <SfAccordionItem :headerText="headerTwo" :contentItems="contentItemsTwo">
        </SfAccordionItem>
        <SfAccordionItem :headerText="headerThree" :contentItems="contentItemsThree">
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p><code>SfAccordion</code> can be used by providing <code>headerText</code> and <code>contentItems</code> (as an array) props to each <code>SfAccordionItem</code>. Then the user can take advantage of the predefined styles.</p>
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
          headerStyle:
            "padding: 1rem; background-color: #efebe9; cursor: pointer; display: flex; justify-content: space-between;"
        };
      },
      props: {
        multiple: {
          default: select("multiple", { true: true, false: false }, false)
        },
        firstOpen: {
          default: select("firstOpen", { true: true, false: false }, false)
        },
        headerOne: { default: text("header one", "About Us") },
        headerTwo: { default: text("header two", "Departaments") },
        headerThree: { default: text("header three", "Help") },
        contentItemsOne: {
          default: array("items one", [
            "About us (Magento CMS)",
            "Store locator"
          ])
        },
        contentItemsTwo: {
          default: array("items two", [
            "Women fashion",
            "Men fashion",
            "Kidswear",
            "Home"
          ])
        },
        contentItemsThree: {
          default: array("items three", [
            "Customer service",
            "Size guide",
            "Contact us"
          ])
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem :contentItems="contentItemsOne">
          <template #header>
            <div :style="headerStyle">
              <div>{{ headerOne }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
            </div>
          </template>
          <template #headerOpen>
            <div :style="headerStyle">
              <div>{{ headerOne }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
            </div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem :contentItems="contentItemsTwo">
          <template #header>
            <div :style="headerStyle">
              <div>{{ headerTwo }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
            </div>
          </template>
          <template #headerOpen>
            <div :style="headerStyle">
              <div>{{ headerTwo }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
            </div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem :contentItems="contentItemsThree">
          <template #header>
            <div :style="headerStyle">
              <div>{{ headerThree }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
            </div>
          </template>
          <template #headerOpen>
            <div :style="headerStyle">
              <div>{{ headerThree }}</div>
              <img style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
            </div>
          </template>
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p>To use custom styling for header populate <code>#header</code> and <code>#headerOpen</code> slots.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] content",
    () => ({
      data() {
        return {
          contentStyle:
            "padding: 1rem 2rem; color: #fff; font-size: 16px; cursor: pointer; background: #5ECE7B;"
        };
      },
      props: {
        multiple: {
          default: select("multiple", { true: true, false: false }, false)
        },
        firstOpen: {
          default: select("firstOpen", { true: true, false: false }, false)
        },
        headerOne: { default: text("header one", "About Us") },
        headerTwo: { default: text("header two", "Departaments") },
        headerThree: { default: text("header three", "Help") },
        contentItemsOne: {
          default: array("items one", [
            "About us (Magento CMS)",
            "Store locator"
          ])
        },
        contentItemsTwo: {
          default: array("items two", [
            "Women fashion",
            "Men fashion",
            "Kidswear",
            "Home"
          ])
        },
        contentItemsThree: {
          default: array("items three", [
            "Customer service",
            "Size guide",
            "Contact us"
          ])
        }
      },
      components: { SfAccordion },
      template: `<SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <SfAccordionItem :headerText="headerOne">
          <template #content>
            <div v-for="item of contentItemsOne" :style="contentStyle">{{item}}</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem :headerText="headerTwo">
          <template #content>
            <div v-for="item of contentItemsTwo" :style="contentStyle">{{item}}</div>
          </template>
        </SfAccordionItem>
        <SfAccordionItem :headerText="headerThree">
          <template #content>
            <div v-for="item of contentItemsThree" :style="contentStyle">{{item}}</div>
          </template>
        </SfAccordionItem>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p>To use custom styling for content items populate <code>#content</code> slot.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
