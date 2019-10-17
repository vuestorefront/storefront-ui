// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { generateStorybookTable } from "@/helpers";

import SfBreadcrumbs from "./SfBreadcrumbs.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$breadcrumbs-font-family", "$body-font-family-secondary", "font family for breadcrumbs"],
    ["$breadcrumbs-font-size", "$font-size-small-desktop", "font size for breadcrumbs"],
    ["$breadcrumbs-font-weight", "$body-font-weight-secondary", "font weight for breadcrumbs"],
    ["$breadcrumbs-line-height", "1.6", "line height for breadcrumbs"],
    ["$breadcrumbs__link-color", "$c-dark-primary", "color for breadcrumbs link"],
    ["$breadcrumbs__item-padding", "0.75rem", "padding for breadcrumbs item"],
    ["$breadcrumbs__item-color", "$c-gray-primary", "color for breadcrumbs item"],
    ["$breadcrumbs__item-separator-color", "$breadcrumbs__link-color", "color for breadcrumbs item separator"],
    ["$breadcrumbs__item-separator", "|", "char for breadcrumbs item separator"],
    ["$breadcrumbs__current-color", "$c-gray-secondary!default;", "color for current breadcrumbs"]
  ]
};

storiesOf("Atoms|Breadcrumbs", module)
  .add(
    "Default",
    () => ({
      components: { SfBreadcrumbs },
      data(){
        return {
          breadcrumbs: [{text: 'Home',route: {link: '#'}},{text: 'Category',route: {link: '#'}},{text: 'Pants',route: {link: '#'}}]
        }
      },
      template: `<SfBreadcrumbs
        :breadcrumbs="breadcrumbs" />`
    }),
    // {
    //   info: {
    //     summary: `<p><!--Component description.--></p>
    //     <h2>Usage</h2>
    //     <pre><code>import { SfBreadcrumbs } from "@storefront-ui/vue"</code></pre>
    //     ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
    //   }
    // }
  );
