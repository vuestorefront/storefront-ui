import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTable },
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
          ["#35767", "4th Nov", "Paypal", "12.00$", "In process"],
          ["#35767", "4th Nov", "Visa", "15.00$", "Finalised"],
          ["#35767", "4th Nov", "Paypal", "12.00$", "In process"]
        ]
      }
    },
    template: `<SfTable>
    <template #headers>
    <SfTableRow>
      <SfTableData :is-header="true" v-for="header in headers">{{ header }}</SfTableData>
    </SfTableRow>
    </template>
    <template #content>
      <SfTableRow v-for="data in content">
        <SfTableData v-for="item in data">{{ item }}</SfTableData>
      </SfTableRow>
    </template>
    </SfTable>`
  }));
