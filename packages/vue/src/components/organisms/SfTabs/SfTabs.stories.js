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
      data: () => ({
        contentStyle: {
          width: "100px",
          height: "100px"
        },
        containerStyle: {
          display: "flex",
          justifyContent: "center"
        }
      }),
      template: `
      <SfTabs>
        <SfTab title="apple" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #C72E30" />
        </SfTab>
        <SfTab title="banana" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #F9F494"/>
        </SfTab>
        <SfTab title="peach" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E8914D"/>
        </SfTab>
        <SfTab title="orange" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E0601D"/>
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
          borderRight: "1px solid black",
          paddingRight: "10px",
          marginRight: "10px"
        },
        contentStyle: {
          width: "100px",
          height: "100px"
        },
        containerStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        },
        selectedStyle: {
          color: "red"
        }
      }),
      template: `
      <SfTabs v-model="selected" style="display: flex;">
        <SfTabsNavigation slot="navigation" style="width: 250px">
          <div :style="style" slot-scope="{ tabs, changeTab, activeTabValue }">
            <h1 v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab.valueComputed)" :style="tab.valueComputed === activeTabValue && selectedStyle">{{ tab.title }}</h1>
          </div>
        </SfTabsNavigation>
        <SfTab value="appleValue" title="apple" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #C72E30" />
        </SfTab>
        <SfTab value="bananaValue" title="banana" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #F9F494"/>
        </SfTab>
        <SfTab value="peachValue" title="peach" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E8914D"/>
        </SfTab>
        <SfTab value="orangeValue" title="orange" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E0601D"/>
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
      data: () => ({
        contentStyle: {
          width: "100px",
          height: "100px"
        },
        containerStyle: {
          display: "flex",
          justifyContent: "center"
        }
      }),
      template: `
      <SfTabs>
        <SfTabsNavigation slot="navigation">
          <div slot="item" slot-scope="{ tab }">
            <i>Tab Title:</i> <b>{{ tab.title }}</b>
          </div>
        </SfTabsNavigation>
        <SfTab value="appleValue" title="apple" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #C72E30" />
        </SfTab>
        <SfTab value="bananaValue" title="banana" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #F9F494"/>
        </SfTab>
        <SfTab value="peachValue" title="peach" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E8914D"/>
        </SfTab>
        <SfTab value="orangeValue" title="orange" :style="containerStyle">
          <div :style="contentStyle" style="background-color: #E0601D"/>
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
