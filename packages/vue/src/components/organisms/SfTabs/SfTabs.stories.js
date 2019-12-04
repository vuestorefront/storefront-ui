/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
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
    ["$sf-tabs-title-color", "$c-gray-variant", "tabs title color"],
    ["$sf-tabs-title-color-hover", "$c-dark", "tabs title color on hover"],
    ["$sf-tabs-title-color-active", "$c-dark", "tabs title color when active"],
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
      template: `
      <SfTabs :openTab="1">
      <SfTab title="Description">
      The Karissa V-Neck Tee features a semi-fitted shape that's flattering for every figure. You can hit the gym with confidence while it hugs curves and hides common "problem" areas. Find stunning women's cocktail dresses and party dresses.</SfTab>
      <SfTab title="Read reviews">
        <h3 style="padding: 0">Maria</h3> 
        <p>I was looking for a bright light for the kitchen but wanted some item more modern than a strip light. this one is perfect, very bright and looks great. I can't comment on interlation as I had an electrition instal it. Would recommend.. Read more</p>
      </SfTab>
      <SfTab title="Additional Information">
        <h3 style="padding: 0">Brand</h3>
        <p>
        <u>Brand name</u> is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.
</p>
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
