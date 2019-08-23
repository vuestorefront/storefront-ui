/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, object } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfTabs from "./SfTabs.vue";
import SfTab from "./_internal/SfTab.vue";

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
        SfTabs,
        SfTab
      },
      template: `
      <SfTabs :openTab="1">
      <SfTab :header="'Hello'">Hello</SfTab>
      <SfTab :header="'List'">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </SfTab>
      <SfTab :header="'Test'">
        <strong>Test</strong>
      </SfTab>
      <SfTab :header="'Image'">
        <img
          src="https://docs.storefrontui.io/logo.png"
          alt="Storefront UI"
          style="width: 100%"
        />
      </SfTab>
    </SfTabs>`
    }),
    {
      info: {
        summary: `
        <h2> Description </h2>
        <p>Tabs component.</p>
        <h2> Usage </h2>
        <pre>
          <code>
            import { SfTabs } from "@storefront-ui/vue"
            import { SfTabs } from "@storefront-ui/vue"
          </code>
        </pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
