import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";

import SfTable from "./SfTable.vue";

storiesOf("Organisms/Table", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfTable },
    props: {
      customClass: {
        default: options(
          "customClass",
          {
            "sf-table--bordered": "sf-table--bordered"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    data() {
      return {
        tableHeaders: [
          "Quantity",
          "Payment date",
          "Payment method",
          "Amount",
          "Status"
        ],
        tableRows: [
          ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"],
          ["#35767", "4th Nov", "Visa", "15.00$", "In process"],
          ["#35767", "4th Nov", "Paypal", "12.00$", "Finalise"]
        ],
        status: {
          Finalise: "text-success",
          "In process": "text-warning"
        }
      };
    },
    template: `<SfTable 
        :class="customClass"
      >
        <SfTableHeading>
          <SfTableHeader 
              v-for="header in tableHeaders" 
              :key="header"
          >{{header}}</SfTableHeader>
        </SfTableHeading>
        <SfTableRow 
          v-for="(row, key) in tableRows"
          :key="key"
        > 
          <SfTableData 
            v-for="data in row"
            :key="data"
            :class="status[data]">{{data}}</SfTableData>
        </SfTableRow>
      </SfTable>`
  }));
