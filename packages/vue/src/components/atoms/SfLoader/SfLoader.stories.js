// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, select } from "@storybook/addon-knobs";
import SfLoader from "./SfLoader.vue";
import { generateStorybookTable } from "@/helpers";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$loader__spinner-color", "$c-accent-primary", "color of spinner"],
    ["$loader__overlay-color", "white", "color of overlay"]
  ]
};

storiesOf("Atoms|Loader", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      data() {
        return {
          isLoading: select("isLoading (prop)", [true, false], true)
        };
      },
      created() {
        setTimeout(() => {
          this.isLoading = false;
        }, 3000);
      },
      components: { SfLoader },
      template: `
      <!-- it adjusts to any wrapper -->
      <div style="width: 400px; height: 200px; border: 1px solid #eee; padding:30px;">
        <SfLoader :loading="isLoading">
          <p>Content is loaded</p>
        </SfLoader>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component to indicate loading state. Use it to cover content until data is fetched. Set **isLoading** to false once data is fetched.</p>
        <h2> Usage </h2>
        <pre><code>import { SfLoader } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
