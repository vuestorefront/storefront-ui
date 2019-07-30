/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfTabs from "./SfTabs.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$sf-tabs-title-font-family",
      "$body-font-family-secondary",
      "tabs title font family"
    ],
    [
      "$sf-tabs-title-font-size",
      "$font-size-regular-desktop",
      "tabs title font size"
    ],
    ["$sf-tabs-title-padding", "$spacer-big", "top and bottom padding"],
    ["$sf-tabs-title-border-width", "2px", "border width"],
    ["$sf-tabs-title-color", "$c-gray-secondary", "tabs title color"],
    [
      "$sf-tabs-title-color-hover",
      "$c-dark-primary",
      "tabs title color on hover"
    ],
    [
      "$sf-tabs-title-color-active",
      "$c-dark-primary",
      "tabs title color when active"
    ],
    [
      "$sf-tabs-content-font-family",
      " $body-font-family-primary",
      "tabs content font family"
    ]
  ]
};

storiesOf("Organisms|Tabs", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: {
        SfTabs
      },
      props: {
        tabs: {
          default: object("tabs (prop)", [
            {
              title: "Apple",
              content: "Apple is a great fruit",
              isActive: false
            },
            {
              title: "Banana",
              content: "Banana is a great fruit",
              isActive: false
            },
            {
              title: "Peach",
              content: "Peach is a great fruit",
              isActive: false
            },
            {
              title: "Orange",
              content: "Orange is a great fruit",
              isActive: false
            }
          ])
        }
      },
      template: `
      <SfTabs :tabs="tabs"></SfTabs>`
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>Tabs component.</p>
        <h2> Usage </h2>
        <pre><code>import { SfTabs } from "@storefrontui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: {
        SfTabs
      },
      data: () => ({
        selected: 0,
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
        tabs: [
          {
            title: "Apple",
            content: "Apple is a great fruit",
            isActive: false
          },
          {
            title: "Banana",
            content: "Banana is a great fruit",
            isActive: false
          },
          {
            title: "Peach",
            content: "Peach is a great fruit",
            isActive: false
          },
          {
            title: "Orange",
            content: "Orange is a great fruit",
            isActive: false
          }
        ],
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
      methods: {
        changeTab(index) {
          this.selected = index;
        }
      },
      template: `
    <SfTabs v-model="selected" style="display: flex;" :tabs="tabs">
        <div :style="style">
          <h1 v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :style="index===selected ? selectedStyle : ''">{{ tab.title }}</h1>
        </div>
        <div :style="selected === 0 ? contentStyle : ''" style="background-color: #C72E30" />
        <div :style="selected === 1 ? contentStyle : ''" style="background-color: #F9F494"/>
        <div :style="selected === 2 ? contentStyle : ''" style="background-color: #E8914D"/>
        <div :style="selected === 3 ? contentStyle : ''" style="background-color: #E0601D"/>
    </SfTabs>`
    }),
    {
      info: {
        summary: `<p>Tab Component with fully customized navigation.</p>
      ${generateStorybookTable(scssTableConfig, "SCSS variables")}
      `
      }
    }
  );
