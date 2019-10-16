// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfLoader from "./SfLoader.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$loader__spinner-color", "$c-accent-primary", "color for loader spinner"],
    ["$loader__overlay-color", "white", "color for loader overlay"]
  ]
};

storiesOf("Atoms|Loader", module)
  .addDecorator(withKnobs)
  .add(
  "Basic",
    () => ({
      components: { SfLoader },
      data: () => ({
          isLoading: select("isLoading (prop)", [true, false], true),
          style: { width: "400px", height: "200px", border: "1px solid #eee" }
      }),
      created() {
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      },

      template: `<div 
      :style="style">
        <SfLoader 
          :loading="isLoading">
          <p>Content is loaded</p>
        </SfLoader>
      </div>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfLoader } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
