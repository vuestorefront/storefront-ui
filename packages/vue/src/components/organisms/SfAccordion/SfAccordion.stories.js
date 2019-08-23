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
        showChevron: {
          default: boolean("showChevron", true)
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px; padding: 1rem;">
        <SfAccordion 
          :items="items"
          :multiple="multiple"
          :firstOpen="firstOpen"
          :showChevron="showChevron">
        </SfAccordion>
      </div>`
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
       <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
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
          headerStyle: `padding: 1rem;
            background-color: #efebe9;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            width: 100%`,
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
        showChevron: {
          default: boolean("showChevron", false)
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px;">
        <SfAccordion
          :multiple="multiple"
          :firstOpen="firstOpen"
          :showChevron="showChevron">
          <template v-slot="{selected}">
            <SfAccordionItem :selected="selected" :contentItems="contentItemsOne">
              <template v-slot:header="{isOpen}">
                <div :style="headerStyle">
                  <div>{{ headerOne }}</div>
                  <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                  <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                </div>
              </template>
            </SfAccordionItem>
            <SfAccordionItem :selected="selected" :contentItems="contentItemsTwo">
              <template v-slot:header="{isOpen}">
                <div :style="headerStyle">
                  <div>{{ headerTwo }}</div>
                  <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                  <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                </div>
              </template>
            </SfAccordionItem>
            <SfAccordionItem :selected="selected" :contentItems="contentItemsThree">
              <template v-slot:header="{isOpen}">
                <div :style="headerStyle">
                  <div>{{ headerThree }}</div>
                  <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                  <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                </div>
              </template>
            </SfAccordionItem>
          </template>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <code>#items</code> slot inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for header populate <code>#header</code> slot inside <code>SfAccordionItem</code> tag and set <code>showChevron</code> to false in <code>SfAccordion</code> tag.<br><br>
        To use custom styling for opened and closed header states use classes:<br><br>
        <code>sf-accordion-item__header-slot--close</code><br><br>
        <code>sf-accordion-item__header-slot--open</code><br><br>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )
  .add(
    "[slot] default",
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
        showChevron: {
          default: boolean("showChevron", true)
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px; padding: 1rem;">
        <SfAccordion :multiple="multiple" :firstOpen="firstOpen">
          <template>
            <SfAccordionItem :header="headerOne">
              <div v-for="item of contentItemsOne" :style="contentStyle">{{item.text}}</div>
            </SfAccordionItem>
            <SfAccordionItem :header="headerTwo">
              <div v-for="item of contentItemsTwo" :style="contentStyle">{{item.text}}</div>
            </SfAccordionItem>
            <SfAccordionItem :header="headerThree">
              <div v-for="item of contentItemsThree" :style="contentStyle">{{item.text}}</div>
            </SfAccordionItem>
          </template>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <code>#items</code> slot inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for content items populate <code>#content</code> slot inside <code>SfAccordionItem</code> tag.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
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
          default: boolean("multiple", true)
        },
        firstOpen: {
          default: boolean("firstOpen", true)
        },
        showChevron: {
          default: boolean("showChevron", true)
        }
      },
      methods: {
        storyMethod(id) {
          alert("You have clicked item with id: " + id);
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px; padding: 1rem;">
        <SfAccordion 
          :items="items"
          :multiple="multiple"
          :firstOpen="firstOpen"
          :showChevron="showChevron"
          @click="storyMethod">
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `
        <p>If user populate content through <code>items</code> array in <code>SfAccordion</code> 
        or through <code>contentItems</code> array in <code>SfAccordionItem</code>, 
        he can bind <code>v-on:click</code>. 
        This function gets one argument - the id of clicked content item.</p>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
       `
      }
    }
  );
