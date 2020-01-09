/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import SfLoader from "./SfLoader.vue";
import SfImage from "../SfImage/SfImage.vue";
storiesOf("Atoms|Loader", module)
  .add("Common", () => ({
    components: {
      SfLoader,
      SfImage
    },
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
    template: `<div style="width: 236px; height: 366px; border: 1px solid #F2F2F2">
      <SfLoader
      :loading="isLoading">
          <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" />
      </SfLoader>
    </div>`
  }))
  .add("[slot] loader", () => ({
    components: {
      SfLoader,
      SfImage
    },
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
    template: `<div style="width: 236px; height: 366px; border: 1px solid #F2F2F2">
      <SfLoader
        :loading="isLoading">
        <SfImage src="/assets/storybook/SfImage/product-216x326.jpg" />
        <template #loader>
          loading...
        </template>
      </SfLoader>
    </div>`
  }));
