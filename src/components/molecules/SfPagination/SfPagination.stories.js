import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SfPagination from "./SfPagination.vue";

const vm = {
  components: { SfPagination },
  data: () => {
    return {
      page: 2,
      visiblePageNumbers: 5,
      numberOfPages: 12
    }
  },
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
    <sf-pagination @change="(page) => { setCurrentPage(page) }"
      :value="page"
      :length="numberOfPages"
      :visible="visiblePageNumbers"/>`
  }))
  .add("text for next and prev", () => ({
    ...vm,
    template: `
    <sf-pagination @change="(page) => { setCurrentPage(page) }"
      :value="page"
      :length="numberOfPages + 1"
      :visible="visiblePageNumbers - 1">
      <template slot="prev">prev</template>
      <template slot="next">next</template>
    </sf-pagination>`
  }))
  .add("custom items", () => ({
    ...vm,
    template: `
    <sf-pagination @change="(page) => { setCurrentPage(page) }"
      :value="page"
      :length="numberOfPages"
      :visible="visiblePageNumbers">
      <template v-slot="{ number }">
        {{ number }}.
      </template>
    </sf-pagination>`
  }));
