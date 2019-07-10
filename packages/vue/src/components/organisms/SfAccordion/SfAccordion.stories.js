// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfAccordion from "./SfAccordion.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-accordion-item__header-padding", "0.5rem 0", ""],
    ["$accordion-header-font-size", "18px", ""],
    ["$sf-accordion-item__header-bg-color", "$c-light-primary", ""],
    ["$sf-accordion-item__header-bg-color--active", "#ffffff", ""],
    ["$sf-accordion-item__header-font-weight", "900", ""],
    ["$sf-accordion-item__header-text-transform", "uppercase", ""],
    ["$sf-accordion-item__header-display", "flex", ""],
    ["$sf-accordion-item__header-justify-content", "space-between", ""],
    ["$sf-accordion-item__content-color", "$c-dark-primary", ""],
    ["$sf-accordion-item__content-font-size", "14px", ""],
    ["$sf-accordion-item__content-padding", "0.5rem 0", ""],
    ["$sf-accordion-item__content-padding--first", "1.5rem 0 0.5rem", ""],
    ["$sf-accordion-item__content-padding--last", "0.5rem 0 1.5rem", ""]
  ]
};

storiesOf("Organisms|Accordion", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data: () => {
        return {
          items: [
            {
              header: "About Us",
              content: [
                { id: "about_1", text: "About us (Magento CMS)" },
                { id: "about_2", text: "Store locator" }
              ]
            },
            {
              header: "Departaments",
              content: [
                { id: "dep_1", text: "Women fashion" },
                { id: "dep_2", text: "Men fashion" },
                { id: "dep_3", text: "Kidswear" },
                { id: "dep_4", text: "Home" },
                { id: "dep_5", text: "Dogswear" }
              ]
            },
            {
              header: "Help",
              content: [
                { id: "help_1", text: "Customer service" },
                { id: "help_2", text: "Size guide" },
                { id: "help_3", text: "Contact us" }
              ]
            }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", false)
        },
        firstOpen: {
          default: boolean("firstOpen", false)
        },
        openHeaderStyle: {
          default: boolean("openHeaderStyle", false)
        }
      },
      components: { SfAccordion },
      template: `
      <SfAccordion 
        :items="items"
        :multiple="multiple"
        :firstOpen="firstOpen"
        :openHeaderStyle="openHeaderStyle">
      </SfAccordion>`
    }),
    {
      info: {
        summary: `<p><code>SfAccordion</code> can be used by providing an array of <code>items</code>
        as props. Then the user can take advantage of the predefined styles.
        <br><br>
        <code>items</code> must be an array of objects in format as follows:
<pre>
<code>{
    header: String,
    content: [
      { id: String, text: String },
      { id: String, text: String },
      (...)
    ]
  }
</code>
</pre>
        </p>
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
            "padding: 1rem; background-color: #efebe9; cursor: pointer; display: flex; justify-content: space-between;",
          headerOne: "About Us",
          contentItemsOne: [
            { id: "about_1", text: "About us (Magento CMS)" },
            { id: "about_2", text: "Store locator" }
          ],
          headerTwo: "Departaments",
          contentItemsTwo: [
            { id: "dep_1", text: "Women fashion" },
            { id: "dep_2", text: "Men fashion" },
            { id: "dep_3", text: "Kidswear" },
            { id: "dep_4", text: "Home" },
            { id: "dep_5", text: "Dogswear" }
          ],
          headerThree: "Help",
          contentItemsThree: [
            { id: "help_1", text: "Customer service" },
            { id: "help_2", text: "Size guide" },
            { id: "help_3", text: "Contact us" }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", false)
        },
        firstOpen: {
          default: boolean("firstOpen", false)
        },
        openHeaderStyle: {
          default: boolean("openHeaderStyle", true)
        }
      },
      components: { SfAccordion },
      template: `
      <SfAccordion
        :multiple="multiple"
        :firstOpen="firstOpen"
        :openHeaderStyle="openHeaderStyle">
        <template #items>
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
        </template>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <code>#items</code> slot inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for header populate <code>#header</code> slot inside <code>SfAccordionItem</code> tag.<br><br>
        To use custom styling for opened header state, beside above, populate also <code>#headerOpen</code> slot and set <code>openHeaderStyle</code> property to true.</p>
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
            "padding: 1rem 2rem; color: #fff; font-size: 16px; cursor: pointer; background: #5ECE7B;",
          headerOne: "About Us",
          contentItemsOne: [
            { id: "about_1", text: "About us (Magento CMS)" },
            { id: "about_2", text: "Store locator" }
          ],
          headerTwo: "Departaments",
          contentItemsTwo: [
            { id: "dep_1", text: "Women fashion" },
            { id: "dep_2", text: "Men fashion" },
            { id: "dep_3", text: "Kidswear" },
            { id: "dep_4", text: "Home" },
            { id: "dep_5", text: "Dogswear" }
          ],
          headerThree: "Help",
          contentItemsThree: [
            { id: "help_1", text: "Customer service" },
            { id: "help_2", text: "Size guide" },
            { id: "help_3", text: "Contact us" }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", false)
        },
        firstOpen: {
          default: boolean("firstOpen", false)
        },
        openHeaderStyle: {
          default: boolean("openHeaderStyle", true)
        }
      },
      components: { SfAccordion },
      template: `
      <SfAccordion :multiple="multiple" :firstOpen="firstOpen">
        <template #items>
          <SfAccordionItem :header="headerOne">
            <template #content>
              <div v-for="item of contentItemsOne" :style="contentStyle">{{item.text}}</div>
            </template>
          </SfAccordionItem>
          <SfAccordionItem :header="headerTwo">
            <template #content>
              <div v-for="item of contentItemsTwo" :style="contentStyle">{{item.text}}</div>
            </template>
          </SfAccordionItem>
          <SfAccordionItem :header="headerThree">
            <template #content>
              <div v-for="item of contentItemsThree" :style="contentStyle">{{item.text}}</div>
            </template>
          </SfAccordionItem>
        </template>
      </SfAccordion>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <b>items</b> <code>slot</code> inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for content items populate <code>#content</code> slot inside <code>SfAccordionItem</code> tag.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "click callback",
    () => ({
      data: () => {
        return {
          items: [
            {
              header: "First header",
              content: [{ id: "first_id", text: "Click me!" }]
            },
            {
              header: "Second header",
              content: [{ id: "second_id", text: "Click me!" }]
            }
          ]
        };
      },
      props: {
        multiple: {
          default: boolean("multiple", false)
        },
        firstOpen: {
          default: boolean("firstOpen", true)
        },
        openHeaderStyle: {
          default: boolean("openHeaderStyle", false)
        }
      },
      methods: {
        storyMethod(id) {
          alert("You have clicked item with id: " + id);
        }
      },
      components: { SfAccordion },
      template: `
      <SfAccordion 
        :items="items"

        :contentClickedCallback="storyMethod"
        
        :multiple="multiple"
        :firstOpen="firstOpen"
        :openHeaderStyle="openHeaderStyle">
      </SfAccordion>`
    }),
    {
      info: {
        summary: `
        <p>If user populate content through <code>items</code> array in <code>SfAccordion</code> 
        or through <code>contentItems</code> array in <code>SfAccordionItem</code>, 
        he can pass his own callback function as <code>contentClickedCallback</code> property. 
        This function gets one argument - the id of clicked content item.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefrontui/vue"</code></pre>
       `
      }
    }
  );
