import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

export default storiesOf("Pagination", module)
  .add("pagination", () => ({
    components: { SfPagination },
    template: `
    <sf-pagination
      :page="2"
      :limit="10"
      :totalSize="50"
    />`,
    methods: {}
  }));
