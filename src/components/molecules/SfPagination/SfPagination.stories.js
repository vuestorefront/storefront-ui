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
    };
  },
  methods: {
    setCurrentPage(page) {
      this.page = page;
    }
  }
};

export default storiesOf("Pagination", module)
  .add(
    "Props",
    () => ({
      ...vm,
      template: `
    <sf-pagination @change:current="(page) => { setCurrentPage(page) }"
      :current="page"
      :total="numberOfPages"
      :visible="visiblePageNumbers"/>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] prev",
    () => ({
      ...vm,
      template: `
    <sf-pagination @change:current="(page) => { setCurrentPage(page) }"
      :current="page"
      :total="numberOfPages + 1"
      :visible="visiblePageNumbers - 1">
      <template slot="prev">prev</template>
    </sf-pagination>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] next",
    () => ({
      ...vm,
      template: `
    <sf-pagination @change:current="(page) => { setCurrentPage(page) }"
      :current="page"
      :total="numberOfPages + 1"
      :visible="visiblePageNumbers - 1">
      <template slot="next">next</template>
    </sf-pagination>`
    }),
    {
      info: true
    }
  )
  .add("[slot] number", () => ({
    ...vm,
    template: `
    <sf-pagination @change:current="(page) => { setCurrentPage(page) }"
      :current="page"
      :total="numberOfPages"
      :visible="visiblePageNumbers">
      <template v-slot="{ number }">
        [{{ number }}]
      </template>
    </sf-pagination>`
  }));
