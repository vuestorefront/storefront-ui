import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

export default storiesOf("Pagination", module)
  .add("pagination", () => ({
    components: { SfPagination },
    template: `
    <sf-pagination>1</sf-pagination>`,
    methods: {}
  }));
