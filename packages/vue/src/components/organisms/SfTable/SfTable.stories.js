import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfTable, SfButton },
    props: {
      headers: {
        type: Array,
        default: [
          "Quantity",
          "Payment date",
          "Payment method",
          "Amount",
          "Status"
        ]
      },
      content: {
        type: [Array, Object],
        default: [
          ["#35767", "4th Nov", "Paypal", "12.00$"],
          ["#35767", "4th Nov", "Visa", "15.00$"],
          ["#35767", "4th Nov", "Paypal", "12.00$"]
        ]
      }
    },
    template: `<SfTable>
    <template>
      <SfTableRow class="sf-table-row--header">
        <SfTableData :is-header="true" v-for="header in headers">{{ header }}</SfTableData>
        <SfTableData :is-header="true">
          <span class="mobile-only">Download</span>
          <SfButton class="desktop-only">DOWNLOAD ALL</SfButton>
        </SfTableData>
      </SfTableRow>
      <SfTableRow v-for="data in content">
        <SfTableData v-for="item in data">{{ item }}</SfTableData>
        <SfTableData class="text-success">In process</SfTableData>
        <SfTableData>
          <a class="desktop-only">VIEW</a>
          <a class="mobile-only">Download</a>
        </SfTableData>
      </SfTableRow>
    </template>
    </SfTable>`
  }));
