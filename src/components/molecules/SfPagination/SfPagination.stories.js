import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

const pagination = {
  currentPage: 2,
  pageSize: 10,
  totalSize: 120
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
    <sf-pagination @current-change="(page) => { setCurrentPage(page) }"
      :current-page="currentPage"
      :page-size="pageSize"
      :total-size="totalSize"/>`
  }))
  .add("text for next and prev", () => ({
    ...vm,
    template: `
    <sf-pagination @current-change="(page) => { setCurrentPage(page) }"
      :current-page="currentPage"
      :page-size="pageSize"
      :total-size="totalSize">
      <template slot="prev">prev</template>
      <template slot="next">next</template>
    </sf-pagination>`
  }));
