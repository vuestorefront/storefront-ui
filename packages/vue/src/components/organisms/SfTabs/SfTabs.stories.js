/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfTabs from "./SfTabs.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$sf-tabs-navigation-color", "$c-light-primary", "navigation items color"],
    [
      "$sf-tabs-navigation-color-hover",
      "$c-dark-primary",
      "navigation item color on hover"
    ],
    [
      "$sf-tabs-navigation-color-active",
      "$c-dark-primary",
      "active navigation item color"
    ],
    [
      "$sf-tabs-navigation-font-family",
      "$body-font-family-secondary",
      "font family"
    ],
    ["$sf-tabs-navigation-font-size", "1.125rem", "font size"],
    ["$sf-tabs-navigation-padding", "1.563rem", "top and bottom padding"],
    ["$sf-tabs-navigation-border-width", "0.125rem", "border width"]
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
        summary: `<p>Tabs Component. cool thing about this component is that it uses 
        <a href="https://vuejs.org/v2/api/#provide-inject" target="_blank">provide/inject</a> pattern. <br>
        Provided is shareState object where you can find 'activeTabValue' and 'tabs'. <br>
        function to change tab is also provided and its called: 'changeTab'. <br>
        2 additional options are provided 'fireEvent' and 'listenEvent'</p>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventsTableConfig, "Events")}
        `
      }
    }
  )
  .add(
    "[slot] navigation",
    () => ({
      components: { SfTabs },
      data: () => ({
        selected: "bananaValue",
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          minWidth: "250px",
          borderRight: "1px solid black",
          paddingRight: "10px",
          marginRight: "10px"
        },
        selectedStyle: {
          color: "red"
        }
      }),
      template: `
      <SfTabs v-model="selected" style="display: flex;">
        <SfTabsNavigation slot="navigation">
          <div :style="style" slot-scope="{ tabs, changeTab, activeTabValue }">
            <h1 v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.valueComputed)" :style="tab.valueComputed === activeTabValue && selectedStyle">{{ tab.title }}</h1>
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
      }
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
      }
    }
  );
