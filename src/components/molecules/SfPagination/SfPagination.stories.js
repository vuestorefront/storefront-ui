import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

const pagination = {
  currentPage: 1,
  pageSize: 5,
  totalSize: 12
};

const vm = {
  components: { SfPagination },
  data: () => pagination,
  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    }
  }
};

export default storiesOf("Pagination", module)
  .add("default", () => ({
    ...vm,
    template: `
    <sf-pagination @change="(page) => { setCurrentPage(page) }"
      :value="currentPage"
      :visible="pageSize"
      :length="totalSize"/>`
  }));
