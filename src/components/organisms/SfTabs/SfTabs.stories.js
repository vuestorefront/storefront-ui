/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import notes from "./README.md";
import SfTabs from "./SfTabs.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-tabs-navigation-color", "$c-light-primary", "navigation items color"],
    [
      "$sf-tabs-navigation-color-hover",
      "$c-gray-secondary",
      "navigation item color on hover"
    ],
    [
      "$sf-tabs-navigation-color-active",
      "$c-black",
      "active navigation item color"
    ],
    [
      "$sf-tabs-navigation-opacity-hover",
      "0.7",
      "navigation item opacity on hover"
    ]
  ]
};

const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "change",
      "returns value of the selected tab. this event has v-model support"
    ]
  ]
};

storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfTabs },
      template: `
      <SfTabs>
        <SfTab title="apple" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://i5.walmartimages.ca/images/Large/428/5_r/6000195494285_R.jpg" />
        </SfTab>
        <SfTab title="banana">banana</SfTab>
        <SfTab title="peach">peach</SfTab>
        <SfTab title="orange" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://www.wykop.pl/cdn/c3201142/comment_X7SEcieexT4yoDSxYJwULzPrgkVRXXs7.jpg" />
        </SfTab>
      </SfTabs>`
    }),
    {
      info: {
        summary: `<p>Tab Component</p>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}
        `
      },
      notes
    }
  )
  .add(
    "[slot] navigation",
    () => ({
      components: { SfTabs },
      data: () => ({
        selected: "bananaValue"
      }),
      template: `
      <SfTabs v-model="selected">
        <SfTabsNavigation slot="navigation">
          <div style="display: flex; justify-content: space-between; cursor: pointer;" slot-scope="{ tabs, changeTab, activeTabValue }">
            <h1 v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.valueComputed)">{{ tab.title }} <b v-if="tab.valueComputed === activeTabValue">!!!</b></h1>
          </div>
        </SfTabsNavigation>
        <SfTab value="appleValue" title="apple" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://i5.walmartimages.ca/images/Large/428/5_r/6000195494285_R.jpg" />
        </SfTab>
        <SfTab value="bananaValue" title="banana">banana</SfTab>
        <SfTab value="peachValue" title="peach">peach</SfTab>
        <SfTab value="orangeValue" title="orange" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://www.wykop.pl/cdn/c3201142/comment_X7SEcieexT4yoDSxYJwULzPrgkVRXXs7.jpg" />
        </SfTab>
      </SfTabs>`
    }),
    {
      info: {
        summary: `<p>Tab Component with fully customized navigation.</p>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}
        `
      },
      notes
    }
  )
  .add(
    "[slot] navigation item",
    () => ({
      components: { SfTabs },
      template: `
      <SfTabs>
        <SfTabsNavigation slot="navigation">
          <div slot="item" slot-scope="{ tab }">
            <i>Tab Title:</i> <b>{{ tab.title }}</b>
          </div>
        </SfTabsNavigation>
        <SfTab title="apple" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://i5.walmartimages.ca/images/Large/428/5_r/6000195494285_R.jpg" />
        </SfTab>
        <SfTab title="banana">banana</SfTab>
        <SfTab title="peach">peach</SfTab>
        <SfTab title="orange" style="display: flex; justify-content: center;">
          <img style="max-height: 200px" src="https://www.wykop.pl/cdn/c3201142/comment_X7SEcieexT4yoDSxYJwULzPrgkVRXXs7.jpg" />
        </SfTab>
      </SfTabs>`
    }),
    {
      info: {
        summary: `<p>Tab Component with customized navigation item</p>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}
        `
      },
      notes
    }
  );
