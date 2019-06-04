// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBreadcrumbs from "./SfBreadcrumbs.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$breadcrumbs__item-separator", "|", "Separator between breadcrumb items"
    ],
    [
      "$breadcrumbs__item-padding", ".75rem", "Space between breadcrumbs and separator"
    ],
    [
      "$breadcrumbs__item-color", "$c-gray-primary", "Default color breadcrumb items"
    ],
    [
      "$breadcrumbs__link-color", "$c-dark-primary", "Color for breadcrumb links"
    ],
    [
      "$breadcrumbs__item-separator-color", "$breadcrumbs__link-color", "Breadcrumbs separator color"
    ]
  ]
};

const data = () => {
  return {
    breadcrumbs: [
      {
        link: '#home',
        text: 'Home'
      },
      {
        link: '#category',
        text: 'Category'
      },
      {
        link: '#pants',
        text: 'Pants'
      }
    ]
  }
}

storiesOf("Atoms|Breadcrumbs", module)
  .addDecorator(withKnobs)

  .add(
    "Basic",
    () => ({
      data,
      components: { SfBreadcrumbs },
      template: `<SfBreadcrumbs :breadcrumbs="breadcrumbs"/>`
    }),
    {
      info: {
        summary: `
        <h2>
          Description
        </h2>
        <p>
          Indicate the current page’s
          location within a navigational hierarchy,
          called by <code>&lt;SfBreadcrumbs&gt;</code>.
        </p>
        <p>
          You <b>must</b> pass an array of objects (breadcrumbs) with the format:
          <code>
          [
            {
              link: '/some-page',
              text: 'Some page'
            }
          ]
          </code>
          <br>
          The last array element will be the current item (current page)
          on breadcrumbs nav.
        </p>
        <h2>Usage</h2>
        <pre><code>import SfBreadcrumbs from "@storefrontui/vue/dist/SfBreadcrumbs.vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
