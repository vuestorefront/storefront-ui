// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfLoader from "./SfLoader.vue";

storiesOf("Atoms|Loader", module).add("[slot] default", () => ({
  components: { SfLoader },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    window.setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  template: `<SfLoader
    :loading="isLoading">
    <!-- add content to replace slot fallback -->
  </SfLoader>`
}));
