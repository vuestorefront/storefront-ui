// /* eslint-disable import/no-extraneous-dependencies */
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
          default: boolean("multiple", false)
        },
        firstOpen: {
          default: boolean("firstOpen", false)
        },
        showChevron: {
          default: boolean("showChevron", true)
        },
        transition: {
          default: text("transition", "fade")
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
          :transition="transition"
        >
          <template v-slot="{ selected }">
            <SfAccordionItem
              v-for="(item, i) of items"
              :key="i"
              :header="item.header"
              :contentItems="item.content"
              :selected="selected"
            />
          </template>
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
        },
        transition: {
          default: text("transition", "fade")
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px; padding: 1rem;">
        <SfAccordion 
        :multiple="multiple" 
        :firstOpen="firstOpen"
        :transition="transition">
          <template v-slot="{ selected }">
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :header="headerOne">
                <template>
                  <div v-for="item of contentItemsOne" :style="contentStyle">
                    {{item.text}}
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :header="headerTwo">
                <template>
                  <div v-for="item of contentItemsTwo" :style="contentStyle">
                    {{item.text}}
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :header="headerThree">
                <template>
                  <div v-for="item of contentItemsThree" :style="contentStyle">
                    {{item.text}}
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
          </template>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <code>default</code> slot inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for content items populate <code>default</code> slot inside <code>SfAccordionItem</code> tag.</p>
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
        },
        transition: {
          default: text("transition", "fade")
        }
      },
      components: { SfAccordion },
      template: `
      <div style="width: 300px;">
        <SfAccordion
          :multiple="multiple"
          :firstOpen="firstOpen"
          :showChevron="showChevron"
          :transition="transition">
          <template v-slot="{selected}">
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :contentItems="contentItemsOne">
                <template v-slot:header="{isOpen}">
                  <div :style="headerStyle">
                    <div>{{ headerOne }}</div>
                    <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                    <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :contentItems="contentItemsTwo">
                <template v-slot:header="{isOpen}">
                  <div :style="headerStyle">
                    <div>{{ headerTwo }}</div>
                    <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                    <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
            <transition :name="transition">
              <SfAccordionItem :selected="selected" :contentItems="contentItemsThree">
                <template v-slot:header="{isOpen}">
                  <div :style="headerStyle">
                    <div>{{ headerThree }}</div>
                    <img v-if="isOpen" style="width: 16px; height: 16px;" src="assets/storybook/times.svg" alt="">
                    <img v-else style="width: 16px; height: 16px;" src="assets/storybook/plus.svg" alt="">
                  </div>
                </template>
              </SfAccordionItem>
            </transition>
          </template>
        </SfAccordion>
      </div>`
    }),
    {
      info: {
        summary: `
        <p>Custom styling can be achieved by using <code>default</code> slot inside <code>SfAccordion</code>.</p>
        <p>To use custom styling for header populate <code>#header</code> slot inside <code>SfAccordionItem</code> tag and set <code>showChevron</code> to false in <code>SfAccordion</code> tag.<br><br>
        To use custom styling for opened and closed header states use classes:<br><br>
        <code>sf-accordion-item__header-wrapper--close</code><br><br>
        <code>sf-accordion-item__header-wrapper--open</code><br><br>
       <h2>Usage</h2>
       <pre><code>import { SfAccordion } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  )

  .add(
    "[event] click",
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
