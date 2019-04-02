import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

const pagination = {
  page: 2,
  limit: 10,
  totalSize: 120
};

const vm = {
  components: { SfPagination },
  data: () => pagination,
  methods: {
    setCurrentPage(page) {
      this.page = page;
    }
  }
};

export default storiesOf("Pagination", module)
  .add("default", () => ({
    ...vm,
    template: `
    <sf-pagination @update:page="(page) => { setCurrentPage(page) }"
      :page="page"
      :limit="limit"
      :totalSize="totalSize"/>`
  }))
  .add("text for next and prev", () => ({
    ...vm,
    template: `
    <sf-pagination @update:page="(page) => { setCurrentPage(page) }"
      :page="page"
      :limit="limit"
      :totalSize="totalSize">
      <template slot="prev">prev</template>
      <template slot="next">next</template>
    </sf-pagination>`
  }));
