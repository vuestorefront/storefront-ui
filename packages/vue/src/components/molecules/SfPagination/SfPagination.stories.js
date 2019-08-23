import { storiesOf } from "@storybook/vue";
import { linkTo } from "@storybook/addon-links";
import { generateStorybookTable } from "@/helpers";
import SfPagination from "./SfPagination.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$pagination__list-padding", "1rem", "padding for pagination"],
    [
      "$pagination__list-justify",
      "center",
      "container displays as flex, you can customize here how items should be aligned"
    ],
    ["$pagination__item-size", "1.25rem", "size of pagination"],
    ["$pagination__item-margin", "0.25rem", "margin of pagination"],
    [
      "$pagination__item-color",
      "$c-text-secondary",
      "text color of pagination"
    ],
    [
      "$pagination__item-hover-color",
      "$c-text-primary",
      "text color of pagination on hover"
    ],
    [
      "$pagination__item-transition",
      "all .15s linear",
      "transistion on pagination"
    ],
    [
      "$pagination__item--current-color",
      "$pagination__item-hover-color",
      "hover color for pagination"
    ],
    [
      "$pagination__item--current-border-width",
      "0 0 1px 0",
      "border width for pagination"
    ],
    ["$pagination__link--prev-margin", "3rem", "margin for prev link"],
    [
      "$pagination__link--next-margin",
      "$pagination__link--prev-margin",
      "margin for next link"
    ]
  ]
};

const eventTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "change",
      "Emitted when an pagination link is clicked and page should be changed, must be listened to update the content and then update the current page number."
    ]
  ]
};

const vm = {
  components: { SfPagination },
  data: () => {
    return {
      page: 2,
      visiblePageNumbers: 5,
      numberOfPages: 12
    };
  }
};

storiesOf("Molecules|Pagination", module)
  .add(
    "Basic",
    () => ({
      ...vm,
      template: `
    <sf-pagination
      v-model="page"
      :total="numberOfPages"
      :visible="visiblePageNumbers"/>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfPagination } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(eventTableConfig, "Events")}
        `
      }
    }
  )
  .add(
    "[slot] prev",
    () => ({
      ...vm,
      template: `
    <sf-pagination
      v-model="page"
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
    <sf-pagination
      v-model="page"
      :total="numberOfPages + 1"
      :visible="visiblePageNumbers - 1">
      <template slot="next">next</template>
    </sf-pagination>`
    }),
    {
      info: true
    }
  )
  .add(
    "[slot] number",
    () => ({
      ...vm,
      template: `
    <sf-pagination
      v-model="page"
      :total="numberOfPages"
      :visible="visiblePageNumbers">
      <template v-slot:number="{ number }">
        [{{ number }}]
      </template>
    </sf-pagination>`
    }),
    {
      info: true
    }
  );
