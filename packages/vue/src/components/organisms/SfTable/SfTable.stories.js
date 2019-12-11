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
      }
    },
    template: `<SfTable>
    <template #headers>
      <SfTableData :is-header="true" v-for="header in headers">{{ header }}</SfTableData>
    </template>
    </SfTable>`
  }));
