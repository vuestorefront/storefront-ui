// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import SfLoader from "./SfLoader.vue";

storiesOf("Atoms|[WIP]Loader", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      data() {
        return {
          isLoading: text("(prop) isLoading", true)
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
      info: true
    }
  );
